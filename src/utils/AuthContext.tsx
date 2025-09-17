import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  accessToken: string | null;
  nickname: string | null;
  setAuth: (token: string, name?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  accessToken: null,
  nickname: null,
  setAuth: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // sessionStorage에서 lazy load
  const [accessToken, setToken] = useState<string | null>(() => sessionStorage.getItem("accessToken"));
  const [nickname, setNickname] = useState<string | null>(() => sessionStorage.getItem("nickname") || null);

  const setAuth = (token: string, name?: string) => {
    setToken(token);
    setNickname(name || null);
    sessionStorage.setItem("accessToken", token);
    sessionStorage.setItem("nickname", name || "");
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
