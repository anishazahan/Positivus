import ContactForm from "@/components/landing/ContactForm";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TestimonialSlider from "@/components/landing/TestimonialSlider";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/10 dark:bg-gray-900">
      <Header />
      {/* <HeroSection /> */}
      <TestimonialSlider />
      <div className="my-16 lg:my-0">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
