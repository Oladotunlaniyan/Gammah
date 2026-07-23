import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServiceSection";

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

      {/* Elegant Minimal Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#070b12] text-center text-xs text-[#b8c4d0]/50 font-sans">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Gamah Projects Consulting Ltd. All rights reserved.</p>
          <p className="tracking-wider uppercase">Building the Future, One Brick at a Time.</p>
        </div>
      </footer>
    </div>
  );
}
