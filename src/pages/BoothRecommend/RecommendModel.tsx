// src/recommend/RecommendModel.ts
export interface RecommendModel {
  id: string;
  name: string;
  image: string;
  tags: string[];
}

// ------------------------
// 72개 부스 리스트
// ------------------------
export const boothList: RecommendModel[] = [
  // A구역 (10개)
  { id: "b01", name: "인디드로잉", image: "/images/booths/indidrawing.webp", tags: ["체험", "감성"] },
  { id: "b02", name: "도서관자치위원회", image: "/images/booths/library.webp", tags: ["홍보", "조용"] },
  { id: "b03", name: "학생권익위원회", image: "/images/booths/studentrights.webp", tags: ["이벤트"] },
  { id: "b04", name: "아뜨거빙수", image: "/images/booths/atteugeo.webp", tags: ["먹거리"] },
  { id: "b05", name: "푸딩팜", image: "/images/booths/puddingfarm.webp", tags: ["먹거리", "디저트"] },
  { id: "b06", name: "KEY", image: "/images/booths/key.webp", tags: ["체험", "타로"] },
  { id: "b07", name: "자치기구발전위원회", image: "/images/booths/polaroid.webp", tags: ["체험"] },
  { id: "b08", name: "Yours", image: "/images/booths/yours.webp", tags: ["굿즈"] },
  { id: "b09", name: "원예당", image: "/images/booths/wonye.webp", tags: ["먹거리", "선물"] },
  { id: "b10", name: "타로세이", image: "/images/booths/tarosei.webp", tags: ["체험", "타로"] },

  // B구역 (12개)
  { id: "b11", name: "집행위원회", image: "/images/booths/exec.webp", tags: ["체험"] },
  { id: "b12", name: "스마트원예 영농창업", image: "/images/booths/youngteuk.webp", tags: ["체험"] },
  { id: "b13", name: "쥬스에퐁당", image: "/images/booths/juice.webp", tags: ["먹거리"] },
  { id: "b14", name: "JDM", image: "/images/booths/jdm.webp", tags: ["먹거리"] },
  { id: "b15", name: "W.I.N.G", image: "/images/booths/wing.webp", tags: ["체험"] },
  { id: "b16", name: "우리다누리", image: "/images/booths/danuri.webp", tags: ["체험"] },
  { id: "b17", name: "온화", image: "/images/booths/onhwa.webp", tags: ["체험"] },
  { id: "b18", name: "kor", image: "/images/booths/kor.webp", tags: ["체험"] },
  { id: "b19", name: "빛길", image: "/images/booths/bitgil.webp", tags: ["게임"] },
  { id: "b20", name: "3D Maker", image: "/images/booths/3dmaker.webp", tags: ["체험"] },
  { id: "b21", name: "POME", image: "/images/booths/pome.webp", tags: ["먹거리"] },
  { id: "b22", name: "5PPORYUNTY", image: "/images/booths/potato.webp", tags: ["먹거리"] },

  // C구역 (26개)
  { id: "b23", name: "왕희천과 아이들", image: "/images/booths/wanghee.webp", tags: ["체험"] },
  { id: "b24", name: "무적해적단", image: "/images/booths/pirates.webp", tags: ["먹거리"] },
  { id: "b25", name: "화석어셈블", image: "/images/booths/fossil.webp", tags: ["체험"] },
  { id: "b26", name: "옥수수좀하는집", image: "/images/booths/corn.webp", tags: ["먹거리"] },
  { id: "b27", name: "프롬오름", image: "/images/booths/fromoreum.webp", tags: ["먹거리"] },
  { id: "b28", name: "웰컴투이스탄불", image: "/images/booths/kebab.webp", tags: ["먹거리"] },
  { id: "b29", name: "앙금이들", image: "/images/booths/anggeum.webp", tags: ["체험"] },
  { id: "b30", name: "헤어지자고?", image: "/images/booths/specialfood.webp", tags: ["먹거리"] },
  { id: "b31", name: "후문연합", image: "/images/booths/bingsu.webp", tags: ["먹거리"] },
  { id: "b32", name: "ALFS", image: "/images/booths/alfs.webp", tags: ["먹거리"] },
  { id: "b33", name: "한마음선교회", image: "/images/booths/ministry.webp", tags: ["홍보"] },
  { id: "b34", name: "뭉개구름", image: "/images/booths/cloud.webp", tags: ["굿즈"] },
  { id: "b35", name: "OECO", image: "/images/booths/oeco.webp", tags: ["굿즈"] },
  { id: "b36", name: "Revine", image: "/images/booths/terarium.webp", tags: ["체험"] },
  { id: "b37", name: "포뿌리", image: "/images/booths/photo.webp", tags: ["체험"] },
  { id: "b38", name: "Aesthetic H", image: "/images/booths/fashion.webp", tags: ["체험"] },
  { id: "b39", name: "학생홍보대사 가온", image: "/images/booths/gaon.webp", tags: ["홍보"] },
  { id: "b40", name: "beadsinyou", image: "/images/booths/beads.webp", tags: ["체험"] },
  { id: "b41", name: "온담", image: "/images/booths/emotion.webp", tags: ["체험"] },
  { id: "b42", name: "신세계 사주타로", image: "/images/booths/tarot.webp", tags: ["체험"] },
  { id: "b43", name: "그리너블", image: "/images/booths/greenable.webp", tags: ["굿즈"] },
  { id: "b44", name: "그린나라", image: "/images/booths/greennara.webp", tags: ["굿즈"] },
  { id: "b45", name: "오일장버거", image: "/images/booths/oilburger.webp", tags: ["먹거리"] },
  { id: "b46", name: "슈가베어스튜디오", image: "/images/booths/sugarbear.webp", tags: ["굿즈"] },
  { id: "b47", name: "실몽실", image: "/images/booths/silmong.webp", tags: ["체험"] },
  { id: "b48", name: "HESSDOLL", image: "/images/booths/hessdoll.webp", tags: ["체험"] },

  // 함인섭광장 + 미래광장 (24개)
  { id: "b49", name: "강원권 미세먼지 연구관리센터", image: "/images/booths/mise.webp", tags: ["홍보"] },
  { id: "b50", name: "강원지방병무청", image: "/images/booths/military.webp", tags: ["홍보"] },
  { id: "b51", name: "KNU 창업혁신원", image: "/images/booths/startup.webp", tags: ["홍보"] },
  { id: "b52", name: "춘천시 자원순환과", image: "/images/booths/recycle.webp", tags: ["홍보"] },
  { id: "b53", name: "춘천시 탄소중립지원센터", image: "/images/booths/carbon.webp", tags: ["홍보"] },
  { id: "b54", name: "교육혁신본부", image: "/images/booths/edu.webp", tags: ["이벤트"] },
  { id: "b55", name: "춘천시 교통과", image: "/images/booths/traffic.webp", tags: ["홍보"] },
  { id: "b56", name: "한국도로교통공단", image: "/images/booths/drive.webp", tags: ["홍보"] },
  { id: "b57", name: "땡겨요 배달앱", image: "/images/booths/delivery.webp", tags: ["이벤트"] },
  { id: "b58", name: "2025 춘천술페스타 홍보", image: "/images/booths/festival.webp", tags: ["홍보"] },
  { id: "b59", name: "강원대 발전기금재단", image: "/images/booths/fund.webp", tags: ["이벤트"] },
  { id: "b60", name: "메가박스 춘천석사지점", image: "/images/booths/movie.webp", tags: ["홍보"] },
  { id: "b61", name: "대학일자리플러스센터", image: "/images/booths/job.webp", tags: ["홍보"] },
  { id: "b62", name: "국제교류과", image: "/images/booths/exchange.webp", tags: ["홍보"] },
  { id: "b63", name: "학생상담센터", image: "/images/booths/counsel.webp", tags: ["홍보"] },
  { id: "b64", name: "지능형융합보안인재양성사업 그룹", image: "/images/booths/security.webp", tags: ["홍보"] },
  { id: "b65", name: "지학협력본부", image: "/images/booths/cooperation.webp", tags: ["홍보"] },
  { id: "b66", name: "제66보병사단", image: "/images/booths/military2.webp", tags: ["홍보"] },
  { id: "b67", name: "KOICA", image: "/images/booths/koica.webp", tags: ["홍보"] },
  { id: "b68", name: "KNU MNM / 농협은행", image: "/images/booths/bank.webp", tags: ["홍보"] },
  { id: "b69", name: "총동창회", image: "/images/booths/alumni.webp", tags: ["홍보"] },
  { id: "b70", name: "집행위원회 굿즈 판매", image: "/images/booths/execgoods.webp", tags: ["체험"] },
  { id: "b71", name: "두더지 잡기 게임", image: "/images/booths/mole.webp", tags: ["게임"] },
  { id: "b72", name: "대형 현수막 참여 프로그램", image: "/images/booths/banner.webp", tags: ["체험"] },
];

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
