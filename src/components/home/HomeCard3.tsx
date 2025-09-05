import React from 'react';

interface HomeCrad3Props {
  imageSrc: string;      // 이미지 경로
  mainText: string;      // APINK 부분
  subText: string;       // 에이핑크 부분
  title?: string;        // 연예인 공연
  description?: string;  // 안내 문구
  marginBottom: string;
}

export const HomeCrad3: React.FC<HomeCrad3Props> = ({
  imageSrc,
  mainText,
  subText,
  title = "연예인 공연",
  description = "대운동장 입구에서 안내 직원 대기",
  marginBottom,
}) => {
  return (
    <div
      className="rounded-[17px] w-[354px] h-[284.783px] flex flex-col items-center text-center p-2]"
      style={{
        marginBottom: marginBottom,
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), rgba(212, 212, 143, 0.74)`,
        boxShadow: `0 0 19.4px 7px rgba(255, 255, 255, 0.26) inset, -1px 3px 13.1px -4px rgba(56, 63, 41, 0.67)`,
      }}
    >
      {/* 제목 */}
      <p className="mt-[13px] text-black text-center font-pretendard text-[20px] font-light leading-[22px] not-italic">
        {title}
      </p>

      {/* 설명 */}
      <p className="text-[rgba(0,0,0,0.5)] text-center font-pretendard text-[12px] font-medium leading-[22px] not-italic">
        {description}
      </p>

      {/* 이미지 박스 */}
      <div className="mt-[6.78px] inline-flex w-[321px] h-[200px] justify-end items-center flex-shrink-0 rounded-[10px] border border-white bg-white relative">
        <img src={imageSrc} className="w-full h-full rounded-[10px]" alt={mainText} />

        {/* 이미지 위 텍스트 */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[286px] h-[49px] rounded-[50px] border border-[#012D00] bg-white/66 flex flex-col items-center justify-center">
          <p className="text-[#012500] font-hahmlet text-[25px] font-semibold leading-[22px] not-italic">
            {mainText}
          </p>
          <p className="text-[#012D00] font-hahmlet text-[10px] font-normal leading-[22px] not-italic">
            {subText}
          </p>
          <img src="assets/home/lineup/lineupArrow.svg" className="absolute top-[0px] right-[0px] mt-[11px] mr-[9px]" />
        </div>
      </div>
    </div>
  );
};
