import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  X, 
  Play
} from "lucide-react";
import verticalEngineersImg from "../assets/images/photo_2026-07-22_12-04-05.jpg";
import videoThumbImg from "../assets/images/IMG_6925.MP4";

export default function AboutSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoModalOpen(false);
  };

  return (
    <section id="about" className="relative py-20 md:py-32 bg-navy-dark text-text-body overflow-hidden border-t border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-warm-gold/5 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-electric-teal/5 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
<motion.div
    className="space-y-3 text-left"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
    <motion.div
      className="flex items-center space-x-3"
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="w-8 h-0.5 bg-warm-gold"></span>
      <span className="font-sans font-bold text-xs md:text-sm tracking-widest text-warm-gold uppercase">
        ABOUT US
      </span>
    </motion.div>

    <motion.h2
      className="font-sans font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight max-w-3xl"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      Independent project consultancy for Africa's built environment.
    </motion.h2>
  </motion.div>
        {/* MAIN ABOUT US GRID LAYOUT (MATCHING REFERENCE DESIGN) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* LEFT COLUMN: Vertical Tall Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative h-full min-h-[420px] lg:min-h-[540px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0d1321] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src={verticalEngineersImg}
                alt="Civil engineers inspecting project site blueprints in Lagos, Nigeria"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              {/* Overlay shading for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/30"></div>

              {/* Bottom Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-navy-dark/85 backdrop-blur-md border border-white/10 shadow-lg">
                <p className="font-sans font-bold text-white text-base">
                  Gamah Projects Consulting Ltd
                </p>
                <p className="font-sans text-xs text-warm-gold mt-1">
                  Bridging International Construction Rigour & African Market Insight
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Media Thumbnail + Copy + CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            {/* Top Media Thumbnail with Play Overlay */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-[#0d1321] group cursor-pointer shadow-lg"
            >
              <video
                src={videoThumbImg}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-navy-dark/20 transition-colors duration-300"></div>

              {/* Central Animated Play Button */}
             <div className="absolute inset-0 flex items-center justify-center">
  <div className="w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-white/90 group-hover:bg-warm-gold text-navy-dark hover:text-white flex items-center justify-center shadow-[0_0_30px_rgba(201,169,110,0.5)] transform group-hover:scale-110 transition-all duration-300">
    <Play className="w-4 h-4 sm:w-8 sm:h-8 fill-current ml-0.5 sm:ml-1" />
  </div>
</div>
              {/* Top Right Label */}
              <div className="absolute top-4 right-4 bg-navy-dark/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="font-sans text-[11px] font-semibold tracking-wider text-electric-teal uppercase">
                  Project Video Overview
                </span>
              </div>
            </div>

            {/* Bottom Copy Block */}
            <div className="space-y-5">
              <h3 className="font-sans font-bold text-white text-xl sm:text-2xl leading-snug">
                Delivering Unbiased Project Management Consultancy
              </h3>
              <p className="font-sans text-sm md:text-base text-text-body leading-relaxed md:leading-loose w-full text-left md:text-justify">
  While project management services exist within architecture, engineering, quantity surveying, and contracting firms, they are often delivered in the interest of those professional disciplines. Gamah Projects Consulting Ltd fills this gap by providing integrated project management consultancy services that coordinate all project stakeholders through proven project management methodologies, digital project controls, quality assurance processes, and governance frameworks used on world-class developments to help clients deliver better projects.
</p>

              <div className="pt-2">
                <a
                  href="#about"
                  className="inline-flex items-center space-x-3 bg-navy-dark hover:bg-warm-gold text-white border border-warm-gold/50 font-sans font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md group"
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 text-warm-gold group-hover:text-white transition-colors duration-200" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Overview */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-navy-dark border border-white/10 rounded-2xl overflow-hidden p-6 sm:p-8 text-center space-y-6"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white/60 hover:text-white p-2"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-2">
                <span className="font-sans text-xs text-electric-teal font-semibold tracking-wider uppercase">
                  Gamah Projects Consulting Ltd
                </span>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
                  Corporate Overview & Project Methodologies
                </h3>
              </div>

              <div className="aspect-video w-full rounded-xl bg-[#0d1321] border border-white/10 overflow-hidden">
                <video
                  ref={videoRef}
                  src={videoThumbImg}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
              </div>

              <p className="font-sans text-sm text-text-body max-w-md mx-auto">
                Experience how Gamah Projects Consulting coordinates architects, engineers, quantity surveyors, and contractors to ensure 100% fiduciary protection for clients across Africa.
              </p>

              <button
                onClick={closeModal}
                className="bg-warm-gold text-navy-dark font-sans font-bold px-6 py-2.5 rounded-full text-sm hover:bg-warm-gold/90 hover:text-white transition-colors"
              >
                Close Preview
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}