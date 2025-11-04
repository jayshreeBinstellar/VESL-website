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

const equipment = [
  {
    icon: Pickaxe,
    name: "Excavator 21.5 Ton",
    category: "Excavation",
    specs: "Includes Spare Bucket | Hydraulic System | Heavy Duty",
    available: 1,
  },
  {
    icon: Hammer,
    name: "Breaker Attachment",
    category: "Demolition",
    specs: "Compatible with 20-30 Ton Excavators | High Impact Force",
    available: 2,
  },
  {
    icon: Drill,
    name: "Welding Machine",
    category: "Fabrication",
    specs: "300 AMP | Portable | Ideal for onsite repair work",
    available: 2,
  },
  {
    icon: Wrench,
    name: "Air Compressor",
    category: "Workshop Equipment",
    specs: "250 Litre | 5 HP | Dual Output | High Pressure",
    available: 1,
  },
  {
    icon: Zap,
    name: "Diesel Generator Set",
    category: "Power Supply",
    specs: "15–125 kVA | Soundproof | Fuel Efficient",
    available: 3,
  },
  {
    icon: Truck,
    name: "Tipping Truck",
    category: "Transport",
    specs: "16 Cubic Meter | Ideal for Sand & Gravel Hauling",
    available: 2,
  },
  {
    icon: Cog,
    name: "Plate Compactor",
    category: "Road Work",
    specs: "90 kg | Honda Engine | Ideal for surface compaction",
    available: 3,
  },
  {
    icon: HardHat,
    name: "Safety Gear Kit",
    category: "Safety",
    specs: "Helmet | Gloves | Shoes | Reflective Vest",
    available: 10,
  },
  {
    icon: Shield,
    name: "Cutting Machine",
    category: "Workshop Tools",
    specs: "14 Inch Blade | Heavy Duty | Steel/Metal Cutting",
    available: 4,
  },
  {
    icon: Wrench,
    name: "Hydraulic Jack",
    category: "Garage Tools",
    specs: "20 Ton Capacity | Portable | Industrial Grade",
    available: 2,
  },
];

export const EquipmentShowcase = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 2); // show 2 more each click
  };

  return (
    <section className="py-20 bg-[#1a1a1a]" id="equipment">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-300 ">
            Our Equipment Fleet
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Wide range of heavy and workshop equipment available for short-term and long-term rentals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {equipment.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="p-6  border border-gray-500 rounded-xl shadow-sm
                         hover:shadow-md hover:border-orange-400 transform bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d]
                         hover:scale-105 transition-all duration-300 ease-out cursor-pointer group"
            >
              {/* Icon and Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-[#f97a1f1a] rounded-lg transition-colors">
                  <item.icon className="h-8 w-8 text-orange-600" />
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
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < equipment.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleViewMore}
              className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition-all duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EquipmentShowcase;
