import { Star, Check } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Aethla cleaning team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Aethla is a professional cleaning company that offers
              high-quality and reliable residential and commercial cleaning
              services in Qatar.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With years of experience in the cleaning industry, we have built
              a reputation for excellence and reliability. Our team of
              professional cleaners is trained to deliver exceptional results
              using the latest cleaning techniques and eco-friendly products.
            </p>
            
            {/* Feature Boxes */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-[#48C2CB] rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">
                    Best Service & Price
                  </h3>
                  <p className="text-gray-600">
                    We offer competitive pricing without compromising on quality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-[#48C2CB] rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">
                    Visible Difference
                  </h3>
                  <p className="text-gray-600">
                    Our cleaning services make a noticeable difference in your
                    space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
