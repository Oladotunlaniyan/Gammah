import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import slide1 from "../assets/images/photo_2026-07-21_17-32-25.jpg";
import slide2 from "../assets/images/photo_2026-07-21_18-39-46.jpg";
import slide3 from "../assets/images/photo_2026-07-21_18-39-56.jpg";

const HEADLINE_LINES = ["Delivering Better", "Projects Across", "Africa"];
const TYPE_SPEED_MS = 45;
const LINE_PAUSE_MS = 150;
const START_DELAY_MS = 200;

const SLIDES = [
  { src: slide1, alt: "17-story commercial office tower with two basement floors in the heart of Liverpool street, London." },
  { src: slide2, alt: "Gamah Projects construction site in progress" },
  { src: slide3, alt: " Gamah Projects development" },
];

const SLIDE_DURATION_MS = 2000;
const FADE_DURATION_S = 1.2;

export default function Hero() {
  const [failedSlides, setFailedSlides] = useState<Set<number>>(new Set());
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 150]);

  // Only the slides that haven't failed to load are eligible for rotation
  const activeSlides = SLIDES.map((s, i) => ({ ...s, index: i })).filter(
    (s) => !failedSlides.has(s.index)
  );

  const handleSlideError = useCallback((index: number) => {
    setFailedSlides((prev) => new Set(prev).add(index));
  }, []);

  // Preload every slide up front so crossfades never reveal a blank frame
  useEffect(() => {
    SLIDES.forEach((slide, index) => {
      const img = new Image();
      img.onerror = () => handleSlideError(index);
      img.src = slide.src;
    });
  }, [handleSlideError]);

  // Auto-advance the slideshow
  useEffect(() => {
    if (activeSlides.length <= 1 || isPaused) return;

    const intervalMs = shouldReduceMotion ? SLIDE_DURATION_MS * 1.5 : SLIDE_DURATION_MS;

    const id = setInterval(() => {
      setActiveSlide((prev) => {
        const currentPos = activeSlides.findIndex((s) => s.index === prev);
        const nextPos = (currentPos + 1) % activeSlides.length;
        return activeSlides[nextPos]?.index ?? 0;
      });
    }, intervalMs);

    return () => clearInterval(id);
  }, [activeSlides, isPaused, shouldReduceMotion]);

  // If the current active slide fails, jump to the next valid one immediately
  useEffect(() => {
    if (failedSlides.has(activeSlide) && activeSlides.length > 0) {
      setActiveSlide(activeSlides[0].index);
    }
  }, [failedSlides, activeSlide, activeSlides]);

  const currentSlide = SLIDES[activeSlide];

  const [typed, setTyped] = useState<{ lines: string[]; activeIndex: number; done: boolean }>(
    () =>
      shouldReduceMotion
        ? { lines: HEADLINE_LINES, activeIndex: HEADLINE_LINES.length, done: true }
        : { lines: ["", "", ""], activeIndex: 0, done: false }
  );

  useEffect(() => {
    if (shouldReduceMotion) return;

    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (lineIndex >= HEADLINE_LINES.length) {
        setTyped((prev) => ({ ...prev, done: true }));
        return;
      }
      const line = HEADLINE_LINES[lineIndex];
      if (charIndex <= line.length) {
        const snapshot = line.slice(0, charIndex);
        setTyped((prev) => {
          const lines = [...prev.lines];
          lines[lineIndex] = snapshot;
          return { lines, activeIndex: lineIndex, done: false };
        });
        charIndex += 1;
        timeoutId = setTimeout(tick, TYPE_SPEED_MS);
      } else {
        lineIndex += 1;
        charIndex = 0;
        timeoutId = setTimeout(tick, LINE_PAUSE_MS);
      }
    };

    timeoutId = setTimeout(tick, START_DELAY_MS);
    return () => clearTimeout(timeoutId);
  }, [shouldReduceMotion]);

  const ctaVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.6, ease: "easeOut" } as const,
    },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-150 h-screen flex items-center justify-center overflow-hidden bg-navy-dark"
      aria-label="Gamah Projects Consulting Hero Section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cinematic fallback background */}
      <div
        className="absolute inset-0 w-full h-full bg-linear-to from-navy-dark via-[#1a2332] to-[#0f1724]"
        style={{
          background: "linear-gradient(135deg, #0a0e17 0%, #1a2332 50%, #0f1724 100%)",
        }}
      />

      {/* Background slideshow with parallax */}
      {currentSlide && !failedSlides.has(activeSlide) && (
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-[120%] pointer-events-none select-none z-0 overflow-hidden"
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={activeSlide}
              src={currentSlide.src}
              onError={() => handleSlideError(activeSlide)}
              alt={currentSlide.alt}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-lighten"
              loading="eager"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : FADE_DURATION_S,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-transparent to-navy-dark/95 opacity-90" />
          <div className="absolute inset-0 bg-linear-to-r from-navy-dark via-transparent to-navy-dark/80 opacity-90" />
        </motion.div>
      )}

      {/* Grid mesh lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,110,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,110,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none z-1" />

      {/* Main container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10 pt-24 md:pt-16 pb-12 flex flex-col justify-center h-full">
        <div className="lg:max-w-[60%] flex flex-col space-y-6 md:space-y-8 text-left">
          <h1
            className="font-sans font-extrabold text-white tracking-tight leading-[1.1] text-4xl sm:text-9xl md:text-6xl lg:text-[4.5rem]"
            style={{ letterSpacing: "-0.03em" }}
            aria-label="Delivering Better Projects Across Africa"
          >
            <span aria-hidden="true">
              {HEADLINE_LINES.map((line, i) => (
                <span key={line} className="block py-1 min-h-[1.1em]">
                  {typed.lines[i]}
                  {!typed.done && typed.activeIndex === i && (
                    <span className="inline-block w-0.5 md:w-0.75 h-[0.9em] bg-[#4a90d9] ml-1 align-middle animate-pulse" />
                  )}
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="font-sans text-base md:text-lg text-text-body leading-relaxed max-w-145"
          >
            We combine international construction expertise with deep local market knowledge to protect your investment, manage risk, and deliver excellence from feasibility to handover.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={ctaVariants}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#4a90d9] hover:bg-[#3a7bc9] text-navy-dark font-sans font-bold text-base px-12 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_25px_rgba(0,212,170,0.35)]"
              aria-label="Start Your Project with Gamah"
            >
              <span className="text-white">Start Your Project</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center bg-transparent hover:bg-warm-gold hover:text-white text-warm-gold border border-warm-gold/60 hover:border-warm-gold font-sans font-semibold text-base px-12 py-3 rounded-full transition-all duration-300 hover:scale-[1.02]"
              aria-label="View Gamah Projects Portfolio"
            >
              <span>View Our Portfolio</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}