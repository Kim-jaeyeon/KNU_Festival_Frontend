import HeaderBar from "../components/HeaderBar";
import TabNav from "../components/TabNav";
import FAQItem from "../components/FAQItem";


const DATA = [
    {
        q: "공연 당일 우천 시에도 공연이 진행되나요?", a: `인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 날카로우나 그림자는 든 거친 원대하고, 별과 아니다. 그림자는 풀이 가슴에 용기가 이는 소담스러운 위하여서. 끝에 이상 방지하는 이성은 꽃이 이것이다.

것은 그들의 너의 시들어 봄날의 앞이 풀밭에 봄바람이다. 청춘의 심장은 얼마나 보내는 풀이 있으며, 새가 착목한는 황금시대다. 속에 같이, 새 만물은 봄바람이다. 관현악이며, 이 얼마나 청춘이 것은 길지 붙잡아 듣는다. 그들에게 남는 인생의 동산에는 놀이 피에 봄바람이다. 때에, 곳이 봄날의 있다.

이상의 어디 위하여 수 꽃 장식하는 가장 것이다. 노년에게서 간에 타오르고 튼튼하며, 풀밭에 있으며, 황금시대다. 같이 군영과 얼음에 불러 있을 가슴에 힘차게 끝까지 찬미를 있다. 내려온 이상을 거선의 사람은 석가는 거친 고동을 품었기 위하여서, 것이다. 못할 뜨거운지라, 원질이 긴지라 할지니, 광야에서 우리는 이는 공자는 뿐이다.`},
    { q: "대동제 주점은 몇시까지 하나요?", a: "인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 날카로우나 그림자는 든 거친 원대하고, 별과 아니다. 그림자는 풀이 가슴에 용기가 이는 소담스러운 위하여서. 끝에 이상 방지하는 이성은 꽃이 이것이다." },
    { q: "주문은 미리 예약하고 들어가나요?", a: "일부 부스는 사전예약 운영. 부스별 안내 확인." },
    {
        q: `주점은 미리 예약하고 들어가야하나요?
주점예약 안되어있으면 어디로 연락하죠?`, a: "인류의 앞이 풀이 꽃이 속에 그들의 사막이다. 따뜻한 방황하여도, 눈이 설산에서 생명을 밥을 구할 뿐이다. 날카로우나 그림자는 든 거친 원대하고, 별과 아니다. 그림자는 풀이 가슴에 용기가 이는 소담스러운 위하여서. 끝에 이상 방지하는 이성은 꽃이 이것이다."
    }
];


export default function FAQ() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#f5faf7]">
            {/* 모바일 프레임 */}
            <main
                className="relative w-full min-h-screen"
                style={{
                    backgroundImage: "url('/bg-faq-guest.png')", // 덩굴 배경
                    backgroundRepeat: "repeat-y",
                    backgroundSize: "100% auto",
                    backgroundPosition: "top center",
                }}
            >
                {/* 상단 헤더 */}
                <HeaderBar title={<span className="text-[#285100] ">FAQ & 방명록</span>} />

                {/* ✅ TabNav 위에 여백 블록 (HeaderBar의 spacer처럼) */}
                <div className="h-[40px] w-full pointer-events-none" aria-hidden />

                <div className="flex justify-center mt-6 mb-[19px]">
                    <div className="flex justify-center mt-6 mb-[19px]">
                        <TabNav />   {/* ✅ w-[353px] h-[38px] 감싸는 div 삭제 */}
                    </div>

                </div>

                {/* FAQ 리스트 */}
                <section className="px-4 mt-6 pb-[calc(env(safe-area-inset-bottom,0)+24px)]">
                    {DATA.map((it, i) => (
                        <FAQItem key={i} question={it.q} answer={it.a} />
                    ))}
                </section>

                <footer className="absolute bottom-0 left-0 w-full">
                    <img
                        src="/bt-logo.png"
                        alt="Hortus Footer"
                        className="w-full block align-bottom"
                    />
                </footer>


            </main>
        </div>
    );
}
