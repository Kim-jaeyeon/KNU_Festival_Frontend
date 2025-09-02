import HeaderBar from "../components/HeaderBar";
import TabNav from "../components/TabNav";

type Comment = {
  id: number;
  author: string;
  date: string;
  content: string;
};

const COMMENTS: Comment[] = [
  {
    id: 1,
    author: "익명1",
    date: "9월 18일 09:41",
    content: "우는 별들을 이름자 어머니 가을 있습니다.",
  },
  {
    id: 2,
    author: "익명2",
    date: "9월 18일 09:41",
    content: "우는 별들을 이름자 어머니 가을 있습니다.",
  },
];

export default function Guestbook() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#f5faf7]">
      <main
        className="relative w-full min-h-screen"
        style={{
          backgroundImage: "url('/bg-faq-guest.png')", // FAQ와 같은 배경
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
        }}
      >
        {/* 상단 헤더 */}
        <HeaderBar title="FAQ & 방명록" />

        {/* 상단 spacer */}
        <div className="h-[40px] w-full pointer-events-none" aria-hidden />

        {/* TabNav */}
        <div className="flex justify-center mt-6 mb-[19px]">
          <div className="w-[353px] h-[50px] rounded-[40px] bg-white/80 flex items-center justify-center">
            <TabNav value="guestbook" />
          </div>
        </div>

        {/* 방명록 작성하기 버튼 */}
        <div className="flex justify-center mb-6">
          <button
            className="w-[353px] h-[50px] rounded-[40px] border border-[#285100] text-[#285100] font-pretendard font-bold"
          >
            방명록 작성하기
          </button>
        </div>

        {/* 방명록 리스트 */}
        <section className="flex flex-col items-center gap-4 pb-[calc(env(safe-area-inset-bottom,0)+24px)]">
          {COMMENTS.map((c) => (
            <div
              key={c.id}
              className="w-[353px] rounded-[20px] bg-[#FFFFFFCC] px-4 py-3 shadow flex flex-col gap-1"
            >
              {/* 작성자 + 날짜 */}
              <div className="flex justify-between items-center text-sm text-gray-700">
                <span className="font-semibold">{c.author}</span>
                <span className="text-xs text-gray-500">{c.date}</span>
              </div>

              {/* 내용 */}
              <p className="text-[#1B1B1B] text-sm leading-relaxed whitespace-pre-line">
                {c.content}
              </p>

              {/* 하트 버튼 */}
              <div className="flex justify-end">
                <button aria-label="like" className="text-[#285100] text-lg">
                  ♥
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
