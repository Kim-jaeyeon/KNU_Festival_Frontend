import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoLogin } from "./kakaologin";

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code) {
      alert("인가 코드가 없습니다.");
      navigate("/");
      return;
    }

    const nickname = sessionStorage.getItem("nickname") || "";
    const phone = sessionStorage.getItem("phone") || "";

    kakaoLogin({ code, nickname, phone })
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

        sessionStorage.removeItem("nickname");
        sessionStorage.removeItem("phone");

        navigate("/");
      })
      .catch((err) => {
        console.error("로그인 실패:", err);
        alert("로그인에 실패했습니다.");
        navigate("/");
      });
  }, [navigate]);

  return <div>로그인 중입니다...</div>;
};

export default KakaoCallback;
