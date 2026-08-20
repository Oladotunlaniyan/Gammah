import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, ChevronDown, Loader2, AlertTriangle } from "lucide-react";


const EMAILJS_SERVICE_ID = "service_zdd8s44";
const EMAILJS_TEMPLATE_ID = "template_d70nuhg";
const EMAILJS_PUBLIC_KEY = "AITX31GXbwk0VKe5g";

interface FormData {
  name: string;
  email: string;
  phone: string;
  siteLocation: string;
  referralSource: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  siteLocation: "",
  referralSource: "",
  message: "",
};

const FAQS = [
  {
    "q": "Do you only manage construction projects?",
    "a": "No. We are a general project management consultancy. We handle corporate initiatives, infrastructure, industrial developments, organizational change, and any complex project that needs independent oversight."
  },
  {
    "q": "What does 'independent PMC' mean ?",
    "a": "It means we have no stake in vendors, suppliers, or execution teams. Whether your project is a tech rollout, a corporate expansion, or a public-sector program, our only loyalty is to you."
  },
  {
    "q": "What types of projects do you actually manage?",
    "a": "Any project that requires planning, governance, risk control, and delivery oversight. This includes construction, but also corporate strategy rollouts, operational improvements, procurement programs, and institutional developments."
  },
  {
    "q": "When should we bring you in?",
    "a": "At the planning stage before commitments are made. But we also join mid-project to recover slipping schedules, audit progress, or fix governance gaps across any industry."
  },
  {
    "q": "Are your consultants only engineers?",
    "a": "No. While we have strong engineering credentials, our team applies universal project management principles scheduling, budgeting, risk management, and stakeholder coordination to every sector we serve."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          site_location: formData.siteLocation,
          referral_source: formData.referralSource,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitted(true);
      setFormData(INITIAL_FORM);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setError(
        "Something went wrong sending your brief. Please try again, or email us directly at info@gamahprojects.com."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-24 md:pt-28 bg-navy-dark text-text-body font-sans space-y-0">

      {/* PAGE HERO */}
      <section className="relative py-16 md:py-24 bg-linear-to-b from-[#0d1321] via-navy-dark to-navy-dark border-b border-white/10">
        <motion.div
          className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Connect with Our Project Advisory Team
          </h1>
        </motion.div>
      </section>

      {/* CONTACT FORM & LOCATIONS GRID */}
      <section className="py-20 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              className="lg:col-span-5 space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              {/* Office Cards */}
              <div className="space-y-6">
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white/2 border border-white/10 space-y-3"
                >
                  <div className="flex items-center space-x-3 text-electric-teal">
                    <MapPin className="w-5 h-5 shrink-0" />
                    <h3 className="font-sans font-bold text-base text-white">Abuja Regional Office</h3>
                  </div>
                  <p className="text-xs text-text-body pl-8">
                    Central Business District, Abuja, FCT
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white/2 border border-white/10 space-y-3"
                >
                  <div className="flex items-center space-x-3 text-warm-gold">
                    <MapPin className="w-5 h-5 shrink-0" />
                    <h3 className="font-sans font-bold text-base text-white">London Liaison Office (UK)</h3>
                  </div>
                  <p className="text-xs text-text-body pl-8">
                    City of London, United Kingdom
                  </p>
                </motion.div>
              </div>

              {/* Direct Channels */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-4 pt-4 border-t border-white/10"
              >
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-warm-gold/10 flex items-center justify-center text-warm-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-body/60 uppercase tracking-widest font-sans">Official Email</p>
                    <a href="mailto:info@gamahprojects.com" className="text-sm font-bold text-white hover:text-warm-gold transition-colors font-sans">
                      info@gamahprojects.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-electric-teal/10 flex items-center justify-center text-electric-teal">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-text-body/60 uppercase tracking-widest font-sans">Direct Hotline</p>
                    <a href="tel:+2348030000000" className="text-sm font-bold text-white hover:text-warm-gold transition-colors font-sans">
                      +234 (0) 803 000 0000
                    </a>
                  </div>
                </motion.div>
              </motion.div>

            </motion.div>

            {/* RIGHT COLUMN: PROJECT BRIEF FORM */}
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="p-10 rounded-2xl bg-white/3 border border-warm-gold/50 text-center space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-warm-gold/20 text-warm-gold flex items-center justify-center mx-auto"
                    >
                      <CheckCircle2 className="w-10 h-10" />
                    </motion.div>
                    <h3 className="font-sans font-bold text-2xl text-white">Project Brief Received!</h3>
                    <p className="text-sm text-text-body leading-relaxed max-w-md mx-auto">
                      Thank you. Our senior PMC lead will review your submission and contact you within 24 hours to schedule a confidential advisory call.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSubmitted(false)}
                      className="bg-warm-gold text-navy-dark font-sans font-bold text-xs px-6 py-3 rounded-full hover:bg-warm-gold/90 transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="p-8 md:p-10 rounded-2xl bg-white/2 border border-white/10 space-y-6"
                  >
                    <div className="border-b border-white/5 pb-4">
                      <h3 className="font-sans font-bold text-xl text-white">Submit a Confidential Project Brief</h3>
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
                          value={formData.name}
                          onChange={handleChange}
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
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. name@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2 font-sans">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +44 7000 000000 or +234..."
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="referralSource" className="block text-xs font-semibold uppercase tracking-wider text-white mb-2 font-sans">
                          Where did you hear about us?
                        </label>
                        <input
                          type="text"
                          id="referralSource"
                          value={formData.referralSource}
                          onChange={handleChange}
                          placeholder="e.g. Referral, LinkedIn, Google search..."
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                        />
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
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Outline your project scope, current stage (feasibility, ongoing build, audit needed), and primary goals..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-warm-gold text-sm font-sans transition-colors"
                      />
                    </div>

                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex items-start space-x-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 overflow-hidden"
                        >
                          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                          <p className="text-xs text-red-200 font-sans leading-relaxed">{error}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{ scale: sending ? 1 : 1.01 }}
                      whileTap={{ scale: sending ? 1 : 0.98 }}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 disabled:opacity-60 disabled:cursor-not-allowed text-navy-dark font-sans font-bold text-base py-4 rounded-lg transition-all duration-300 hover:shadow-[0_4px_20px_rgba(201,169,110,0.25)] cursor-pointer"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-[11px] text-text-body/60 text-center font-sans">
                      🔒 All disclosures are held strictly confidential under non-disclosure governance.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-24 bg-navy-dark border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <motion.div
            className="text-center space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <motion.div
                  key={faq.q}
                  variants={fadeUp}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-xl bg-white/2 border border-white/10 overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-sans font-bold text-base text-white">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-warm-gold" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="px-6 border-t border-white/5 overflow-hidden"
                      >
                        <p className="font-sans text-sm text-text-body leading-relaxed pt-4 pb-6">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}