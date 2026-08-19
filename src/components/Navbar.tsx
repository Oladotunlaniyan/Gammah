import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  // Overlay container variants for staggered mobile menu links
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.3, 0, 0.2, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      } as const,
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.3, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1,
      } as const,
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    opened: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } as const },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(10,14,23,0.95)] backdrop-blur-md border-b border-[rgba(201,169,110,0.1)] py-4 shadow-xl"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo: left by default, centers within the mobile bar when menu is open */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className={`flex md:w-auto w-full items-center ${isOpen ? "justify-center" : "justify-start md:justify-start"}`}
            >
              <Link to="/" className="flex items-center space-x-3 group" aria-label="Gamah Projects Consulting Home">
                <span className="font-sans font-extrabold text-2xl tracking-tight text-white group-hover:text-warm-gold transition-colors duration-200">
                  GAMAH
                </span>
              </Link>
            </motion.div>

            {/* Desktop Center Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-sans font-medium text-sm text-text-body hover:text-warm-gold tracking-wide transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-warm-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Right Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-white font-sans font-bold text-sm px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_4px_20px_rgba(201,169,110,0.3)] transform hover:scale-[1.02]"
              >
                <span className="text-md">Get in Touch</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>

            {/* Mobile Hamburger menu (Absolutely positioned to stay on the right while logo stays centered) */}
            <div className="md:hidden absolute right-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-warm-gold focus:outline-none p-2"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-navy-dark flex flex-col justify-center items-center px-8 md:hidden"
          >
            {/* Background subtle mesh overlay to give cinematic depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.05)_0%,rgba(10,14,23,0)_70%)] pointer-events-none"></div>

            <nav className="flex flex-col space-y-8 text-center z-10" aria-label="Mobile Navigation Menu">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans font-bold text-3xl text-text-body hover:text-warm-gold focus:text-warm-gold transition-colors duration-200 tracking-wide block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVariants} className="pt-8">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-white font-sans font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-[0_4px_20px_rgba(201,169,110,0.2)]"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}