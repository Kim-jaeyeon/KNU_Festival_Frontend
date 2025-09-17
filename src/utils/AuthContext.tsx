import React, { createContext, useContext, useState } from "react";
import { getAccessToken, setAccessToken as setToken, removeAccessToken } from "../utils/auth";

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
  const [accessToken, setAccessTokenState] = useState<string | null>(getAccessToken());
  const [nickname, setNickname] = useState<string | null>(sessionStorage.getItem("nickname"));

  const setAuth = (token: string, nickname?: string) => {
    setToken(token);
    setAccessTokenState(token);
    if (nickname) {
      sessionStorage.setItem("nickname", nickname);
      setNickname(nickname);
    }
  };

  const logout = () => {
    removeAccessToken();
    setAccessTokenState(null);
    sessionStorage.removeItem("nickname");
    setNickname(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, nickname, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
