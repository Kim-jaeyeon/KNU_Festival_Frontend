import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BoothRecommend from './pages/BoothRecommend';
import BoothAndFoodTruck from './pages/BoothAndFoodTruck';
import PhotoFestival from './pages/PhotoFestival';
import Timetable from './pages/Timetable';
import FAQAndGuestbook from './pages/FAQAndGuestbook';
import GuestbookWrite from './pages/GuestbookWrite';
import BoothRecommendResult from './pages/BoothRecommendResult'
import Celebrity from './pages/Celebrity';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex justify-center">
      <div
        className={`w-full sm:max-w-[402px] shadow-lg relative  ${
          isHome ? 'min-h-[300vh]' : 'min-h-screen bg-cover bg-top bg-no-repeat'
        }`}
        style={isHome ? {} : {
          backgroundImage: "url('/assets/BoothRecommendBG.png')",
          backgroundSize: "cover",
        
          backgroundPosition: "top center",
          minHeight: "100vh"
        }}
      >
        <Header />
        <div className={isHome ? "" : "pt-16"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booth-recommend" element={<BoothRecommend />} />
            <Route path ="/BoothRecommendResult" element={<BoothRecommendResult/>} />
            <Route path="/booth-foodtruck" element={<BoothAndFoodTruck />} />
            <Route path="/photo-festival" element={<PhotoFestival />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/faq" element={<FAQAndGuestbook />} />
            <Route path="/guestbook/write" element={<GuestbookWrite />} />
            <Route path="/guestbook" element={<FAQAndGuestbook />} />
            <Route path="/celebrity" element={<Celebrity />} />
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

export default App