import { useState } from "react";
// import PartnersStrip from "../components/PartnersStrip";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, ChevronDown, Clock, ShieldCheck, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Does Gamah Projects Consulting undertake construction work directly?",
      a: "No. We are strictly an independent Project Management Consultancy (PMC). We do not undertake construction work, employ trades or subcontractors, or hold construction contracts. This total independence ensures our fiduciary loyalty remains 100% with you, the client."
    },
    {
      q: "How do you protect diaspora investors based in the UK, US, or Europe?",
      a: "We provide dual-jurisdiction governance. You can interface with our London advisory office or Lagos/Abuja teams. We implement digital webcam monitoring, drone site audits, and milestone-based escrow disbursement sign-offs—ensuring funds are only released when work is physically verified."
    },
    {
      q: "What is the typical engagement process for a new project?",
      a: "We begin with a preliminary 30-minute advisory review of your project brief, site plans, or contractor BOQ. Following this, we issue a clear PMC scope proposal detailing milestone audits, quality controls, and financial governance."
    },
    {
      q: "At what stage of a project should we engage Gamah Projects?",
      a: "Ideally during the feasibility or pre-construction stage before signing contractor agreements. However, we are also engaged mid-project for forensic cost recovery, schedule slippage remediation, and independent audit oversight."
    },
    {
      q: "Are your consultants accredited with COREN and RICS?",
      a: "Yes. Our key leadership and field engineering leads hold civil engineering degrees, COREN licenses, Nigerian Society of Engineers (NSE) memberships, and UK postgraduate credentials (GCU Glasgow / RICS guidelines)."
    }
  ];

  return (
    <div className="pt-24 md:pt-28 bg-navy-dark text-text-body font-sans space-y-0">
      
      {/* PAGE HERO */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0d1321] via-navy-dark to-[#0a0e17] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-warm-gold/10 border border-warm-gold/30 px-3 py-1 rounded-full text-warm-gold text-xs font-mono font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Advisory Engagement</span>
          </div>
          <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Connect with Our Project Advisory Team
          </h1>
          <p className="font-sans text-base md:text-lg text-[#b8c4d0] leading-relaxed max-w-2xl mx-auto">
            Ready to safeguard your capital investment? Reach out to our senior consultants in Lagos, Abuja, or London to schedule a project brief review.
          </p>
        </div>
      </section>

      {/* CONTACT FORM & LOCATIONS GRID */}
      <section className="py-20 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LEFT COLUMN: LOCATIONS & DIRECT CHANNELS */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="font-sans font-semibold text-xs tracking-widest text-electric-teal uppercase block mb-3">
                  DUAL-JURISDICTION OFFICES
                </span>
                <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
                  Global Reach, Local Presence.
                </h2>
                <p className="mt-4 text-[#b8c4d0] text-sm leading-relaxed">
                  Our dual operational footprint bridges UK-grade governance with direct on-the-ground project monitoring across Nigeria.
                </p>
              </div>

              {/* Office Cards */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="flex items-center space-x-3 text-warm-gold">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-sans font-bold text-base text-white">Lagos Head Office (Ikoyi)</h3>
                  </div>
                  <p className="text-xs text-[#b8c4d0] pl-8">
                    Ikoyi, Lagos State, Nigeria
                  </p>
                  <p className="text-xs text-warm-gold pl-8 font-mono">
                    Direct Site Operations & Technical Audits
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="flex items-center space-x-3 text-electric-teal">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-sans font-bold text-base text-white">Abuja Regional Office</h3>
                  </div>
                  <p className="text-xs text-[#b8c4d0] pl-8">
                    Central Business District, Abuja, FCT
                  </p>
                  <p className="text-xs text-electric-teal pl-8 font-mono">
                    Institutional & Infrastructure PPP Advisory
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="flex items-center space-x-3 text-warm-gold">
                    <MapPin className="w-5 h-5 flex-shrink-0" />
                    <h3 className="font-sans font-bold text-base text-white">London Liaison Office (UK)</h3>
                  </div>
                  <p className="text-xs text-[#b8c4d0] pl-8">
                    City of London, United Kingdom
                  </p>
                  <p className="text-xs text-warm-gold pl-8 font-mono">
                    Diaspora Investor & European Capital Governance
                  </p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-warm-gold/10 flex items-center justify-center text-warm-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#b8c4d0]/60 uppercase tracking-widest font-sans">Official Email</p>
                    <a href="mailto:info@gamahprojects.com" className="text-sm font-bold text-white hover:text-warm-gold transition-colors font-sans">
                      info@gamahprojects.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-teal/10 flex items-center justify-center text-electric-teal">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#b8c4d0]/60 uppercase tracking-widest font-sans">Direct Hotline</p>
                    <a href="tel:+2348030000000" className="text-sm font-bold text-white hover:text-warm-gold transition-colors font-sans">
                      +234 (0) 803 000 0000
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: PROJECT BRIEF FORM */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-10 rounded-2xl bg-white/[0.03] border border-warm-gold/50 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-warm-gold/20 text-warm-gold flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-white">Project Brief Received!</h3>
                  <p className="text-sm text-[#b8c4d0] leading-relaxed max-w-md mx-auto">
                    Thank you. Our senior PMC lead will review your submission and contact you within 24 hours to schedule a confidential advisory call.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-warm-gold text-navy-dark font-sans font-bold text-xs px-6 py-3 rounded-full hover:bg-warm-gold/90 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6"
                >
                  <div className="border-b border-white/5 pb-4">
                    <h3 className="font-sans font-bold text-xl text-white">Submit a Confidential Project Brief</h3>
                    <p className="text-xs text-[#b8c4d0] mt-1">
                      Provide basic details about your proposed or ongoing project to receive tailored PMC guidance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Dr. Oladotun Laniyan"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2 font-sans">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="e.g. name@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2 font-sans">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="e.g. +44 7000 000000 or +234..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="segment" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2 font-sans">
                        Client Category
                      </label>
                      <select
                        id="segment"
                        className="w-full bg-[#0d1321] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                      >
                        <option value="diaspora">Diaspora Private Investor</option>
                        <option value="sme">SME Real Estate Developer</option>
                        <option value="corporate">Corporate & Institutional Investor</option>
                        <option value="govt">Government / Public Concession</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2 font-sans">
                        Target Site Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        placeholder="e.g. Ikoyi, Lekki, Victoria Island, Abuja CBD..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2 font-sans">
                        Estimated Capital Range
                      </label>
                      <select
                        id="budget"
                        className="w-full bg-[#0d1321] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                      >
                        <option value="500m">Under ₦500 Million</option>
                        <option value="1b">₦500M - ₦2 Billion</option>
                        <option value="5b">₦2 Billion - ₦10 Billion</option>
                        <option value="10b+">Over ₦10 Billion ($10M+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2 font-sans">
                      Brief Project Overview *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Outline your project scope, current stage (feasibility, ongoing build, audit needed), and primary goals..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-navy-dark font-sans font-bold text-base py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(201,169,110,0.25)] cursor-pointer"
                  >
                    <span>Submit Project Brief</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-[11px] text-[#b8c4d0]/60 text-center font-sans">
                    🔒 All disclosures are held strictly confidential under non-disclosure governance.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-24 bg-navy-dark border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="font-sans font-bold text-xs tracking-widest text-warm-gold uppercase">
              CLIENT FAQ & GOVERNANCE SCOPE
            </span>
            <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-sans font-bold text-base text-white">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-warm-gold transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 border-t border-white/5">
                      <p className="font-sans text-sm text-[#b8c4d0] leading-relaxed pt-4">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERS STRIP */}
      {/* <PartnersStrip /> */}
    </div>
  );
}
