// src/utils/api.ts
import axios from "axios";
import { getAccessToken, setAccessToken, removeAccessToken } from "./auth.tsx";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // refreshToken HttpOnly 쿠키 전송
});

// 요청 시 자동 Authorization 헤더 추가
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers!["Authorization"] = `Bearer ${token}`;
  return config;
});

// 응답 에러 처리: 401 → refreshToken으로 accessToken 재발급
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/reissue`,
          {},
          { withCredentials: true }
        );
        const newAccessToken = response.data.data.accessToken;
        setAccessToken(newAccessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch {
        removeAccessToken(); // 재발급 실패 → 로그아웃 처리
        window.location.href = "/login"; // 로그인 페이지 이동
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

export default api;
