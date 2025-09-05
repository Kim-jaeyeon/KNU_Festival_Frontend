import React from "react";
import type { ReactNode } from "react";

interface HomeCardProps {
  backgroundColor: string; 
  width: string;
  height: string;
  marginBottom?: string;
  children?: ReactNode; // <- children 추가
}

export const HomeCard: React.FC<HomeCardProps> = ({
  backgroundColor,
  width,
  height,
  marginBottom,
  children,
}) => {
  return (
    <div
      className={`relative ${width} ${height} rounded-[42px] mx-auto shadow-[-1px_3px_13.1px_-4px_rgba(56,63,41,0.67)] ${marginBottom || ""}`}
    >
      {/* 불투명 배경 */}
      <div className="absolute inset-0 rounded-[42px] bg-white"></div>
      {/* 반투명 오버레이 */}
      <div
        className="absolute inset-0 rounded-[42px]"
        style={{ backgroundColor }}
      ></div>

      {/* 내부 컨텐츠 */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};
