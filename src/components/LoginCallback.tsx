import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { kakaoLogin } from "./LoginModal";

const LoginCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const nickname = sessionStorage.getItem("nickname") || undefined;
    const phone = sessionStorage.getItem("phone") || undefined;

    if (!code) {
      navigate("/");
      return;
    }

    // 내부에서 async 함수 정의
    const login = async () => {
      try {
        const data = await kakaoLogin({ code, nickname, phone });
        sessionStorage.setItem("accessToken", data.accessToken);
        sessionStorage.setItem("refreshToken", data.refreshToken);
        navigate("/"); // 로그인 성공 시 홈으로 이동
      } catch (err) {
        console.error(err);
        navigate("/"); // 실패 시 홈
      }
    };

    login(); // async 함수 호출
  }, [searchParams, navigate]);

  return <div>로그인 처리 중...</div>;
};

export default LoginCallback;
