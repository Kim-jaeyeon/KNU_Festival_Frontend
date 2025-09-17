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

    // 'code'가 없으면 에러 처리 후 종료합니다.
    if (!code) {
      toast.error("로그인 정보가 부족합니다.");
      navigate("/");
      return;
    }

    // kakaoLogin 함수는 'code'만 보내고, 응답으로 'accessToken'과 'nickname'을 받아와야 합니다.
    kakaoLogin({ code })
      .then((data) => {
        // 'data' 객체에 서버에서 보낸 'accessToken'과 'nickname'이 모두 포함되어야 합니다.
        if (data.accessToken && data.nickname) {
          setAuth(data.accessToken, data.nickname); // 서버에서 받은 닉네임으로 AuthContext 업데이트
          toast.success("로그인 성공!");
        } else {
          toast.error("로그인에 실패했습니다.");
        }
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