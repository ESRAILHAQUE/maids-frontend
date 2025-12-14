import { MessageCircle, Calendar, Sparkles, CreditCard } from "lucide-react";

export default function WorkingProcess() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Contact Us",
      description:
        "Reach out to us through phone, email, or our online booking system. Our friendly team is ready to assist you.",
    },
    {
      icon: Calendar,
      title: "Schedule Your Service",
      description:
        "Choose a convenient date and time that works best for you. We offer flexible scheduling options.",
    },
    {
      icon: Sparkles,
      title: "Professional Cleaning Process",
      description:
        "Our certified cleaners arrive on time with all necessary equipment and eco-friendly products.",
    },
    {
      icon: CreditCard,
      title: "Easy and Secure Payment",
      description:
        "Pay securely through multiple payment options. We accept cash, cards, and online payments.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
            Our Working Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Efficient Cleaning Services Process for Clients by the Best
            Cleaning Company in Qatar
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-red-100 flex items-center justify-center border-4 border-red-200">
                    <Icon className="w-16 h-16 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
