"use client";

import { Facebook, Twitter, Linkedin } from "lucide-react";
import Logo from "./Logo";
import { navItems } from "@/lib/common.data";
import HeadingWithBg from "./HeadingWithBg";
import NewsletterSection from "../ui/Newsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container rounded-tl-[45px] rounded-tr-[45px] mx-auto mt-12 lg:mt-20 bg-[#F3F3F3] dark:bg-gray-950 shadow-lg p-12">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <Logo />
        {/* //sections */}
        <div className="flex flex-col md:flex-row items-center mt-8 lg:mt-0 gap-4 lg:gap-7">
          {navItems?.map((item) => (
            <p
              id={item?.href}
              key={item?.href}
              className="text-dark dark:text-light hover:text-lime-600 dark:hover:text-primary transition-colors duration-200 text-lg underline hover:cursor-pointer"
            >
              {item?.label}
            </p>
          ))}
        </div>

        <div className="lg:flex space-x-4 hidden">
          {[Linkedin, Facebook, Twitter].map((Icon, index) => (
            <button
              key={index}
              className="w-9 h-9 flex items-center justify-center rounded-full
                           bg-transparent text-dark border border-primary
                           hover:bg-primary p-2 dark:bg-primary hover:text-primary-foreground
                           transition-all duration-200 hover:scale-110 bg-light"
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between mt-12 lg:mt-16 pb-6 border-b border-gray-500 ">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-block">
            <HeadingWithBg className="text-xl" title="Contact us:" />
          </div>
          <p className=" md:text-lg text-dark dark:text-light">
            Email: info@positivus.com
          </p>
          <p className=" md:text-lg text-dark dark:text-light">
            Phone: 555-567-8901
          </p>
          <div className="">
            Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
          </div>
        </div>

        <div className="my-6 lg:my-0 mx-auto lg:mx-0 lg:ml-auto">
          <div className="bg-gray-200 inline-block mx-auto dark:bg-[#292A32]  p-8 rounded-xl">
            <NewsletterSection />
          </div>
        </div>

        <div className="flex gap-4 justify-center lg:hidden">
          {[Linkedin, Facebook, Twitter].map((Icon, index) => (
            <button
              key={index}
              className="w-9 h-9 flex items-center justify-center rounded-full
                           bg-transparent text-dark border border-primary
                           hover:bg-primary p-2 dark:bg-primary hover:text-primary-foreground
                           transition-all duration-200 hover:scale-110 bg-light"
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-5 mt-8">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
