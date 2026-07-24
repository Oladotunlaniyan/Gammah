import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServiceSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy-dark text-text-body font-sans selection:bg-warm-gold selection:text-navy-dark">
      {/* Primary Sticky Header */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
