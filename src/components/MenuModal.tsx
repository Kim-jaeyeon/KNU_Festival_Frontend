import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, buttonRef }) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const menuItems = [
    { label: '홈', path: '/' },
    { label: '타임테이블', path: '/timetable' },
    { label: '부스 추천', path: '/booth-recommend' },
    { label: '사진 페스티벌', path: '/photo-festival' },
    { label: '부스 및 푸드트럭', path: '/booth-foodtruck' },
    { label: 'FAQ', path: '/faq' },
    { label: '방명록', path: '/guestbook' },
  ];

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    handleClose();
  };

  const handleLoginClick = () => {
    console.log('로그인 클릭');
    handleClose();
  };

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setShouldRender(false);
      setIsAnimatingOut(false);
      onClose();
    }, 100); // 200ms → 100ms로 속도 증가
  };

  // isOpen이 true가 될 때만 렌더링 시작
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsAnimatingOut(false);
    }
  }, [isOpen]);

  // 모달 외부 클릭 시 닫기 (햄버거 버튼 포함)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current && 
        !modalRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    // 햄버거 버튼 클릭 시 닫기
    const handleButtonClick = (event: MouseEvent) => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('mousedown', handleButtonClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleButtonClick);
    };
  }, [isOpen, onClose, buttonRef]);

  // 렌더링하지 않을 때는 아무것도 반환하지 않음
  if (!shouldRender) return null;

  return (
    <>
      {/* 작은 메뉴 모달 */}
      <div 
        ref={modalRef}
        className={`absolute top-12 right-4 w-72 rounded-2xl shadow-lg z-50 border border-gray-200 transform transition-all duration-100 ease-out ${
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
          {/* 메뉴 항목들 */}
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuItemClick(item.path)}
                className="w-full text-center text-black text-base font-normal py-3 rounded-lg transition-all duration-200 ease-out transform hover:scale-105 hover:bg-[#9CAA2CB8] hover:bg-opacity-0 hover:shadow-md hover:-translate-y-0.5 active:scale-95 menu-item-hover"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: `slideInFromRight 0.3s ease-out forwards`
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* 구분선 */}
            <div className="w-full h-px bg-gray-300 my-4" />
            
            {/* 사용자 프로필 영역 */}
            <div 
              className="flex flex-col items-center space-y-4 transition-all duration-300 ease-out transform"
              style={{
                animationDelay: `${menuItems.length * 50 + 100}ms`,
                animation: `fadeInUp 0.4s ease-out forwards`
              }}
            >
              {/* 프로필 이미지 */}
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center transition-all duration-200 ease-out hover:scale-110 hover:shadow-lg">
                <span className="text-gray-500 text-2xl">👤</span>
              </div>
              
              {/* 사용자 정보 */}
              <div className="text-center space-y-1">
                <div className="text-black text-base font-normal">게스트</div>
                <button
                  onClick={handleLoginClick}
                  className="text-black text-sm hover:text-[#285100] transition-all duration-200 ease-out hover:scale-105 active:scale-95"
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