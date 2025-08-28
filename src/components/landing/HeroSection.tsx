import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import img from "../../assets/images/hero.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Navigating the{" "}
                <span className="text-positivus-green dark:text-primary">
                  digital landscape
                </span>{" "}
                for success
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-positivus-green text-positivus-dark hover:bg-positivus-green/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 transition-all duration-200 hover:scale-105 group"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Book a consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-border hover:bg-muted transition-all duration-200 hover:scale-105 group bg-transparent"
              >
                <Play className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Watch our story
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-positivus-green/10 to-positivus-green/5 dark:from-primary/10 dark:to-primary/5 rounded-3xl overflow-hidden border border-border/50">
              {/* Geometric shapes */}
              <Image src={img} fill priority alt="Positivious-hero-img" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Main circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-positivus-green/20 dark:bg-primary/20 rounded-full animate-pulse"></div>

                  {/* Floating elements with improved dark mode colors */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-positivus-green dark:bg-primary rounded-lg rotate-12 animate-float"></div>
                  <div className="absolute bottom-12 left-4 w-8 h-8 bg-positivus-dark dark:bg-foreground rounded-full animate-pulse"></div>
                  <div
                    className="absolute top-20 left-8 w-6 h-6 bg-positivus-green/80 dark:bg-primary/80 rounded-full animate-float"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute bottom-20 right-12 w-10 h-10 bg-positivus-green/60 dark:bg-primary/60 rounded-lg rotate-45 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  {/* Central icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-positivus-green dark:bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-8 h-8 text-positivus-dark dark:text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
