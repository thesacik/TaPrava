import type { Plant, UserAnswers, ScoredPlant, VelikostKategorie } from "@/types/plants";

export function getVelikostKategorie(vyskaMaxCm?: number): VelikostKategorie | undefined {
  if (vyskaMaxCm == null) return undefined;
  if (vyskaMaxCm <= 40) return "mala";
  if (vyskaMaxCm <= 120) return "stredni";
  return "velka";
}

export function matchesHardFilters(plant: Plant, answers: UserAnswers): boolean {
  if (answers.umisteni && !plant.umisteni.includes(answers.umisteni)) return false;
  if (answers.svetlo && !plant.svetlo.includes(answers.svetlo)) return false;
  if (answers.vlhkost && !plant.vlhkost.includes(answers.vlhkost)) return false;
  if (answers.kategorie && !plant.kategorie.includes(answers.kategorie)) return false;
  if (answers.bezpecnostDeti && !plant.bezpecnaProDeti) return false;
  if (answers.bezpecnostMazlici && !plant.bezpecnaProPsy) return false;
  return true;
}

export function scorePlant(plant: Plant, answers: UserAnswers): number {
  let score = 0;

  const plantSize = plant.velikostKategorie ?? getVelikostKategorie(plant.vyskaMaxCm);
  if (answers.velikost && plantSize === answers.velikost) score += 2;
  if (answers.narocnost && plant.narocnost === answers.narocnost) score += 2;

  if (answers.ocekavani && answers.ocekavani.length > 0) {
    for (const o of answers.ocekavani) {
      switch (o) {
        case "kvety":
          if (plant.barvaKvetu && plant.barvaKvetu.length > 0) score += 2;
          break;
        case "okrasne_listy":
          if (plant.stalezelena || plant.tagy?.some((t) => t.includes("listy") || t.includes("listov"))) score += 2;
          break;
        case "vune":
          if (plant.vune) score += 2;
          break;
        case "jedlost":
          if (plant.jedla) score += 2;
          break;
        case "stalezelena":
          if (plant.stalezelena) score += 2;
          break;
        case "pro_opylovace":
          if (plant.proVcely || plant.proMotyly) score += 2;
          break;
        case "zelen":
          if (plant.stalezelena) score += 2;
          break;
      }
    }
  }

  if (answers.chciVuni && plant.vune) score += 1;
  if (answers.proVcely && plant.proVcely) score += 2;
  if (answers.vhodnaDoNadoby && plant.vhodnaDoNadoby) score += 2;
  if (answers.barvaKvetu && plant.barvaKvetu?.includes(answers.barvaKvetu)) score += 1;
  if (answers.mesicKveteni && plant.obdobiKveteni?.includes(answers.mesicKveteni)) score += 1;

  if (plant.svetlo.length > 1) score += 1;
  if (plant.vlhkost.length > 1) score += 1;

  return score;
}

export function getRecommendationReasons(plant: Plant, answers: UserAnswers): string[] {
  const reasons: string[] = [];

  if (answers.umisteni) {
    const labels: Record<string, string> = {
      venku: "venkovní prostředí",
      interier: "interiér",
      balkon_terasa: "balkon / terasu",
      nadoba: "nádobu",
    };
    reasons.push(`Vhodná do: ${labels[answers.umisteni] ?? answers.umisteni}`);
  }

  if (answers.svetlo) {
    const labels: Record<string, string> = { slunce: "slunce", polostin: "polostín", stin: "stín" };
    reasons.push(`Snáší ${labels[answers.svetlo] ?? answers.svetlo}`);
  }

  const plantSize = plant.velikostKategorie ?? getVelikostKategorie(plant.vyskaMaxCm);
  if (answers.velikost && plantSize === answers.velikost) {
    const labels: Record<string, string> = { mala: "malou", stredni: "střední", velka: "velkou" };
    reasons.push(`Má ${labels[answers.velikost]} velikost`);
  }

  if (answers.narocnost && plant.narocnost === answers.narocnost) {
    const labels: Record<string, string> = { nizka: "Nenáročná na péči", stredni: "Středně náročná", vyssi: "Pro zkušenější pěstitele" };
    reasons.push(labels[answers.narocnost]);
  } else if (plant.narocnost === "nizka") {
    reasons.push("Nenáročná na péči");
  }

  if (answers.ocekavani?.includes("kvety") && plant.barvaKvetu && plant.barvaKvetu.length > 0) reasons.push("Má krásné květy");
  if (answers.ocekavani?.includes("vune") && plant.vune) reasons.push("Příjemně voní");
  if (answers.ocekavani?.includes("jedlost") && plant.jedla) reasons.push("Jedlá rostlina");
  if (answers.ocekavani?.includes("stalezelena") && plant.stalezelena) reasons.push("Stálezelená – celoroční efekt");
  if (answers.ocekavani?.includes("zelen") && plant.stalezelena) reasons.push("Zelená po celou sezónu");
  if (answers.ocekavani?.includes("pro_opylovace") && (plant.proVcely || plant.proMotyly)) reasons.push("Vhodná pro včely a motýly");

  if (answers.bezpecnostDeti && plant.bezpecnaProDeti) reasons.push("Bezpečná pro děti");
  if (answers.bezpecnostMazlici && plant.bezpecnaProPsy) reasons.push("Bezpečná pro domácí mazlíčky");
  if (answers.chciVuni && plant.vune) reasons.push("Příjemně voní");
  if (answers.proVcely && plant.proVcely) reasons.push("Vhodná pro včely a opylovače");
  if (answers.vhodnaDoNadoby && plant.vhodnaDoNadoby) reasons.push("Lze pěstovat v nádobě");
  if (plant.svetlo.length > 1) reasons.push("Toleruje různé světelné podmínky");

  return [...new Set(reasons)];
}

export interface RecommendationResult {
  topPicks: ScoredPlant[];
  otherOptions: ScoredPlant[];
}

export function getRecommendedPlants(
  plants: Plant[],
  answers: UserAnswers
): RecommendationResult {
  const filtered = plants.filter((p) => matchesHardFilters(p, answers));
  const scored: ScoredPlant[] = filtered.map((plant) => ({
    plant,
    score: scorePlant(plant, answers),
    reasons: getRecommendationReasons(plant, answers),
  }));

  scored.sort((a, b) => b.score - a.score);

  const maxScore = scored[0]?.score ?? 0;
  const threshold = Math.max(maxScore - 3, 1);

  const topPicks = scored.filter((s) => s.score >= threshold);
  const otherOptions = scored.filter((s) => s.score < threshold);

  return { topPicks, otherOptions };
}
