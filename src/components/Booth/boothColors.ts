import type { Booth } from "../../pages/BoothAndFoodTruck";

export const zoneColors: Record<string, string> = {
  // 대운동장
  "대운동장-A": "#87C1F4",
  "대운동장-B": "#A7E080",
  "대운동장-C": "#E9D577",

  // 함인섭광장
  "함인섭광장-truck": "#E986B0",
  "함인섭광장-D": "#A4ECDE",
  "함인섭광장-coffee": "#594929",

  // 미래광장
  "미래광장-truck": "#E986B0",
  "미래광장-pub": "#FAD0D0FC",
  "미래광장-program": "#1B821E",

  // 60주년
  "60주년-pub": "#FAD0D0FC",
  "60주년-program": "#1B821E",
    "60주년-truck": "#E986B0",
 
};

// 텍스트 색상 (타이틀/위치)
export const boothTextColors: Record<string, { title: string; location: string }> = {
  // 대운동장
  "대운동장-A": { title: "#1F1F1F", location: "#00493B" },
  "대운동장-B": { title: "#1F1F1F", location: "#00493B" },
  "대운동장-C": { title: "#312900", location: "#665400" },

  // 함인섭광장
  "함인섭광장-truck": { title: "#FFFFFF", location: "#940776" },
  "함인섭광장-D": { title: "#1F1F1F", location: "#00493B" },
  "함인섭광장-coffee": { title: "#FFFFFF", location: "#FAFFB0" },

  // 공통 zone (60주년/미래광장 같은 곳에도 적용 가능)
  "60주년-pub": { title: "#000000", location: "#D43075" },
  "60주년-truck": { title: "#FFFFFF", location: "#940776" },
  "60주년-program": { title: "#FFFFFF", location: "#A7E080" },
  "미래광장-pub": { title: "#000000", location: "#D43075" },
  "미래광장-program": { title: "#FFFFFF", location: "#A7E080" },
  "미래광장-truck": { title: "#FFFFFF", location: "#940776" },
};

export function getBoothColor(booth: Booth): string {
  // 대운동장
  if (booth.location === "대운동장" && booth.zone) {
    return zoneColors[`${booth.location}-${booth.zone}`];
  }

  // 함인섭광장
  if (booth.location === "함인섭광장" && booth.zone) {
    return zoneColors[`${booth.location}-${booth.zone}`];
  }

  // 미래광장
  if (booth.location === "미래광장" && booth.zone) {
    return zoneColors[`${booth.location}-${booth.zone}`];
  }
  // 60주년
  if (booth.location === "60주년" && booth.zone) {
    return zoneColors[`${booth.location}-${booth.zone}`];
  }

  // pub / program (공통)
  if (booth.zone === "pub") return zoneColors["공통-pub"];
  if (booth.zone === "program") return zoneColors["공통-program"];

  return "#CCCCCC"; // 기본 색상
}
