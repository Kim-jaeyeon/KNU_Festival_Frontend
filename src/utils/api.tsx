import axios from "axios";
import { getAccessToken, setAccessToken, removeAccessToken } from "./auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // 쿠키 전송
});

// 요청 시 Authorization 헤더 자동 첨부
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
        // 쿠키 기반 refreshToken 재발급
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/reissue`,
          {},
          { withCredentials: true }
        );

        const newAccessToken = response.data.data.accessToken;
        if (newAccessToken) setAccessToken(newAccessToken);

        // 원래 요청에 새 토큰 적용 후 재전송
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch {
        removeAccessToken();
        window.location.href = "/login"; // 로그인 페이지로
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

export default api;
