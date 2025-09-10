import { useState } from "react";

type Props = {
    value?: "all" | "food" | "promo";
    onChange?: (v: "all" | "food" | "promo") => void;
};

export default function BoothTabNav({ value, onChange }: Props) {
    const [inner, setInner] = useState<"all" | "food" | "promo">("all");
    const active = value ?? inner;

    const setActive = (v: "all" | "food" | "promo") => {
        if (onChange) onChange(v);
        else setInner(v);
    };

    return (
        <div className="flex items-center justify-center h-[50px] w-full">
            {/* 전체 버튼 */}
            <button
                onClick={() => setActive("all")}
                className={`
          flex-1 text-center select-none outline-none border-0 bg-transparent
          font-pretendard text-[17px] font-[700] leading-[22px]
          ${active === "all" ? "text-[#285100]" : "text-[rgba(125,149,100,0.63)]"}
        `}
            >
                전체
            </button>

            {/* 분할바 */}
            <div className="w-px h-[20.5px] bg-[#285100]/40" />

            {/* 먹거리 버튼 */}
            <button
                onClick={() => setActive("food")}
                className={`
          flex-1 text-center select-none outline-none border-0 bg-transparent
          font-pretendard text-[17px] font-[700] leading-[22px]
          ${active === "food" ? "text-[#285100]" : "text-[rgba(125,149,100,0.63)]"}
        `}
            >
                먹거리
            </button>

            {/* 분할바 */}
            <div className="w-px h-[20.5px] bg-[#285100]/40" />

            {/* 체험 및 홍보 버튼 */}
            <button
                onClick={() => setActive("promo")}
                className={`
          flex-1 text-center select-none outline-none border-0 bg-transparent
          font-pretendard text-[17px] font-[700] leading-[22px]
          ${active === "promo" ? "text-[#285100]" : "text-[rgba(125,149,100,0.63)]"}
        `}
            >
                체험 및 홍보
            </button>
        </div>
    );
} 
