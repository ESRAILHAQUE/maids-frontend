"use client";

import { Calendar, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Cleaning Company we clean to the highest standards",
      description: "We provide professional cleaning services with a commitment to excellence. Our trained staff uses eco-friendly products to ensure your space is not only clean but also safe for your family and environment.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Gradient Background with Wave Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#48C2CB] via-[#5BC8D0] to-[#6DD4D5]">
        {/* Wave Pattern at Bottom Right */}
        <div className="absolute bottom-0 right-0 w-full md:w-2/3 h-2/3 opacity-30">
          <svg
            viewBox="0 0 1200 800"
            className="w-full h-full"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="#7FE0E2"
              opacity="0.5"
            />
            <path
              d="M0,500 Q400,400 800,500 T1200,500 L1200,800 L0,800 Z"
              fill="#8FE8EA"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px] md:min-h-[600px]">
          {/* Left Side - Text Content */}
          <div className="text-white space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              {slides[currentSlide].description}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                <Calendar className="w-5 h-5" />
                Book a service
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition-colors border border-white/30">
                <MessageCircle className="w-5 h-5" />
                Need help? Ask us here
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-lg">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80"
                alt="Cleaning supplies"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </section>
  );
}
