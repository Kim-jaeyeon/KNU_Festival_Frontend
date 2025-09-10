import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Choice {
  id: string;
  label: string;
}

const BoothRecommend: React.FC = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const stepChoices: Record<number, Choice[]> = {
    1: [
      { id: "a1", label: "네 ! 축제하면 먹거리는 빠질 수 없죠 😋" },
      { id: "a2", label: "선택 1-2" },
    ],
    2: [
      { id: "b1", label: "선택 2-1" },
      { id: "b2", label: "선택 2-2" },
    ],
    3: [
      { id: "c1", label: "선택 3-1" },
      { id: "c2", label: "선택 3-2" },
    ],
    4: [
      { id: "d1", label: "최종 선택 1" },
      { id: "d2", label: "최종 선택 2" },
      { id: "d3", label: "최종 선택 3" },
    ],
  };

  // 단계별 안내 문구
  const stepTexts: Record<number, string[]> = {
    1: ["축제하면 먹거리지!", "어떤 메뉴가 끌리나요?"],
    2: ["참여형 부스를 원하시나요?", "아니면 관람형을 원하시나요?"],
    3: ["먹거리와 관련된 부스를 원하시나요?"],
    4: ["마지막으로 최종 선택을 해주세요!"],
  };

  const handleSelect = (choiceId: string) => {
    const newAnswers = [...answers, choiceId];
    setAnswers(newAnswers);

    if (step < 4) {
      setStep((prev) => prev + 1);
    } else {
      navigate("/BoothRecommendResult", { state: { answers: newAnswers } });
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="container max-w-md mx-auto">
        {/* 단계 제목 */}
        <p className="mt-[50px] ml-[44px] text-[#508719] font-[HS산토끼체] text-[27.535px] font-normal leading-[30.288px] mb-2">
          0{step}
        </p>

        {/* 안내 문구 */}
       <p className="mt-[5px] ml-[44px] text-[#3B3B3B] font-[HS산토끼체] text-[28.636px] font-normal leading-[31.5px]">
          {stepTexts[step].map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>

        {/* 선택지 버튼 */}
       <div className="mt-[76px] flex flex-col items-center gap-4">
        {stepChoices[step].map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleSelect(choice.id)}
            className="flex justify-center items-center w-[353px] h-[65px] text-[#285100] rounded-[40px] border border-[#285100] bg-[rgba(255,255,255,0.80)] py-2 px-3 font-medium hover:bg-green-200 transition"

          >
            {choice.label}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default BoothRecommend;
