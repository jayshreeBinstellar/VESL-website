// Enhanced UI components with Navbar & Footer
// You can split these into files as needed
import React from "react";
import { Phone, Mail, Facebook, Instagram, MapPin } from "lucide-react";
import Logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] text-gray-300 py-5 border-t border-gray-800">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
                {/* Logo & About */}
                <div>
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            window.history.pushState(null, "", "/");
                        }}
                        className="flex items-center"
                    >
                        <img src={Logo} alt="Vaibhavi Enterprise" className="w-[125px] object-contain" />
                        <div className="leading-tight text-left">
                            <h2 className="text-2xl font-extrabold text-orange-500 tracking-wide">VAIBHAVI</h2>
                            <h2 className="text-sm font-semibold text-orange-400 tracking-wide ml-1">ENTERPRISE SL LTD.</h2>
                        </div>
                    </button>
                    <p className="text-sm text-gray-400 leading-relaxed mt-2 max-w-xs">
                        Vaibhavi Enterprise — Earth work excavation, heavy machinery rental & mining support services in Sierra Leone.
                    </p>
                </div>


                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-4 text-orange-400 uppercase text-sm tracking-wide">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {["Home", "Equipment", "Features", "Contact"].map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById(item.toLowerCase());
                                        if (element) {
                                            element.scrollIntoView({ behavior: "smooth" });
                                            window.history.pushState(null, "", `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`);
                                        }
                                    }}
                                    className="hover:text-orange-500 transition inline-flex items-center gap-1"
                                >
                                    <span>•</span> {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Contact */}
                <div>
                    <h3 className="font-semibold mb-4 text-orange-400 uppercase text-sm tracking-wide">Contact</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange-500" /> +91 9586465642 (India)</div>
                        <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange-500" /> +232 80094606</div>
                        <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange-500" /> +232 75636333</div>
                        <div className="flex items-start gap-2"><Mail className="h-4 w-4 text-orange-500" /> vaibhavienterpriseslltd2022@gmail.com</div>
                        <div className="flex items-start gap-2 text-gray-400 leading-relaxed max-w-xs">
                            <span className="text-orange-500 text-lg"><MapPin className="h-5 w-5 text-orange-500" /></span>
                            Tino's Drive, Magburka, Freetown, Sierra Leone, West Africa
                        </div>
                    </div>
                </div>


                {/* Social */}
                <div>
                    <h3 className="font-semibold mb-4 text-orange-400 uppercase text-sm tracking-wide">Follow Us</h3>
                    <div className="flex gap-5 text-xl">
                        <button type="button" aria-label="Facebook">
                            <Facebook className="cursor-pointer hover:text-orange-500 transition transform hover:scale-110" />
                        </button>
                        <button type="button" aria-label="Instagram">
                            <Instagram className="cursor-pointer hover:text-orange-500 transition transform hover:scale-110" />
                        </button>
                        {/* <button type="button" aria-label="Linkedin">
                            <Linkedin className="cursor-pointer hover:text-orange-500 transition transform hover:scale-110" />
                        </button> */}
                    </div>
                </div>
            </div>


            <div className="text-center text-xs text-gray-500 mt-12 border-t border-gray-800 pt-5 tracking-wide">
                © 2025 Vaibhavi Enterprise SL LTD. All rights reserved.
            </div>
        </footer>
    );
};
export default Footer;