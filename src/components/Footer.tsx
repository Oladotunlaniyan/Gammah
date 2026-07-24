import { MapPin, Phone, Mail} from "lucide-react";
import {FaLinkedin, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#070b12] text-text-body border-t border-white/10 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* FOUR COLUMN GRID (MATCHING REFERENCE LAYOUT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* COLUMN 1: Logo & Brief Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center space-x-3 group" aria-label="Gamah Projects Consulting Home">
              {/* Gold/Navy Icon Mark */}
              <div className="flex items-end space-x-1">
                <div className="w-3 h-5 bg-[#b8c4d0]/60 rounded-sm"></div>
                <div className="w-3.5 h-7 bg-warm-gold rounded-sm"></div>
              </div>
              <div>
                <span className="font-sans font-extrabold text-xl tracking-tight text-white group-hover:text-warm-gold transition-colors duration-200 block leading-tight">
                  GAMAH
                </span>
                <span className="font-sans text-xs tracking-widest text-[#b8c4d0] uppercase block">
                  Projects Consulting Ltd.
                </span>
              </div>
            </a>

            <p className="font-sans text-xs sm:text-sm text-[#b8c4d0]/70 leading-relaxed max-w-sm">
              Providing integrated project management consultancy services that coordinate all project stakeholders through proven methodologies and digital project controls.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-warm-gold text-[#b8c4d0] hover:text-warm-gold flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-warm-gold text-[#b8c4d0] hover:text-warm-gold flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Navigation Links 1 (Home highlighted in Gold) */}
          <div className="lg:col-span-2 space-y-3">
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-medium">
              <li>
                <a href="#" className="text-warm-gold font-bold hover:underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-warm-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-warm-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white/80 hover:text-warm-gold transition-colors">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white/80 hover:text-warm-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Navigation Links 2 */}
          <div className="lg:col-span-2 space-y-3">
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-medium text-white/80">
              <li>
                <a href="#about" className="hover:text-warm-gold transition-colors">
                  Our Locations
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-warm-gold transition-colors">
                  Core Pillars
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-warm-gold transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-warm-gold transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-warm-gold transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Details with Gold Icons */}
          <div className="lg:col-span-4 space-y-3.5 font-sans text-xs sm:text-sm text-white/80">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
              <span>Lagos (Ikoyi) & Abuja, Nigeria | London, UK</span>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-warm-gold flex-shrink-0" />
              <a href="tel:+2348030000000" className="hover:text-warm-gold transition-colors">
                +234 (0) 803 000 0000
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-warm-gold flex-shrink-0" />
              <a href="mailto:info@gamahprojects.com" className="hover:text-warm-gold transition-colors">
                info@gamahprojects.com
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#b8c4d0]/50 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Gamah Projects Consulting Ltd. All rights reserved.</p>
          <p className="tracking-widest uppercase font-mono text-[10px]">
            Building the Future, One Brick at a Time.
          </p>
        </div>
      </div>
    </footer>
  );
}
