"use client";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Cleaning Company we\nclean to the highest\nstandards",
      description: "Experience the difference with our professional cleaning services in Qatar, designed to give you a spotless, organized, and healthy living or working environment.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80",
    },
    {
      title: "Professional Cleaning\nServices Excellence\nin Qatar",
      description: "Experience the difference with our professional cleaning services in Qatar, designed to give you a spotless, organized, and healthy living or working environment.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
    },
    {
      title: "Trusted Cleaning\nSolutions for Your\nPerfect Space",
      description: "Experience the difference with our professional cleaning services in Qatar, designed to give you a spotless, organized, and healthy living or working environment.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px] overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0">
        <Image
          src={slides[currentSlide].image}
          alt="Cleaning supplies background"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Blue-Green Overlay */}
        <div className="absolute inset-0 bg-[#48C2CB]/70"></div>
      </div>

      {/* Content Container - Left Aligned */}
      <div className="relative z-10 h-full flex items-center py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="w-full max-w-2xl text-white space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
            {/* Main Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] sm:leading-tight whitespace-pre-line">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white/95 leading-relaxed max-w-xl">
              {slides[currentSlide].description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 pt-1">
              {/* Book A Schedule Button */}
              <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-[#FF574D] hover:bg-[#FF4539] text-white px-3.5 sm:px-4 md:px-5 lg:px-6 xl:px-7 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg font-semibold text-[11px] sm:text-xs md:text-sm lg:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                Book A Schedule
              </button>

              {/* Contact Us Link */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-white">
                <span className="text-[11px] sm:text-xs md:text-sm lg:text-base">Need Any Help?</span>
                <a
                  href="#contact"
                  className="text-[11px] sm:text-xs md:text-sm lg:text-base font-semibold underline underline-offset-2 sm:underline-offset-4 hover:text-[#FFE5E3] transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Navigation Arrows - Hidden on mobile and tablet, visible on desktop */}
      <button
        onClick={prevSlide}
        className="hidden lg:flex absolute left-4 xl:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-white/80 hover:bg-white/95 backdrop-blur-sm items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 xl:w-6 xl:h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:flex absolute right-4 xl:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-white/80 hover:bg-white/95 backdrop-blur-sm items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6 text-gray-800" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-5 sm:w-6 md:w-7 lg:w-8 xl:w-10"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
