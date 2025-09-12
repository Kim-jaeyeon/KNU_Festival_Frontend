import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuModal from './MenuModal';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // 페이지별 제목 매핑
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return '';
      case '/booth-recommend':
        return '부스 추천';
      case '/booth-foodtruck':
        return '부스 & 푸드트럭';
      case '/photo-festival':
        return '사진 페스티벌';
      case '/timetable':
        return '타임 테이블';
      case '/faq':
        return 'FAQ & 방명록';
      case '/guestbook':
        return 'FAQ & 방명록';
      case '/guestbook/write':
        return '방명록 작성하기';
      default:
        return '백령대동제';
    }
  };

  const handleBackClick = () => {
    if (location.pathname === '/') {
      // 홈 페이지에서는 아무 동작 안함
      return;
    }
    navigate(-1); // 이전 페이지로 이동
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    // 애니메이션을 위해 즉시 닫지 않고 MenuModal에서 처리
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[430px] mx-auto px-4">
        {/* 헤더 */}
        <div className="flex items-center justify-between py-4">
          <button
            className="text-[#285100]"
            onClick={handleBackClick}
          >
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.75 17.5L22.4583 24.2083L20.4167 26.25L11.6667 17.5L20.4167 8.75L22.4583 10.7917L15.75 17.5Z" fill="#285100" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-[#285100]" style={{ fontFamily: 'Hahmlet, serif' }}>
            {getPageTitle()}
          </h1>
          <button
            ref={menuButtonRef}
            className="text-[#285100]"
            onClick={handleMenuClick}
          >
            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.05234 29.092C7.18802 31.1667 10.6253 31.1667 17.5 31.1667C24.3746 31.1667 27.812 31.1667 29.9476 29.092C32.0833 27.0174 32.0833 23.6783 32.0833 17C32.0833 10.3218 32.0833 6.98269 29.9476 4.90803C27.812 2.83337 24.3746 2.83337 17.5 2.83337C10.6253 2.83337 7.18802 2.83337 5.05234 4.90803C2.91666 6.98269 2.91666 10.3218 2.91666 17C2.91666 23.6783 2.91666 27.0174 5.05234 29.092ZM27.3437 22.6667C27.3437 23.2535 26.8541 23.7292 26.25 23.7292H8.75C8.14594 23.7292 7.65625 23.2535 7.65625 22.6667C7.65625 22.0799 8.14594 21.6042 8.75 21.6042H26.25C26.8541 21.6042 27.3437 22.0799 27.3437 22.6667ZM26.25 18.0625C26.8541 18.0625 27.3437 17.5868 27.3437 17C27.3437 16.4132 26.8541 15.9375 26.25 15.9375H8.75C8.14594 15.9375 7.65625 16.4132 7.65625 17C7.65625 17.5868 8.14594 18.0625 8.75 18.0625H26.25ZM27.3437 11.3334C27.3437 11.9202 26.8541 12.3959 26.25 12.3959H8.75C8.14594 12.3959 7.65625 11.9202 7.65625 11.3334C7.65625 10.7466 8.14594 10.2709 8.75 10.2709H26.25C26.8541 10.2709 27.3437 10.7466 27.3437 11.3334Z" fill="#285100" />
            </svg>
          </button>
        </div>
      </div>

      {/* 메뉴 모달 */}
      <MenuModal isOpen={isMenuOpen} onClose={handleCloseMenu} buttonRef={menuButtonRef} />
    </header>
  );
};

export default Header;