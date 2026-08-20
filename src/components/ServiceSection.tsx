import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Shield, Activity, BarChart3, Layers, AlertCircle} from "lucide-react";
import dashboardBg from "../assets/images/photo_2026-07-22_12-04-08.jpg";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);

 const services = [
  {
    id: "001",
    title: "Pre-Project & Planning",
    label: "Feasibility & Planning",
    description: "Feasibility studies • Project planning and coordination • Design review and coordination",
    metricLabel: "Typical Fee",
    metricValue: "₦300k – ₦500k",
    metricChange: "Per fixed-fee assignment",
    icon: Shield,
  },
  {
    id: "002",
    title: "Procurement & Commercial Advisory",
    label: "Procurement & Commercial",
    description: "Procurement strategy • Tender evaluation • contractor selection support • Contract review • Cost and commercial review",
    metricLabel: "Governance",
    metricValue: "Independent",
    metricChange: "Client-side advisory only",
    icon: Activity,
  },
  {
    id: "003",
    title: "Project Delivery & Technical Oversight",
    label: "Delivery & Oversight",
    description: "Project delivery monitoring • Technical oversight • Quality assurance • Contract administration",
    metricLabel: "Monthly Retainer",
    metricValue: "₦1M – ₦1.5M",
    metricChange: "Per month",
    icon: BarChart3,
  },
  {
    id: "004",
    title: "Project Close-out & Handover",
    label: "Close-out & Handover",
    description: "Project close-out • Defect management • Final inspections • Documentation and handover",
    metricLabel: "Outcome",
    metricValue: "Verified",
    metricChange: "Full documentation & handover",
    icon: Layers,
  },
];
  const current = services[activeService];

  return (
    <section id="services" className="relative py-20 md:py-28 bg-navy-dark text-text-body border-t border-white/5">
      {/* Background glow accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-electric-teal/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-20">
        
        {/* CENTERED MAIN HEADING (MATCHING REFERENCE IMAGE) */}
        <div className="text-center max-w-8xl mx-auto space-y-1 md:space-y-2">
          <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
            Everything you need to plan, control, and deliver project excellence
          </h2>
        </div>

        {/* MAIN SPLIT-SCREEN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          
          {/* LEFT COLUMN: Visual Media Card with Floating Stat Card Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-96 lg:h-full w-full rounded-lg overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0d1321] group">
              <img
                src={dashboardBg}
                alt="Digital construction management dashboard background"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-dark/90 via-navy-dark/30 to-transparent"></div>

              {/* Floating Dynamic White Metric Card (Exact Match to Reference Card) */}
              <div className="absolute inset-x-6 bottom-8 sm:bottom-10 sm:left-8 sm:right-auto sm:max-w-[380px] p-6 rounded-2xl bg-white text-navy-dark shadow-2xl backdrop-blur-md transition-all duration-500">
                <div className="flex items-center justify-between mb-6 my-2">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-navy-dark/70">
                    {current.metricLabel}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-navy-dark/5 flex items-center justify-center text-navy-dark">
                    <current.icon className="w-4 h-4" />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 items-baseline justify-between"
                  >
                    <span className="font-sans font-black text-xl sm:text-2xl text-navy-dark tracking-tight">
                      {current.metricValue}
                    </span>
                    <span className="font-mono text-xs font-bold text-electric-teal bg-electric-teal/10 py-1 rounded-full">
                      {current.metricChange}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Numbered Interactive Service List (Matching 001, 002, 003, 004 List Layout) */}
          <div className="lg:col-span-6 space-y-2">
            {services.map((item, index) => {
              const isActive = activeService === index;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveService(index)}
                  className={`py-6 border-b transition-all duration-300 cursor-pointer group ${
                    isActive
                      ? "border-warm-gold pl-4 sm:pl-6 bg-white/2 rounded-r-xl"
                      : "border-white/10 hover:border-white/30 hover:pl-2"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1.5 pr-4">
                      <div className="flex items-center space-x-3">
                        <h3 className={`font-sans font-bold text-xl sm:text-2xl transition-colors duration-200 ${
                          isActive ? "text-warm-gold" : "text-white group-hover:text-warm-gold/80"
                        }`}>
                          {item.title}
                        </h3>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4a90d9]"></span>
                        )}
                      </div>
                      <p className={`font-sans text-sm md:text-base leading-relaxed transition-colors duration-200 ${
                        isActive ? "text-[#e2e8f0]" : "text-[#b8c4d0]/70 group-hover:text-[#b8c4d0]"
                      }`}>
                        {item.description}
                      </p>
                    </div>

                    <span className={`font-mono text-xs sm:text-sm font-semibold tracking-wider pt-1 p-2 transition-colors ${
                      isActive ? "text-warm-gold font-bold" : "text-white/40 group-hover:text-white/70"
                    }`}>
                      {item.id}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Bottom CTA Button (Exact Match to Reference Black/Gold Button) */}
            <div className="pt-8">
              <a
                href="services"
                className="inline-flex items-center space-x-3 bg-white hover:bg-warm-gold font-mono font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-none transition-all duration-300 shadow-lg group"
              >
                <span className="text-[#4a90d9] group-hover:text-white">▪</span>
                <Link to="/services" className="text-navy-dark hover:text-white">
                  Explore PMC Services
                </Link>
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* INDEPENDENT CONSULTANCY NOTICE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.02] to-white/[0.03] border border-warm-gold/30 backdrop-blur-md shadow-xl"
        >
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5">
            <div className="w-10 h-10 rounded-xl bg-warm-gold/10 border border-warm-gold/30 text-warm-gold flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <span className="font-sans font-bold text-xs tracking-widest text-warm-gold uppercase block">
                Independent Consultancy Scope
              </span>
              <p className="font-sans text-sm sm:text-base text-text-body leading-relaxed">
                We are an independent consultancy. Our focus is on providing expert guidance, oversight, and project leadership so our clients can make informed decisions and achieve successful project outcomes.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
