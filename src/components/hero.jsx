import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import heroBackground from "../assets/mining-hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm "  />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 
           bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 
           bg-clip-text text-transparent">
            Vaibhavi Enterprise
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#a6a6a6] mb-8 max-w-2xl mx-auto">
            Earth Work Excavations - Professional equipment rentals for your
            mining and excavation projects in Sierra Leone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={scrollToContact} className="group flex items-center broder bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center border-gray-600 bg-gray-950 text-gray-100 border px-4 py-2 rounded-md hover:bg-orange-500 transition">
              <Phone className="mr-2 h-4 w-4" />
              +232 30094606
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
