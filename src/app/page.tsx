import CaseStudiesSection from "@/components/landing/CaseStudies";
import ContactForm from "@/components/landing/ContactForm";
import HeroSection from "@/components/landing/HeroSection";
import LogoMarquee from "@/components/landing/LogoMarquee";
import ProposalSection from "@/components/landing/ProposalSection";
import Services from "@/components/landing/Services";
import Teams from "@/components/landing/Teams";
import TestimonialSlider from "@/components/landing/TestimonialSlider";
import WorkProcess from "@/components/landing/WorkProcess";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/10 dark:bg-gray-900">
      <Header />
      <section id="about">
        <HeroSection />
      </section>
      <LogoMarquee />
      <section id="services">
        <Services />
      </section>
      <section id="pricing">
        <ProposalSection />
      </section>
      <section id="cases">
        <CaseStudiesSection />
      </section>
      <WorkProcess />
      <Teams />
      <section id="blog">
        <TestimonialSlider />
      </section>
      <section className="my-16 lg:my-0" id="contact">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
}
