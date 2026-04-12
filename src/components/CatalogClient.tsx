"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal, ChevronDown } from "lucide-react";
import type { Plant, UserAnswers, ScoredPlant, BarvaKvetu, Mesic, Narocnost } from "@/types/plants";
import { getRecommendedPlants } from "@/utils/filterPlants";
import { PlantCard } from "@/components/PlantCard";
import { useFavorites } from "@/hooks/useFavorites";
import {
  umisteniLabels, svetloLabels, vlhkostLabels, kategorieLabels,
  barvaKvetuLabels, mesicLabels, narocnostLabels,
} from "@/utils/labels";

const PAGE_SIZE = 30;

const BOOL_KEYS = new Set(["bezpecnostDeti", "bezpecnostMazlici", "chciVuni", "proVcely", "vhodnaDoNadoby"]);
const ARRAY_KEYS = new Set(["ocekavani"]);
const AF = "af_";

const OCEKAVANI_TO_FILTER: Record<string, keyof AdditionalFilters> = {
  vune: "vune",
  jedlost: "jedla",
  stalezelena: "stalezelena",
  pro_opylovace: "proVcely",
};

const WIZARD_BOOL_TO_FILTER: Record<string, keyof AdditionalFilters> = {
  bezpecnostDeti: "bezpecnaProDeti",
  bezpecnostMazlici: "bezpecnaProPsy",
  chciVuni: "vune",
  proVcely: "proVcely",
  vhodnaDoNadoby: "vhodnaDoNadoby",
};

function parseUrlState(sp: URLSearchParams): {
  answers: UserAnswers;
  additional: AdditionalFilters;
  searchQuery: string;
} {
  const answers: Record<string, unknown> = {};
  const additional: Record<string, unknown> = {};
  let searchQuery = "";

  sp.forEach((value, key) => {
    if (key === "q") {
      searchQuery = value;
    } else if (key.startsWith(AF)) {
      const k = key.slice(AF.length);
      if (k === "mesicKveteni") additional[k] = parseInt(value, 10);
      else if (value === "1") additional[k] = true;
      else additional[k] = value;
    } else {
      if (BOOL_KEYS.has(key)) answers[key] = value === "true";
      else if (ARRAY_KEYS.has(key)) answers[key] = value.split(",").filter(Boolean);
      else if (key === "mesicKveteni") answers[key] = parseInt(value, 10);
      else answers[key] = value;
    }
  });

  const ocekavani = answers.ocekavani as string[] | undefined;
  if (ocekavani) {
    for (const o of ocekavani) {
      const filterKey = OCEKAVANI_TO_FILTER[o];
      if (filterKey) additional[filterKey] = true;
    }
  }

  for (const [ansKey, filterKey] of Object.entries(WIZARD_BOOL_TO_FILTER)) {
    if (answers[ansKey] === true) {
      additional[filterKey] = true;
    }
  }

  return { answers: answers as UserAnswers, additional: additional as AdditionalFilters, searchQuery };
}

function buildUrlParams(answers: UserAnswers, additional: AdditionalFilters, searchQuery: string): URLSearchParams {
  const p = new URLSearchParams();
  for (const [k, v] of Object.entries(answers)) {
    if (v == null || v === "") continue;
    if (typeof v === "boolean") p.set(k, String(v));
    else if (Array.isArray(v)) { if (v.length) p.set(k, v.join(",")); }
    else p.set(k, String(v));
  }
  for (const [k, v] of Object.entries(additional)) {
    if (v == null || v === false) continue;
    if (typeof v === "boolean") p.set(AF + k, "1");
    else p.set(AF + k, String(v));
  }
  if (searchQuery) p.set("q", searchQuery);
  return p;
}

interface CatalogClientProps {
  plants: Plant[];
}

