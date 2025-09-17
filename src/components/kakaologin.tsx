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

// 이 함수가 POST 요청을 담당합니다.
export const kakaoLogin = async (body: KakaoLoginBody) => {
  try {
    const res = await axios.post<KakaoLoginResponse>(
      "https://api.knu2025festival.com/api/auth/login", // 로그인 API URL 통일
      body,
      { headers: { "Content-Type": "application/json" } }
    );

    // 서버 응답 코드가 0이면 성공으로 간주
    if (res.data.code === 0 && res.data.data) {
      return res.data.data;
    }
    
    // 서버 응답이 실패일 경우 에러 메시지 반환
    throw new Error(res.data.message || "로그인 실패");
  } catch (err: any) {
    console.error("kakaoLogin 에러:", err.response?.data || err.message);
    throw err;
  }
};