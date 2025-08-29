"use client";

import {
  ArrowRight,
  Search,
  MousePointer,
  Share2,
  Mail,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";

const services = [
  {
    title: "Search engine optimization",
    description:
      "Improve your website's visibility and ranking on search engines with our comprehensive SEO strategies.",
    icon: Search,
    bgColor: "bg-positivus-green/10 dark:bg-primary/10",
    iconColor: "text-positivus-green dark:text-primary",
    buttonColor:
      "bg-positivus-green text-positivus-dark hover:bg-positivus-green/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90",
  },
  {
    title: "Pay-per-click advertising",
    description:
      "Drive targeted traffic to your website with strategic PPC campaigns that maximize your ROI.",
    icon: MousePointer,
    bgColor: "bg-positivus-green/10 dark:bg-primary/10",
    iconColor: "text-positivus-green dark:text-primary",
    buttonColor:
      "bg-positivus-green text-positivus-dark hover:bg-positivus-green/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build your brand presence and engage with your audience across all major social media platforms.",
    icon: Share2,
    bgColor: "bg-positivus-dark/10 dark:bg-foreground/10",
    iconColor: "text-positivus-dark dark:text-foreground",
    buttonColor:
      "bg-positivus-dark text-white hover:bg-positivus-dark/90 dark:bg-foreground dark:text-background dark:hover:bg-foreground/90",
  },
  {
    title: "Email Marketing",
    description:
      "Create personalized email campaigns that nurture leads and drive conversions for your business.",
    icon: Mail,
    bgColor: "bg-positivus-green/10 dark:bg-primary/10",
    iconColor: "text-positivus-green dark:text-primary",
    buttonColor:
      "bg-positivus-green text-positivus-dark hover:bg-positivus-green/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90",
  },
  {
    title: "Analytics and tracking",
    description:
      "Monitor and analyze your digital marketing performance with comprehensive tracking and reporting.",
    icon: BarChart3,
    bgColor: "bg-positivus-dark/10 dark:bg-foreground/10",
    iconColor: "text-positivus-dark dark:text-foreground",
    buttonColor:
      "bg-positivus-dark text-white hover:bg-positivus-dark/90 dark:bg-foreground dark:text-background dark:hover:bg-foreground/90",
  },
  {
    title: "Content Creation",
    description:
      "Develop compelling content that resonates with your audience and drives engagement across all channels.",
    icon: Lightbulb,
    bgColor: "bg-positivus-green/10 dark:bg-primary/10",
    iconColor: "text-positivus-green dark:text-primary",
    buttonColor:
      "bg-positivus-green text-positivus-dark hover:bg-positivus-green/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90",
  },
];

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="py-16 lg:py-24 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            <span className="text-positivus-green dark:text-primary">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-positivus-green/20 dark:hover:border-primary/20 ${service.bgColor} animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-border/50`}
                  >
                    <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <div className="text-xl font-bold text-foreground group-hover:text-positivus-green dark:group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </div>
                  <Button
                    className={`w-full ${service.buttonColor} transition-all duration-200 group-hover:scale-105`}
                  >
                    <Link
                      href="#contact"
                      className="flex items-center justify-center gap-2"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
