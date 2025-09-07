import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TabNav from '../components/TabNav';
import FAQItem from '../components/FAQItem';

// FAQ 데이터
const FAQ_DATA = [
  {
    q: "공연 당일 우천 시에도 공연이 진행되나요?", 
    a: `인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 날카로우나 그림자는 든 거친 원대하고, 별과 아니다. 그림자는 풀이 가슴에 용기가 이는 소담스러운 위하여서. 끝에 이상 방지하는 이성은 꽃이 이것이다.`
  },
  { 
    q: "대동제 주점은 몇시까지 하나요?", 
    a: "인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 날카로우나 그림자는 든 거친 원대하고, 별과 아니다. 그림자는 풀이 가슴에 용기가 이는 소담스러운 위하여서. 끝에 이상 방지하는 이성은 꽃이 이것이다." 
  },
  { 
    q: "주문은 미리 예약하고 들어가나요?", 
    a: "일부 부스는 사전예약 운영. 부스별 안내 확인." 
  },
  {
    q: `주점은 미리 예약하고 들어가야하나요?
주점예약 안되어있으면 어디로 연락하죠?`, 
    a: "인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 날카로우나 그림자는 든 거친 원대하고, 별과 아니다. 그림자는 풀이 가슴에 용기가 이는 소담스러운 위하여서. 끝에 이상 방지하는 이성은 꽃이 이것이다."
  }
];

// 방명록 데이터
const GUESTBOOK_DATA = [
  {
    id: 1,
    author: "익명1",
    date: "9월 18일 09:41",
    content: "우는 별들을 이름자 어머니 가을 있습니다.",
    avatar: "👤"
  },
  {
    id: 2,
    author: "익명2", 
    date: "9월 18일 09:41",
    content: "우는 별들을 이름자 어머니 가을 있습니다.",
    avatar: "👤"
  },
  {
    id: 3,
    author: "익명3",
    date: "9월 17일 14:30", 
    content: "축제가 정말 기대됩니다!",
    avatar: "👤"
  }
];

const FAQAndGuestbook: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"faq" | "guestbook">("faq");
  const [currentPage, setCurrentPage] = useState(1);

  // URL에 따라 탭 설정 (URL 변경 시에도 업데이트)
  useEffect(() => {
    if (location.pathname === '/guestbook') {
      setActiveTab('guestbook');
    } else if (location.pathname === '/faq') {
      setActiveTab('faq');
    }
  }, [location.pathname]);

  const handleTabChange = (tab: "faq" | "guestbook") => {
    setActiveTab(tab);
  };

  const handleWriteGuestbook = () => {
    console.log('방명록 작성하기 클릭');
  };

  return (
    <div className="w-full min-h-screen">
      <main className="relative w-full min-h-screen">
        {/* 상단 spacer */}
        <div className="h-[40px] w-full pointer-events-none" aria-hidden />

        {/* TabNav */}
        <div className="flex justify-center mt-6 mb-[19px]">
          <div className="w-[353px] h-[50px] rounded-[40px] bg-white/80 flex items-center justify-center px-4">
            <TabNav value={activeTab} onChange={handleTabChange} />
          </div>
        </div>

        {/* 방명록 작성하기 버튼 (방명록 탭에서만 표시) */}
        {activeTab === "guestbook" && (
          <div className="flex justify-center mb-6">
            <button
              onClick={handleWriteGuestbook}
              className="w-[353px] h-[50px] rounded-[40px] border border-[#285100] text-[#285100] font-pretendard font-bold hover:bg-[#285100] hover:text-white transition-colors duration-200"
            >
              방명록 작성하기
            </button>
          </div>
        )}

        {/* 콘텐츠 영역 */}
        <section className="px-4 mt-6 pb-6">
          {activeTab === "faq" ? (
            /* FAQ 리스트 */
            <div className="space-y-4">
              {FAQ_DATA.map((item, index) => (
                <FAQItem key={index} question={item.q} answer={item.a} />
              ))}
            </div>
          ) : (
            /* 방명록 리스트 */
            <div className="space-y-4">
              {GUESTBOOK_DATA.map((comment) => (
                <div
                  key={comment.id}
                  className="w-full max-w-[353px] mx-auto rounded-[20px] bg-white/80 px-4 py-3 shadow-md"
                >
                  {/* 작성자 정보 */}
                  <div className="flex items-center gap-3 mb-2">
                    {/* 아바타 */}
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center text-sm">
                      {comment.avatar}
                    </div>
                    
                    {/* 사용자명과 날짜 */}
                    <div className="flex-1 flex justify-between items-center">
                      <span className="font-semibold text-gray-800 text-sm">
                        {comment.author}
                      </span>
                      <span className="text-xs text-gray-500">
                        {comment.date}
                      </span>
                    </div>
                  </div>

                  {/* 내용 */}
                  <p className="text-gray-800 text-sm leading-relaxed mb-2">
                    {comment.content}
                  </p>

                  {/* 하트 버튼 */}
                  <div className="flex justify-end">
                    <button 
                      aria-label="like" 
                      className="text-[#285100] text-lg hover:text-red-500 transition-colors duration-200"
                    >
                      ♥
                    </button>
                  </div>
                </div>
              ))}

              {/* 페이지네이션 */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-2">
                  {[1, 2, 3, 4].map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-full text-sm font-medium transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-[#285100] text-white'
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default FAQAndGuestbook;
