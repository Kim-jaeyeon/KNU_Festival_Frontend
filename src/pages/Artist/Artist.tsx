import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArtistModel } from './ArtistModel';

const Artist: React.FC = () => {
  const { number } = useParams<{ number: string }>();
  const artist = ArtistModel[number || "1"]; // 기본 1번 아티스트

  if (!artist) return <div>아티스트 정보를 찾을 수 없습니다.</div>;
  
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // 페이지 이동 시 스크롤 맨 위로
    window.scrollTo(0, 0);
  }, [id]); // id가 바뀔 때마다 실행

  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="mt-[83px] flex flex-col mx-auto w-[90%] sm:w-[300px] md:w-[354px] h-[711px] flex-shrink-0 rounded-[17px] 
            bg-[linear-gradient(0deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.6)_100%),rgba(69,130,68,0.17)] 
            shadow-[0_0_19.4px_7px_rgba(255,255,255,0.26)_inset,-1px_3px_13.1px_-4px_rgba(56,63,41,0.67)]">
        
          <div className="mt-[22.04px] mx-auto w-[267.705px] h-[186.484px] flex-shrink-0">
            <img src={artist.mainImg} alt={artist.name} className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="flex">
            <div className="mt-[21.48px] ml-[17px] w-[235px] h-[50px] flex flex-col justify-end items-center p-[5px_20px_0_20px] rounded-[50px] bg-white relative">
              <p className="text-[#012500] font-hahmlet sm:text-[20px] not-italic font-semibold leading-[20px]">
                {artist.name}
              </p>
              <p className="text-[#012D00] font-hahmlet text-[10px] not-italic font-normal leading-[22px]">
                {artist.subText}
              </p>
              <div className="absolute inset-0 rounded-[50px] pointer-events-none"
                   style={{
                     padding: '1px',
                     background: 'linear-gradient(to right, #012D00 0%, #A3BD5FBD 100%)',
                     WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                     WebkitMaskComposite: 'xor',
                     maskComposite: 'exclude'
                   }}
              ></div>
            </div>

            <div className="mt-[21.48px] ml-[10px] flex w-[76px] h-[50px] p-[8px_12px] justify-center items-center gap-[23px] flex-shrink-0 rounded-[40px] bg-[rgba(255,255,255,0.6)]">
              <p className="text-[#285100] text-center font-pretendard text-[17px] not-italic font-bold leading-[22px]">
                기타
              </p>
            </div>
          </div>

          <p className="mt-[22px] text-[#285100] text-center font-hahmlet text-[15px] font-bold leading-[20px]">
            아티스트 소개
          </p>
          <div className="mx-auto mt-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="247" height="6" viewBox="0 0 247 6" fill="none">
              <path d="M1 1L246.002 1" stroke="white" strokeOpacity="0.88" strokeWidth="0.8" strokeLinecap="round"/>
              <path d="M1 5.05127H246.002" stroke="white" strokeOpacity="0.88" strokeWidth="0.8" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="w-[286px] h-[112px] mt-[30px] mx-auto">

            <p
              className="flex w-[286px] h-[112px] flex-col justify-center shrink-0 
                         text-[#586552] text-justify font-pretendard text-[12px] 
                         not-italic font-medium leading-normal 
                         overflow-hidden line-clamp-3"
            >
              {artist.intro}
            </p>
          </div>

          <p className="mt-[31px] text-[#285100] text-center font-hahmlet text-[15px] font-bold leading-[20px]">
            아티스트 주요 곡
          </p>
          <div className="mx-auto mt-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="247" height="6" viewBox="0 0 247 6" fill="none">
              <path d="M1 1L246.002 1" stroke="white" strokeOpacity="0.88" strokeWidth="0.8" strokeLinecap="round"/>
              <path d="M1 5.05127H246.002" stroke="white" strokeOpacity="0.88" strokeWidth="0.8" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="flex justify-between gap-[14px] mt-[21px] ml-[15px] mr-[15px]">
            {artist.extraInfo.map((item: any, idx: number) => (
              <div key={idx} className="w-1/3 h-[125px] rounded-[12.072px] flex flex-col items-center"
                   style={{
                     background: "linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255,0.6) 100%), rgba(69,130,68,0.17)",
                     boxShadow: "0 0 21.291px 7.682px rgba(255,255,255,0.26) inset, -1.097px 3.292px 14.377px -4.39px rgba(56,63,41,0.67)"
                   }}>
                <div className="mt-[7px] w-[87px] h-[72px] flex-shrink-0 rounded-[11.676px_11.676px_0.973px_0.973px] border border-[rgba(201,221,150,0.74)] bg-white"></div>
                <p className="truncate text-[#285100] font-Pretendard text-[15px] font-normal leading-[25.229px] text-center">
                  {item.title}
                </p>
                <p className="truncate text-[#4E5B2C] font-Pretendard text-[10px] font-extralight leading-[25.229px] text-center">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
