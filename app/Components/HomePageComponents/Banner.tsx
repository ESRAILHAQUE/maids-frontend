"use client";

import { Calendar, ChevronLeft, ChevronRight, Sparkles, Shield, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "Premium Cleaning Services",
      title: "Professional Maids & Cleaning Services in Qatar",
      description: "Experience the difference with our trusted cleaning professionals. We deliver spotless, organized, and healthy living spaces with eco-friendly products and attention to detail.",
      image: "/images/real-images/1.png",
    },
    {
      badge: "Expert Housekeeping",
      title: "Your Home Deserves the Best Care",
      description: "From deep cleaning to daily maintenance, our skilled maids ensure your home stays pristine. Trusted by thousands of families across Qatar.",
      image: "/images/real-images/2.png",
    },
    {
      badge: "Commercial & Residential",
      title: "Comprehensive Cleaning Solutions",
      description: "Whether it's your home or office, we provide tailored cleaning services that exceed expectations. Professional, reliable, and affordable.",
      image: "/images/real-images/3.png",
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
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Cleaning supplies background"
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Gradient Overlay - Professional Dark Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/65 via-gray-800/60 to-gray-900/55"></div>
        {/* Accent Color Overlay - Subtle Orange Tint */}
        <div className="absolute inset-0 bg-linear-to-br from-[rgb(var(--brand-primary-rgb)/0.12)] via-transparent to-transparent"></div>
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>
      </div>

      {/* Content Container - Left Aligned */}
      <div className="relative z-10 h-full flex items-center py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="w-full max-w-2xl text-white space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            {/* Badge/Tag */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider">
                {slides[currentSlide].badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.2] sm:leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-white/95 leading-relaxed max-w-xl">
              {slides[currentSlide].description}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs">5000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs">Insured & Bonded</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-5 pt-2">
              {/* Book A Schedule Button */}
              <button className="group flex items-center justify-center gap-2 bg-(--brand-primary) hover:bg-(--brand-dark) text-white px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-sm cursor-pointer font-semibold text-xs sm:text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                <span>Book A Schedule</span>
              </button>

              {/* Contact Us Link */}
              <div className="flex flex-wrap items-center gap-2 text-white">
                <span className="text-[11px] sm:text-xs md:text-sm">Need Any Help?</span>
                <a
                  href="#contact"
                  className="text-[11px] sm:text-xs md:text-sm font-semibold underline underline-offset-2 sm:underline-offset-4 hover:text-[rgb(var(--brand-soft-rgb)/1)] transition-colors duration-300"
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

      {/* Slide Indicators - Enhanced */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-2.5 items-center">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-white h-2 w-8 sm:w-10 md:w-12 lg:w-14 shadow-lg"
                : "bg-white/40 hover:bg-white/60 h-2 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <span className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
