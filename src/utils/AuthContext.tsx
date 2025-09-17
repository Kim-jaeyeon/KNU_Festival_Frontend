import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  accessToken: string | null;
  nickname: string | null;
  setAuth: (token: string, nickname?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  nickname: null,
  setAuth: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accessToken, setToken] = useState<string | null>(null);
  const [nickname, setNickname] = useState<string | null>(null);

  // 새로고침 후 세션에서 초기값 가져오기
  useEffect(() => {
    const storedToken = sessionStorage.getItem("accessToken");
    const storedNickname = sessionStorage.getItem("nickname");
    if (storedToken) setToken(storedToken);
    if (storedNickname) setNickname(storedNickname);
  }, []);

  const setAuth = (token: string, name?: string) => {
    setToken(token);
    setNickname(name || null);
    sessionStorage.setItem("accessToken", token);
    if (name) sessionStorage.setItem("nickname", name);
  };

  const logout = () => {
    setToken(null);
    setNickname(null);
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("nickname");
  };

  return (
    <AuthContext.Provider value={{ accessToken, nickname, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
