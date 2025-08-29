"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import blackStar from "../../assets/images/black-logo-star.png";
import whiteStar from "../../assets/images/white-logo-star.png";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href="/" className="flex items-center space-x-2 group">
      {mounted && (
        <Image
          width={35}
          height={35}
          src={theme === "dark" ? whiteStar : blackStar}
          alt="Positivus Logo"
        />
      )}
      <span className="text-2xl lg:text-3xl font-semibold text-foreground">
        Positivus
      </span>
    </Link>
  );
};

export default Logo;
