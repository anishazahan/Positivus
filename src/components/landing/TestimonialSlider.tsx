"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/lib/common.data";
import SectionHeading from "../shared/SectionHeading";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [isAnimating]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || index === currentIndex) return;
      setIsAnimating(true);
      setCurrentIndex(index);
    },
    [isAnimating, currentIndex]
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [nextSlide]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], offset: i });
    }
    return visible;
  };

  return (
    <div className="mb-24 lg:mb-36 container">
      <SectionHeading
        title={"Testimonials"}
        description1={"Hear from Our Satisfied Clients: Read Our Testimonials "}
        description2={"to Learn More about Our Digital Marketing Services"}
      />
      <div className="max-w-[1240px] mx-auto py-8 lg:py-14 bg-light dark:bg-gray-950 transition-colors duration-300 rounded-[45px] my-10 lg:my-16 overflow-hidden">
        <div className="relative w-full">
          {/* Main slider container */}
          <div className="relative h-[420px] flex items-center justify-center">
            <div className="flex items-center justify-center gap-5 lg:gap-8 transition-transform duration-500 ease-in-out">
              {getVisibleTestimonials().map((testimonial) => {
                const isCenter = testimonial.offset === 0;

                return (
                  <div
                    key={`${testimonial.id}-${currentIndex}`}
                    className={`transition-all duration-500 ${
                      isCenter ? "scale-100 opacity-100" : "scale-90 opacity-60"
                    }`}
                    style={{
                      flex: "0 0 70%",
                      maxWidth: isCenter ? "600px" : "450px",
                    }}
                  >
                    {/* Card */}
                    <div className="">
                      <div className="relative bg-white dark:bg-gray-900 rounded-3xl border border-lime-500 p-6 lg:p-10 shadow-lg h-72 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-gray-800 dark:text-gray-200 lg:text-lg leading-relaxed mb-6">
                            {testimonial.text}
                          </p>
                        </div>
                        <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white dark:bg-gray-900 border-b border-r border-lime-500 rotate-45"></div>
                      </div>
                      <div className=" ml-12 mt-5 border-gray-200 dark:border-gray-700 pt-4">
                        <h4 className="font-semibold text-lime-500 lg:text-lg">
                          {testimonial?.author}
                        </h4>
                        <p className="text-dark dark:text-gray-400  lg:text-lg">
                          {testimonial?.position} at {testimonial?.company}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation & Indicators */}
          <div className="flex max-w-[564px] mx-auto justify-between items-center mt-10 px-10 md:px-0">
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-8 h-8 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-20"
            >
              <ArrowLeft className="w-6 h-6 text-dark dark:text-gray-300" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 ">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isAnimating}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-4 h-4 lg:w-6 lg:h-6 transition-all duration-300 ${
                      index === currentIndex
                        ? "text-lime-500 fill-lime-500 scale-125"
                        : "text-gray-400 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-8 h-8 lg:w-12 lg:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-20"
            >
              <ArrowRight className="w-6 h-6 text-dark dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

//    style={{ transitionDelay: `${index * 1000}ms` }}
