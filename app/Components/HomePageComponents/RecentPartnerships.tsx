import Image from "next/image";

export default function RecentPartnerships() {
  const partners = [
    { name: "Partner 1", logo: "https://via.placeholder.com/150x80/CCCCCC/666666?text=LOGO+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150x80/CCCCCC/666666?text=LOGO+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150x80/CCCCCC/666666?text=LOGO+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/150x80/CCCCCC/666666?text=LOGO+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/150x80/CCCCCC/666666?text=LOGO+5" },
    { name: "Partner 6", logo: "https://via.placeholder.com/150x80/CCCCCC/666666?text=LOGO+6" },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Recent Partnerships
          </span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={150}
                height={80}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
