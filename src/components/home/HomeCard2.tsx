import React from 'react';

// Props의 타입을 명시적으로 정의하는 인터페이스
interface HomeCard2Props {
  title: string;
  subtitle: string;
  details: string;
  imageSrc?: string; // 이미지는 선택 사항이므로 '?'를 붙여줍니다.
  imagePosition?: 'left' | 'right'; // 이미지가 왼쪽/오른쪽에 올 수 있음을 명시합니다.
  textAlignment?: 'left' | 'right';
  marginBottom: string;
}

// 공통적인 부분을 컴포넌트로 분리 (Props에 타입을 지정)
export const HomeCard2: React.FC<HomeCard2Props> = ({
  title,
  subtitle,
  details,
  imageSrc,
  imagePosition,
  textAlignment,
  marginBottom = '0px',
}) => {
  const textContainerStyle =
    textAlignment === 'right'
      ? 'absolute top-[169.5px] right-[49px] flex flex-col items-end text-right'
      : 'absolute mt-[169.5px] ml-[34px]';

  const imageStyle = imagePosition === 'left' ? 'relative left-[180px]' : '';

  return (
        <div
      className="w-full relative" style={{ marginBottom }}
    >
      <div className={textContainerStyle}>
        <p className="text-[#009A7C] font-['HS산토끼체_2.0'] text-[25px] not-italic font-normal leading-normal">
          {title}
        </p>
        <p className="text-[#565346] font-hahmlet text-[20px] not-italic font-normal leading-normal">
          {subtitle}
        </p>
        <p className="text-[#565346] font-hahmlet text-[14px] not-italic font-light leading-normal">
          {details}
        </p>
      </div>
      {imageSrc && (
        <img src={imageSrc} className={imageStyle} alt={title} />
      )}
    </div>
  );
};