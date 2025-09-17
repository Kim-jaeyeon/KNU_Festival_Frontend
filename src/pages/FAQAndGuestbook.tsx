import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import TabNav from "../components/TabNav";
import FAQItem from "../components/FAQItem";

// FAQ 데이터
const FAQ_DATA = [
  {
    q: "공연 당일 우천 시에도 공연이 진행되나요?",
    a: `인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 날카로우나 그림자는 든 거친 원대하고, 별과 아니다. 그림자는 풀이 가슴에 용기가 이는 소담스러운 위하여서. 끝에 이상 방지하는 이성은 꽃이 이것이다.`,
  },
  {
    q: "대동제 주점은 몇시까지 하나요?",
    a: "인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 날카로우나 그림자는 든 거친 원대하고, 별과 아니다. 그림자는 풀이 가슴에 용기가 이는 소담스러운 위하여서. 끝에 이상 방지하는 이성은 꽃이 이것이다.",
  },
  {
    q: "주문은 미리 예약하고 들어가나요?",
    a: "일부 부스는 사전예약 운영. 부스별 안내 확인.",
  },
  {
    q: `주점은 미리 예약하고 들어가야하나요?
주점예약 안되어있으면 어디로 연락하죠?`,
    a: "인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 날카로우나 그림자는 든 거친 원대하고, 별과 아니다. 그림자는 풀이 가슴에 용기가 이는 소담스러운 위하여서. 끝에 이상 방지하는 이성은 꽃이 이것이다.",
  },
];
interface GuestbookItem {
  guestbookId: number;
  nickname: string;
  content: string;
  createdAt: string;
}

const FAQAndGuestbook: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"faq" | "guestbook">("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // 서버에서 가져온 방명록
  const [guestbooks, setGuestbooks] = useState<GuestbookItem[]>([]);

  // URL에 따라 탭 설정
  useEffect(() => {
    if (location.pathname === "/guestbook") {
      setActiveTab("guestbook");
    } else if (location.pathname === "/faq") {
      setActiveTab("faq");
    }
  }, [location.pathname]);

  // 서버에서 방명록 목록 가져오기
  useEffect(() => {
    if (activeTab === "guestbook") {
      const fetchGuestbooks = async () => {
        try {
          const accessToken = sessionStorage.getItem("accessToken");
          if (!accessToken) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
          }
          const res = await axios.get("api/guestbooks", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (res.data.code === 0) {
            setGuestbooks(res.data.data);
          } else {
            alert(res.data.message || "방명록 불러오기 실패");
          }
        } catch (err: any) {
          if (err.response) {
            console.error("서버 응답:", err.response.status, err.response.data);
            alert(`방명록 불러오기 실패: ${err.response.data.message}`);
          } else {
            console.error("네트워크 오류:", err.message);
            alert("네트워크 오류가 발생했습니다.");
          }
        }
      };

      fetchGuestbooks();
    }
  }, [activeTab]);

  const handleTabChange = (tab: "faq" | "guestbook") => {
    setActiveTab(tab);
  };

  const handleWriteGuestbook = () => {
    navigate("/guestbook/write");
  };

  return (
    <div className="w-full min-h-screen">
      <main className="relative w-full min-h-screen">
        <div className="h-[40px] w-full pointer-events-none" aria-hidden />

        {/* TabNav */}
        <div className="flex justify-center mt-6 mb-[9px]">
          <div className="w-[353px] h-[50px] rounded-[40px] bg-white/80 flex items-center justify-center px-4">
            <TabNav value={activeTab} onChange={handleTabChange} />
          </div>
        </div>

        {/* 방명록 작성하기 버튼 */}
        {activeTab === "guestbook" && (
          <div className="flex flex-col items-center mb-6">
            <button
              onClick={handleWriteGuestbook}
              className="w-[353px] h-[65px] rounded-[40px] border border-[#285100] 
                 bg-[rgba(255,255,255,0.8)] text-[#285100] font-pretendard font-bold 
                 hover:bg-[#285100] hover:text-white transition-colors duration-200"
            >
              방명록 작성하기
            </button>

            <div
              className="mt-[19px]"
              style={{
                width: "339.5px",
                height: "0px",
                borderTop: "0.8px solid rgba(255, 255, 255, 0.88)",
                flexShrink: 0,
              }}
            />
          </div>
        )}

        {/* 콘텐츠 영역 */}
        <section className="px-4 mt-6 pb-6">
          {activeTab === "faq" ? (
            <div className="space-y-4">
              {FAQ_DATA.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.q}
                  answer={item.a}
                  isOpen={openIndex === index}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {guestbooks.map((comment) => (
                <div
                  key={comment.guestbookId}
                  className="w-full max-w-[353px] mx-auto rounded-[20px] bg-white/80 px-4 py-3 shadow-md"
                >
                  {/* 작성자 정보 */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-[28px] h-[28px] flex items-center justify-center rounded-[14px] bg-[#C7FBC2] overflow-hidden">
                      <img
                        src="/user-image.webp"
                        alt="avatar"
                        className="w-[50px] h-[50px] object-contain"
                      />
                    </div>

                    <div className="flex-1 flex justify-between items-center">
                      <span className="font-pretendard font-bold text-gray-800 text-sm">
                        {comment.nickname}
                      </span>
                      <span className="font-pretendard text-xs text-gray-500">
                        {new Date(comment.createdAt).toLocaleString("ko-KR", {
                          month: "numeric",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* 내용 */}
                  <p className="font-pretendard text-[#000000] text-sm leading-relaxed mb-2">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default FAQAndGuestbook;
