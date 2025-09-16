import React from "react";
import type { Booth } from "../../pages/BoothAndFoodTruck";
import { getBoothColor } from "./boothColors";

type BoothCardProps = {
    booth: Booth;
};

export default function BoothCard({ booth }: BoothCardProps) {
    return (
        <div
            className="relative flex items-center w-[353px] min-h-[90px] bg-white rounded-[10px] shadow-md overflow-hidden"
            aria-label={`${booth.title} 부스 카드`}
        >
            {/* 부스 이미지 */}
            <img
                src={booth.image}
                alt={booth.title}
                className="w-[70px] h-[70px] object-cover rounded-[8px] m-3 flex-shrink-0"
            />

            {/* 텍스트 + 나비 */}
            <div className="flex-1 pr-4">
                <div className="flex items-center mb-1">
                    <h3 className="font-[HS-Santokki] text-[16px] font-bold text-[#285100] truncate">
                        {booth.title}
                    </h3>
                    {/* 🦋 나비 아이콘 */}
                    <img
                        src="/assets/booth/icons/butterfly.svg"
                        alt="butterfly"
                        className="ml-[-2px] -mt-6 w-4 h-4"
                    />
                </div>
                <p className="font-pretendard text-[14px] text-gray-700 leading-[20px] line-clamp-2">
                    {booth.desc}
                </p>
            </div>

            {/* 오른쪽 컬러 바 */}
            <div
                className="absolute right-0 top-0 bottom-0 w-[8px]"
                style={{ backgroundColor: getBoothColor(booth) }}
            />
        </div>
    );
}
