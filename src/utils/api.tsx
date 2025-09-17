import axios from "axios";
import { getAccessToken, setAccessToken, removeAccessToken } from "./auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// 요청 시 토큰 자동 첨부
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) config.headers!["Authorization"] = `Bearer ${token}`;
  return config;
});

// 응답 에러 처리 (401)
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry && !originalRequest.url.includes("/auth/login")) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/auth/reissue`,
          {},
          { withCredentials: true }
        );

        const newToken = response.data.data.accessToken;
        if (newToken) {
          setAccessToken(newToken);
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return axios(originalRequest);
        }

        removeAccessToken();
        window.location.href = "/login";
        return Promise.reject(err);
      } catch {
        removeAccessToken();
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

export default api;
