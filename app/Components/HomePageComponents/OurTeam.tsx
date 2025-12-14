"use client";

export default function OurTeam() {
  const teamStats = [
    { name: "Highly News Service", percentage: 90 },
    { name: "Hardworking staff", percentage: 95 },
    { name: "Well trained", percentage: 85 },
    { name: "On time", percentage: 98 },
    { name: "All over Qatar", percentage: 100 },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
              Our Team
            </span>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our team consists of highly skilled and professional cleaners who
              are dedicated to providing exceptional service. With years of
              experience and continuous training, we ensure that every cleaning
              task is completed to the highest standards.
            </p>
          </div>

          {/* Right Column - Progress Bars */}
          <div className="space-y-6">
            {teamStats.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-900 font-semibold text-lg">
                    {stat.name}
                  </span>
                  <span className="text-[#48C2CB] font-bold text-lg">
                    {stat.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-[#48C2CB] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
