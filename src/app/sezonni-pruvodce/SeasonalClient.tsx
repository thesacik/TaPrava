"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays, Sprout, Home, ChevronLeft, ChevronRight, Flower2,
} from "lucide-react";
import type { Mesic } from "@/types/plants";
import { allPlants } from "@/utils/plants";
import { getMonthContent, type MonthContent } from "@/data/seasonalContent";
import { PlantCard } from "@/components/PlantCard";
import { useFavorites } from "@/hooks/useFavorites";

const MONTHS: Mesic[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MONTH_SHORT = ["Led", "Úno", "Bře", "Dub", "Kvě", "Čvn", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro"];
const BLOOM_PREVIEW = 6;

const MONTH_BG: Record<Mesic, string> = {
  1: "/images/months/01.png",
  2: "/images/months/02.png",
  3: "/images/months/03.png",
  4: "/images/months/04.png",
  5: "/images/months/05.png",
  6: "/images/months/06.png",
  7: "/images/months/07.png",
  8: "/images/months/08.png",
  9: "/images/months/09.png",
  10: "/images/months/10.png",
  11: "/images/months/11.png",
  12: "/images/months/12.png",
};

function getCurrentMonth(): Mesic {
  return (new Date().getMonth() + 1) as Mesic;
}

export function SeasonalClient() {
  const [month, setMonth] = useState<Mesic>(getCurrentMonth);
  const content = getMonthContent(month);
  const fav = useFavorites();

  const bloomingPlants = useMemo(
    () => allPlants.filter((p) => p.obdobiKveteni?.includes(month)),
    [month],
  );

  const monthRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const scrollToMonth = useCallback((m: Mesic) => {
    monthRefs.current[m - 1]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  useEffect(() => {
    scrollToMonth(month);
  }, [month, scrollToMonth]);

  const prev = () => setMonth((m) => (m === 1 ? 12 : m - 1) as Mesic);
  const next = () => setMonth((m) => (m === 12 ? 1 : m + 1) as Mesic);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          key={month}
          src={MONTH_BG[month]}
          alt=""
          fill
          sizes="100vw"
          className="object-cover transition-opacity duration-500"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 md:py-20">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white/80">
            <CalendarDays size={16} /> Sezónní průvodce
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {content.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
            {content.intro}
          </p>
        </div>
      </section>

      {/* Month nav */}
      <div className="sticky top-16 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2">
          <button onClick={prev} className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100" aria-label="Předchozí měsíc">
            <ChevronLeft size={20} />
          </button>
          <div className="flex flex-1 gap-1 overflow-x-auto scrollbar-none">
            {MONTHS.map((m) => (
              <button
                key={m}
                ref={(el) => { monthRefs.current[m - 1] = el; }}
                onClick={() => setMonth(m)}
                className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  m === month
                    ? "bg-primary text-white"
                    : m === getCurrentMonth()
                      ? "bg-accent-light text-primary-dark hover:bg-primary/10"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                {MONTH_SHORT[m - 1]}
              </button>
            ))}
          </div>
          <button onClick={next} className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100" aria-label="Další měsíc">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-12">
        {/* Garden tasks */}
        <TaskSection
          icon={<Sprout size={22} />}
          title="Práce na zahradě"
          tasks={content.gardenTasks}
        />

        {/* Indoor tasks */}
        <TaskSection
          icon={<Home size={22} />}
          title="Péče o pokojové rostliny"
          tasks={content.indoorTasks}
        />

        {/* Planting tips */}
        <div className="rounded-xl border border-primary/20 bg-accent-light p-6">
          <h2 className="mb-2 flex items-center gap-2 text-lg font-bold text-primary-dark">
            <Sprout size={20} /> Co sázet a vysévat
          </h2>
          <p className="leading-relaxed text-gray-700">{content.plantingTips}</p>
        </div>

        {/* Blooming plants */}
        {bloomingPlants.length > 0 && (
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
              <Flower2 size={22} className="text-primary" />
              Co teď kvete
              <span className="ml-2 text-base font-normal text-gray-400">
                ({bloomingPlants.length} {bloomingPlants.length === 1 ? "rostlina" : bloomingPlants.length < 5 ? "rostliny" : "rostlin"})
              </span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bloomingPlants.slice(0, BLOOM_PREVIEW).map((plant) => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  isFavorite={fav.isFavorite(plant.id)}
                  onToggleFavorite={() => fav.toggle(plant.id)}
                />
              ))}
            </div>
            {bloomingPlants.length > BLOOM_PREVIEW && (
              <div className="mt-6 text-center">
                <Link
                  href={`/rostliny?af_mesicKveteni=${month}`}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
                >
                  Zobrazit všech {bloomingPlants.length} kvetoucích rostlin
                </Link>
              </div>
            )}
          </section>
        )}
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: content.heroTitle,
            description: content.intro,
            publisher: {
              "@type": "Organization",
              name: "Ta Pravá",
            },
          }),
        }}
      />
    </>
  );
}

function TaskSection({
  icon,
  title,
  tasks,
}: {
  icon: React.ReactNode;
  title: string;
  tasks: { title: string; text: string }[];
}) {
  return (
    <section>
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
        <span className="text-primary">{icon}</span> {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {tasks.map((task) => (
          <div
            key={task.title}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h3 className="mb-2 font-semibold text-gray-900">{task.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{task.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
