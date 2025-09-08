import React, { useState } from "react";
import BoothCard from "../components/Booth/BoothCard";
import BoothModal from "../components/Booth/BoothModal"; // ✅ 모달 import

// 장소별 JSON import
import stadiumBooths from "../data/booths-stadium.json";
import haminseopBooths from "../data/booths-haminseop.json";
import booths60th from "../data/booths-60th.json";
import futureBooths from "../data/booths-future.json";

export type Booth = {
  id: number;
  location: "대운동장" | "함인섭광장" | "60주년" | "미래광장";
  zone?: "A" | "B" | "C" | "D" | "truck" | "coffee";
  category: "all" | "food" | "promo";
  title: string;
  desc: string;
  image: string;
  prices?: { name: string; price: string }[];
};

const BoothAndFoodTruck: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState("대운동장");
  const [activeTab, setActiveTab] = useState<"all" | "food" | "promo">("all");

  // ✅ 모달 상태
  const [selectedBooth, setSelectedBooth] = useState<Booth | null>(null);

  const locations = ["대운동장", "함인섭광장", "60주년", "미래광장"];

  const locationImages: Record<string, string> = {
    대운동장: "/assets/maps/map-stadium.png",
    함인섭광장: "/assets/maps/map-haminseop.png",
    "60주년": "/assets/maps/map-60th.jpg",
    미래광장: "/assets/maps/map-future.png",
  };

  // 장소별 데이터 매핑
  const boothData: Record<string, Booth[]> = {
    대운동장: stadiumBooths as Booth[],
    함인섭광장: haminseopBooths as Booth[],
    "60주년": booths60th as Booth[],
    미래광장: futureBooths as Booth[],
  };

  const currentBooths = boothData[activeLocation] || [];

  // 탭 필터링
  const filteredBooths = currentBooths.filter(
    (booth) => activeTab === "all" || booth.category === activeTab
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* 상단 버튼 영역 */}
      <div className="flex justify-center gap-[4px] flex-wrap">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setActiveLocation(loc)}
            className={`
              w-[85px] h-[38px] rounded-full 
              text-[15px] font-pretendard font-bold leading-[22px]
              flex justify-center items-center
              ${activeLocation === loc
                ? "bg-white text-[#285100]"
                : "bg-[#FFFFFFCC] text-[#A3B693]"}
            `}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* 두 번째 탭 네비게이션 */}
      <div className="flex justify-center mt-[11px]">
        <div className="w-[353px] h-[50px] rounded-[40px] bg-[#FFFFFFCC] flex items-center justify-center px-[12px] py-[8px] gap-[28px]">
          <button
            onClick={() => setActiveTab("all")}
            className={`font-pretendard text-[17px] font-[700] leading-[22px]
              ${activeTab === "all" ? "text-[#285100]" : "text-[rgba(125,149,100,0.63)]"}`}
          >
            전체
          </button>
          <div className="w-px h-[20.5px] bg-[#285100]/40" />
          <button
            onClick={() => setActiveTab("food")}
            className={`font-pretendard text-[17px] font-[700] leading-[22px]
              ${activeTab === "food" ? "text-[#285100]" : "text-[rgba(125,149,100,0.63)]"}`}
          >
            먹거리
          </button>
          <div className="w-px h-[20.5px] bg-[#285100]/40" />
          <button
            onClick={() => setActiveTab("promo")}
            className={`font-pretendard text-[17px] font-[700] leading-[22px]
              ${activeTab === "promo" ? "text-[#285100]" : "text-[rgba(125,149,100,0.63)]"}`}
          >
            체험 및 홍보
          </button>
        </div>
      </div>

      {/* 지도 박스 */}
      <div className="flex justify-center mt-4">
        <div className="w-[353px] h-[251px] rounded-[10px] bg-[#FFFFFFCC] flex justify-center items-center px-[10px] pt-[12px] pr-[9px] pb-[11px]">
          <img
            src={locationImages[activeLocation]}
            alt={`${activeLocation} 지도`}
            className="w-full h-full object-cover rounded-[6px]"
          />
        </div>
      </div>

      {/* 부스 카드 리스트 */}
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-[353px] h-[400px] overflow-y-auto overflow-x-hidden flex flex-col gap-4">
          {filteredBooths.length > 0 ? (
            filteredBooths.map((booth) => (
              <div
                key={booth.id}
                className="w-full cursor-pointer"
                onClick={() => setSelectedBooth(booth)} // ✅ 클릭 시 모달 오픈
              >
                <BoothCard booth={booth} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              해당 장소/탭에 등록된 부스가 없습니다.
            </p>
          )}
        </div>
      </div>

      {/* ✅ 모달 띄우기 */}
      {selectedBooth && (
        <BoothModal booth={selectedBooth} onClose={() => setSelectedBooth(null)} />
      )}
    </div>
  );
};

export default BoothAndFoodTruck;
