import { useState } from "react";
import { Link } from "react-router-dom";
// import PartnersStrip from "../components/PartnersStrip";
import {CheckCircle2, MapPin, ArrowRight, Video} from "lucide-react";
// import dashboardBg from "../assets/images/digital_construction_dashboard_1784733140938.jpg";
// import lagosGoldenHour from "../assets/images/lagos_construction_golden_hour_1784628062031.jpg";
// import bridgeImg from "../assets/images/london_lagos_bridge_1784715740195.jpg";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Infrastructure", "Institutional"];

  const projects = [
    {
      id: 1,
      title: "Ikoyi Luxury Residential Towers",
      category: "Residential",
      location: "Ikoyi, Lagos, Nigeria",
      value: "₦18.5 Billion ($12M)",
      client: "Diaspora Private Investor Group",
      role: "Lead PMC & Financial Governance Consultant",
    //   image: lagosGoldenHour,
      metrics: {
        budgetSaved: "14.2% Cost Inflation Avoided",
        scheduleVariance: "0 Days Slippage",
        qualityScore: "99.4% COREN/RICS Pass",
      },
      summary: "Full client-side project oversight for an 18-storey luxury residential development. Gamah Projects established independent milestone disbursement controls, preventing contractor front-loading and material substitution.",
      highlights: [
        "Digital webcam & drone milestone reporting",
        "Concrete cube & steel tensile independent testing",
        "JCT/FIDIC contract administration",
        "Disputed variance claim reduction by ₦2.1B"
      ]
    },
    {
      id: 2,
      title: "Abuja Tech Hub & Tier-3 Data Center",
      category: "Institutional",
      location: "Central Business District, Abuja, FCT",
      value: "₦24.0 Billion ($16M)",
      client: "Institutional Tech Consortium",
      role: "Engineering & MEP Oversight Consultant",
    //   image: dashboardBg,
      metrics: {
        budgetSaved: "₦1.8B Structural Optimization",
        scheduleVariance: "On Schedule (Phase 2)",
        qualityScore: "100% Ductwork & HVAC Audit",
      },
      summary: "Technical PMC and ductwork/MEP compliance auditing for a high-security data center. Partnered with specialized MEP auditors to verify thermal insulation, duct integrity, and back-up power redundancy.",
      highlights: [
        "Ductwork & HVAC airflow integrity certification",
        "Subcontractor pre-qualification audits",
        "Earned Value Management (EVM) tracking",
        "Strict compliance with ISO 9001 standards"
      ]
    },
    {
      id: 3,
      title: "Lekki Coast Mixed-Use Retail Mall",
      category: "Commercial",
      location: "Lekki Phase 1, Lagos, Nigeria",
      value: "₦12.2 Billion ($8M)",
      client: "SME Commercial Real Estate Developer",
      role: "Quantity Surveying & Commercial PMC",
    //   image: bridgeImg,
      metrics: {
        budgetSaved: "₦950M BOQ Reconciliation",
        scheduleVariance: "-2 Weeks Ahead of Plan",
        qualityScore: "98.8% Quality Rating",
      },
      summary: "Commercial cost governance and pre-construction BOQ auditing. Re-benchmarked steel and cement unit rates against market realities, saving the developer over ₦950 Million in inflated contractor line-items.",
      highlights: [
        "Bill of Quantities (BOQ) independent audit",
        "Escrow-backed contractor progress disbursements",
        "Subcontractor performance index tracking",
        "Seamless statutory approval clearance"
      ]
    },
    {
      id: 4,
      title: "Victoria Island Waterfront Boutique Hotel",
      category: "Commercial",
      location: "Victoria Island, Lagos, Nigeria",
      value: "₦15.0 Billion ($10M)",
      client: "UK-Based Diaspora Hospitality Fund",
      role: "Full PMC & Quality Assurance Lead",
    //   image: lagosGoldenHour,
      metrics: {
        budgetSaved: "₦1.1B Cost Overrun Prevented",
        scheduleVariance: "Delivered On-Time",
        qualityScore: "100% Snag-Free Handover",
      },
      summary: "End-to-end PMC representation for a 120-key boutique hotel. Monitored foundation piling, seawall waterproofing integrity, and luxury interior fit-outs under strict UK quality control standards.",
      highlights: [
        "Piling & piling cap integrity verification",
        "High-end interior fit-out snagging audits",
        "Milestone disbursement authorization",
        "Final account cost reconciliation"
      ]
    },
    {
      id: 5,
      title: "Epe Industrial Logistics & Warehouse Park",
      category: "Infrastructure",
      location: "Epe Corridor, Lagos State",
      value: "₦31.0 Billion ($20M)",
      client: "International Logistics Group",
      role: "Infrastructure Audit & Cost Governance",
    //   image: dashboardBg,
      metrics: {
        budgetSaved: "₦2.4B Infrastructure Savings",
        scheduleVariance: "0 Days Slippage",
        qualityScore: "100% Earthworks Audit",
      },
      summary: "Independent infrastructure audit for a 50-hectare logistics park. Managed soil stabilization testing, heavy-duty paving specification compliance, and stormwater drainage engineering.",
      highlights: [
        "Soil stabilization & compaction testing",
        "Heavy transport pavement thickness audit",
        "Drainage & flood risk mitigation oversight",
        "HSE compliance & zero-incident record"
      ]
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 md:pt-28 bg-navy-dark text-text-body font-sans space-y-0">
      
      {/* PORTFOLIO HERO */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#0d1321] via-navy-dark to-[#0a0e17] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-warm-gold/10 border border-warm-gold/30 px-3 py-1 rounded-full text-warm-gold text-xs font-mono font-bold uppercase tracking-widest">
            <span>Client Track Record</span>
          </div>
          <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Independent PMC Track Record & Case Studies
          </h1>
          <p className="font-sans text-base md:text-lg text-[#b8c4d0] leading-relaxed max-w-2xl mx-auto">
            Discover how Gamah Projects Consulting has protected over ₦120 Billion in capital value across residential towers, commercial malls, tech hubs, and infrastructure assets.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER & PROJECT CARDS */}
      <section className="py-16 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* CATEGORY TABS */}
          <div className="flex items-center justify-center flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-warm-gold text-navy-dark shadow-[0_4px_15px_rgba(201,169,110,0.3)] scale-105"
                    : "bg-white/5 text-[#b8c4d0] hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECTS LIST */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:border-warm-gold/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image banner */}
                  <div className="relative h-60 sm:h-64 overflow-hidden">
                    <img
                    //   src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/40 to-transparent"></div>
                    
                    {/* Top Category Badge */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="font-mono text-[10px] font-bold text-navy-dark bg-warm-gold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-warm-gold" />
                        <span>{project.location}</span>
                      </div>
                      <span className="font-mono font-bold text-electric-teal">{project.value}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 space-y-6">
                    <div>
                      <span className="text-xs text-warm-gold font-mono uppercase tracking-widest block mb-1">
                        Role: {project.role}
                      </span>
                      <h3 className="font-sans font-bold text-2xl text-white group-hover:text-warm-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#b8c4d0]/60 mt-1 font-sans">
                        Client: {project.client}
                      </p>
                    </div>

                    <p className="font-sans text-sm text-[#b8c4d0] leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                      <div>
                        <p className="text-[10px] text-[#b8c4d0]/60 uppercase font-mono">Budget Impact</p>
                        <p className="text-xs font-bold text-warm-gold mt-0.5">{project.metrics.budgetSaved}</p>
                      </div>
                      <div className="border-x border-white/5">
                        <p className="text-[10px] text-[#b8c4d0]/60 uppercase font-mono">Schedule</p>
                        <p className="text-xs font-bold text-electric-teal mt-0.5">{project.metrics.scheduleVariance}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-[#b8c4d0]/60 uppercase font-mono">Quality Rating</p>
                        <p className="text-xs font-bold text-white mt-0.5">{project.metrics.qualityScore}</p>
                      </div>
                    </div>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2">
                      <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                        PMC Governance Highlights:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#b8c4d0]">
                        {project.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-center space-x-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 pt-0">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-warm-gold text-white hover:text-navy-dark border border-white/10 font-sans font-bold text-xs py-3 rounded-xl transition-all duration-300"
                  >
                    <span>Inquire About Similar Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIVE PROGRESS MONITORING SIMULATION */}
      <section className="py-20 bg-gradient-to-r from-[#070b12] via-[#0d1321] to-[#070b12] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-electric-teal/10 border border-electric-teal/30 px-3 py-1 rounded-full text-electric-teal text-xs font-mono font-bold uppercase tracking-widest">
                <Video className="w-3.5 h-3.5" />
                <span>Proprietary Client Portal</span>
              </div>
              <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl leading-tight">
                Real-Time Remote Control for Overseas & Diaspora Investors
              </h2>
              <p className="font-sans text-sm md:text-base text-[#b8c4d0] leading-relaxed">
                Never rely on verbal assurances or unverified contractor claims. Gamah Projects provides live HD webcam streaming, weekly 3D drone progress scans, and digital milestone sign-off portals directly accessible from your smartphone anywhere in the world.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-warm-gold flex-shrink-0" />
                  <span>24/7 Live Stream Site Cameras with Time-lapse Archives</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-warm-gold flex-shrink-0" />
                  <span>Automated Earned Value Management (EVM) Financial Reports</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white">
                  <CheckCircle2 className="w-5 h-5 text-warm-gold flex-shrink-0" />
                  <span>Escrow Milestone Release Approvals with Independent Sign-off</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d1321] shadow-2xl p-4 space-y-4">
                <img
                //   src={dashboardBg}
                  alt="Digital Construction Control Dashboard"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="p-4 rounded-xl bg-navy-dark/90 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-electric-teal animate-ping"></span>
                    <span className="font-mono font-bold text-white uppercase">Live Feeds: Ikoyi Tower Cam #2</span>
                  </div>
                  <span className="font-mono text-warm-gold">100% Quality Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC AFFILIATES STRIP */}
      {/* <PartnersStrip /> */}

      {/* CTA FOOTER */}
      <section className="py-20 bg-navy-dark text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl">
            Have an Upcoming Project in Nigeria?
          </h2>
          <p className="font-sans text-[#b8c4d0] text-sm sm:text-base">
            Protect your capital before signing contracts or disbursing funds. Submit your project overview to our advisory team.
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-navy-dark font-sans font-bold text-sm px-8 py-4 rounded-full transition-all shadow-xl"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}