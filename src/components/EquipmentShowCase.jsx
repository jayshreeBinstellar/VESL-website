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
    const [visibleCount, setVisibleCount] = useState(2);

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 2); // show 2 more each click
    };

    //show less button if all items are visible
    const handleShowLess = () => setVisibleCount(2);


    return (
        <section className="py-20 bg-[#1a1a1a]" id="equipment">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-300">
                        Our Equipment Fleet
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Wide range of heavy and workshop equipment available for short-term and long-term rentals.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {equipment.slice(0, visibleCount).map((item, index) => {
                        const Icon = iconMap[item.icon]; // ✅ Correct place

                        return (
                            <div
                                key={index}
                                className="p-6 border border-gray-500 rounded-xl shadow-sm
                hover:shadow-md hover:border-orange-400 bg-gradient-to-r 
                from-[#1a1a1a] to-[#0d0d0d] hover:scale-105 transition-all
                duration-300 ease-out cursor-pointer group"
                            >
                                {/* Icon & Count */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-[#f97a1f1a] rounded-lg">
                                        <Icon className="h-8 w-8 text-orange-600" />
                                    </div>
                                    <span className="px-3 py-1 text-sm font-medium bg-gray-900 text-gray-400 rounded-full">
                                        {item.available} Available
                                    </span>
                                </div>

                                {/* Info */}
                                <h3 className="text-xl font-semibold mb-2 text-gray-300">
                                    {item.name}
                                </h3>
                                <p className="text-sm text-gray-400 mb-1">{item.category}</p>
                                <p className="text-sm text-gray-500">{item.specs}</p>
                            </div>
                        );
                    })}
                </div>

             <div className="text-center mt-12 flex justify-center gap-4">

  {visibleCount < equipment.length ? (
    <button
      onClick={handleViewMore}
      className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:shadow-orange-600/30 transition-all duration-300"
    >
      View More
    </button>
  ) : (
    <button
      onClick={handleShowLess}
      className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
    >
      Show Less
    </button>
  )}
  
</div>
            </div>
        </section>
    );
};

export default EquipmentShowcase;
