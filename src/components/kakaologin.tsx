import axios from "axios";

export interface KakaoLoginBody {
  code: string;
  nickname?: string;
  phone?: string;
}

export const kakaoLogin = async (body: KakaoLoginBody) => {
  try {
    const res = await axios.post(
      "https://api.knu2025festival.com/api/auth/login",
      body,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // 서버가 HttpOnly Cookie로 refreshToken 설정 가능
      }
    );

    // 헤더에서 accessToken 꺼내기
    const accessToken =
      res.headers["accesstoken"] ||
      res.headers["authorization"] ||
      (res.data?.data?.accessToken ?? null);

      const nickname = res.data?.nickname;

    if (res.data.code === 0 && accessToken) {
      return { accessToken, nickname  }; // 오직 accessToken만 반환
    }

    throw new Error(res.data.message || "로그인 실패");
  } catch (err: any) {
    console.error("kakaoLogin 에러:", err.response?.data || err.message);
    throw err;
  }
};
