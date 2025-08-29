"use client";

import React from "react";
import { Button } from "../ui/Button";
import img from "../../assets/images/proposal.png";
import Image from "next/image";
import { motion } from "framer-motion";

const ProposalSection = () => {
  return (
    <div className="relative container">
      <div className="container mx-auto py-14 bg-light dark:bg-gray-800 dark:border border-gray-700 rounded-[45px] overflow-x-hidden">
        <motion.div
          className="space-y-8 pl-4 sm:pl-6 md:pl-14"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="space-y-4"
            variants={{
              offscreen: { opacity: 0, x: -50 },
              onscreen: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
          >
            <h1 className="text-2xl lg:text-3xl font-bold text-dark dark:text-light leading-tight">
              Let's make things{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent animate-pulse">
                  happen
                </span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
          </motion.div>

          <motion.div
            variants={{
              offscreen: { opacity: 0, x: -50 },
              onscreen: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, delay: 0.4, ease: "easeOut" },
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white px-8 py-3 text-sm sm:text-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 whitespace-nowrap"
              >
                Get your free proposal
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="justify-end absolute right-0 -top-4 hidden lg:flex"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={img}
          width={494}
          height={394}
          alt="Get your free proposal"
        />
      </motion.div>
    </div>
  );
};

export default ProposalSection;
