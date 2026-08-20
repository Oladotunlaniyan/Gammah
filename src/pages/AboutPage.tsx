import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Award, MapPin, ArrowRight, Building2, Globe2, HardHatIcon, Ruler, Calculator, Quote, UserPlus, CheckCircle2 } from "lucide-react";
import heroConstructionBg from "../assets/images/photo_2026-07-21_18-39-46.jpg";
import founderPhoto from "../assets/images/photo_2026-08-17_14-28-46.jpg";
import HomeCta from "../components/HomeCta";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const },
};

const MotionLink = motion(Link);

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
    text: "Across Nigeria and Africa, projects routinely suffer cost overruns, delays, and quality gaps due to weak governance and limited independent oversight. Without professional project management, even well-funded developments fall short of expectations.",
  },
  {
    number: "02",
    title: "Why We Exist",
    text: "We deliver independent project advisory, engineering consultancy, and project management that puts client interests first. By combining local market knowledge with international best practices, we improve transparency, reduce risk, and deliver lasting value.",
  },
  {
    number: "03",
    title: "Zero Conflict of Interest",
    text: "We do not undertake construction work, employ subcontractors, or hold supplier contracts. Unlike traditional firms that also build or design, we act solely in your interest, so our advice is always unbiased.",
  },
  {
    number: "04",
    title: "Quality Without Compromise",
    text: "We enforce rigorous quality assurance, compliance verification, and proactive risk management throughout the project lifecycle. Issues are flagged early and addressed immediately before they escalate.",
  },
  {
    number: "05",
    title: "Capital Protection",
    text: "We structure payments around verified progress. With mobilisation fees, milestone-based disbursements, and monthly advance invoicing, your capital is protected and only released when work is confirmed.",
  },
  {
    number: "06",
    title: "Trust Built on Results",
    text: "From private developers and corporate clients to institutional investors, we build long-term relationships through transparent reporting, professional discipline, and a proven commitment to successful project delivery.",
  },
];

  return (
    <div className="pt-16 md:pt-18 bg-navy-dark text-text-body font-sans space-y-0">
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
                We deliver independent project services and an unwavering commitment to our clients' interests.
              </motion.p>
              <motion.div variants={fadeUp} className="pt-2">
                <MotionLink
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  to="/services"
                  className="inline-flex items-center space-x-2.5 bg-[#4a90d9] hover:bg-[#3a7bc9] text-white font-sans font-semibold text-sm sm:text-base px-8 py-4 rounded-none sm:rounded transition-all shadow-xl"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </MotionLink>
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
  Gamah Projects is an independent project advisory and management consultancy dedicated to improving project delivery across Africa. We partner with developers, investors, corporate organisations, and public-sector clients to provide expert oversight, manage risk, and protect capital through every phase of the project lifecycle.
</motion.p>
<motion.p
  variants={fadeUp}
  className="font-sans text-sm sm:text-base text-[#b8c4d0] leading-relaxed"
>
  By combining local market insight with international best practices, we help clients strengthen governance, improve quality, and achieve transparent outcomes. We do not undertake execution work, employ subcontractors, or hold supplier contracts ensuring our advice remains unbiased and entirely in your interest.
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
              We believe ethical  oversight starts at the top, with zero contractor conflict of interest and an unyielding commitment to structural discipline.
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
                      src={founderPhoto}
                      alt="Engr. Gbenga Daniel Akinsipe - Founder"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-sans font-extrabold text-white text-2xl sm:text-3xl tracking-tight">
                      Engr. Gbenga Daniel Akinsipe
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-warm-gold font-semibold">
                      Founder | Project Delivery & Engineering Specialist
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                 <p>
  Daniel Akinsipe founded Gamah Projects to deliver independent project advisory and management services across Africa. A COREN registered Civil Engineer and Glasgow Caledonian University graduate, he brings international project delivery expertise to clients seeking transparent, expert oversight.
</p>
<p>
  The firm operates on one principle: <strong className="text-white font-semibold">we do not undertake execution work, employ subcontractors, or hold supplier contracts</strong>. Our loyalty is entirely to the client.
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
                  <span>5+ Years Structural Practice</span>
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
                  <h3 className="font-sans font-black text-white text-2xl sm:text-3xl tracking-tight leading-tight">
                    Join Our Oversight Team
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                    We are always seeking ethical, uncompromising project management professionals. From project managers and consultants to independent auditors and specialists, we are looking for people committed to transparency, accountability, and delivering every project to the highest standard.
                  </p>
                </div>
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
                  Reach out with your credentials to explore opportunities.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <HomeCta />
    </div>
  );
}