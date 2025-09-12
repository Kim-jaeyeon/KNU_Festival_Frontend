import React from 'react';

interface HomeCrad3Props {
  logoSrc: string;      // 상단 로고 이미지
  mainImgSrc: string;   // 메인 이미지
  dayText: string;      // DAY1, DAY2 등
  dateText: string;     // 날짜
  nameText: string;     // 이름
  imagePosition?: 'left' | 'right'; // 이미지 위치 (기본 left)
}

export const HomeCrad3: React.FC<HomeCrad3Props> = ({
  logoSrc,
  mainImgSrc,
  dayText,
  dateText,
  nameText,
  imagePosition = 'left'
}) => {
  const textBlock = (
    <div className="ml-[20px]">
      <p className="mt-[45px] text-[#2F86E9] font-Pretendard text-[17px] font-bold leading-[22px]">
        {dayText}
      </p>
      <p className="text-black font-Pretendard text-[17px] font-bold leading-[20px]">
        {dateText}
      </p>
      <p className="text-black font-Pretendard text-[17px] font-bold leading-[22px]">
        {nameText}
      </p>
      <img src="assets/home/ArrowMove.svg" alt="" className="mt-[10px]" />
    </div>
  );

  const imageBlock = (
    <img
      src={mainImgSrc}
      alt=""
      className="ml-[10px] w-[239px] h-[187px]"
    />
  );

  return (
    <div className="w-[330px] h-[255px] ml-[21px]">
      <img
        src={logoSrc}
        alt=""
        className="w-[141px] h-[47px] ml-[142px] rotate-[12.796deg]"
      />
      <div className="flex">
        {imagePosition === 'left' ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </div>
  );
};
