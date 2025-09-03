import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Timetable from './components/Timetable';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex justify-center bg-[#EFFFED12]">
        <div className="w-full max-w-[430px] bg-white min-h-screen shadow-lg">
          

          {/* 라우트 */}
          <Routes>
            <Route path="/" element={
              <div className="flex min-h-screen items-center justify-center  bg-[#EFFFED12]">
                <div className="text-center px-4">
                  <h1 className="text-red-500 text-2xl font-bold underline mb-4">Hello Tailwind + TS!</h1>
                  <Link 
                    to="/timetable" 
                    className="bg-[#EFFFED12] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                  >
                    타임테이블 보기
                  </Link>
                </div>
              </div>
            } />
            <Route path="/timetable" element={<Timetable />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App