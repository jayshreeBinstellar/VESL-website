import React from "react";
import Logo from "../assets/logo.png";


export const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/");
          }}
          className="flex items-center"
        >
          <img src={Logo} alt="VESL" className="h-20" />
          <span className="text-lg font-bold text-[#f4783f] tracking-wide">VAIBHAVI ENTERPRISE</span>
        </button>

        <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
          {["Home", "Equipment", "Features", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => {
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  // Update URL without hash if desired, or just keep it clean
                  window.history.pushState(null, "", `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`);
                }
              }}
              className="hover:text-[#F26522] transition relative group"
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#F26522] group-hover:w-full transition-all"></span>
            </button>
          ))}
        </nav>
      </div>
    </header>

  );
};