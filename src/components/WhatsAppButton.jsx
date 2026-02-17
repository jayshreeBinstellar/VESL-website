import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = "23275636333"; // User's phone number from Hero component
    const message = encodeURIComponent("Hi Vaibhavi Enterprise, I'm interested in renting equipment or inquiring about your excavation services.");

    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;

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
                className="flex items-center gap-2 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors relative group"
            >
                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-black/80 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                    Chat with us on WhatsApp
                </span>

                <MessageCircle className="h-6 w-6" />

                {/* Visual indicator (pulsing ring) */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
            </motion.a>
        </div>
    );
};

export default WhatsAppButton;
