import React, { useState, useEffect, useRef } from 'react';
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

const PhotoFestival: React.FC = () => {
  const navigate = useNavigate();
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [isUploadButtonVisible, setIsUploadButtonVisible] = useState(false);
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

  // 문구와 카드들이 순차적으로 나타나도록 하는 효과
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
  }, [posts]);

  const handleLike = (id: number) => {
    setPosts(posts.map(post => 
      post.id === id 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

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
            <div
              key={post.id}
              className={`mb-4 bg-white/60 rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-out ${
                visibleCards.has(post.id) 
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
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center space-x-1 text-red-500 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="text-xs">{post.likes}</span>
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[3/4]">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <div className="p-3 pt-2">
                <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                  {post.caption}
                </p>
              </div>
            </div>
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
    </div>
  );
};

export default PhotoFestival;
