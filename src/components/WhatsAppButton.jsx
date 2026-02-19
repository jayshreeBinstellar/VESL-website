import React, { useEffect, useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
    const [showMobileTooltip, setShowMobileTooltip] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const phoneNumber = "23275636333";
    const message = encodeURIComponent(
        "Hi Vaibhavi Enterprise, I'm interested in renting equipment or inquiring about your excavation services."
    );

    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;

    // Detect screen size
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Hide tooltip after 10 seconds on mobile
    useEffect(() => {
        if (isMobile) {
            const timer = setTimeout(() => {
                setShowMobileTooltip(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isMobile]);

    return (
        <div className="fixed bottom-6 right-6 z-[999]">
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 bg-[#25D366] text-white p-2 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors relative group"
            >
                {/* Mobile Tooltip (smooth exit) */}
                <AnimatePresence>
                    {isMobile && showMobileTooltip && (
                        <motion.span
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 40, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute right-full mr-4 bg-black/80 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap"
                        >
                            Chat with us on WhatsApp
                        </motion.span>
                    )}
                </AnimatePresence>

                {/* Desktop Tooltip (hover animation smooth) */}
                {!isMobile && (
                    <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 0, x: 10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-full mr-4 bg-black/80 text-white text-sm px-3 py-1 rounded-lg 
                   whitespace-nowrap z-10 pointer-events-none
                   opacity-0 group-hover:opacity-100"
                    >
                        Chat with us on WhatsApp
                    </motion.span>
                )}

                <WhatsAppIcon className='z-1000' />

                {/* Pulsing ring */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;
