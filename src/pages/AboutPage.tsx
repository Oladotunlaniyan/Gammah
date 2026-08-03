import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Award, MapPin, ArrowRight, Building2, Globe2, HardHatIcon, Ruler, Calculator, Quote, UserPlus, CheckCircle2 } from "lucide-react";
import heroConstructionBg from "../assets/images/photo_2026-07-21_18-39-46.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } as const },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 } as const,
  },
};

const viewportOnce = { once: true, margin: "-80px" };

export default function AboutPage() {
  const leadershipValues = [
    {
      title: "UK Governance Standards",
      desc: "Applying rigorous UK commercial governance, cost auditing, and safety protocols to West African developments.",
      icon: Award,
    },
    {
      title: "COREN & RICS Certified",
      desc: "Fully registered civil & quantity surveying engineering professionals accountable to international standards.",
      icon: Shield,
    },
    {
      title: "100% Client-Side Alignment",
      desc: "We do not hold construction contracts or employ subcontractors. Our loyalty is exclusively to the client.",
      icon: Building2,
    },
    {
      title: "Dual Jurisdiction Oversight",
      desc: "Providing seamless communication, transparent webcam updates, and legal escrow security for diaspora investors.",
      icon: Globe2,
    },
  ];

  const storyBlocks = [
    {
      number: "01",
      title: "The Problem We Saw",
      text: "For years, diaspora families and overseas investors faced the same heartbreak: sending hard-earned savings home to build in Nigeria, only to be met with vague updates, inflated invoices, compromised concrete, and contractors who grade their own homework. When you are thousands of miles away in London, Texas, or Dubai, you cannot physically inspect rebar or verify actual street prices.",
    },
    {
      number: "02",
      title: "Why We Exist",
      text: "We built Gamah Projects for one simple reason: to be your honest eyes, ears, and engineering shield on the ground. We don't construct buildings and we never take a penny from contractors. Our only job is telling you the truth—testing materials in independent laboratories and ensuring your money is protected every step of the way.",
    },
    {
      number: "03",
      title: "Zero Contractor Conflict",
      text: "In an industry where many supervisors also sell materials or take commissions from builders, we drew a hard line. We never sell cement, hire laborers, or hold construction contracts. Because we have zero financial stake in who builds your project, our advice and audits remain 100% unbiased and loyal to you.",
    },
    {
      number: "04",
      title: "Truth Over Comfort",
      text: "We believe in catching structural issues early rather than hiding them. When a concrete batch fails a compressive strength test or reinforcement bars fall short of specification, we stop work and report it immediately—long before defects get buried under plaster and paint.",
    },
    {
      number: "05",
      title: "Escrow & Client Protection",
      text: "We tie your hard-earned capital to verified physical progress. Every payment recommendation is backed by date-stamped photographs, independent laboratory test certificates, and RICS-compliant quantity surveyor valuations, so you never pay for promises—only results.",
    },
    {
      number: "06",
      title: "Earning Permanent Trust",
      text: "With every verified build, our reputation grew. From individual diaspora homes in Lagos and Abuja to multi-billion Naira institutional developments, clients seek out Gamah Projects for our unwavering honesty, engineering discipline, and commitment to delivering peace of mind.",
    },
  ];

  return (
    <div className="pt-16 md:pt-18 bg-navy-dark text-text-body font-sans space-y-0 h-screen">
      {/* ABOUT PAGE HEADER HERO */}
      <section className="relative w-full overflow-hidden bg-[#0d1321]">
        <div className="relative min-h-110 lg:min-h-130 w-full flex items-center pb-40 lg:pb-52 pt-16 md:pt-24">
          <motion.img
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            src={heroConstructionBg}
            alt="Construction scaffolding and structural engineering"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0d1321]/90 via-[#0d1321]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#0d1321] via-transparent to-transparent opacity-60"></div>

          {/* Left-Aligned Hero Content */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="max-w-2xl space-y-6"
            >
              <motion.h1
                variants={fadeUp}
                className="font-sans font-extrabold text-white text-4xl sm:text-5xl lg:text-[62px] tracking-tight leading-[1.12]"
              >
                Project management solutions <br />
                for everyone
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="font-sans text-sm sm:text-base text-white/90 leading-relaxed max-w-xl"
              >
                We deliver independent project oversight backed by COREN engineering expertise, RICS standards, and an unwavering commitment to our clients' interests.
              </motion.p>
              <motion.div variants={fadeUp} className="pt-2">
                <motion.a
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  href="#about-mission"
                  className="inline-flex items-center space-x-2.5 bg-[#4a90d9] hover:bg-[#3a7bc9] text-white font-sans font-semibold text-sm sm:text-base px-8 py-4 rounded-none sm:rounded transition-all shadow-xl"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* OVERLAPPING STATS & FEATURES GRID SECTION */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative z-20 -mt-36 sm:-mt-44 lg:-mt-52 max-w-7xl mx-auto px-6 md:px-12 pb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            {/* Left 2-Column Stats Blocks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 self-end">
              <motion.div
                variants={fadeUp}
                className="bg-[#031d40] text-white p-8 sm:p-12 flex flex-col justify-center min-h-70 sm:min-h-70 border-b sm:border-b-0 sm:border-r border-white/10"
              >
                <span className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none">
                  10+
                </span>
                <span className="font-sans font-semibold text-base sm:text-lg text-white/95 mt-3">
                  Completed Projects
                </span>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-warm-gold text-white p-8 sm:p-12 flex flex-col justify-center min-h-[240px] sm:min-h-[280px]"
              >
                <span className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight leading-none">
                  5+
                </span>
                <span className="font-sans font-semibold text-base sm:text-lg text-white/95 mt-3">
                  Years of Experience
                </span>
              </motion.div>
            </div>

            {/* Right Elevated White Feature Card */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-5 bg-white p-8 sm:p-10 lg:p-12 text-[#0d1321] space-y-8 shadow-2xl border border-gray-100/60"
            >
              {[
                { Icon: HardHatIcon, title: "Project Delivery", desc: "End to end project leadership that keeps initiatives aligned with scope, budget, schedule, and business objectives." },
                { Icon: Ruler, title: "Strategy & Planning", desc: "Clear roadmaps, governance frameworks, and execution strategies that drive successful project outcomes." },
                { Icon: Calculator, title: "Risk & Performance", desc: "Proactive risk management, performance monitoring, and independent oversight that ensure measurable results." },
              ].map(({ Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="flex items-start space-x-5"
                >
                  <div className="shrink-0 pt-1">
                    <Icon className="w-12 h-12" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-extrabold text-lg sm:text-xl text-[#0d1321]">
                      {title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT COPY SECTION */}
      <section className="py-20 md:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="lg:col-span-7 space-y-6"
            >
              <motion.h2
                variants={fadeUp}
                className="font-sans font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight"
              >
                About Gamah Projects
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="font-sans text-sm sm:text-base text-[#b8c4d0] leading-relaxed"
              >
                Gamah Projects is an independent construction project management and fiduciary advisory agency passionate about protecting capital and enforcing structural discipline. We specialize in civil engineering oversight, quantity surveying, and contractor accountability, helping diaspora families, institutional developers, and businesses build safely across West Africa.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="font-sans text-sm sm:text-base text-[#b8c4d0] leading-relaxed"
              >
                At Gamah Projects, we follow a rigorous and transparent inspection process to ensure the successful delivery of exceptional developments. Our process combines UK commercial governance, COREN &amp; RICS engineering best practices, and an unwavering client-centric approach.
              </motion.p>
            </motion.div>

            <div className="lg:col-span-5">
              {/* <CrosshairEmblemCard /> */}
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Our Story
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20"
          >
            {storyBlocks.map((block) => (
              <motion.div
                key={block.number}
                variants={fadeUp}
                className="group flex flex-col space-y-4 border-t border-white/10 pt-8 transition-colors hover:border-warm-gold/40"
              >
                <div className="flex items-baseline space-x-4">
                  <span className="font-sans font-black text-5xl sm:text-6xl text-warm-gold tracking-tighter leading-none select-none">
                    {block.number}
                  </span>
                  <h3 className="font-sans font-bold text-white text-xl sm:text-2xl tracking-tight">
                    {block.title}
                  </h3>
                </div>
                <p className="font-sans text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                  {block.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 md:py-32 border-b border-white/10 bg-[#0d1321]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-3xl space-y-4"
          >
            <motion.h2
              variants={fadeUp}
              className="font-sans font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            >
              Our Leadership
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="font-sans text-sm sm:text-base md:text-lg text-[#94a3b8] leading-relaxed"
            >
              We believe ethical construction oversight starts at the top, with zero contractor conflict of interest and an unyielding commitment to structural discipline.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
          >
            {/* Left: Founder Profile Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="lg:col-span-7 rounded-3xl bg-[#0d1321] border border-white/10 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-colors hover:border-warm-gold/40"
            >
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-warm-gold/40 flex-shrink-0 shadow-lg">
                    <img
                      // src={founderPhoto}
                      alt="Engr. Gbenga Daniel Akinsipe - Founder & Lead Civil Engineer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-warm-gold/10 text-warm-gold border border-warm-gold/30">
                        <Award className="w-3 h-3 mr-1" />
                        COREN Registered
                      </span>
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-white/5 text-[#b8c4d0] border border-white/10">
                        MNSE Member
                      </span>
                    </div>
                    <h3 className="font-sans font-extrabold text-white text-2xl sm:text-3xl tracking-tight">
                      Engr. Gbenga Daniel Akinsipe
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-warm-gold font-semibold">
                      Founder & Lead Civil Engineer (COREN, MNSE, RICS Affiliate)
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                  <p>
                    With over two decades of structural engineering practice across UK commercial governance and Nigerian capital projects, Engr. Akinsipe founded Gamah Projects to give diaspora investors and developers an unvarnished engineering shield on the ground.
                  </p>
                  <p>
                    He built Gamah Projects on a non-negotiable principle: <strong className="text-white font-semibold">zero financial ties to contractors, builders, or material suppliers</strong>. His loyalty remains entirely with the client—ensuring every bag of cement, reinforcement bar, and concrete pour meets international safety specifications.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 flex items-start space-x-4">
                  <Quote className="w-6 h-6 text-warm-gold flex-shrink-0 mt-0.5 opacity-80" />
                  <p className="text-xs sm:text-sm text-white italic leading-relaxed">
                    &ldquo;When you don&apos;t sell the materials or take a cut from the contractor, you can tell the absolute truth about how much cement was really used.&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#94a3b8] gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-warm-gold" />
                  <span>Lagos &bull; Abuja &bull; London Advisory</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-electric-teal" />
                  <span>25+ Years Structural Practice</span>
                </div>
              </div>
            </motion.div>

            {/* Right: "Join Our Team" Card */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#0d1321] via-[#111827] to-[#0a0e17] border border-warm-gold/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-colors hover:border-warm-gold/60"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-warm-gold/10 border border-warm-gold/30 px-3 py-1 rounded-full text-warm-gold text-xs font-mono font-bold uppercase tracking-widest">
                    <span>Careers &amp; Network</span>
                  </div>
                  <h3 className="font-sans font-black text-white text-2xl sm:text-3xl tracking-tight leading-tight">
                    Join Our Oversight Team
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                    We are always seeking ethical, uncompromising civil engineers, RICS-certified quantity surveyors, and independent project auditors across Lagos, Abuja, and Port Harcourt who refuse to grade their own homework.
                  </p>
                </div>

                <ul className="space-y-3 pt-2 border-t border-white/10">
                  <li className="flex items-center space-x-3 text-sm text-[#b8c4d0]">
                    <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0" />
                    <span>100% Independent Client Fiduciary Roles</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-[#b8c4d0]">
                    <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0" />
                    <span>Rigorous Field &amp; Laboratory Testing Standards</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm text-[#b8c4d0]">
                    <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0" />
                    <span>Zero Contractor Kickbacks Policy</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 space-y-3">
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-[#0a0e17] font-sans font-bold text-sm sm:text-base px-6 py-4 rounded-xl transition-all shadow-lg"
                  >
                    <span>Join the Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <p className="text-center text-xs text-[#94a3b8]">
                  Reach out with your COREN / RICS credentials to explore opportunities.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-navy-dark text-center border-t border-white/10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto px-6 space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-sans font-extrabold text-white text-3xl sm:text-4xl"
          >
            Partner with an Independent PMC
          </motion.h2>
          <motion.p variants={fadeUp} className="font-sans text-text-body text-sm sm:text-base">
            Reach out to our advisory team today to discuss your project scale, feasibility requirements, or on-site risk audit needs.
          </motion.p>
          <motion.div variants={fadeUp}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-navy-dark font-sans font-bold text-sm px-8 py-4 rounded-full transition-all shadow-xl"
              >
                <span>Contact Advisory Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}