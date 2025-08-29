import React from "react";

const ContactDecorativeSection = () => {
  const round = (n: number) => Number(n.toFixed(2));
  return (
    <div className="hidden w-full lg:w-[50%] order-1 lg:order-2 lg:flex justify-center lg:justify-end overflow-hidden">
      <div className="relative w-80 h-80 lg:w-[100%] lg:h-[600px]">
        {/* Radiating Lines */}
        <svg
          className="absolute inset-0 lg:inset-auto lg:left-[270px] w-full h-full"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 24 }, (_, i) => {
            const angle = i * 15 * (Math.PI / 180);
            const x1 = round(200 + Math.cos(angle) * 80);
            const y1 = round(200 + Math.sin(angle) * 80);
            const x2 = round(200 + Math.cos(angle) * 180);
            const y2 = round(200 + Math.sin(angle) * 180);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-400 dark:text-gray-600 opacity-60"
              />
            );
          })}
        </svg>

        {/* Large Diamond Shape */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-y-8">
          <div className="w-16 h-16 bg-gray-900 dark:bg-gray-100 rotate-45 rounded-sm shadow-lg"></div>
        </div>

        {/* Small Green Diamond */}
        <div className="absolute bottom-1/3 left-1/4 transform -translate-x-1/2">
          <div className="w-8 h-8 bg-lime-400 rotate-45 rounded-sm shadow-lg animate-pulse"></div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-1/4 right-1/4">
          <div className="w-4 h-4 bg-lime-400 rounded-full animate-ping"></div>
        </div>

        <div className="absolute bottom-1/4 right-1/3">
          <div className="w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full opacity-60 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactDecorativeSection;
