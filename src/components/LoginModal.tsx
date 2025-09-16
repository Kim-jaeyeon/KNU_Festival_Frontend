import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const KAKAO_REST_API_KEY = "bb6441364cea7deb9943a6234e8abd02";
const REDIRECT_URI = window.location.origin + "/login-callback"; // 프론트에서 처리할 콜백 경로

export interface KakaoLoginBody {
  code: string;
  nickname?: string;
  phone?: string;
}

export interface KakaoLoginResponse {
  code: number;
  message: string;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
}

export const kakaoLogin = async (body: KakaoLoginBody) => {
  const res = await axios.post<KakaoLoginResponse>(
    "http://34.47.70.96:8080/api/auth/login",
    body
  );
  if (res.data.code === 0 && res.data.data) return res.data.data;
  throw new Error(res.data.message || "로그인 실패");
};

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  if (!open) return null;

  const handleKakaoLogin = () => {
    if (!nickname) return toast.error("닉네임은 필수 입력값입니다.");
    if (!phone) return toast.error("전화번호는 필수 입력값입니다.");

    sessionStorage.setItem("nickname", nickname);
    sessionStorage.setItem("phone", phone);

    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  return (
    <div className="fixed inset-0 bg-[#4C4C4C47] z-40 flex items-center justify-center" onClick={onClose}>
      <div className="relative w-[279px] h-[434px] rounded-[15px] border border-gray-300 bg-[#EEF2DAE5] shadow-lg flex flex-col"
           onClick={(e) => e.stopPropagation()}
           style={{ paddingTop: "90px", paddingLeft: "35px", paddingRight: "35px", paddingBottom: "75px" }}>
        <button onClick={onClose} className="absolute top-3 right-3 text-lg font-bold text-[rgba(68,98,64,0.60)] hover:text-[#446240]">✕</button>
        <h2 className="absolute top-6 left-1/2 -translate-x-1/2 font-pretendard font-semibold text-[20px] leading-[32px] text-black">
          로그인하기
        </h2>

        <label className="text-[17px] font-pretendard font-bold leading-[22px] mb-2 text-[#285100]">닉네임</label>
        <input type="text" maxLength={5} value={nickname} onChange={(e) => setNickname(e.target.value)}
               className="flex h-[48px] w-full px-5 py-4 rounded-[20px] border border-gray-300 bg-[rgba(255,255,255,0.54)] text-[15px] font-normal text-[#285100] focus:outline-none focus:ring-2 focus:ring-[#A7C957] mb-4"
               placeholder="5글자 내로 입력" />

        <label className="text-[17px] font-pretendard font-bold leading-[22px] mb-2 text-[#285100]">전화번호</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
               className="flex h-[48px] w-full px-5 py-4 rounded-[20px] border border-gray-300 bg-[rgba(255,255,255,0.54)] text-[15px] font-normal text-[#285100] focus:outline-none focus:ring-2 focus:ring-[#A7C957] mb-6" />

        <button onClick={handleKakaoLogin}
                className="flex w-[209px] h-[48px] px-[17px] pr-[19px] py-[14px] justify-center items-start gap-[16px] flex-shrink-0 rounded-[20px] bg-[#F6E550] font-pretendard font-bold text-[15px] text-black shadow">
          카카오계정 로그인
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
