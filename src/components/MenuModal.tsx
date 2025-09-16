import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onLoginClick: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onLoginClick,
}) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

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

  const handleLoginClick = () => {
    handleClose(() => {
      onLoginClick();
    });
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
    if (isOpen) {
      setShouldRender(true);
      setIsAnimatingOut(false);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <>
      {/* ✅ 배경 (backdrop) */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={() => handleClose()}
      />

      {/* 메뉴 모달 */}
      <div
        ref={modalRef}
        className={`absolute top-12 right-4 w-56 rounded-2xl shadow-lg z-50 border border-gray-200 transform transition-all duration-100 ease-out ${
          isAnimatingOut 
            ? 'opacity-0 scale-95 translate-y-2 pointer-events-none' 
            : 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
        }`}
        style={{ 
          backgroundColor: '#FFFAE0',
          animation: isAnimatingOut ? 'modalSlideOut 0.1s ease-in forwards' : 'modalSlideIn 0.2s ease-out forwards',
          transformOrigin: 'top right',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}

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
                <div className="text-black text-base font-normal">게스트</div>
                <button
                  onClick={handleLoginClick}
                  className="text-black text-sm hover:text-[#285100]"
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuModal;
