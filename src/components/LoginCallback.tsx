import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { kakaoLogin } from "./kakaologin";
import { useAuth } from "../utils/AuthContext";

const LoginCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

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
        setAuth(data.accessToken, data.nickname);
        sessionStorage.setItem("accessToken", data.accessToken); // ← 꼭 갱신
        sessionStorage.removeItem("phone");
        toast.success("로그인 성공!");
        navigate("/");
      })
      .catch((err) => {
        console.error("Login POST 에러:", err);
        toast.error("로그인에 실패했습니다.");
        navigate("/");
      });
  }, [searchParams, navigate, setAuth]);

  return <div className="flex justify-center items-center h-screen">로그인 처리 중...</div>;
};

export default LoginCallback;
