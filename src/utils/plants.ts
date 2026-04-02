import plantsData from "@/data/plants.json";
import type { Plant } from "@/types/plants";

export const allPlants: Plant[] = plantsData as Plant[];

export function getPlantById(id: string): Plant | undefined {
  return allPlants.find((p) => p.id === id);
}
