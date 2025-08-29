import Image from "next/image";
import companyLogo1 from "../../assets/images/company-logo/amazon.png";
import companyLogo2 from "../../assets/images/company-logo/dribble.png";
import companyLogo3 from "../../assets/images/company-logo/hubspot.png";
import companyLogo4 from "../../assets/images/company-logo/netflix.png";
import companyLogo5 from "../../assets/images/company-logo/notion.png";
import companyLogo6 from "../../assets/images/company-logo/zomm.png";

const logoData = [
  { id: 1, src: companyLogo1, alt: "Amazon" },
  { id: 2, src: companyLogo2, alt: "Dribble" },
  { id: 3, src: companyLogo3, alt: "HubSpot" },
  { id: 4, src: companyLogo4, alt: "Notion" },
  { id: 5, src: companyLogo5, alt: "Netflix" },
  { id: 6, src: companyLogo6, alt: "Zoom" },
];

const LogoMarquee = () => {
  const duplicatedLogos = [...logoData, ...logoData];

  return (
    <div className="container flex flex-col items-center justify-center transition-colors duration-300 mt-14">
      {/* Large devices: single row */}
      <div className="hidden lg:block w-full overflow-hidden py-8 relative">
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
                  className="object-contain grayscale dark:grayscale-0"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Small devices: two rows */}
      <div className="lg:hidden w-full space-y-4">
        {/* Top row: left to right */}
        <div className="overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo) => (
              <div
                key={`top-${logo.id}-${Math.random()}`}
                className="inline-block mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-28 h-14 relative">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain grayscale dark:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: right to left */}
        <div className="overflow-hidden relative">
          <div className="animate-marquee-reverse whitespace-nowrap">
            {duplicatedLogos.map((logo) => (
              <div
                key={`bottom-${logo.id}-${Math.random()}`}
                className="inline-block mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-28 h-14 relative">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain grayscale dark:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
