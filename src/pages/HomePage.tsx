import Hero from "../components/Hero";
import ServicesSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import HomeCta from "../components/HomeCta";
import CredibilitySection from "../components/CredibilitySection";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CredibilitySection />
      <HomeCta />
    </div>
  );
}
