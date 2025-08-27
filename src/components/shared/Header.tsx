"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About us" },
    { href: "#services", label: "Services" },
    { href: "#cases", label: "Use Cases" },
    { href: "#pricing", label: "Pricing" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-lg">
                P
              </span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground">
              Positivus
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-105">
              <Link href="#contact">Request a quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
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
