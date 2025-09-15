import React from "react";

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-[#4C4C4C47] z-40 flex items-center justify-center"
            onClick={onClose} // ✅ 배경 클릭 시 닫기
        >
            {/* 로그인 박스 */}
            <div
                className="relative w-[279px] h-[434px] rounded-[15px] border border-gray-300 bg-[#EEF2DAE5] shadow-lg flex flex-col"
                onClick={(e) => e.stopPropagation()} // ✅ 내부 클릭 시 닫기 방지
                style={{
                    paddingTop: "90px",
                    paddingLeft: "35px",
                    paddingRight: "35px",
                    paddingBottom: "75px",
                }}
            >
                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-lg font-bold text-[rgba(68,98,64,0.60)] hover:text-[#446240]"
                >
                    ✕
                </button>


                {/* 제목 */}
                <h2 className="absolute top-6 left-1/2 -translate-x-1/2 font-pretendard font-semibold text-[20px] leading-[32px] text-black">
                    로그인하기
                </h2>

                {/* 닉네임 */}
                <label className="text-[17px] font-pretendard font-bold leading-[22px] mb-2 text-[#285100]">
                    닉네임
                </label>
                <input
                    type="text"
                    placeholder="5글자 내로 입력"
                    maxLength={5}
                    className="flex h-[48px] w-full px-5 py-4 rounded-[20px] border border-gray-300 bg-[rgba(255,255,255,0.54)] font-pretendard text-[15px] font-normal leading-[20px] text-[#285100] focus:outline-none focus:ring-2 focus:ring-[#A7C957] mb-4"
                />

                {/* 전화번호 */}
                <label className="text-[17px] font-pretendard font-bold leading-[22px] mb-2 text-[#285100]">
                    전화번호
                </label>
                <input
                    type="tel"
                    className="flex h-[48px] w-full px-5 py-4 rounded-[20px] border border-gray-300 bg-[rgba(255,255,255,0.54)] font-pretendard text-[15px] font-normal leading-[20px] text-[#285100] focus:outline-none focus:ring-2 focus:ring-[#A7C957] mb-6"
                />

                {/* 카카오 로그인 */}
                <label className="text-[17px] font-pretendard font-bold leading-[22px] mb-3 text-[#285100]">
                    카카오 로그인
                </label>
                <button
                    onClick={() => alert("카카오 로그인 실행")}
                    className="flex w-[209px] h-[48px] px-[17px] pr-[19px] py-[14px] justify-center items-start gap-[16px] flex-shrink-0 rounded-[20px] bg-[#F6E550] font-pretendard font-bold text-[15px] text-black shadow"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                        <path
                            d="M5.67068 19.226L6.45607 16.4182C6.50641 16.2382 6.40492 16.05 6.22976 15.9848C1.28226 14.1438 0.730923 10.1122 1.08737 8.29172C1.45126 6.06158 4.37087 0.449832 13.0959 1.04374C21.2836 1.60108 23.467 8.29169 22.9211 10.522C21.5663 16.0571 14.8317 17.196 10.9958 17.2121C10.9401 17.2123 10.8868 17.2255 10.8372 17.2508L6.16996 19.6344C5.89665 19.774 5.58801 19.5215 5.67068 19.226Z"
                            fill="#202024"
                            stroke="#202024"
                            strokeWidth="1.76066"
                        />
                    </svg>
                    카카오계정 로그인
                </button>
            </div>
        </div>
    );
};

export default LoginModal;
