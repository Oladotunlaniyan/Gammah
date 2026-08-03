import ServicesSection from "../components/ServiceSection";
// import PartnersStrip from "../components/PartnersStrip";
import { Link } from "react-router-dom";
import { ShieldCheck, CheckCircle2, ArrowRight, AlertTriangle, FileText, Cpu, Scale } from "lucide-react";

export default function ServicesPage() {
  const serviceModules = [
    {
      title: "01. Feasibility & Pre-Construction Commercial Structuring",
      description: "Before committing capital, our team conducts comprehensive independent risk audits, site suitability analyses, and BOQ cost benchmarking.",
      deliverables: [
        "Independent Site & Regulatory Risk Assessment",
        "Bill of Quantities (BOQ) Commercial Benchmarking",
        "UK-Standard Contract & Procurement Advice (JCT/FIDIC)",
        "Contractor Financial Due Diligence"
      ],
      icon: Scale,
    },
    {
      title: "02. Digital Project Controls & Schedule Management",
      description: "Eliminate hidden cost inflations and schedule slippages with cloud-backed real-time progress tracking and drone/webcam verification.",
      deliverables: [
        "Earned Value Management (EVM) Tracking",
        "Cloud-based Progress Dashboard & Weekly Reports",
        "Independent Schedule Slippage Verification",
        "Milestone-based Contractor Disbursement Authorization"
      ],
      icon: Cpu,
    },
    {
      title: "03. Quality Assurance & On-Site Engineering Audit",
      description: "Ensuring structural integrity, material specification compliance, and strict adherence to COREN/RICS engineering benchmarks.",
      deliverables: [
        "Material Batch & Concrete Cube Strength Inspections",
        "M&E and Ductwork Quality Compliance Audits",
        "Health, Safety & Environment (HSE) Field Inspections",
        "Non-Conformance Report (NCR) Resolution"
      ],
      icon: ShieldCheck,
    },
    {
      title: "04. Fiduciary Handover & Final Account Settlement",
      description: "Guaranteeing dispute-free project handovers, final account audits, and long-term asset operation governance for investors.",
      deliverables: [
        "Final Account Cost Reconciliation & Savings Audit",
        "Snagging List Compilation & Rectification Management",
        "As-Built Documentation & Statutory Approval Handover",
        "Post-Occupancy Facility Governance Strategy"
      ],
      icon: FileText,
    }
  ];

  return (
    <div className="pt-24 md:pt-28 bg-navy-dark text-text-body font-sans space-y-0">
      
      {/* PAGE HEADER HERO BANNER */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0d1321] via-navy-dark to-[#0a0e17] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-warm-gold/10 border border-warm-gold/30 px-3 py-1 rounded-full text-warm-gold text-xs font-mono font-bold uppercase tracking-widest">
            <span>Core Competencies</span>
          </div>
          <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Integrated Project Management Consultancy
          </h1>
          <p className="font-sans text-base md:text-lg text-[#b8c4d0] leading-relaxed max-w-2xl mx-auto">
            We provide unbiased, client-side project governance. As an independent PMC, we do not construct—we manage risk, enforce standards, and protect your financial interests.
          </p>
        </div>
      </section>

      {/* MAIN INTERACTIVE SERVICES SECTION */}
      <ServicesSection />

      {/* DETAILED SERVICE MODULES BREAKDOWN */}
      <section className="py-24 bg-[#0a0e17] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-sans font-bold text-xs tracking-widest text-warm-gold uppercase">
              PMC CAPABILITY FRAMEWORK
            </span>
            <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl">
              End-to-End Capital Protection Modules
            </h2>
            <p className="font-sans text-sm md:text-base text-[#b8c4d0]">
              Every module is designed to eliminate opacity, prevent budget inflations, and ensure strict UK-grade governance in local African markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceModules.map((module, idx) => {
              const IconComp = module.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-warm-gold/40 transition-all duration-300 space-y-6 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-warm-gold/10 border border-warm-gold/20 text-warm-gold flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans font-bold text-xl text-white">
                      {module.title}
                    </h3>
                    <p className="font-sans text-sm text-[#b8c4d0] leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-electric-teal">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#b8c4d0]">
                      {module.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTRACTING AFFILIATES STRIP */}
      {/* <PartnersStrip /> */}

      {/* CTA FOOTER CALL */}
      <section className="py-20 bg-navy-dark text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl">
            Need Tailored Advisory for Your Project?
          </h2>
          <p className="font-sans text-[#b8c4d0] text-sm sm:text-base">
            Speak to our senior consultants in Lagos or London to review your project specs, feasibility documents, or ongoing site controls.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-navy-dark font-sans font-bold text-sm px-8 py-4 rounded-full transition-all shadow-xl"
            >
              <span>Schedule Advisory Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
