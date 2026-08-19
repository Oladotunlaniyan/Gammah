import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import  ServicesPage from "./pages/ServicesPage"; 
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";

export default function App() {
  return ( 
    <Router>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="relative z-10 grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
