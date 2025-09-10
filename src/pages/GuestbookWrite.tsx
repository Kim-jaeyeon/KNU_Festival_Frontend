import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GuestbookWrite: React.FC = () => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!author.trim() || !content.trim()) {
            alert("닉네임과 내용을 모두 입력해주세요!");
            return;
        }

        // 🚩 나중에 서버 저장 API 연결 예정
        console.log("작성자:", author);
        console.log("내용:", content);

        navigate("/guestbook");
    };

    return (
        <div className="w-full min-h-screen flex justify-center">
            <main className="pt-[74px] px-4 max-w-[430px] mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* 닉네임 */}
                    <div>
                        <label className="block mb-2 text-[#285100] font-pretendard font-bold">
                            닉네임
                        </label>
                        <input
                            type="text"
                            placeholder="5글자 내로 입력해주세요"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            maxLength={5}
                            className="w-[353px] h-[48px] px-[20px] py-[16px] rounded-[20px] 
               bg-[rgba(255,255,255,0.54)] font-pretendard text-sm
               placeholder:text-[#555555]
               focus:outline-none focus:ring-2 focus:ring-[#285100] mb-0"
                            style={{ color: "#000", caretColor: "#000" }}
                        />
                    </div>

                    {/* ✅ 버튼 밑 19px 떨어진 구분선 */}
                    <div
                        style={{
                            width: "339.5px",
                            height: "0px",
                            borderTop: "0.8px solid rgba(255, 255, 255, 0.88)",
                            flexShrink: 0,
                        }}
                    />


                    {/* 내용 */}
                    <div>
                        <label className="block mb-2 text-[#285100] font-pretendard font-bold">
                            내용
                        </label>
                        <textarea
                            placeholder="내용을 입력해주세요"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-[353px] h-[124px] px-[20px] py-[16px] rounded-[20px]
               bg-[rgba(255,255,255,0.54)] font-pretendard text-sm resize-none
               placeholder:text-[#555555]
               focus:outline-none focus:ring-2 focus:ring-[#285100]"
                            style={{ color: "#000", caretColor: "#000" }}
                        />
                    </div>

                    {/* 버튼 */}
                    <button
                        type="submit"
                        disabled={!author.trim() || !content.trim()}
                        className={`w-[353px] h-[65px] rounded-[40px] font-pretendard font-bold 
              transition-colors duration-200 bg-[rgba(255,255,255,0.8)]
              ${!author.trim() || !content.trim()
                                ? "text-gray-400 border border-gray-400 cursor-not-allowed"
                                : "text-[#285100] border border-[#285100] hover:bg-[#285100] hover:text-white"
                            }`}
                    >
                        방명록 등록
                    </button>


                </form>
            </main>
        </div >
    );
};

export default GuestbookWrite;