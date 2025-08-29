"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import companyLogo1 from "../../assets/images/company-logo/amazon.png";
import companyLogo2 from "../../assets/images/company-logo/dribble.png";
import companyLogo3 from "../../assets/images/company-logo/hubspot.png";
import companyLogo4 from "../../assets/images/company-logo/netflix.png";
import companyLogo5 from "../../assets/images/company-logo/notion.png";
import companyLogo6 from "../../assets/images/company-logo/zomm.png";

// Demo data with placeholder image paths
const logoData = [
  { id: 1, src: companyLogo1, alt: "Amazon" },
  { id: 2, src: companyLogo2, alt: "Dribble" },
  { id: 3, src: companyLogo3, alt: "HubSpot" },
  { id: 4, src: companyLogo4, alt: "Notion" },
  { id: 5, src: companyLogo5, alt: "Netflix" },
  { id: 6, src: companyLogo6, alt: "Zoom" },
];

const LogoMarquee = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or stored preference
    if (typeof window !== "undefined") {
      const isDark =
        localStorage.getItem("darkMode") === "true" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  // Duplicate the logos for seamless looping
  const duplicatedLogos = [...logoData, ...logoData];

  return (
    <div
      className={`container flex flex-col items-center justify-center transition-colors duration-300 mt-28`}
    >
      {/* Logo marquee container */}
      <div className="w-full overflow-hidden py-8 relative">
        <div className="animate-marquee whitespace-nowrap">
          {duplicatedLogos.map((logo) => (
            <div
              key={`${logo.id}-${Math.random()}`}
              className="inline-block mx-8 align-middle opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="w-32 h-16 relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain grayscale"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
