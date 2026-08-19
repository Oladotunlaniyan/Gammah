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
    visible: (i: number) => ({
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
          <h2 className="font-sans font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Why Institutional & Diaspora Investors Trust Gamah Projects
          </h2>
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
      </div>
    </section>
  );
}