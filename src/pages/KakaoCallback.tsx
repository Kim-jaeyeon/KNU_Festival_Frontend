import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

const KakaoCallback: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const code = new URLSearchParams(location.search).get("code");

        if (code) {
            (async () => {
                try {
                    // LoginModal에서 저장한 값 꺼내오기
                    const nickname = localStorage.getItem("nickname") ?? undefined;
                    const phone = localStorage.getItem("phone") ?? undefined;

                    const result = await login(code, nickname, phone);

                    localStorage.setItem("accessToken", result.data.accessToken);
                    localStorage.setItem("refreshToken", result.data.refreshToken);

                    // 임시 저장한 값 지우기
                    localStorage.removeItem("nickname");
                    localStorage.removeItem("phone");

                    navigate("/"); // 로그인 성공 후 메인으로 이동
                } catch (err) {
                    console.error("로그인 실패:", err);
                }
            })();
        }
    }, [location, navigate]);

    return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;
