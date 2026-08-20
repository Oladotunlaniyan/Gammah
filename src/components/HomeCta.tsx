import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

const HomeCta = () => {
  return (
     <section className="py-20 bg-linear-to-r from-[#0d1321] via-navy-dark to-[#0d1321] border-t border-white/10 relative">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-sans font-extrabold text-white text-3xl sm:text-5xl leading-tight">
            Schedule a Session with Our team
          </h2>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-warm-gold hover:bg-warm-gold/90 text-navy-dark font-sans font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-xl"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+2348030000000"
              className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-sans font-semibold text-sm px-7 py-4 rounded-full transition-all"
            >
              <PhoneCall className="w-4 h-4 text-warm-gold" />
              <span>Call Advisory (+234 803 000 0000)</span>
            </a>
          </div>
        </div>
      </section>
  )
}

export default HomeCta