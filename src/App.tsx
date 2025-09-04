import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BoothRecommend from './pages/BoothRecommend';
import BoothAndFoodTruck from './pages/BoothAndFoodTruck';
import PhotoFestival from './pages/PhotoFestival';
import Timetable from './pages/Timetable';
import FAQAndGuestbook from './pages/FAQAndGuestbook';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex justify-center">
        <div 
          className="w-full max-w-[430px] min-h-screen shadow-lg bg-cover bg-top bg-no-repeat relative"
          style={{
            backgroundImage: "url('/assets/BG.png')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "100vh"
          }}
        >
          <Header />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booth-recommend" element={<BoothRecommend />} />
              <Route path="/booth-foodtruck" element={<BoothAndFoodTruck />} />
              <Route path="/photo-festival" element={<PhotoFestival />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/faq" element={<FAQAndGuestbook />} />
              <Route path="/guestbook" element={<FAQAndGuestbook />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App