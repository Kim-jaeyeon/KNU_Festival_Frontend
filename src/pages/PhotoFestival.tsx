import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';

interface PhotoPost {
  id: number;
  username: string;
  uploadTime: string;
  likes: number;
  image: string;
  caption: string;
  height: number; // 랜덤 높이를 위한 속성
}

interface PhotoCardProps {
  post: PhotoPost;
  isVisible: boolean;
  onLike: (id: number) => void;
  onDelete: (id: number) => void;
  showDeleteMenu: number | null;
  onToggleDeleteMenu: (id: number) => void;
}

const PhotoCard = memo<PhotoCardProps>(({ 
  post, 
  isVisible, 
  onLike, 
  onDelete, 
  showDeleteMenu, 
  onToggleDeleteMenu 
}) => {
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);
  const [shouldShowMenu, setShouldShowMenu] = useState(false);

  const handleToggleMenu = () => {
    if (showDeleteMenu === post.id) {
      // 메뉴가 열려있으면 닫기 애니메이션 시작
      setIsMenuAnimating(true);
      setTimeout(() => {
        onToggleDeleteMenu(post.id);
        setShouldShowMenu(false);
        setIsMenuAnimating(false);
      }, 200);
    } else {
      // 메뉴가 닫혀있으면 열기 애니메이션 시작
      setShouldShowMenu(true);
      onToggleDeleteMenu(post.id);
    }
  };

  // 메뉴가 열릴 때 애니메이션을 위해 약간의 지연
  useEffect(() => {
    if (showDeleteMenu === post.id && shouldShowMenu) {
      const timer = setTimeout(() => {
        setIsMenuAnimating(false);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [showDeleteMenu, post.id, shouldShowMenu]);

  return (
    <div
      className={`mb-4 bg-white/60 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      {/* User Info */}
      <div className="p-3 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              {post.username.charAt(0)}
            </div>
            <div className="ml-2">
              <p className="text-[13px] font-semibold text-gray-800">{post.username}</p>
              <p className="text-[10px] text-gray-500">{post.uploadTime}</p>
            </div>
          </div>
          <div className="relative -mr-1">
            <button
              data-menu-button
              onClick={handleToggleMenu}
              className={`p-1 transition-colors ${
                showDeleteMenu === post.id 
                  ? 'text-gray-600 bg-gray-100 rounded-full' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
            
            {/* 삭제 메뉴 */}
            {showDeleteMenu === post.id && (
              <div 
                data-delete-menu 
                className={`absolute -right-2 top-6 bg-white rounded-lg shadow-lg border border-gray-200 py-2 px-3 z-10 min-w-[80px] transition-all duration-200 ease-out ${
                  isMenuAnimating 
                    ? 'opacity-0 translate-y-[-8px] scale-95' 
                    : 'opacity-100 translate-y-0 scale-100'
                }`}
                style={{
                  animation: shouldShowMenu && !isMenuAnimating 
                    ? 'fadeInSlide 0.2s ease-out forwards' 
                    : undefined
                }}
              >
                <button
                  onClick={() => onDelete(post.id)}
                  className="w-full text-center text-red-600 hover:bg-red-50 text-sm font-medium py-1 px-2 rounded transition-colors"
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-[3/4]">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full h-full object-cover"
        />
        {/* 좋아요 버튼 - 이미지 우측하단 */}
        <button
          onClick={() => onLike(post.id)}
          className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center space-x-1 text-white hover:bg-black/70 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span className="text-xs font-medium">{post.likes}</span>
        </button>
      </div>

      {/* Caption */}
      <div className="p-3 pt-2">
        <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
          {post.caption}
        </p>
      </div>
    </div>
  );
});

const PhotoFestival: React.FC = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isUploadButtonVisible, setIsUploadButtonVisible] = useState(false);
  const [showDeleteMenu, setShowDeleteMenu] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<PhotoPost[]>([
    {
      id: 1,
      username: '백령이',
      uploadTime: '1시간 전 업로드',
      likes: 100,
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=400&fit=crop',
      caption: '축제의 주인공은 명박이이다!',
      height: 320
    },
    {
      id: 2,
      username: '만만이',
      uploadTime: '1시간 전 업로드',
      likes: 80,
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=300&h=400&fit=crop',
      caption: '인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 이 긴 텍스트는 카드의 높이를 늘려서 매직 레이아웃을 더 잘 보여줍니다.',
      height: 420
    },
    {
      id: 3,
      username: '백백이',
      uploadTime: '1시간 전 업로드',
      likes: 30,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=300&fit=crop',
      caption: '짧은 캡션',
      height: 220
    },
    {
      id: 4,
      username: '령령이',
      uploadTime: '1시간 전 업로드',
      likes: 10,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=600&fit=crop',
      caption: '인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 이 카드는 더 긴 텍스트를 가지고 있어서 높이가 더 높아집니다.',
      height: 520
    },
    {
      id: 5,
      username: '축제러버',
      uploadTime: '2시간 전 업로드',
      likes: 150,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=350&fit=crop',
      caption: '축제 분위기가 정말 최고야! 🎉',
      height: 270
    },
    {
      id: 6,
      username: '사진작가',
      uploadTime: '3시간 전 업로드',
      likes: 75,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=600&fit=crop',
      caption: '아름다운 자연 속에서의 축제, 정말 멋진 순간이었어요. 이 사진은 정말 아름답고 특별한 순간을 담고 있습니다.',
      height: 370
    },
    {
      id: 7,
      username: '축제매니아',
      uploadTime: '4시간 전 업로드',
      likes: 200,
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop',
      caption: '축제의 열기!',
      height: 320
    },
    {
      id: 8,
      username: '사진러버',
      uploadTime: '5시간 전 업로드',
      likes: 90,
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=550&fit=crop',
      caption: '이번 축제는 정말 특별했어요. 모든 순간이 소중하고 아름다웠습니다. 친구들과 함께한 시간이 정말 행복했습니다.',
      height: 470
    }
  ]);

  // 페이지 로드 시에만 애니메이션 실행
  useEffect(() => {
    // 스크롤 위치를 맨 위로 초기화
    window.scrollTo(0, 0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    
    // 상태 초기화
    setVisibleCards(new Set());
    setIsDescriptionVisible(false);
    setIsUploadButtonVisible(false);
    setShowDeleteMenu(null);

    // 먼저 문구가 나타남
    const descriptionTimer = setTimeout(() => {
      setIsDescriptionVisible(true);
    }, 200);

    // 그 다음 카드들이 순차적으로 나타남
    const cardsTimer = setTimeout(() => {
      posts.forEach((post, index) => {
        setTimeout(() => {
          setVisibleCards(prev => new Set([...prev, post.id]));
        }, index * 150); // 각 카드마다 150ms 지연
      });
    }, 600); // 문구가 나타난 후 400ms 후 시작

    // 마지막으로 업로드 버튼이 나타남
    const uploadButtonTimer = setTimeout(() => {
      setIsUploadButtonVisible(true);
    }, 1200); // 카드들이 나타나기 시작한 후 600ms 후

    return () => {
      clearTimeout(descriptionTimer);
      clearTimeout(cardsTimer);
      clearTimeout(uploadButtonTimer);
    };
  }, []); // posts 의존성 제거

  // 메뉴 외부 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showDeleteMenu !== null) {
        // 클릭된 요소가 메뉴 버튼이나 메뉴 자체가 아닌 경우에만 닫기
        const target = event.target as HTMLElement;
        const isMenuButton = target.closest('[data-menu-button]');
        const isMenu = target.closest('[data-delete-menu]');
        
        if (!isMenuButton && !isMenu) {
          setShowDeleteMenu(null);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDeleteMenu]);

  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        setShowScrollTop(scrollTop > 300); // 300px 이상 스크롤하면 버튼 표시
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // 최상단으로 스크롤
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLike = useCallback((id: number) => {
    setPosts(prevPosts => prevPosts.map(post => 
      post.id === id 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  }, []);

  const handleDelete = useCallback((id: number) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    setShowDeleteMenu(null);
  }, []);

  const toggleDeleteMenu = useCallback((id: number) => {
    if (showDeleteMenu === id) {
      setShowDeleteMenu(null);
    } else {
      setShowDeleteMenu(id);
    }
  }, [showDeleteMenu]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Description */}
      <div className={`px-4 py-4 text-center flex-shrink-0 transition-all duration-800 ease-out ${
        isDescriptionVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}>
      
        <p className="text-sm  text-gray-700 leading-relaxed">
          맘에 드는 사진을 두 번 터치하여 <br /><span className="text-[#76A1EA] text-lg font-semibold">백령대동제의 베스트 사진</span>을 투표해주세요!
        </p>
      </div>

      {/* Pinterest-style Masonry Layout - 스크롤 가능한 영역 */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4 pb-20">
        <Masonry
          breakpointCols={2}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {posts.map((post) => (
            <PhotoCard
              key={post.id}
              post={post}
              isVisible={visibleCards.has(post.id)}
              onLike={handleLike}
              onDelete={handleDelete}
              showDeleteMenu={showDeleteMenu}
              onToggleDeleteMenu={toggleDeleteMenu}
            />
          ))}
        </Masonry>
      </div>

      {/* Upload Button */}
      <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-[80%] max-w-[344px] transition-all duration-700 ease-out ${
        isUploadButtonVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}>
        <button 
          onClick={() => navigate('/photo-upload')}
          className="w-full bg-white/80 rounded-3xl px-6 py-4 shadow-2xl flex items-center justify-center space-x-3 hover:shadow-3xl transition-all duration-300"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-700 font-semibold">사진 업로드하기</span>
        </button>
      </div>

      {/* 최상단으로 이동 버튼 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-25 right-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
        >
          <svg 
            className="w-6 h-6 text-gray-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default PhotoFestival;
