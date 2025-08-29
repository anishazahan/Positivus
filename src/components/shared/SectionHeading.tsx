import React from "react";
import HeadingWithBg from "./HeadingWithBg";

interface SectionHeadingProps {
  title: string;
  className?: string;
  description1?: string;
  description2?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  className,
  description1,
  description2,
}) => {
  return (
    <div
      className={` container ${
        className ?? ""
      } flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start `}
    >
      <HeadingWithBg title={title} />
      <div className="md:-space-y-1 text-center lg:text-left">
        <p className="text-lg text-dark dark:text-light ">{description1}</p>
        <p className="text-lg text-dark dark:text-light ">{description2}</p>
      </div>
    </div>
  );
};

export default SectionHeading;
