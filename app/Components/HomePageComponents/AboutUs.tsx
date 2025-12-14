import { Check, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-10 sm:py-14 md:py-16 bg-gradient-to-br from-[#F0F5FA] via-white to-[#F0F5FA]">
      <div className="w-full px-4 sm:px-6 md:w-[95%] md:mx-auto lg:container lg:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Left Column - Image with modern frame */}
          <div className="relative w-full order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative h-[280px] sm:h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#CF4B00] to-transparent opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Aethla cleaning team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 md:space-y-5 order-1 lg:order-2">
            {/* Subtitle with icon */}
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#CF4B00]" />
              <span className="text-[#CF4B00] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>

            {/* Main Title - Reduced size */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Aethla is a professional cleaning company that offers
              high-quality and reliable residential and commercial cleaning
              services in Qatar.
            </h2>

            {/* Highlight Paragraph - Smaller */}
            <div className="bg-gradient-to-r from-[#CF4B00]/10 to-transparent border-l-4 border-[#CF4B00] p-3 md:p-4 rounded-r-lg">
              <p className="text-[#CF4B00] text-sm md:text-base leading-relaxed italic">
                We are proud to be recognized on Google as the highest ranked female cleaning company in Doha Qatar, with over 1,008 five-star reviews and an outstanding 4.9-star rating{" "}
                <a 
                  href="https://www.google.com/search?q=aethla+cleaning+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#48C2CB] hover:text-[#3aa8b0] underline font-medium transition-colors"
                >
                  according to Google Reviews
                </a>
                .
              </p>
            </div>

            {/* Main Description Paragraph - Smaller */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We specialize in general cleaning, deep cleaning, move-in and move-out cleaning services. Our team consists of experienced and well-trained professionals who use state-of-the-art equipment and eco-friendly cleaning products to ensure your space is spotless and healthy.
            </p>
            
            {/* Feature Boxes with enhanced hover effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
              {/* Feature 1 */}
              <div className="group relative flex flex-col gap-3 p-4 md:p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#CF4B00]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CF4B00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-[#CF4B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="flex items-start gap-3 relative z-10">
                  <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#CF4B00] to-[#B84200] rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md group-hover:shadow-lg">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base group-hover:text-[#CF4B00] transition-colors">
                      Best Service & Price
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      Unmatched quality and value: the best service at the most competitive prices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative flex flex-col gap-3 p-4 md:p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#CF4B00]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CF4B00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-xl border-2 border-[#CF4B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="flex items-start gap-3 relative z-10">
                  <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-[#CF4B00] to-[#B84200] rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md group-hover:shadow-lg">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base group-hover:text-[#CF4B00] transition-colors">
                      Visible Difference
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                      Experience a visible difference with our cleaning services for pristine spaces you can feel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
