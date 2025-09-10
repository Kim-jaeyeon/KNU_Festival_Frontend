import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BoothRecommendResult: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // navigate에서 넘겨받은 state
  const { answers } = (location.state as { answers: string[] }) || { answers: [] };

  return (
     <div className="w-full min-h-screen">
      <div className="container max-w-md mx-auto px-4 py-8">
      <p className="mt-[117px] text-[#6EAFF0] text-center font-[HS산토끼체] text-[28.636px] font-normal leading-[31.5px]">
        체험과 소품을 좋아하는
      </p>
      <p className="text-[#3B3B3B] text-center font-[HS산토끼체] text-[28.636px] font-normal leading-[31.5px]">
        당신에게 맞는 부스는,,
      </p>

      <div className="
        mt-[10px]
        flex 
        justify-center 
        items-center 
        gap-[10px] 
        text-[#003661] 
        text-center 
        font-[Godo\ M] 
        text-[10px] 
        font-normal 
        leading-[22px]
      ">
        <p className="w-[67px] px-[5px] py-[1px] rounded-[10px] bg-[rgba(218,238,249,0.73)]">#공통 태그1</p>
        <p className="w-[67px] px-[5px] py-[1px] rounded-[10px] bg-[rgba(218,238,249,0.73)]">#공통 태그1</p>
        <p className="w-[67px] px-[5px] py-[1px] rounded-[10px] bg-[rgba(218,238,249,0.73)]">#공통 태그1</p>
      </div>

 
      
      <div className="mt-[16px] w-[168px] h-[167px] mx-auto">
        <div className="h-[150px] self-stretch rounded-[10px] border-[4px] border-[#BBCF90] bg-white shadow-[0_4px_9.2px_1px_rgba(22,44,61,0.25)]">
          <img src="" alt="" />
        </div>
      </div>

      <p className="mt-[0px] text-[#90B246] text-center font-[HS산토끼체] text-[20px] font-normal leading-[22px]">
        인디드로잉
      </p>



      <button
        onClick={() => navigate("/")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        홈으로 돌아가기
      </button>
       </div>
    </div>
  );
};

export default BoothRecommendResult;
