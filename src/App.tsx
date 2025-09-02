// src/App.tsx

import "tailwindcss";
import FAQ from "./pages/FAQ";

function App() {
  return (
    // 이 div가 이제 주된 Flexbox 컨테이너 역할을 하며, 자식 요소를 중앙에 정렬합니다.
    <div className="flex min-h-screen items-center justify-center bg-[#f5faf7]">
      <FAQ />
    </div>
  );
}
export default App;