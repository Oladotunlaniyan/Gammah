import { ShieldCheck, Quote, CheckCircle2, Lock, Building2, ExternalLink } from "lucide-react";
import FDICLogo from "../assets/images/FIDIC_logo_293-text.jpg";
import RicsLogo from "../assets/images/Rics-Logo.png";
import CorenLogo from "../assets/images/COREN.jpg";
import NSELogo from "../assets/images/nse_logo.png";
import { motion } from "motion/react";

export default function CredibilitySection() {
  const accreditations = [
    {
      title: "COREN Accredited",
      subtitle: "Council for the Regulation of Engineering in Nigeria",
      badge: "COREN Licensed",
      desc: "All lead project engineers hold full COREN practice licenses and statutory engineering accountability.",
      url: "https://coren.gov.ng/accredited-universities/",
      logo: CorenLogo,
      stripe: "bg-emerald-500",
      stamp: "border-emerald-600/40 text-emerald-700",
      glow: "group-hover:shadow-emerald-500/10",
    },
    {
      title: "RICS Standards Compliance",
      subtitle: "Royal Institution of Chartered Surveyors Guidelines",
      badge: "RICS Aligned",
      desc: "Commercial cost estimation, quantity surveying, and BOQ auditing follow international surveyor standards.",
      url: "https://www.rics.org/profession-standards/rics-standards-and-guidance",
      logo: RicsLogo,
      stripe: "bg-sky-500",
      stamp: "border-sky-600/40 text-sky-700",
      glow: "group-hover:shadow-sky-500/10",
    },
    {
      title: "FIDIC Contract Governance",
      subtitle: "International Federation of Consulting Engineers",
      badge: "FIDIC Standards",
      desc: "Standardized FIDIC & JCT contract drafting preventing contractor claims and mid-build cost inflations.",
      url: "https://fidic.org/",
      logo: FDICLogo,
      stripe: "bg-blue-500",
      stamp: "border-blue-600/40 text-blue-700",
      glow: "group-hover:shadow-blue-500/10",
    },
    {
      title: "NSE membership & compliance",
      subtitle: "Council for the Regulation of Engineering in Nigeria",
      badge: "NSE Licensed",
      desc: "All lead project engineers hold full NSE practice licenses and statutory engineering accountability.",
      url: "https://nse.gov.ng/",
      logo: NSELogo,
      stripe: "bg-emerald-500",
      stamp: "border-emerald-600/40 text-emerald-700",
      glow: "group-hover:shadow-emerald-500/10",
    },
  ];

  const testimonials = [
    {
      quote:
        "Developing an 18-storey high-rise from London used to be nerve-wracking. Gamah Projects provided live webcam feeds, weekly drone reports, and verified every single contractor invoice. They saved us over ₦2.1 Billion in inflated variation claims.",
      author: "Dr. Babatunde Adegoke",
      role: "Managing Director, Diaspora Capital Investment Group",
      location: "London, UK & Lagos, NG",
      project: "Ikoyi Luxury Residential Towers",
      rating: 5,
    },
    {
      quote:
        "Gamah Projects operates as our indispensable fiduciary shield in West Africa. Their pre-construction BOQ audit identified structural redundancy and re-negotiated unit prices, delivering 14% bottom-line savings before ground was even broken.",
      author: "Eleanor Vance-Smyth",
      role: "Head of Infrastructure Risk, Emerging Markets Capital",
      location: "City of London, United Kingdom",
      project: "Abuja Tier-3 Data Center & Tech Hub",
      rating: 5,
    },
    {
      quote:
        "As an SME commercial developer in Lagos, we needed an independent partner to keep our main contractor accountable. Gamah's site engineers strictly enforced COREN material specifications with zero tolerance for sub-standard concrete.",
      author: "Arc. Folake Olanrewaju",
      role: "Chief Operating Officer, Zenith Commercial Properties",
      location: "Lagos, Nigeria",
      project: "Lekki Coast Mixed-Use Mall",
      rating: 5,
    },
  ];

  const trustGuarantees = [
    "Zero Contractor Conflict of Interest (We Never Construct or Subcontract)",
    "Independent Material Tensile & Cube Strength Laboratory Testing",
    "24/7 Encrypted Client Portal with HD Live Stream Site Webcams",
    "Milestone-based Escrow Disbursement Authorization",
    "Post-Occupancy Snagging Rectification & Facility Handover Audits",
    "COREN & NSE Qualified Senior Civil Engineers on Every Site",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] } as const,
    }),
  };

  return (
    <section className="py-24 bg-linear-to-b from-navy-dark via-navy-dark to-[#080c16] border-t border-white/10 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-warm-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-warm-gold/10 border border-warm-gold/30 px-3.5 py-1 rounded-full text-warm-gold text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-warm-gold" />
            <span>Fiduciary Integrity & Compliance</span>
          </div>
          <h2 className="font-sans font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Why Institutional & Diaspora Investors Trust Gamah Projects
          </h2>
          <p className="font-sans text-sm md:text-base text-text-body leading-relaxed">
            Unbiased client representation backed by official engineering accreditation bodies, international contract frameworks, and unyielding financial transparency.
          </p>
        </div>

        {/* ACCREDITATIONS — CERTIFICATE-STYLE CARDS */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {accreditations.map((item, index) => {
              const isExternal = item.url.startsWith("http");

              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`group rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 bg-white/[0.02] shadow-xl transition-shadow duration-300 ${item.glow}`}
                >
                  {/* Accent seal stripe */}
                  <div className={`h-1.5 w-full ${item.stripe}`} />

                  {/* Letterhead panel — logo on white, stamp badge overlapping the corner */}
                  <div className="relative bg-white px-6 pt-7 pb-6 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="h-16 max-w-[70%] object-contain"
                    />
                    <span
                      className={`absolute -bottom-3 right-5 rotate-[-6deg] bg-white border-2 ${item.stamp} text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 pt-8 space-y-4 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-sans font-bold text-lg text-white group-hover:text-warm-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-mono text-warm-gold/90 uppercase tracking-wider leading-snug">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-[#b8c4d0] leading-relaxed pt-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5">
                      <a
                        href={item.url}
                        target={isExternal ? "_blank" : "_self"}
                        rel={isExternal ? "noopener noreferrer" : ""}
                        className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-warm-gold hover:text-white transition-colors group/link"
                      >
                        <span>Verify Governance Guidelines</span>
                        <ExternalLink className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TRUST GUARANTEES & FIDUCIARY CHARTER BOX */}
  <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-navy-dark via-[#0d1321] to-navy-dark border border-warm-gold/30 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs font-bold text-warm-gold uppercase tracking-widest block">
                FIDUCIARY CHARTER & GUARANTEE
              </span>
              <h3 className="font-sans font-extrabold text-white text-2xl sm:text-3xl leading-snug">
                100% Unbiased Client Representation
              </h3>
              <p className="text-xs md:text-sm text-text-body leading-relaxed">
                Because Gamah Projects is an independent consultancy and does not undertake construction contracts, we hold zero financial interest in contractor markups or variation claims. Our sole allegiance is protecting your capital and enforcing quality standards.
              </p>
              <div className="pt-2 flex items-center space-x-4 text-xs font-mono text-electric-teal">
                <span className="flex items-center space-x-1.5">
                  <Lock className="w-4 h-4 text-[#4a90d9]" />
                  <span>Escrow Safe</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Building2 className="w-4 h-4 text-[#4a90d9]" />
                  <span>COREN Certified</span>
                </span>
              </div>
            </div>
 
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {trustGuarantees.map((guarantee, gIdx) => (
                <div
                  key={gIdx}
                  className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-white/90 font-sans leading-snug">
                    {guarantee}
                  </span>
                </div>
              ))}
            </div>
 
          </div>
        </motion.div>

        {/* CLIENT & INVESTOR TESTIMONIAL CARDS */}
       <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="font-sans font-bold text-xs tracking-widest text-warm-gold uppercase">
              CLIENT TESTIMONIALS & CASE VERDICT
            </span>
            <h3 className="font-sans font-extrabold text-white text-2xl sm:text-3xl">
              What Our Investors & Partners Say
            </h3>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-warm-gold/40 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
              >
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-warm-gold/30 group-hover:text-warm-gold/60 transition-colors" />
                  <p className="font-sans text-xs sm:text-sm text-[#b8c4d0] leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
 
                <div className="pt-4 border-t border-white/5 space-y-1">
                  <p className="font-sans font-bold text-sm text-white">{t.author}</p>
                  <p className="font-sans text-xs text-warm-gold">{t.role}</p>
                  <div className="flex items-center justify-between pt-2 text-[10px] font-mono text-[#b8c4d0]/60">
                    <span>{t.location}</span>
                    <span className="text-electric-teal font-bold">{t.project}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}