"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "../shared/SectionHeading";
import { accordionData } from "@/lib/common.data";

const WorkProcess = () => {
  const [activeItem, setActiveItem] = useState<number>(1);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? 0 : id);
  };

  return (
    <div className="mt-20 lg:mt-28 container">
      <SectionHeading
        title={"Our Working Process "}
        description1={"Step-by-Step Guide to Achieving  "}
        description2={"Your Business Goals"}
      />

      <div className="mt-14 space-y-4">
        {accordionData?.map((item) => {
          const isActive = activeItem === item.id;
          const itemNumber = item.id.toString().padStart(2, "0");

          return (
            <div
              key={item.id}
              className={cn(
                "rounded-2xl border-2 transition-all duration-300 ease-in-out overflow-hidden",
                isActive
                  ? "bg-lime-400 border-lime-400 dark:bg-lime-400 dark:border-lime-400"
                  : "bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              )}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span
                    className={cn(
                      "text-3xl sm:text-4xl lg:text-6xl font-semibold",
                      isActive
                        ? "text-dark"
                        : "text-gray-700 dark:text-gray-300"
                    )}
                  >
                    {itemNumber}
                  </span>
                  <h3
                    className={cn(
                      "text-xl sm:text-2xl lg:text-3xl font-medium",
                      isActive ? "text-dark" : "text-dark dark:text-gray-100"
                    )}
                  >
                    {item.title}
                  </h3>
                </div>

                <div
                  className={cn(
                    "!w-6 !h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    isActive
                      ? "bg-white border-gray-900 text-dark"
                      : "bg-white border-gray-400 text-gray-600 dark:bg-gray-700 dark:border-gray-500 dark:text-gray-300"
                  )}
                >
                  {isActive ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <div
                className={cn(
                  "transition-all duration-300 ease-in-out",
                  isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6  pb-6">
                  <div className="pl-8 pt-4">
                    <p
                      className={cn(
                        " leading-relaxed",
                        isActive
                          ? "text-gray-800"
                          : "text-gray-600 dark:text-gray-400"
                      )}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
