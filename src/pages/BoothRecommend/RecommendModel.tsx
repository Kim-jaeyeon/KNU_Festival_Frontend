import stadiumBooths from "../../data/booths-stadium.json";
import futureBooths from "../../data/booths-future.json";
import haminseopBooths from "../../data/booths-haminseop.json";

// src/recommend/RecommendModel.ts
export interface RecommendModel {
  id: string;
  name: string;
  image?: string;
  tags: string[];
  location?: string;
  zone?: string;
}

const allBooths = [...stadiumBooths, ...futureBooths, ...haminseopBooths];

// ------------------------
// 72개 부스 리스트
// ------------------------
export const boothList: RecommendModel[] = allBooths.map((b, index) => ({
  id: `b${(index + 1).toString().padStart(2, "0")}`,
  name: b.title,
  image: b.image,
  tags: [], // JSON에 tags 없으면 빈 배열, 필요하면 JSON에 추가
  location: b.location,
  zone: b.zone,
}));
// ------------------------
// 24개 조합에 맞게 3개씩 매핑
// ------------------------
export const boothRecommendMap: Record<string, RecommendModel[]> = {
  // 🍽 먹거리
  "a1-b1-c1-d1": [boothList[3], boothList[4], boothList[44]], // 아뜨거빙수, 푸딩팜, 오일장버거
  "a1-b1-c1-d2": [boothList[12], boothList[26], boothList[27]], // 쥬스에퐁당, 옥수수좀하는집, 프롬오름
  "a1-b1-c1-d3": [boothList[5], boothList[45], boothList[14]], // KEY, 슈가베어스튜디오, JDM
  "a1-b1-c2-d1": [boothList[13], boothList[14], boothList[44]],
  "a1-b1-c2-d2": [boothList[4], boothList[31], boothList[32]],
  "a1-b1-c2-d3": [boothList[45], boothList[28], boothList[30]],
  "a1-b2-c1-d1": [boothList[3], boothList[24], boothList[13]],
  "a1-b2-c1-d2": [boothList[4], boothList[27], boothList[32]],
  "a1-b2-c1-d3": [boothList[5], boothList[28], boothList[30]],
  "a1-b2-c2-d1": [boothList[3], boothList[4], boothList[14]],
  "a1-b2-c2-d2": [boothList[5], boothList[31], boothList[32]],
  "a1-b2-c2-d3": [boothList[45], boothList[28], boothList[30]],

  // 🎨 체험거리
  "a2-b1-c1-d1": [boothList[0], boothList[6], boothList[15]], // 인디드로잉, 자치기구발전위원회, W.I.N.G
  "a2-b1-c1-d2": [boothList[1], boothList[34], boothList[35]],
  "a2-b1-c1-d3": [boothList[2], boothList[41], boothList[38]],
  "a2-b1-c2-d1": [boothList[19], boothList[20], boothList[18]],
  "a2-b1-c2-d2": [boothList[36], boothList[37], boothList[40]],
  "a2-b1-c2-d3": [boothList[29], boothList[42], boothList[33]],
  "a2-b2-c1-d1": [boothList[0], boothList[6], boothList[15]],
  "a2-b2-c1-d2": [boothList[1], boothList[34], boothList[35]],
  "a2-b2-c1-d3": [boothList[2], boothList[41], boothList[38]],
  "a2-b2-c2-d1": [boothList[19], boothList[20], boothList[18]],
  "a2-b2-c2-d2": [boothList[36], boothList[37], boothList[40]],
  "a2-b2-c2-d3": [boothList[29], boothList[42], boothList[33]],
};
