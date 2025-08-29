"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/common.data";
import SectionHeading from "../shared/SectionHeading";
import Image from "next/image";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="my-24 lg:my-36 container transition-colors duration-300">
      <SectionHeading
        title={"Services "}
        description1={
          "At our digital marketing agency, we offer a range of services to  "
        }
        description2={
          "help businesses grow and succeed online. These services include:"
        }
      />
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7  mx-auto mb-8 mt-14">
        {services?.map((service, index) => (
          <div
            key={service.id}
            className={`
                relative rounded-[45px] p-4 sm:p-5 md:p-8 transition-all duration-300 cursor-pointer group
                ${service.backgroundColor} ${service.darkBackgroundColor}
                hover:scale-105 hover:shadow-xl
                ${
                  index === 0 || index === 3
                    ? "border-2 border-gray-300 dark:border-gray-600"
                    : ""
                }
                ${
                  index === 1 || index === 4
                    ? "border-2 border-lime-300 dark:border-lime-500"
                    : ""
                }
                ${
                  index === 2 || index === 5
                    ? "border-2 border-gray-700 dark:border-gray-500"
                    : ""
                }
              `}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center justify-between gap-3 md:gap-14">
              {/* left side */}
              <div className="">
                {/* Service Title */}
                <div className="mb-6">
                  <div className={`inline-block px-4 py-2 rounded-lg `}>
                    <h3
                      className={`text-lg whitespace-nowrap sm:text-2xl lg:text-3xl font-bold leading-tight rounded-lg px-3 py-1 ${
                        index === 0 || index === 3 || index == 5
                          ? "bg-primary text-gray-900"
                          : index === 1 || index === 4
                          ? "bg-white text-gray-900"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-xl whitespace-nowrap sm:text-2xl lg:text-3xl font-bold leading-tight rounded-lg px-3 py-1 ${
                        index === 0 || index === 3 || index == 5
                          ? "bg-primary text-gray-900"
                          : index === 1 || index === 4
                          ? "bg-white text-gray-900"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      {service?.subtitle}
                    </p>
                  </div>
                </div>
                {/* Learn More Button */}
                <div className="flex items-center justify-between mt-16 md:mt-20">
                  <button
                    className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                  
                  group-hover:scale-105
                `}
                  >
                    <div
                      className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${
                      index === 2 || index === 4 || index === 1
                        ? "bg-gray-900"
                        : "bg-primary"
                    }
                  `}
                    >
                      <ArrowRight
                        className={`w-6 h-6 ${
                          index === 2 ||
                          index === 5 ||
                          index === 1 ||
                          index === 4
                            ? "text-white"
                            : "text-gray-900"
                        } transition-transform -rotate-45 duration-300 group-hover:translate-x-0.5`}
                      />
                    </div>
                    <span
                      className={`text-lg md:text-xl hidden md:block text-foreground  ${
                        (index === 2 || index === 5) && "text-white"
                      } `}
                    >
                      Learn more
                    </span>
                  </button>
                </div>
              </div>
              {/* Service Img */}
              <div className="flex justify-end ">
                <Image
                  width={210}
                  height={210}
                  src={service?.img || "/images/service.png"}
                  alt={service?.title || "services"}
                  className=""
                />
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div
              className={`
                absolute inset-0 rounded-[45px] transition-opacity duration-300 pointer-events-none
                ${hoveredCard === service.id ? "opacity-10" : "opacity-0"}
                ${index === 0 || index === 3 ? "bg-lime-400" : ""}
                ${index === 1 || index === 4 ? "bg-white" : ""}
                ${index === 2 || index === 5 ? "bg-gray-600" : ""}
              `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
