import CaseStudiesSection from "@/components/landing/CaseStudies";
import ContactForm from "@/components/landing/ContactForm";
import HeroSection from "@/components/landing/HeroSection";
import LogoMarquee from "@/components/landing/LogoMarquee";
import ProposalSection from "@/components/landing/ProposalSection";
import Services from "@/components/landing/Services";
import ServicesSection from "@/components/landing/ServicesSection";
import Teams from "@/components/landing/Teams";
import TestimonialSlider from "@/components/landing/TestimonialSlider";
import WorkProcess from "@/components/landing/WorkProcess";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/10 dark:bg-gray-900">
      <Header />
      {/* <HeroSection /> */}
      <LogoMarquee />
      <Services />
      <ProposalSection />
      <CaseStudiesSection />
      <WorkProcess />
      <Teams />
      <TestimonialSlider />
      <div className="my-16 lg:my-0">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
