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
  const scroll4Ref = useRef<HTMLDivElement>(null);

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
        backgroundSize: "cover",
        backgroundPosition: "top center",
        minHeight: "calc(300vh + 64px)"
      }}
    >
      <div ref={scroll1Ref} className="w-full min-h-[932px] flex flex-col items-center overflow-x-hidden bg-[url('/assets/home/BGimg/BackImg1.png')] bg-cover bg-center"
     >
        <div className={`text-center mt-[95px] transition-all duration-1000 ${isVisible.logo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <img
            src="/assets/main_logo.png"
            alt="메인 로고"
            className="
              w-full                /* 부모 너비에 맞게 */
              max-w-[310px]      /*  최대 크기 제한 */
              aspect-[237.48/78.21] /* 비율 유지 */
              flex-shrink-0
              mx-auto              
            "
            style={{
              animation: isVisible.logo ? 'fadeInScale 0.8s ease-out' : 'none'
            }}
          />

          <p className="mt-[-18px] text-[#5C6C00] font-[Hahmlet] text-[15px] font-normal leading-normal">
            고요를 채울, 환희로 피어날
          </p>
        
          <p className="text-[#0F1D00] font-[Hahmlet] text-[18px] font-normal leading-normal">
            2025.09.21 - 09.24
          </p>
        </div>
          
          {/*scroll 1 시작*/}

          {/* 1번째 HomeCard */}
          <div className={`mt-[30px] w-full h-full px-4 transition-all duration-1000 ${isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative w-full h-auto">
              <img src="/assets/home/LayerFrame1/1LayerFrame1.png" alt="" className="w-full h-auto" />
              {/* 이미지 위 글씨 */}
                <p className="absolute top-[14px] left-[37px] text-white text-2xl font-bold text-white font-[Pretendard] text-[11.89px] font-extralight leading-normal flex-shrink-0">
                    TIME TABLE
                </p>

                <p className="absolute top-[14px] right-[47px] text-white font-[Hahmlet] text-[10px] font-normal leading-normal">
                  today
                </p>

                <p className="absolute top-[24px] left-[35px] w-[117px] h-[34px] flex-shrink-0 text-white font-[Hahmlet] text-[25px] font-normal leading-normal">
                  타임테이블
                </p>

                <p className="absolute top-[27px] right-[32px] text-white font-[Hahmlet] text-[19.698px] font-semibold leading-normal">
                  09.21
                </p>


                <div className="flex absolute top-[71px] left-1/2 transform -translate-x-1/2 w-[330px] h-[46px] flex-shrink-0 rounded-[20px] border border-[#F6FAEB] 
                                bg-gradient-to-r from-white/0 to-white shadow-[ -2px_3px_5px_0_rgba(105,132,77,0.33) ]">           
                  <img src="assets/home/Clock.svg" className="mt-[11px] ml-[11px] w-[24px] h-[24px] p-[2.667px] items-center" alt="" />                 
                    <p className="mt-[9.5px] ml-[12px] text-[#39646C] font-[Hahmlet] text-[18px] font-normal leading-normal">
                    19:00 - 20:00
                  </p>
                   <p className="mt-[9.5px] ml-[53px] text-[#39646C] font-[Hahmlet] text-[18px] font-normal leading-normal">
                    연예인 공연
                  </p>
            
                </div>


            </div>
                
            {/* 2번째 HomeCard */}
            <div className="mt-[4px] mx-auto grid grid-cols-2 gap-[9px]">
              <img src="/assets/home/LayerFrame1/1LayerFrame2.png" alt="" className="w-full h-full" />
              <img src="/assets/home/LayerFrame1/1LayerFrame3.png" alt="" className="w-full h-full" />
              <img src="/assets/home/LayerFrame1/1LayerFrame4.png" alt="" className="w-full h-full" />
              <img src="/assets/home/LayerFrame1/1LayerFrame5.png" alt="" className="w-full h-full" />
            </div>
          </div>

            <div className={`mt-[76px] h-[103px] text-centertransition-all duration-300 ${isVisible.button ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <RefButton
              text="축제 라인업 보기"
              backgroundColor="rgba(244, 203, 0, 0.71)"
              onClick={() => scrollToRef(scroll2Ref)}
            />
                        
              <div className="mt-[9px] w-[37px] h-[37px] flex items-center justify-center mx-auto"
              onClick={() => scrollToRef(scroll2Ref)}>
                <img src="/assets/home/ArrowUp-circle.svg" alt="Arrow Up" className="w-full h-full" />
              </div>
            </div>
            </div>

            
              {/* scroll2 시작 */}
              <div ref={scroll2Ref} 
              className="w-full min-h-[932px] pt-[101px] bg-cover bg-center bg-no-repeat bg-[url('/assets/home/BGimg/BackImg2.png')] bg-cover bg-center">
      
                <HomeCrad3
                  logoSrc="/assets/home/lineup/extext.svg"
                  mainImgSrc="/assets/home/lineup/eximg.svg"
                  dayText="DAY1"
                  dateText="9.23"
                  nameText="Kii Kii"
                  imagePosition="left"
                />

                 <HomeCrad3
                  logoSrc="/assets/home/lineup/extext.svg"
                  mainImgSrc="/assets/home/lineup/eximg.svg"
                  dayText="DAY1"
                  dateText="9.23"
                  nameText="Kii Kii"
                  imagePosition="right"
                />

                
                <HomeCrad3
                  logoSrc="/assets/home/lineup/extext.svg"
                  mainImgSrc="/assets/home/lineup/eximg.svg"
                  dayText="DAY1"
                  dateText="9.23"
                  nameText="Kii Kii"
                  imagePosition="left"
                />
       
                
              </div>

            <div 
            className="w-full min-h-[932px] pt-[50px] bg-cover bg-center bg-no-repeat bg-[url('/assets/home/BGimg/BackImg3.png')] bg-cover bg-center">
      
            <HomeCrad3
                  logoSrc="/assets/home/lineup/extext.svg"
                  mainImgSrc="/assets/home/lineup/eximg.svg"
                  dayText="DAY1"
                  dateText="9.23"
                  nameText="Kii Kii"
                  imagePosition="right"
                />

              <HomeCrad3
                  logoSrc="/assets/home/lineup/extext.svg"
                  mainImgSrc="/assets/home/lineup/eximg.svg"
                  dayText="DAY1"
                  dateText="9.23"
                  nameText="Kii Kii"
                  imagePosition="left"
                />


                
            <HomeCrad3
                  logoSrc="/assets/home/lineup/extext.svg"
                  mainImgSrc="/assets/home/lineup/eximg.svg"
                  dayText="DAY1"
                  dateText="9.23"
                  nameText="Kii Kii"
                  imagePosition="right"
                />
              


            <div className="text-center">
              <RefButton
                text="축제 지도 보기"
                backgroundColor="#A0C09A"
                onClick={() => scrollToRef(scroll3Ref)}
              />
            </div>

            <div className="mt-[9px] w-[37px] h-[37px] flex items-center justify-center mx-auto"
            onClick={() => scrollToRef(scroll3Ref)}>
                <img src="/assets/home/ArrowUp-circle.svg" alt="Arrow Up" className="w-full h-full" />
            </div>
                            

            </div>
            
          
              {/* scroll3 시작 */}
              <div ref={scroll3Ref} 
              className="w-full min-h-[932px] pt-[64px] bg-cover bg-center bg-no-repeat bg-[url('/assets/home/BGimg/BackImg4.png')] bg-cover bg-center">

                <HomeCard2
                  title="60주년 기념관"
                  subtitle="주점, 푸드트럭"
                  details="자세히 보기"
                  imageSrc="/assets/home/LayerFrame2/2Layer60thAnniversaryHall.png"
                  imagePosition="right"
                  textAlignment="left"
                  marginBottom="0px"
                />

                <HomeCard2
                  title="미래광장"
                  subtitle="부스, 주점, 푸드트럭"
                  details="자세히 보기"
                  imageSrc="/assets/home/LayerFrame2/2LayerFutureSquare.png"
                  imagePosition="left"
                  textAlignment="right"
                  marginBottom="0px"
                />
 
              </div>


            <div 
              className="w-full min-h-[932px] pt-[64px] bg-cover bg-center bg-no-repeat bg-[url('/assets/home/BGimg/BackImg5.png')] bg-cover bg-center">
      
                <HomeCard2
                  title="대운동장"
                  subtitle="공연, 푸드트럭"
                  details="자세히 보기"
                  imageSrc="/assets/home/LayerFrame2/2LayerLargeGround.png"
                  imagePosition="right"
                  textAlignment="left"
                  marginBottom="0px"
                />

                <HomeCard2
                  title="함인섭 광장"
                  subtitle="부스, 푸드트럭"
                  details="자세히 보기"
                  imageSrc="/assets/home/LayerFrame2/2LayerHaminSquare.png"
                  imagePosition="left"
                  textAlignment="right"
                  marginBottom="0px"
                />     

                <div className="text-center">
              <RefButton
                text="개발자 및 디자이너"
                backgroundColor="#E5BEEF"
                onClick={() => scrollToRef(scroll4Ref)}
              />
            </div>

            <div className="mt-[9px] w-[37px] h-[37px] flex items-center justify-center mx-auto"
            onClick={() => scrollToRef(scroll4Ref)}>
              <img src="/assets/home/ArrowUp-circle.svg" alt="Arrow Up" className="w-full h-full" />
            </div>
  
            </div>

                        
            <div 
              ref={scroll4Ref} 
              className="w-full min-h-[932px] bg-cover bg-center bg-no-repeat bg-[url('/assets/home/BGimg/BackImg6.png')] flex justify-center items-center"
            >
              <div className="flex flex-col w-[343.699px] h-[364px]">
                <p className="text-[#009A7C] font-hssantokki text-[20px] font-normal leading-normal">
                  디자이너
                </p>

                <p className="text-black font-['Hakgyoansim_Jeomsimsigan'] text-[16px] font-bold leading-[32px]">
                  최혜선 <br />
                  AI융합학과 23
                </p>


                <p className="mt-[39px] text-[#009A7C] font-hssantokki text-[20px] font-normal leading-normal">
                  프론트엔드
                </p>
                
                <div className = "flex gap-[13px]">
                  <p className="text-black font-['Hakgyoansim_Jeomsimsigan'] text-[16px] font-bold leading-[32px]">
                  김재연 <br />
                  컴퓨터공학과 23
                  </p>

                  <p className="text-black font-['Hakgyoansim_Jeomsimsigan'] text-[16px] font-bold leading-[32px]">
                  이원형 <br />
                  (폰트 변경예정)
                  </p>

                  <p className="text-black font-['Hakgyoansim_Jeomsimsigan'] text-[16px] font-bold leading-[32px]">
                  한철완 <br />
                  컴퓨터공학과 22
                  </p>
                </div>

                <p className="mt-[39px] text-[#009A7C] font-hssantokki text-[20px] font-normal leading-normal">
                  백엔드
                </p>
                
                <div className = "flex gap-[38px]">
                  <p className="text-black font-['Hakgyoansim_Jeomsimsigan'] text-[16px] font-bold leading-[32px]">
                  김소연 <br />
                  컴퓨터공학과 21
                  </p>

                  <p className="text-black font-['Hakgyoansim_Jeomsimsigan'] text-[16px] font-bold leading-[32px]">
                  유다인 <br />
                  컴퓨터공학과 21 
                  </p>

                </div>

                


              </div>     
            </div>






      
    </div>
  );
};

export default Home;
