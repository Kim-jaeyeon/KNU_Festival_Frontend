import React, { useRef, useState, useEffect } from 'react';
import { HomeCard } from '../components/home/HomeCard';
import { HomeCard2 } from '../components/home/HomeCard2';
import { HomeCrad3 } from '../components/home/HomeCard3';
import { RefButton } from '../components/home/RefButton';

const Home: React.FC = () => {
  // 애니메이션 상태
  const [isVisible, setIsVisible] = useState({
    logo: false,
    cards: false,
    button: false
  });

  // scroll 영역 ref
  const scroll1Ref = useRef<HTMLDivElement>(null);
  const scroll2Ref = useRef<HTMLDivElement>(null);
  const scroll3Ref = useRef<HTMLDivElement>(null);

  // 스크롤 이동 함수
  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 페이지 로드 시 순차적 애니메이션
  useEffect(() => {
    const timer1 = setTimeout(() => setIsVisible(prev => ({ ...prev, logo: true })), 300);
    const timer2 = setTimeout(() => setIsVisible(prev => ({ ...prev, cards: true })), 600);
    const timer3 = setTimeout(() => setIsVisible(prev => ({ ...prev, button: true })), 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);



  return (
    <div 
      className="w-full max-w-[430px] bg-cover bg-center bg-no-repeat overflow-x-hidden -mt-16"
      style={{
        backgroundImage: "url('/assets/home/bg_main.png')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "calc(300vh + 64px)"
      }}
    >
      <div className="w-full flex flex-col items-center overflow-x-hidden">
        <div className={`text-center mt-[84px] px-4 transition-all duration-1000 ${isVisible.logo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <img
            src="public/assets/main-logo.png"
            alt="메인 로고"
            className="
              w-full                /* 부모 너비에 맞게 */
              max-w-[237.48px]      /* 최대 크기 제한 */
              aspect-[237.48/78.21] /* 비율 유지 */
              flex-shrink-0
              mx-auto              
            "
            style={{
              animation: isVisible.logo ? 'fadeInScale 0.8s ease-out' : 'none'
            }}
          />

          <p className="mt-[1px] text-[#383F15] font-hahmlet text-[20.735px] not-italic font-normal leading-normal">
            고요를 채울, 환희로 피어날
          </p>
        
            <p className="text-[#656565] font-hahmlet text-[20.735px] not-italic font-normal leading-normal">
              2025.09.21 - 09.24
            </p>
        </div>
          
          {/*scroll 1 시작*/}

          {/* 1번째 HomeCard */}
          <div ref={scroll1Ref} className={`mt-[33px] w-full h-[395px] px-4 transition-all duration-1000 ${isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <HomeCard
              backgroundColor="rgba(91,141,22,0.57)"
              width="w-full"
              height="h-[122.027px]"
              marginBottom="mb-[19px]"
            >
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* 중앙 SVG */}
                  <img
                    src="/assets/home/1LayerEllipse78.svg"
                  />

                  {/* 중앙 텍스트 */}
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-[#584A00] font-pretendard text-[10px] not-italic font-normal leading-normal">
                      Current Event
                    </span>
                    <span className="text-[#39403A] font-hahmlet text-[17.907px] not-italic font-normal leading-normal">
                      연예인 공연
                    </span>
                    <span className="text-[#39403A] font-pretendard text-[14.196px] not-italic font-normal leading-normal">
                      🕖 19:00 - 20:00
                    </span>
                  </div>
                  
                {/* 왼쪽 텍스트 */}
                <div className="absolute left-0 right-0 top-0 flex flex-col items-start text-left">
                  <span className="absolute top-[28px] left-[36px] text-[#121C00] font-pretendard text-[10px] not-italic font-normal leading-normal">
                    today
                  </span>
                  <span className="absolute top-[48px] left-[30px] text-[#121C00] font-hahmlet text-[19.698px] not-italic font-semibold leading-normal">
                    09.21
                  </span>
                </div>


                  {/* 오른쪽 텍스트 */}
                  <div className="absolute left-0 right-0 top-0 flex flex-col items-end text-right">
                    <span className="absolute top-[62px] right-[18px] text-white text-right font-suit text-[13.237px] not-italic font-extralight leading-normal">time table</span>
                    <span className="absolute top-[79px] right-[18px] text-white font-hahmlet text-[20px] not-italic font-medium leading-normal">타임테이블</span>
                  </div>
                </div>
            </HomeCard>
                           
            {/* 2번째 HomeCard */}
            <div className="flex gap-2 mb-[19px] w-full">
                <HomeCard
                  backgroundColor="rgba(58,105,58,0.84)"
                  width="w-1/2"
                  height="h-[115px]"          
                >
                  <div className="absolute left-0 right-0 top-0 flex flex-col items-start text-left">
                    <img src="/assets/home/1Layerlocal_shipping.svg"
                    className="absolute top-[14px] left-[133px]"/>
                    <span className="absolute top-[58px] left-[21px] text-white font-suit text-[13.237px] not-italic font-extralight leading-normal">부스 및 푸드트럭</span>
                    <span className="absolute top-[75px] left-[21px] text-white font-hahmlet text-[20px] not-italic font-medium leading-normal">부스 및 푸드트럭</span>
                  </div>
                  
                </HomeCard>

                <HomeCard
                    backgroundColor="rgba(156,170,44,0.72)"
                    width="w-1/2"
                    height="h-[115px]"
                >
                      
                  <div className="absolute left-0 right-0 top-0 flex flex-col items-start text-left">
                      <img src="/assets/home/1Layerlocal_shipping.svg"
                      className="absolute top-[14px] right-[19px]"/>
                      <span className="absolute top-[58px] left-[21px] text-white font-suit text-[13.237px] not-italic font-extralight leading-normal">부스 추천</span>
                      <span className="absolute top-[75px] left-[21px] text-white font-hahmlet text-[20px] not-italic font-medium leading-normal">부스 추천</span>
                    </div>

                </HomeCard>
            </div>


            {/* 3번째 HomeCard */}
            <div className="flex gap-2 w-full">
                <HomeCard
                  backgroundColor="rgba(156, 170, 44, 0.72)"
                  width="w-1/2"
                  height="h-[120px]"          
                >

                  <div className="absolute left-0 right-0 top-0 flex flex-col items-start text-left">
                    <img src="/assets/home/1Layergroup.svg"
                    className="absolute top-[17px] left-[155px]"/>
                    <span className="absolute top-[58px] left-[21px] text-white font-suit text-[13.237px] not-italic font-extralight leading-normal">사진 페스티벌</span>
                    <span className="absolute top-[75px] left-[21px] text-white font-hahmlet text-[20px] not-italic font-medium leading-normal">사진 페스티벌</span>
                  </div>
                  
                </HomeCard>

                <HomeCard
                    backgroundColor="rgba(58,105,58,0.84)"
                    width="w-1/2"
                    height="h-[120px]"          
                >

                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <img src="/assets/home/1Layergroup.svg"
                    className="absolute top-[17px] left-[155px]"/>
                    <span className="text-white text-center font-hahmlet text-[20px] not-italic font-medium leading-normal">
                      <p>FAQ</p>
                      <p>&</p>
                      <p>방명록</p>
                    </span>

                  </div>

                </HomeCard>
            </div>
          </div>
            <div className={`text-center mb-[200px] transition-all duration-1000 ${isVisible.button ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <RefButton
              text="축제 지도 보기"
              backgroundColor="#A0C09A"
              onClick={() => scrollToRef(scroll2Ref)}
            />
            </div>
              

          
              {/* scroll2 시작 */}
              <div ref={scroll2Ref} className="w-full  h-full mt-[80.5px] flex flex-col">
                
                <HomeCard2
                  title="60주년 기념관"
                  subtitle="주점, 푸드트럭"
                  details="자세히 보기"
                  imageSrc="/assets/home/2Layer60thAnniversaryHall.png"
                  imagePosition="right"
                  textAlignment="left"
                  marginBottom="0px"
                />

                <HomeCard2
                  title="미래광장"
                  subtitle="부스, 주점, 푸드트럭"
                  details="자세히 보기"
                  imageSrc="/assets/home/2LayerFutureSquare.png"
                  imagePosition="left"
                  textAlignment="right"
                  marginBottom="0px"
                />

                <HomeCard2
                  title="대운동장"
                  subtitle="공연, 푸드트럭"
                  details="자세히 보기"
                  imageSrc="/assets/home/2LayerLargeGround.png"
                  imagePosition="right"
                  textAlignment="left"
                  marginBottom="0px"
                />

                <HomeCard2
                  title="함인섭 광장"
                  subtitle="부스, 푸드트럭"
                  details="자세히 보기"
                  imageSrc="/assets/home/2LayerHaminSquare.png"
                  imagePosition="left"
                  textAlignment="right"
                  marginBottom="0px"
                />      
              </div>

            <div className="text-center">
              <RefButton
                text="축제 라인업 보기"
                backgroundColor="rgba(244, 203, 0, 0.71)"
                onClick={() => scrollToRef(scroll3Ref)}
              />
            </div>
                            

              {/* scroll3 시작 */}
              <div ref={scroll3Ref} className="w-full h-full mt-[210.5px] flex flex-col items-center justify-center text-center px-4">
                <HomeCrad3
                  imageSrc="/assets/home/lineup/promise9.png"
                  mainText="Promise9"
                  subText="프로미스나인"
                  marginBottom="35.22px"
                />

                <HomeCrad3
                  imageSrc="/assets/home/lineup/promise9.png"
                  mainText="Promise9"
                  subText="제발와주세요"
                  marginBottom="35.22px"
                />

                <HomeCrad3
                  imageSrc="/assets/home/lineup/promise9.png"
                  mainText="Promise9"
                  subText="제발제발제발"
                  marginBottom="35.22px"
                />

              </div>


      </div>
    </div>
  );
};

export default Home;
