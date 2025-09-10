import React from "react";
import type { Booth } from "../../pages/BoothAndFoodTruck";
import { getBoothColor } from "./boothColors";

type BoothModalProps = {
    booth: Booth;
    onClose: () => void;
};

// 카테고리별 아이콘/라벨
const categoryInfo: Record<string, { icon: string; label: string }> = {
    food: { icon: "🍴", label: "푸드" },
    promo: { icon: "🎪", label: "부스" },
};

export default function BoothModal({ booth, onClose }: BoothModalProps) {
    const category = categoryInfo[booth.category] ?? { icon: "", label: "" };

    // ✅ 제목 스타일 조건
    const isShortTitle = booth.title.length < 14;
    const titleFontSize = isShortTitle ? "text-[24px]" : "text-[22px]";

    // ✅ 배경색에 따라 글자색 변경
    const headerBg = getBoothColor(booth);
    const titleTextColor = headerBg === "#87C1F4" ? "text-white" : "text-[#1C3900]";

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* 흐릿한 배경 */}
            <div
                className="absolute inset-0 bg-[rgba(140,149,133,0.59)]"
                onClick={onClose}
            />

            {/* 모달 */}
            <div
                className="relative w-[358px] h-[682px] flex-shrink-0 rounded-[10px] border-2 border-white"
                style={{
                    background: "rgba(254,255,238,0.90)",
                    boxShadow: "0 4px 28.7px 6px rgba(18, 37, 0, 0.37)",
                }}
            >
                {/* 상단 색상 영역 */}
                <div
                    className="relative w-full h-[98px] rounded-t-[10px] border-b-2 border-[#F7FBE1] flex items-center justify-center px-4"
                    style={{ backgroundColor: headerBg }}
                >
                    {/* 제목 */}
                    <h2
                        className={`font-bold truncate mt-[20px] ${titleFontSize} ${titleTextColor}`}
                    >
                        {booth.title}
                    </h2>

                    {/* 닫기 버튼 */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-1/4 -translate-y-1/2 text-white text-[30px] font-bold"
                    >
                        ✕
                    </button>
                </div>

                {/* 이미지 */}
                <div className="flex justify-center px-[82px] mt-0 relative">
                    <div className="absolute w-full h-[200px] bg-white rounded-[8px]" />
                    <img
                        src={booth.image}
                        alt={booth.title}
                        className="w-full h-[200px] object-cover rounded-[8px] relative"
                    />
                </div>

                {/* ✅ 카테고리 박스 */}
                <div className="mt-5 flex justify-center">
                    <div className="flex items-center gap-2 px-[9px] py-[1px] rounded-[5px] bg-[#FCFFE9]">
                        <span className="text-[18px]">{category.icon}</span>
                        <span className="text-[#285100] text-center font-hahmlet text-[18px] font-extralight leading-[32px]">
                            {category.label}
                        </span>
                    </div>
                </div>

                {/* 설명 */}
                <div className="px-10 mt-5 text-center">
                    <p className="text-[15px] font-medium text-gray-800 font-pretendard">
                        {booth.desc}
                    </p>
                </div>

                {/* 가격 박스 */}
                {booth.prices && booth.prices.length > 0 && (
                    <div className="mt-5 mx-[30.5px] flex flex-col items-start gap-[10px] px-[17px] py-[14px] rounded-[25px] border border-[#2E5607] bg-[rgba(254,255,251,0.74)]">
                        {booth.prices.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center w-full font-pretendard"
                            >
                                <span className="font-pretendard text-[#352C00] text-[17px] font-medium">
                                    {item.name}
                                </span>
                                <div
                                    className="flex-1 mx-3 border-b-2 border-dotted"
                                    style={{ borderColor: "rgba(53,44,0,0.20)" }}
                                />
                                <span className="font-pretendard text-[#352C00] text-[17px] font-medium">
                                    {item.price}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* 확인 버튼 */}
                <div className="absolute bottom-[40px] left-0 right-0 flex justify-center">
                    <button
                        onClick={onClose}
                        className="font-pretendard text-[18px] text-white font-normal flex justify-center items-center gap-[10px] px-[100px] py-[10px] rounded-[50px] border-2 border-[#FFFBEE] bg-[#A9C06C] shadow-[0_4px_5.3px_rgba(101,122,98,0.55)]"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}
