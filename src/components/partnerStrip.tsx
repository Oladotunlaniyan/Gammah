import React from "react";
import { motion } from "motion/react";

function IdslLogo() {
  return (
    <img
      src="https://www.imperialductwork.co.uk/wp-content/uploads/2025/03/idsl-logo.png"
      alt="Imperial Ductwork Services Ltd (IDSL) logo"
      className="h-9 sm:h-10 w-auto object-contain"
      loading="lazy"
    />
  );
}

function ThreeMPlusLogo() {
  return (
    <img
      src="https://cdn.prod.website-files.com/66c8bb095805b7db1fc79c7a/66c8bc8dd9433114a2ebe6f4_ThreeMPlus%20Logo.png"
      alt="ThreeMPlus Integrated Enterprises Limited logo"
      className="h-9 sm:h-10 w-auto object-contain"
      loading="lazy"
    />
  );
}

const logos = [
  { key: "idsl", Component: IdslLogo },
  { key: "threemplus", Component: ThreeMPlusLogo },
];
const REPEATS_PER_UNIT = 8;
const repeatUnit = Array.from({ length: REPEATS_PER_UNIT }, () => logos).flat();

export default function PartnersMarquee() {
  const track = [...repeatUnit, ...repeatUnit];

  return (
    <div className="w-full overflow-hidden py-8 bg-white border-t border-b border-[rgba(201,169,110,0.1)]">
         <div className="max-w-7xl mx-auto px-6 mb-5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="w-6 h-0.5 bg-warm-gold"></span>
          <span className="font-sans font-bold text-[11px] sm:text-xs tracking-widest uppercase text-warm-gold">
            WE'VE WORKED WITH
          </span>
        </div>
      </div>  
      <motion.div
        className="flex items-center gap-20 sm:gap-28 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 10 * REPEATS_PER_UNIT,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {track.map(({ key, Component }, i) => (
          <div key={`${key}-${i}`} className="shrink-0 flex items-center">
            <Component />
          </div>
        ))}
      </motion.div>
    </div>
  );
}