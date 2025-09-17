import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { kakaoLogin } from "./kakaologin";
import { setAccessToken } from "../utils/auth";

const LoginCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const nickname = sessionStorage.getItem("nickname");
    const phone = sessionStorage.getItem("phone");

    if (!code || !nickname || !phone) {
      toast.error("로그인 정보가 부족합니다.");
      navigate("/");
      return;
    }

    kakaoLogin({ code, nickname, phone })
      .then((data) => {
        setAccessToken(data.accessToken); // accessToken만 저장
        sessionStorage.removeItem("nickname");
        sessionStorage.removeItem("phone");

        toast.success("로그인 성공!");
        navigate("/"); // 홈 이동
      })
      .catch((err) => {
        console.error("Login POST 에러:", err);
        toast.error("로그인에 실패했습니다.");
        navigate("/");
      });
  }, [searchParams, navigate]);

  return <div className="flex justify-center items-center h-screen">로그인 처리 중...</div>;
};

export default LoginCallback;
