import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Specialties from './pages/Specialties/Specialties';
import Contact from './pages/Contact/Contact';
import WhatsAppButton from './components/WhatsappButton/WhatsappButon';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
};

export default App;
