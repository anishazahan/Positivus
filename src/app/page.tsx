import ContactForm from "@/components/landing/ContactForm";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/10 dark:bg-gray-900">
      <Header />
      <HeroSection />
      <div className="my-16 lg:my-0">
        <ContactForm />
      </div>

      {/* <ServicesSection /> */}
      {/* <Testimonials
        heading="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      /> */}
      <Footer />
    </main>
  );
}
