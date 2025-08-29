import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import img from "../../assets/images/hero.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pt-20 lg:pt-44 bg-background transition-colors duration-300">
      <div className="container">
        <h1 className="pt-10 lg:pt-0 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance  lg:hidden">
          Navigating the{" "}
          <span className="text-lime-500">digital landscape</span> for success
        </h1>
        <div className="flex flex-col-reverse lg:flex-row lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-9 md:space-y-14 animate-fade-in w-full lg:w-[50%] -mt-14 sm:-mt-0 ">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance hidden lg:block">
                Navigating the{" "}
                <span className="text-lime-500">digital landscape</span> for
                success
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 ">
              <Button
                size="lg"
                className="bg-dark text-dark dark:bg-primary  dark:hover:bg-primary/90 transition-all duration-200 hover:scale-105 group dark:text-dark"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Book a consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div
            className="w-full lg:w-[50%] "
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full h-[500px] ">
              {/* Geometric shapes */}
              <Image
                src={img}
                fill
                priority
                className="object-contain"
                alt="Positivious-hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
