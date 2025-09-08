import type { Booth } from "../../pages/BoothAndFoodTruck";

export const zoneColors: Record<string, string> = {
  "대운동장-A": "#87C1F4",
  "대운동장-B": "#A7E080",
  "대운동장-C": "#E9D577",

  "함인섭광장-truck": "#E986B0",
  "함인섭광장-D": "#A4ECDE",
  "함인섭광장-coffee": "#FFE4AE",

  "미래광장": "#B2DBB3",
  "60주년-food": "#478F49",
};

export function getBoothColor(booth: Booth): string {
  if (booth.location === "대운동장" && booth.zone) {
    return zoneColors[`${booth.location}-${booth.zone}`];
  }
  if (booth.location === "함인섭광장") {
    if (booth.zone === "truck") return zoneColors["함인섭광장-truck"];
    if (booth.zone === "D") return zoneColors["함인섭광장-D"];
    if (booth.zone === "coffee") return zoneColors["함인섭광장-coffee"];
  }
  if (booth.location === "미래광장") return zoneColors["미래광장"];
  if (booth.location === "60주년" && booth.category === "food") {
    return zoneColors["60주년-food"];
  }
  return "#CCCCCC";
}