interface AdditionalFilters {
  barvaKvetu?: BarvaKvetu;
  mesicKveteni?: Mesic;
  narocnost?: Narocnost;
  stalezelena?: boolean;
  vune?: boolean;
  proVcely?: boolean;
  jedla?: boolean;
  vhodnaDoNadoby?: boolean;
  bezpecnaProDeti?: boolean;
  bezpecnaProPsy?: boolean;
}

function normalize(text: string): string {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const primaryFilterDefs = [
  { key: "umisteni" as const, placeholder: "Umístění", options: { venku: umisteniLabels.venku, interier: umisteniLabels.interier, balkon_terasa: umisteniLabels.balkon_terasa } },
  { key: "svetlo" as const, placeholder: "Světlo", options: svetloLabels as Record<string, string> },
  { key: "vlhkost" as const, placeholder: "Vlhkost", options: vlhkostLabels as Record<string, string> },
  { key: "kategorie" as const, placeholder: "Typ rostliny", options: kategorieLabels as Record<string, string> },
];

const quickToggles: { key: keyof AdditionalFilters; label: string }[] = [
  { key: "vune", label: "Voní" },
  { key: "proVcely", label: "Pro včely" },
  { key: "jedla", label: "Jedlá" },
  { key: "stalezelena", label: "Stálezelená" },
  { key: "bezpecnaProDeti", label: "Pro děti" },
  { key: "bezpecnaProPsy", label: "Pro mazlíčky" },
];

export function CatalogClient({ plants }: CatalogClientProps) {
  const searchParams = useSearchParams();
  const initRef = useRef<ReturnType<typeof parseUrlState> | null>(null);
  if (!initRef.current) initRef.current = parseUrlState(searchParams);

  const [answers, setAnswers] = useState<UserAnswers>(initRef.current.answers);
  const [additional, setAdditional] = useState<AdditionalFilters>(initRef.current.additional);
  const [searchQuery, setSearchQuery] = useState(initRef.current.searchQuery);
  const [panelOpen, setPanelOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const fav = useFavorites();

  useEffect(() => {
    const params = buildUrlParams(answers, additional, searchQuery);
    const search = params.toString();
    const url = search ? `/rostliny?${search}` : "/rostliny";
    window.history.replaceState(window.history.state, "", url);
  }, [answers, additional, searchQuery]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [answers, additional, searchQuery]);

  const setPrimary = (key: keyof UserAnswers, value: string | undefined) => {
    setAnswers((prev) => {
      const next = { ...prev };
      if (value === undefined) delete next[key];
      else (next as Record<string, unknown>)[key] = value;
      return next;
    });
  };

  const toggleAdditional = (key: keyof AdditionalFilters) => {
    setAdditional((prev) => ({ ...prev, [key]: prev[key] ? undefined : true }));
  };

  const { topPicks, otherOptions } = useMemo(
    () => getRecommendedPlants(plants, answers),
    [plants, answers]
  );

  const applyExtra = (items: ScoredPlant[]) => {
    let result = items;
    if (additional.barvaKvetu) result = result.filter(({ plant }) => plant.barvaKvetu?.includes(additional.barvaKvetu!));
    if (additional.mesicKveteni) result = result.filter(({ plant }) => plant.obdobiKveteni?.includes(additional.mesicKveteni!));
    if (additional.narocnost) result = result.filter(({ plant }) => plant.narocnost === additional.narocnost);
    if (additional.stalezelena) result = result.filter(({ plant }) => plant.stalezelena);
    if (additional.vune) result = result.filter(({ plant }) => plant.vune);
    if (additional.proVcely) result = result.filter(({ plant }) => plant.proVcely);
    if (additional.jedla) result = result.filter(({ plant }) => plant.jedla);
    if (additional.vhodnaDoNadoby) result = result.filter(({ plant }) => plant.vhodnaDoNadoby);
    if (additional.bezpecnaProDeti) result = result.filter(({ plant }) => plant.bezpecnaProDeti);
    if (additional.bezpecnaProPsy) result = result.filter(({ plant }) => plant.bezpecnaProPsy);
    if (searchQuery) {
      const q = normalize(searchQuery);
      result = result.filter(({ plant }) =>
        normalize(plant.nazevCz).includes(q) || (plant.nazevLat && normalize(plant.nazevLat).includes(q))
      );
    }
    return result;
  };

  const filteredTop = useMemo(() => applyExtra(topPicks), [topPicks, additional, searchQuery]);
  const filteredOther = useMemo(() => applyExtra(otherOptions), [otherOptions, additional, searchQuery]);
  const total = filteredTop.length + filteredOther.length;
  const additionalCount = Object.values(additional).filter((v) => v !== undefined && v !== false).length;

  const visibleTop = filteredTop.slice(0, visibleCount);
  const remainingSlots = Math.max(0, visibleCount - filteredTop.length);
  const visibleOther = remainingSlots > 0 ? filteredOther.slice(0, remainingSlots) : [];
  const hasMore = visibleCount < total;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, total));
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, [hasMore, total]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* Filter bar */}
      <FilterBar
        primaryFilterDefs={primaryFilterDefs}
        answers={answers}
        setPrimary={setPrimary}
        quickToggles={quickToggles}
        additional={additional}
        toggleAdditional={toggleAdditional}
        additionalCount={additionalCount}
        onOpenPanel={() => setPanelOpen(true)}
      />

      {/* Search + count */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 focus-within:border-primary">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Hledat dle názvu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} aria-label="Smazat hledání" className="text-gray-400 hover:text-gray-600"><X size={14} /></button>
          )}
        </div>
        <span className="flex-shrink-0 text-sm text-gray-400">
          {total} {total === 1 ? "rostlina" : total < 5 ? "rostliny" : "rostlin"}
        </span>
      </div>

      {/* Filter panel overlay */}
      {panelOpen && (
        <FilterPanelOverlay
          filters={additional}
          onChange={setAdditional}
          onClear={() => setAdditional({})}
          onClose={() => setPanelOpen(false)}
        />
      )}

      {/* Results */}
      {total === 0 ? (
        <div className="py-20 text-center">
          <p className="text-gray-500">Bohužel jsme nenašli žádnou rostlinu odpovídající vašim podmínkám.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {visibleTop.length > 0 && (
            <section>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleTop.map((sp) => (
                  <PlantCard
                    key={sp.plant.id}
                    plant={sp.plant}
                    reasons={sp.reasons}
                    isFavorite={fav.isFavorite(sp.plant.id)}
                    onToggleFavorite={() => fav.toggle(sp.plant.id)}
                  />
                ))}
              </div>
            </section>
          )}
          {visibleOther.length > 0 && (
            <section>
              {filteredTop.length > 0 && <h2 className="mb-4 text-lg font-semibold text-gray-700">Další možnosti</h2>}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleOther.map((sp) => (
                  <PlantCard
                    key={sp.plant.id}
                    plant={sp.plant}
                    isFavorite={fav.isFavorite(sp.plant.id)}
                    onToggleFavorite={() => fav.toggle(sp.plant.id)}
                  />
                ))}
              </div>
            </section>
          )}
          {hasMore && (
            <div ref={sentinelRef} className="flex justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-primary" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const GAP = 8;
const DIVIDER_W = 18;

function useVisibleToggles(
  barRef: React.RefObject<HTMLDivElement | null>,
  toggleCount: number,
  deps: unknown[],
) {
  const toggleWidths = useRef<number[]>([]);
  const [visible, setVisible] = useState(toggleCount);

  const recalc = useCallback(() => {
    const bar = barRef.current;
    if (!bar) return;

    const barW = bar.offsetWidth;
    const children = Array.from(bar.children) as HTMLElement[];

    const filtrBtn = children.find((c) => c.dataset.role === "filtry");
    const filtrW = filtrBtn ? filtrBtn.offsetWidth + GAP : 0;

    let fixedW = 0;
    for (const c of children) {
      if (c.dataset.role === "toggle") {
        const w = c.offsetWidth;
        if (w > 0) {
          const idx = Number(c.dataset.idx);
          toggleWidths.current[idx] = w;
        }
      } else if (c !== filtrBtn) {
        fixedW += c.offsetWidth + GAP;
      }
    }

    const available = barW - fixedW - filtrW;
    let used = 0;
    let count = 0;
    for (let i = 0; i < toggleCount; i++) {
      const w = (toggleWidths.current[i] ?? 80) + GAP;
      if (used + w <= available) { used += w; count++; }
      else break;
    }

    setVisible(count);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [barRef, toggleCount, ...deps]);

  useEffect(() => {
    recalc();
    const ro = new ResizeObserver(recalc);
    if (barRef.current) ro.observe(barRef.current);
    return () => ro.disconnect();
  }, [recalc]);

  return visible;
}

function FilterBar({
  primaryFilterDefs,
  answers,
  setPrimary,
  quickToggles,
  additional,
  toggleAdditional,
  additionalCount,
  onOpenPanel,
}: {
  primaryFilterDefs: { key: string; placeholder: string; options: Record<string, string> }[];
  answers: UserAnswers;
  setPrimary: (key: keyof UserAnswers, value: string | undefined) => void;
  quickToggles: { key: keyof AdditionalFilters; label: string }[];
  additional: AdditionalFilters;
  toggleAdditional: (key: keyof AdditionalFilters) => void;
  additionalCount: number;
  onOpenPanel: () => void;
}) {
  const barRef = useRef<HTMLDivElement>(null);
  const visible = useVisibleToggles(barRef, quickToggles.length, [answers, additional]);

  return (
    <div ref={barRef} className="mb-4 flex items-center gap-2">
      {primaryFilterDefs.map((pf) => (
        <DropdownFilter
          key={pf.key}
          placeholder={pf.placeholder}
          options={pf.options}
          value={answers[pf.key as keyof UserAnswers] as string | undefined}
          onChange={(v) => setPrimary(pf.key as keyof UserAnswers, v)}
        />
      ))}
      {visible > 0 && <span className="mx-1 h-6 w-px shrink-0 bg-gray-200" />}
      {quickToggles.map((qt, i) => (
        <button
          key={qt.key}
          data-role="toggle"
          data-idx={i}
          onClick={() => toggleAdditional(qt.key)}
          style={i >= visible ? { position: "absolute", visibility: "hidden", pointerEvents: "none" } : undefined}
          className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium transition ${
            additional[qt.key] ? "border-primary bg-accent-light text-primary-dark" : "border-gray-200 text-gray-600 hover:border-gray-300"
          }`}
        >
          {qt.label}
        </button>
      ))}
      <button
        data-role="filtry"
        onClick={onOpenPanel}
        className="ml-auto flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-600 transition hover:bg-white"
      >
        <SlidersHorizontal size={14} /> Filtry
        {additionalCount > 0 && (
          <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">{additionalCount}</span>
        )}
      </button>
    </div>
  );
}

function DropdownFilter({ placeholder, options, value, onChange }: {
  placeholder: string;
  options: Record<string, string>;
  value: string | undefined;
  onChange: (v: string | undefined) => void;
}) {
  const [open, setOpen] = useState(false);
  const label = value ? options[value] : undefined;

  return (
    <div className="relative shrink-0">
      {label ? (
        <div className="flex items-center gap-1 whitespace-nowrap rounded-full border border-primary bg-accent-light px-3 py-1.5 text-sm font-medium text-primary-dark">
          <span className="cursor-pointer" onClick={() => setOpen((v) => !v)}>{label}</span>
          <button onClick={() => onChange(undefined)} aria-label="Zrušit filtr" className="ml-0.5 opacity-60 hover:opacity-100"><X size={12} /></button>
        </div>
      ) : (
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1 whitespace-nowrap rounded-full border border-dashed border-gray-300 px-3 py-1.5 text-sm text-gray-500 transition hover:border-gray-400"
        >
          {placeholder} <ChevronDown size={12} />
        </button>
      )}
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-xl border border-gray-200 bg-white py-1 shadow-lg">
            {Object.entries(options).map(([val, lab]) => (
              <button
                key={val}
                onClick={() => { onChange(val === value ? undefined : val); setOpen(false); }}
                className={`block w-full px-4 py-2.5 text-left text-sm transition ${
                  val === value ? "bg-accent-light font-semibold text-primary-dark" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {lab}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function FilterPanelOverlay({ filters, onChange, onClear, onClose }: {
  filters: AdditionalFilters;
  onChange: (f: AdditionalFilters) => void;
  onClear: () => void;
  onClose: () => void;
}) {
  const setSelect = <K extends keyof AdditionalFilters>(key: K, value: AdditionalFilters[K] | undefined) => {
    onChange({ ...filters, [key]: value });
  };
  const toggleBool = (key: keyof AdditionalFilters) => {
    const current = filters[key] as boolean | undefined;
    onChange({ ...filters, [key]: current ? undefined : true });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40" onClick={onClose}>
      <div className="flex h-full w-full max-w-sm flex-col bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h3 className="text-lg font-semibold">Všechny filtry</h3>
          <button onClick={onClose} aria-label="Zavřít filtry" className="text-gray-400 hover:text-gray-600"><X size={22} /></button>
        </div>
        <div className="flex-1 space-y-6 overflow-y-auto px-5 py-5">
          <ChipSection label="Barva květu">
            {(Object.keys(barvaKvetuLabels) as BarvaKvetu[]).map((b) => (
              <Chip key={b} active={filters.barvaKvetu === b} onClick={() => setSelect("barvaKvetu", filters.barvaKvetu === b ? undefined : b)}>{barvaKvetuLabels[b]}</Chip>
            ))}
          </ChipSection>
          <ChipSection label="Období kvetení">
            {([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as Mesic[]).map((m) => (
              <Chip key={m} active={filters.mesicKveteni === m} onClick={() => setSelect("mesicKveteni", filters.mesicKveteni === m ? undefined : m)}>{mesicLabels[m]}</Chip>
            ))}
          </ChipSection>
          <ChipSection label="Náročnost">
            {(Object.keys(narocnostLabels) as Narocnost[]).map((n) => (
              <Chip key={n} active={filters.narocnost === n} onClick={() => setSelect("narocnost", filters.narocnost === n ? undefined : n)}>{narocnostLabels[n]}</Chip>
            ))}
          </ChipSection>
          <div>
            <h4 className="mb-2 text-sm font-semibold text-gray-900">Vlastnosti</h4>
            <div className="space-y-1">
              {([
                ["stalezelena", "Stálezelená"], ["vune", "Voní"], ["proVcely", "Pro včely"],
                ["jedla", "Jedlá"], ["vhodnaDoNadoby", "Do nádoby"],
                ["bezpecnaProDeti", "Bezpečná pro děti"], ["bezpecnaProPsy", "Bezpečná pro mazlíčky"],
              ] as [keyof AdditionalFilters, string][]).map(([key, label]) => (
                <label key={key} className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-gray-50">
                  <input type="checkbox" checked={!!filters[key]} onChange={() => toggleBool(key)} className="h-5 w-5 accent-primary" />
                  <span className="text-sm font-medium">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-3 border-t border-gray-200 px-5 py-4">
          <button onClick={onClear} className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50">Zrušit filtry</button>
          <button onClick={onClose} className="flex-1 rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">Hotovo</button>
        </div>
      </div>
    </div>
  );
}

function ChipSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold text-gray-900">{label}</h4>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
        active ? "border-primary bg-accent-light text-primary-dark" : "border-gray-200 text-gray-600 hover:border-gray-300"
      }`}
    >
      {children}
    </button>
  );
}
