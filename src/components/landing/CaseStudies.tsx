"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/common.data";
import { Dialog } from "../ui/Dialog";
import SectionHeading from "../shared/SectionHeading";

const CaseStudiesSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<
    (typeof caseStudies)[0] | null
  >(null);

  return (
    <div className="container mt-28 lg:mt-40">
      <SectionHeading
        title={"Case Studies"}
        description1={
          "Explore Real-Life Examples of Our Proven Digital Marketing  "
        }
        description2={" Success through Our Case Studies"}
      />

      <div className="mt-12  container bg-dark dark:border border-gray-700 p-10 py-16 dark:bg-gray-800 rounded-[45px]">
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="space-y-4 group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-200">
                {study.description}
              </p>

              <button
                className="flex items-center gap-2 text-lime-400 hover:text-lime-300 font-semibold transition-all duration-200 hover:gap-3"
                onClick={() => {
                  setSelectedCase(study);
                  setOpen(true);
                }}
              >
                Learn more
                <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title={selectedCase?.title}
        >
          <div className="space-y-6">
            <p>{selectedCase?.details}</p>

            {selectedCase?.metrics && (
              <div className="grid grid-cols-3 gap-4 divide-x">
                {Object.entries(selectedCase?.metrics)?.map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg"
                  >
                    <div className="text-2xl font-bold text-lime-500">
                      {value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 capitalize">
                      {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
