import React from "react";
import { Clock, Shield, Wrench, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Equipment ready when you need it, with flexible rental periods",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All equipment covered with comprehensive insurance",
  },
  {
    icon: Wrench,
    title: "Maintained Equipment",
    description: "Regular servicing ensures peak performance",
  },
  {
    icon: TrendingUp,
    title: "Cost Effective",
    description: "Competitive rates with no hidden fees",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-[#1c1c1c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-300 ">
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Industry-leading service and equipment for all your mining needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-[#1c1c1c] border border-gray-400 rounded-xl shadow-sm 
                         hover:shadow-md hover:border-orange-400 transform 
                         hover:scale-105 transition-all duration-300 ease-out"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 p-3 bg-[#f97a1f1a] rounded-lg w-fit">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-300">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
