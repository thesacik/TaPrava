import type { Plant } from "@/types/plants";
import { allPlants } from "@/utils/plants";

export function getSimilarPlants(plant: Plant, count = 4): Plant[] {
  const candidates = allPlants.filter((p) => p.id !== plant.id);

  const scored = candidates.map((candidate) => {
    let score = 0;

    const sharedCategories = plant.kategorie.filter((k) =>
      candidate.kategorie.includes(k),
    );
    score += sharedCategories.length * 5;

    const sharedSvetlo = plant.svetlo.filter((s) =>
      candidate.svetlo.includes(s),
    );
    score += sharedSvetlo.length * 3;

    const sharedVlhkost = plant.vlhkost.filter((v) =>
      candidate.vlhkost.includes(v),
    );
    score += sharedVlhkost.length * 2;

    const sharedUmisteni = plant.umisteni.filter((u) =>
      candidate.umisteni.includes(u),
    );
    score += sharedUmisteni.length * 2;

    if (plant.narocnost && plant.narocnost === candidate.narocnost) score += 2;

    if (
      plant.barvaKvetu &&
      candidate.barvaKvetu &&
      plant.barvaKvetu.some((b) => candidate.barvaKvetu!.includes(b))
    ) {
      score += 1;
    }

    if (
      plant.obdobiKveteni &&
      candidate.obdobiKveteni &&
      plant.obdobiKveteni.some((m) => candidate.obdobiKveteni!.includes(m))
    ) {
      score += 1;
    }

    if (plant.stalezelena === candidate.stalezelena) score += 1;

    return { plant: candidate, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, count).map((s) => s.plant);
}
