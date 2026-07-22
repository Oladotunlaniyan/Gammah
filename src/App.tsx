import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { motion } from "motion/react";
import { Shield, Clock, TrendingUp, Compass, Phone, Mail, MapPin, Users, ArrowRight } from "lucide-react";

export default function App() {
  const services = [
    {
      icon: Shield,
      title: "Risk Management & Quality Control",
      description: "Protecting your investment by enforcing rigorous quality standards, managing procurement risks, and ensuring strict international standards from start to finish.",
    },
    {
      icon: Clock,
      title: "Feasibility & Time Management",
      description: "Comprehensive planning and scheduling that guarantees project handover on schedule, with continuous risk audits and independent schedule verification.",
    },
    {
      icon: TrendingUp,
      title: "Financial Protection & Advisory",
      description: "Acting strictly as an independent Project Management Consultancy (not a contractor) to prevent cost overruns and maintain absolute transparency.",
    },
  ];

  const highlights = [
    {
      label: "Diaspora Investors",
      percentage: "40%",
      description: "Bridging the distance with robust progress tracking, webcam monitoring, and trusted fiduciary management.",
    },
    {
      label: "SME Developers",
      percentage: "30%",
      description: "Empowering local developers with UK-grade commercial governance and risk-management structures.",
    },
    {
      label: "Corporates & Governments",
      percentage: "30%",
      description: "Executing complex capital projects with absolute budget compliance and institutional-grade handovers.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-navy-dark text-text-body font-sans selection:bg-warm-gold selection:text-navy-dark">
      {/* Primary Sticky Header */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
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
