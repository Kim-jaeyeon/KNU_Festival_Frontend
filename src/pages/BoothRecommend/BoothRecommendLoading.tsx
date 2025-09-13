import React from "react";
import { useNavigate } from "react-router-dom";
import { RefButton } from "../../components/home/RefButton";

const BoothRecommendLoading: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      <main className="pt-[70px] px-4 max-w-md mx-auto">
        {/* 상단 아이콘 */}
        <div className="w-[121px] h-[69px] mx-auto">
          <img src="assets/boothRecommend/now.png" alt="현재 위치" />
        </div>

        {/* 텍스트 */}
        <p className="mt-[20px] text-[#133858] text-center font-[Binggrae?] text-[27.621px] font-bold leading-[30.383px]">
          당신에게 필요한 부스,
        </p>

        <p className="mt-[10px] text-[#3B3B3B] text-center font-[SUIT] text-[16px] font-light leading-[25px]">
          몇 가지 질문을 통해 당신에게 딱 맞는
        </p>

        <p className="text-center text-[#3B3B3B] font-[SUIT] text-[16px] font-bold leading-[25px]">
          부스를 추천해드려요!
        </p>

        {/* 진행 표시 */}
        <div className="mt-[50px] w-full flex justify-center items-center h-[57px]">
          <img src="assets/boothRecommend/now2.svg" alt="진행 표시" />
        </div>

        {/* 캐슬 이미지 */}
        <div className="mt-[100px] w-full flex justify-center items-center h-[57px]">
          <img src="assets/boothRecommend/castle.png" alt="캐슬" />
        </div>

        {/* 버튼 */}
        <div className="w-full mt-[130px] text-center">
          <RefButton
            text="부스추천 바로가기"
            backgroundColor="#E5BEEF"
            onClick={() => navigate("../booth-recommend")}
          />
        </div>
      </main>
    </div>
  );
};

export default BoothRecommendLoading;
