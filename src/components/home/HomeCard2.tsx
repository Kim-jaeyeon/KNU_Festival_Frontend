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
  return (
    <div
      className="w-full relative overflow-hidden flex items-center justify-between mx-0" 
      style={{ marginBottom }}
    >
      {/* 이미지가 왼쪽에 있는 경우 */}
      {imagePosition === 'left' && imageSrc && (
        <div className="flex-shrink-0 relative">
          <img  
            src={imageSrc} 
            className="w-48 h-[375px] object-contain" 
            alt={title} 
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
              animation: 'floating 4s ease-in-out infinite'
            }}
          />
        </div>
      )}
      
      {/* 텍스트 영역 */}
      <div className={`flex-1 px-4 ${textAlignment === 'right' ? 'text-right pr-10' : 'pl-10'}`}>
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
      
      {/* 이미지가 오른쪽에 있는 경우 */}
      {imagePosition === 'right' && imageSrc && (
        <div className="flex-shrink-0 relative">
          <img 
            src={imageSrc} 
            className="w-48 h-[375px] object-contain" 
            alt={title} 
            style={{
              maskImage: 'linear-gradient(to left, transparent 0%, black 15%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 30%, black 100%)',
              animation: 'floating 4s ease-in-out infinite'
            }}
          />
        </div>
      )}
    </div>
  );
};