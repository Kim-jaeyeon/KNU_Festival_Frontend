import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BoothRecommendLoading from './pages/BoothRecommend/BoothRecommendLoading';
import BoothRecommend from './pages/BoothRecommend/BoothRecommend';
import BoothAndFoodTruck from './pages/BoothAndFoodTruck';
import PhotoFestival from './pages/PhotoFestival';
import Timetable from './pages/Timetable';
import FAQAndGuestbook from './pages/FAQAndGuestbook';
import GuestbookWrite from './pages/GuestbookWrite';
import BoothRecommendResult from './pages/BoothRecommend/BoothRecommendResult'
import Artist from './pages/Artist/Artist';
import PhotoUpload from './pages/PhotoUpload';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
<div className="flex justify-center">
  <div
    className="w-full sm:max-w-[402px] shadow-lg relative bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/assets/home/BGimg/BackImg1.png')",
      backgroundSize: 'cover',   // Tailwind 클래스와 중복 가능
      backgroundPosition: 'center top',
    }}
  >
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="boothRecommendLoading" element={<BoothRecommendLoading />} />
            <Route path="/booth-recommend" element={<BoothRecommend />} />
            <Route path ="/BoothRecommendResult" element={<BoothRecommendResult/>} />
            <Route path="/booth-foodtruck/:number" element={<BoothAndFoodTruck />} />
            <Route path="/photo-festival" element={<PhotoFestival />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/faq" element={<FAQAndGuestbook />} />
            <Route path="/guestbook/write" element={<GuestbookWrite />} />
            <Route path="/guestbook" element={<FAQAndGuestbook />} />
            <Route path="/artist/:number" element={<Artist />} />
            <Route path="/photo-upload" element={<PhotoUpload />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
