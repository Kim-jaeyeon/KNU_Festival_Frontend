import axios from "axios";

export interface KakaoLoginBody {
  code: string;
  nickname?: string;
  phone?: string;
}

export interface KakaoLoginResponse {
  code: number;
  message: string;
  data?: {
    accessToken: string;
    // refreshToken은 서버에서 HttpOnly Cookie로 설정
  };
}

export const kakaoLogin = async (body: KakaoLoginBody) => {
  try {
    const res = await axios.post<KakaoLoginResponse>(
      "https://api.knu2025festival.com/api/auth/login",
      body,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // 중요: 서버가 HttpOnly Cookie로 refreshToken 설정 가능
      }
    );

    if (res.data.code === 0 && res.data.data) {
      return res.data.data; // accessToken만 반환
    }

    throw new Error(res.data.message || "로그인 실패");
  } catch (err: any) {
    console.error("kakaoLogin 에러:", err.response?.data || err.message);
    throw err;
  }
};
