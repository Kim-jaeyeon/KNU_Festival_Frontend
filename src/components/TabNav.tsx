import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  value?: "faq" | "guestbook";
  onChange?: (v: "faq" | "guestbook") => void;
};

export default function TabNav({ value, onChange }: Props) {
  const [inner, setInner] = useState<"faq" | "guestbook">("faq");
  const active = value ?? inner;
  const navigate = useNavigate();

  const setActive = (v: "faq" | "guestbook") => {
    if (onChange) onChange(v);
    else setInner(v);
    
    // URL도 함께 변경
    if (v === "faq") navigate("/faq");
    if (v === "guestbook") navigate("/guestbook");
  };

  return (
    <div className="flex items-center justify-between h-[50px] w-full">
        {/* FAQ 버튼 */}
        <button
          onClick={() => setActive("faq")}
          className={`
        flex-1 text-right select-none outline-none border-0 bg-transparent
        font-pretendard text-[17px] font-[700] leading-[22px]
        ${active === "faq" ? "text-[#285100]" : "text-[rgba(125,149,100,0.63)]"}
      `}
        >
          FAQ
        </button>

        {/* 분할바 */}
        <div className="w-px h-[20.5px] bg-[#285100]/40 mx-[57px]" />

        {/* 방명록 버튼 */}
        <button
          onClick={() => setActive("guestbook")}
          className={`
        flex-1 text-left select-none outline-none border-0 bg-transparent
        font-pretendard text-[17px] font-[700] leading-[22px]
        ${active === "guestbook" ? "text-[#285100]" : "text-[rgba(125,149,100,0.63)]"}
      `}
        >
          방명록
        </button>
    </div>
  );
}
