import React from "react";

interface HeadingWithBgProps {
  title: string;
  className?: string;
}

const HeadingWithBg: React.FC<HeadingWithBgProps> = ({ title, className }) => {
  return (
    <div
      className={`${
        className ? className : "text-2xl lg:text-3xl"
      } text-dark font-medium   px-3 py-2 rounded-[8px] bg-primary`}
    >
      {title}
    </div>
  );
};

export default HeadingWithBg;
