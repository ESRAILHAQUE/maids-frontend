import { Award, Users, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Statistics() {
  const stats = [
    {
      icon: Award,
      number: "16,786",
      label: "Spaces Cleaned",
    },
    {
      icon: Sparkles,
      number: "67",
      label: "Cleaners",
    },
    {
      icon: Users,
      number: "17,065",
      label: "Customers",
    },
  ];

  return (
    <section className="w-full bg-[#48C2CB] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center text-white flex flex-col items-center"
              >
                <div className="mb-6">
                  <Icon className="w-20 h-20 text-white/80" />
                </div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
