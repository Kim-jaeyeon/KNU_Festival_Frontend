import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { boothRecommendMap } from "./RecommendModel";
import type { RecommendModel } from "./RecommendModel";

const BoothRecommendResult: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // navigate에서 넘겨받은 state
  const { answers } = (location.state as { answers: string[] }) || { answers: [] };
  const key = answers.join("-");
  const recommendedBooths: RecommendModel[] = boothRecommendMap[key] || [];

  // 추천 부스가 없을 경우
  if (recommendedBooths.length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center text-center">
        <p className="text-xl font-bold text-gray-700">추천 부스를 찾을 수 없습니다.</p>
      </div>
    );
  }

  // 첫 번째 부스를 대표 부스로 사용
  const mainBooth = recommendedBooths[0];
  const subBooths = recommendedBooths.slice(1);

  // 모든 부스의 태그를 모아서 중복 제거
  const allTags = recommendedBooths.reduce((acc: string[], booth: RecommendModel) => {
    booth.tags.forEach(tag => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="container max-w-md mx-auto px-4 py-8">
        <p className="mt-[25px] text-[#6EAFF0] text-center font-hssantokki text-[28.636px] font-normal leading-[31.5px]">
          {/* answers에 따라 동적으로 문구 변경 */}
          {answers[1] === "b1" ? "친구와 함께" : "혼자서 힐링하고 싶은"}
        </p>
        <p className="text-[#3B3B3B] text-center font-hssantokki text-[28.636px] font-normal leading-[31.5px]">
          당신에게 맞는 부스는,,
        </p>

        {/* 태그 표시 */}
        <div className="mt-[10px] flex justify-center items-center gap-[10px] text-[#003661] text-center font-[Godo\ M] text-[10px] font-normal leading-[22px]">
          {allTags.map((tag, index) => (
            <p key={index} className="w-[67px] px-[5px] py-[1px] rounded-[10px] bg-[rgba(218,238,249,0.73)]">
              #{tag}
            </p>
          ))}
        </div>

        {/* 메인 부스 카드 */}
        <div className="mt-[16px] w-[150px] h-[150px] mx-auto">
          <div className="h-[150px] self-stretch rounded-[10px] border-[4px] border-[#BBCF90] bg-white shadow-[0_4px_9.2px_1px_rgba(22,44,61,0.25)] overflow-hidden">
            <img src={mainBooth.image} alt={mainBooth.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <p className="mt-[10px] text-[#90B246] text-center font-hssantokki text-[20px] font-normal leading-[22px]">
          {mainBooth.name}
        </p>

        {/* 서브 부스 카드들 */}
        <div className="mt-[30px] flex justify-center gap-10 flex-wrap">
          {subBooths.map((booth, index) => (
            <div key={index} className="flex flex-col items-center w-[150px] mt-4">
              <div className="h-[150px] w-full rounded-[10px] border-[4px] border-[#BBCF90] bg-white shadow-[0_4px_9.2px_1px_rgba(22,44,61,0.25)] overflow-hidden">
                <img src={booth.image} alt={booth.name} className="w-full h-full object-cover" />
              </div>
              <p className="mt-[10px] text-[#90B246] text-center font-hssantokki text-[20px] font-normal leading-[22px]">
                {booth.name}
              </p>
            </div>
          ))}
        </div>

        {/* 다시하기 버튼 */}
        <div className="mt-[40px] flex justify-center">
            <button
                onClick={() => navigate("../boothRecommendLoading")}
                className="w-[180px] h-[45px] bg-[#90B246] rounded-[20px] text-white font-hssantokki text-[18px] font-normal leading-[22px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
            >
                다시하기
            </button>
        </div>
      </div>
    </div>
  );
};

export default BoothRecommendResult;