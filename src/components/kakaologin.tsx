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
    refreshToken: string;
  };
}

export const kakaoLogin = async (body: KakaoLoginBody) => {
  const res = await axios.post<KakaoLoginResponse>(
    "http://34.47.70.96:8080/api/auth/login",
    body
  );

  if (res.data.code === 0 && res.data.data) return res.data.data;
  throw new Error(res.data.message || "로그인 실패");
};
