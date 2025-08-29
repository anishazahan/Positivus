"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import img from "../../assets/images/hero.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-20 lg:pt-44 bg-background transition-colors duration-300 overflow-hidden">
      <div className="container">
        {/* Mobile Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-10 lg:pt-0 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance lg:hidden"
        >
          Navigating the{" "}
          <span className="text-lime-500">digital landscape</span> for success
        </motion.h1>

        <div className="flex flex-col-reverse lg:flex-row lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-9 md:space-y-14 w-full lg:w-[50%] -mt-14 sm:mt-0"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance hidden lg:block"
              >
                Navigating the{" "}
                <span className="text-lime-500">digital landscape</span> for
                success
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty"
              >
                Our digital marketing agency helps businesses grow and succeed
                online through SEO, PPC, social media marketing, and content
                creation.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-dark text-dark dark:bg-primary dark:hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group dark:text-dark"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Book a consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="w-full lg:w-[50%]"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-[500px]"
            >
              <Image
                src={img}
                fill
                priority
                className="object-contain drop-shadow-2xl"
                alt="Positivus hero"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
