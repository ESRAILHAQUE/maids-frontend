import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ClientReview() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl relative">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                  alt="Happy customer"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Right Column - Testimonial */}
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-4 block">
              Client Review
            </span>
            <div className="border-2 border-dashed border-red-500 rounded-lg p-6 md:p-8 bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    I&apos;m extremely happy with the service I received from
                    Aethla. The team was professional, punctual, and thorough.
                    My home has never looked cleaner! I highly recommend their
                    services to anyone looking for quality cleaning.
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Aethla</p>
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
