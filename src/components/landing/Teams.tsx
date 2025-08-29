"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";
import { teamMembers } from "@/lib/common.data";
import SectionHeading from "../shared/SectionHeading";
import { Button } from "../ui/Button";
import Image from "next/image";

const Teams = () => {
  const [showAll, setShowAll] = useState(false);

  // Slice data based on toggle
  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 6);

  return (
    <div className="my-14 lg:my-28 container transition-colors duration-300">
      <SectionHeading
        title={"Teams "}
        description1={"Meet the skilled and experienced team behind our "}
        description2={"successful digital marketing strategies"}
      />

      {/* Team grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-12">
        {displayedMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white dark:bg-gray-800 rounded-[45px] border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
          >
            {/* Header with Avatar and LinkedIn */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-[102px] h-[102px]">
                  <Image
                    priority
                    width={102}
                    height={102}
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Name + Title */}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.title}
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                <Linkedin className="w-4 h-4 text-white dark:text-gray-900" />
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mb-4"></div>

            {/* Experience + Description */}
            <div className="space-y-2">
              <p className="font-medium text-gray-900 dark:text-white">
                {member.experience}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle button */}
      <div className="flex justify-end">
        <Button
          onClick={() => setShowAll((prev) => !prev)}
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 
                     hover:bg-gray-800 dark:hover:bg-gray-100 
                     px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
        >
          {showAll ? "See less" : "See all team"}
        </Button>
      </div>
    </div>
  );
};

export default Teams;
