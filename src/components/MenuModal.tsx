import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import axios from "axios";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const { nickname, logout, setAuth } = useAuth();

  const menuItems = [
    { label: "홈", path: "/" },
    { label: "타임테이블", path: "/timetable" },
    { label: "부스 추천", path: "/boothRecommendLoading" },
    { label: "사진 페스티벌", path: "/photo-festival" },
    { label: "부스 및 푸드트럭", path: "/booth-foodtruck/대운동장" },
    { label: "FAQ", path: "/faq" },
    { label: "방명록", path: "/guestbook" },
  ];

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    handleClose();
  };

  // ① 카카오 로그인 API 요청
  const handleLoginClick = async () => {
    try {
      const res = await axios.get("/api/auth/kakao-login-url"); 
      const { code } = res.data; // 서버에서 받은 카카오 OAuth code 예시

      // ② 서버에 code 전달하여 accessToken + nickname 받기
      const tokenRes = await axios.post(
        "/api/auth/kakao-callback",
        { code },
        { withCredentials: true }
      );

      const { accessToken, nickname: kakaoNickname } = tokenRes.data.data;

      // ③ context + sessionStorage 즉시 업데이트
      setAuth(accessToken, kakaoNickname);

      // ④ modal 닫기
      handleClose();
    } catch (err) {
      console.error("카카오 로그인 실패:", err);
    }
  };

  const handleLogoutClick = () => {
    logout();
    handleClose();
    navigate("/");
  };

  const handleClose = (callback?: () => void) => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setShouldRender(false);
      setIsAnimatingOut(false);
      onClose();
      if (callback) callback();
    }, 100);
  };

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={() => handleClose()} />
      <div
        ref={modalRef}
        className={`absolute top-12 right-4 w-56 rounded-2xl shadow-lg z-50 border border-gray-200 transform transition-all duration-100 ease-out ${
          isAnimatingOut
            ? "opacity-0 scale-95 translate-y-2 pointer-events-none"
            : "opacity-100 scale-100 translate-y-0 pointer-events-auto"
        }`}
        style={{ backgroundColor: "#FFFAE0", transformOrigin: "top right" }}
      >
        <div className="p-3">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuItemClick(item.path)}
                className="w-full text-center text-black text-base font-normal py-3 rounded-lg hover:bg-[#9CAA2CB8]"
              >
                {item.label}
              </button>
            ))}
            <div className="w-full h-px bg-gray-300 my-4" />
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-2xl">👤</span>
              </div>
              <div className="text-center space-y-1">
                <div className="text-black text-base font-normal">{nickname || "게스트"}</div>
                {nickname ? (
                  <button
                    onClick={handleLogoutClick}
                    className="text-black text-sm hover:text-[#285100]"
                  >
                    로그아웃
                  </button>
                ) : (
                  <button
                    onClick={handleLoginClick}
                    className="text-black text-sm hover:text-[#285100]"
                  >
                    로그인
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
