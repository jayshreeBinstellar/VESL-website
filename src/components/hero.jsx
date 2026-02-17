// Enhanced Hero Section
import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "../assets/mining-hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background Image with slight slow zoom */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 bg-cover bg-center brightness-[0.45]"
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/95" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600/20 border border-orange-600/30 text-orange-500 font-bold text-sm uppercase tracking-widest">
                            Official Mining & Earthwork Partner
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 bg-clip-text text-transparent"
                    >
                        POWERING <br /> THE GROUND UP
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
                    >
                        Earthwork excavations and heavy equipment rental services built for the toughest terrains in Sierra Leone.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <button
                            onClick={scrollToContact}
                            className="group relative flex items-center bg-orange-600 hover:bg-orange-500 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:shadow-[0_0_40px_rgba(234,88,12,0.5)] overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                GET A QUOTE
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <a
                            href="tel:+23230094606"
                            className="group flex items-center bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 transition-all"
                        >
                            <Phone className="mr-3 h-5 w-5 text-orange-500" /> +232 30094606
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom transition gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

export default Hero;