import React from "react";
import { Button } from "../ui/Button";
import img from "../../assets/images/proposal.png";
import Image from "next/image";

const ProposalSection = () => {
  return (
    <div className="relative container">
      <div className="container mx-auto py-14 bg-light dark:bg-gray-800 dark:border border-gray-700 rounded-[45px] overflow-x-hidden">
        <div className="space-y-8 pl-14">
          <div className="space-y-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-dark dark:text-light leading-tight animate-in fade-in slide-in-from-left duration-700">
              Let's make things{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-lime-500 to-lime-600 bg-clip-text text-transparent animate-pulse">
                  happen
                </span>
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md animate-in fade-in slide-in-from-left duration-700 delay-200">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-white px-8 py-3 text-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 animate-in fade-in slide-in-from-left  delay-400"
          >
            Get your free proposal
          </Button>
        </div>
      </div>

      <div className=" justify-end absolute right-0 -top-4 hidden lg:flex">
        <Image
          src={img}
          className=""
          width={494}
          height={394}
          alt="Get your free proposal"
        />
      </div>
    </div>
  );
};

export default ProposalSection;
