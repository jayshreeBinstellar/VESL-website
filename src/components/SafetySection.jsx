import React from 'react';
import { ShieldCheck, HardHat, ClipboardCheck, Award, Construction, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const SafetySection = () => {
    const safetyStandards = [
        {
            icon: ShieldCheck,
            title: "Strict Compliance",
            desc: "Full adherence to Sierra Leone's mining safety regulations and international protocols."
        },
        {
            icon: ClipboardCheck,
            title: "Daily Inspections",
            desc: "Every machine undergoes a 42-point pre-shift checklist before entering the site."
        },
        {
            icon: Award,
            title: "Expert Training",
            desc: "Our operators are certified and undergo periodic safety refresher courses."
        },
        {
            icon: Microscope,
            title: "Preventive Maintenance",
            desc: "Real-time tracking of machine health to prevent on-site failures and hazards."
        }
    ];

    const stats = [
        { label: "Safe Man-Hours", value: "250,000+" },
        { label: "Safety Incidents", value: "0" },
        { label: "Standard Compliance", value: "100%" },
        { label: "Experienced Operators", value: "15+" }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="safety">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f4783f]/5 -skew-x-12 transform origin-top translate-x-20" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side: Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4783f]/10 text-[#f4783f] text-sm font-semibold mb-6 border border-[#f4783f]/20">
                                <HardHat className="h-4 w-4" />
                                Safety Excellence
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                                Our Priority: <br />
                                <span className="text-[#f4783f] italic">Safety First,</span> Always.
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                At Vaibhavi Enterprise, we believe that operational excellence is inseparable from safety. Our "Zero Harm" policy ensures that every project in Sierra Leone is executed with the highest regard for human life and environmental protection.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="border-l-2 border-[#f4783f]/30 pl-4">
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Features Grid */}
                    <div className="lg:w-1/2 grid sm:grid-cols-2 gap-4">
                        {safetyStandards.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-6 bg-[#131313] border border-gray-800 rounded-2xl hover:border-[#f4783f]/50 transition-colors group"
                            >
                                <div className="p-3 bg-[#f4783f]/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="h-6 w-6 text-[#f4783f]" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Promotional Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 bg-gradient-to-r from-[#f4783f] to-[#d65f2a] rounded-2xl text-center shadow-2xl shadow-[#f4783f]/20"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Construction className="h-12 w-12 text-white/50 hidden md:block" />
                        <h3 className="text-xl md:text-2xl font-bold text-white max-w-2xl text-center md:text-left">
                            Planning a high-risk excavation project? Our safety-certified team and fleet are ready to support your site.
                        </h3>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white text-[#d65f2a] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Request Safety Audit
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SafetySection;
