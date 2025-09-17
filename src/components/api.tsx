import axios from "axios";

const api = axios.create({
  baseURL: "http://34.47.70.96:8080/api", // 백엔드 주소
});

// 요청 인터셉터: accessToken 붙이기
api.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: accessToken 만료 처리
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 Unauthorized & 재시도 안 했을 때
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("리프레시 토큰 없음");

        // refresh API 요청
        const res = await axios.post(
          "http://34.47.70.96:8080/api/auth/reissue",
          {
            refreshToken,
          }
        );

        const newAccessToken = res.data?.data?.accessToken;
        if (!newAccessToken) throw new Error("새 토큰 없음");

        // 새 accessToken 저장
        sessionStorage.setItem("accessToken", newAccessToken);

        // Authorization 헤더 업데이트 후 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        console.error("토큰 갱신 실패:", err);
        // 로그아웃 처리
        sessionStorage.clear();
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
