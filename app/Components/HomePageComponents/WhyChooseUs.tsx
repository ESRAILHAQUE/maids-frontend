"use client";

import { Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Professional Staff",
      description:
        "Our team consists of highly trained and experienced professionals who are committed to delivering exceptional cleaning services.",
    },
    {
      number: "02",
      title: "Quality Products",
      description:
        "We use only the best quality cleaning products that are safe for your family and the environment.",
    },
    {
      number: "03",
      title: "Certified Cleaners",
      description:
        "All our cleaners are certified and undergo regular training to maintain the highest standards.",
    },
    {
      number: "04",
      title: "Fair Prices",
      description:
        "We offer transparent and competitive pricing with no hidden fees or surprises.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Here are some reasons why you should choose us for your cleaning
                needs:
              </h2>
            </div>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#48C2CB]/10 border-2 border-[#48C2CB] flex items-center justify-center">
                      <span className="text-[#48C2CB] font-bold text-xl">
                        {reason.number}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                <Calendar className="w-5 h-5" />
                Book a service now
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#48C2CB] hover:bg-[#3aa8b0] text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                <MessageCircle className="w-5 h-5" />
                Chat on Whatsapp
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professional cleaner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
