import Link from "next/link";
import React from "react";
import { Sparkle } from "lucide-react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
        <span className="text-primary-foreground font-bold text-lg ">
          <Sparkle />
        </span>
      </div>
      <span className="text-xl lg:text-2xl font-bold text-foreground">
        Positivus
      </span>
    </Link>
  );
};

export default Logo;
