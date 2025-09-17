import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { kakaoLogin } from "./kakaologin"; // 수정된 kakaologin.ts 함수 사용

const LoginCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const nickname = sessionStorage.getItem("nickname");
    const phone = sessionStorage.getItem("phone");

    // 인가 코드, 닉네임, 전화번호가 모두 있는지 확인
    if (!code || !nickname || !phone) {
      toast.error("로그인 정보가 부족합니다.");
      navigate("/");
      return;
    }

    // 서버로 POST 요청 보내기
    kakaoLogin({ code, nickname, phone })
      .then((data) => {
        // 응답으로 받은 토큰을 localStorage에 저장
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        // 세션에 저장된 임시 데이터 삭제
        sessionStorage.removeItem("nickname");
        sessionStorage.removeItem("phone");

        toast.success("로그인 성공!");
        navigate("/");
      })
      .catch((err) => {
        console.error("Login POST 에러:", err);
        toast.error("로그인에 실패했습니다.");
        // 로그인 실패 시 메인 페이지로 이동하거나 에러 페이지로 이동
        navigate("/");
      });
  }, [searchParams, navigate]);

  return <div className="flex justify-center items-center h-screen">로그인 처리 중...</div>;
};

export default LoginCallback;