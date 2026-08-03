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
      <ScrollToTop />
      <div className="relative min-h-screen bg-navy-dark text-text-body font-sans selection:bg-warm-gold selection:text-navy-dark flex flex-col justify-between">
        {/* Dynamic Background Noise/Grid Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,110,0.03)_0%,transparent_50%)] pointer-events-none z-0"></div>

        {/* Primary Sticky Header */}
        <Navbar />

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

        {/* Multi-Column Footer */}
        <Footer />
      </div>
    </Router>
  );
}
