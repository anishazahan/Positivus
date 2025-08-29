"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { navItems } from "@/lib/common.data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white dark:bg-gray-900 dark:border-b border-gray-500 backdrop-blur-sm  shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 lg:h-24 ">
          {/* Logo */}
          <Logo />

          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems?.map((item) => (
                <Link
                  id={item?.href}
                  key={item?.href}
                  href={item?.href}
                  className="text-foreground text-lg md:text-xl hover:text-primary transition-colors duration-200 "
                >
                  {item?.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA and Theme Toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="outline"
                className=" text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105 dark:text-white"
              >
                <Link href="#contact">Request a quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground dark:text-white"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="dark:text-white" />
              ) : (
                <Menu size={24} className="dark:text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <button className="w-full py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request a quote
                  </Link>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
