import React from "react";
import { Clock, Shield, Wrench, TrendingUp } from "lucide-react";

const Features = () => {
    const items = [
        {
            icon: Clock,
            title: "24/7 Equipment Support",
            description: "Round-the-clock equipment availability and service assistance for urgent site needs.",
        },
        {
            icon: Shield,
            title: "Fully Maintained & Insured Fleet",
            description: "All machines are serviced regularly and insured for safe and reliable operations.",
        },
        {
            icon: Wrench,
            title: "On-Site Technical Team",
            description: "Trained operators and technicians available to support field operations when required.",
        },
        {
            icon: TrendingUp,
            title: "Best Price Guarantee",
            description: "Competitive rental pricing with transparent terms and zero hidden fees.",
        },
    ];


    return (
        <section className=" py-10 md:py-15 lg:py-24 bg-[#0e0e0e]" id="features">
            <div className="container mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-extrabold text-white mb-3 tracking-wide">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Trusted heavy-equipment partner for mining, earthmoving, and industrial projects in Sierra Leone.
                    </p>
                </div>


                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="p-7 bg-[#151515] border border-gray-700 rounded-xl shadow-lg hover:border-[#f4783f] hover:shadow-[#f4783f]/20 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="mb-4 p-3 rounded-lg bg-[#f4783f]/15 w-fit group-hover:bg-[#f4783f]/25 transition">
                                <item.icon className="h-7 w-7 text-[#f4783f]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
