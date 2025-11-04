// Enhanced Hero Section
import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "../assets/mining-hero-bg.jpg";
// import logo from "../assets/logo.png";


const Hero = () => {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <section
            id="home"
            className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105 brightness-[0.55]"
                style={{ backgroundImage: `url(${heroBg})` }}
            />


            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/95" />


            <div className="relative z-10 text-center px-5 max-w-3xl mx-auto animate-fade-in">
                {/* <img
                    src={logo}
                    alt="Vaibhavi Enterprise"
                    className="mx-auto w-[200px] drop-shadow-xl"
                /> */}


                <h1
                    className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent"
                >
                    Vaibhavi Enterprise
                </h1>


                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-10">
                    Earthwork excavations and heavy equipment rental services for mining and
                    construction in Sierra Leone.
                </p>


                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={scrollToContact}
                        className="group flex items-center bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition shadow-lg hover:shadow-orange-600/30"
                    >
                        Get a Quote
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>


                    <a
                        href="tel:+23230094606"
                        className="flex items-center border border-gray-600 bg-black/60 text-gray-100 font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition shadow-md"
                    >
                        <Phone className="mr-2 h-5 w-5" /> +232 30094606
                    </a>
                </div>
            </div>


            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

export default Hero;