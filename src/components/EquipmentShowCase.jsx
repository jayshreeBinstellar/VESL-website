import React, { useState } from "react";
import {
    Drill,
    Truck,
    Pickaxe,
    HardHat,
    Wrench,
    Hammer,
    Zap,
    Cog,
    Shield,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import equipment from "../data/equipment_data";

// icon map outside component (best practice)
const iconMap = {
    Pickaxe,
    Hammer,
    Drill,
    Wrench,
    Zap,
    Truck,
    Cog,
    HardHat,
    Shield,
};

export const EquipmentShowcase = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const [activeTab, setActiveTab] = useState("All");

    const categories = ["All", ...new Set(equipment.map((item) => item.category))];

    const filteredEquipment = activeTab === "All"
        ? equipment
        : equipment.filter((item) => item.category === activeTab);

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    const handleShowLess = () => setVisibleCount(4);

    return (
        <section className="py-10 md:py-15 lg:py-24 bg-[#0e0e0e]" id="equipment">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">
                            Our <span className="text-[#f4783f]">Heavy Duty</span> Fleet
                        </h2>
                        <div className="h-1.5 w-24 bg-[#f4783f] mx-auto mb-6 rounded-full" />
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Premium mining and workshop equipment maintained to the highest standards, ready for your next deployment in Sierra Leone.
                        </p>
                    </motion.div>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12 lg:mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveTab(cat);
                                setVisibleCount(4);
                            }}
                            className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === cat
                                ? "bg-[#f4783f] text-white shadow-[0_0_20px_rgba(244,120,63,0.4)] scale-105"
                                : "bg-[#1a1a1a] text-gray-500 hover:bg-[#252525] hover:text-gray-200 border border-gray-800"
                                }`}
                        >
                            {cat.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Cards Grid with AnimatePresence */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative min-h-[500px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredEquipment.slice(0, visibleCount).map((item, index) => {
                            const Icon = iconMap[item.icon] || Cog;

                            return (
                                <motion.div
                                    key={`${item.name}-${index}`}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-8 border border-gray-800 rounded-2xl shadow-sm
                hover:shadow-2xl hover:border-[#f4783f]/50 bg-[#151515] transition-all
                duration-500 ease-out cursor-pointer group relative overflow-hidden"
                                >
                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#f4783f]/5 rotate-45 transform translate-x-8 -translate-y-8" />

                                    {/* Icon & Count */}
                                    <div className="flex items-start justify-between mb-6 relative z-10">
                                        <div className="p-4 bg-[#f4783f]/10 rounded-2xl group-hover:bg-[#f4783f]/20 transition-colors border border-[#f4783f]/20">
                                            <Icon className="h-10 w-10 text-[#f4783f]" />
                                        </div>
                                        <span className="px-4 py-1.5 text-xs font-black bg-black/50 text-[#f4783f] border border-[#f4783f]/30 rounded-full tracking-widest uppercase">
                                            {item.available} UNIT{item.available !== 1 ? 'S' : ''}
                                        </span>
                                    </div>

                                    {/* Info */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#f4783f] transition-colors uppercase tracking-tight">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs font-black text-[#f4783f]/80 mb-4 uppercase tracking-[0.2em]">{item.category}</p>
                                        <div className="h-px w-full bg-gradient-to-r from-gray-800 to-transparent mb-4" />
                                        <p className="text-base text-gray-400 leading-relaxed font-medium">{item.specs}</p>
                                    </div>

                                    {/* Subtle hover effect light */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[#f4783f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Buttons */}
                <div className="text-center mt-16 flex justify-center min-h-[64px]">
                    <AnimatePresence mode="wait">
                        {visibleCount < filteredEquipment.length ? (
                            <motion.button
                                key="view-more"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                onClick={handleViewMore}
                                className="px-10 py-4 bg-[#f4783f] hover:bg-[#d65f2a] text-white font-black rounded-xl shadow-lg hover:shadow-[#f4783f]/40 transition-all duration-300 uppercase tracking-widest text-sm"
                            >
                                Explore Entire Fleet
                            </motion.button>
                        ) : filteredEquipment.length > 4 ? (
                            <motion.button
                                key="show-less"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                onClick={() => {
                                    handleShowLess();
                                    // Smooth scroll back to section top so user isn't lost
                                    document.getElementById("equipment")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="px-10 py-4 border border-gray-800 text-gray-400 font-black rounded-xl hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
                            >
                                Collapse List
                            </motion.button>
                        ) : null}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default EquipmentShowcase;
