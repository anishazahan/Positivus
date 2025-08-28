"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container rounded-tl-[45px] rounded-tr-[45px] mx-auto mt-12 lg:mt-20 bg-[#F3F3F3] dark:bg-red p-12">
      <div className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground leading-relaxed">
              Navigating the digital landscape for success. We help businesses
              grow and succeed online.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <button
                  key={index}
                  className="w-9 h-9 flex items-center justify-center rounded-full 
                             bg-transparent text-muted-foreground 
                             hover:bg-primary hover:text-primary-foreground 
                             transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {["About us", "Services", "Use Cases", "Pricing", "Blog"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@positivus.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Digital Street, Tech City</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Newsletter
            </h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md border border-border 
                           bg-background text-foreground placeholder:text-muted-foreground
                           focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
              <button
                className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground 
                           font-medium hover:bg-primary/90 transition-colors shadow-md"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Positivus. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
