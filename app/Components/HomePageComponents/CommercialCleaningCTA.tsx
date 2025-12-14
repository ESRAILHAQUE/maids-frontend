import { Calendar } from "lucide-react";

export default function CommercialCleaningCTA() {
  return (
    <section className="w-full bg-[#48C2CB] py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
          Contact Us Today If You Are Interested In Commercial Cleaning
          Services
        </h2>
        <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors mx-auto shadow-lg">
          <Calendar className="w-5 h-5" />
          Book a service now
        </button>
      </div>
    </section>
  );
}
