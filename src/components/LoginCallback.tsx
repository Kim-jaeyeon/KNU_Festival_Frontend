// LoginCallback.tsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const LoginCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      axios
        .get(`http://34.47.70.96:8080/api/auth/login?code=${code}`)
        .then((res) => {
          if (res.data.code === 0) {
            const { accessToken, refreshToken } = res.data.data;

            // ✅ 토큰 저장
            sessionStorage.setItem("accessToken", accessToken);
            sessionStorage.setItem("refreshToken", refreshToken);

            // 닉네임 & 전화번호도 같이 저장 (이미 하고 계심)
            const nickname = res.data.data.nickname;
            const phone = res.data.data.phone;
            if (nickname) sessionStorage.setItem("nickname", nickname);
            if (phone) sessionStorage.setItem("phone", phone);

            // 메인 페이지나 원하는 페이지로 이동
            navigate("/");
          } else {
            alert(res.data.message || "로그인 실패");
            navigate("/login");
          }
        })
        .catch((err) => {
          if (err.response) {
            console.error(
              "서버 응답 에러:",
              err.response.status,
              err.response.data
            );
          } else if (err.request) {
            console.error("요청 보냈지만 응답 없음:", err.request);
          } else {
            console.error("설정 에러:", err.message);
          }
          alert("로그인 처리 중 오류 발생");
          navigate("/login");
        });
    }
  }, [searchParams, navigate]);

  return <div>로그인 처리중...</div>;
};

export default LoginCallback;
