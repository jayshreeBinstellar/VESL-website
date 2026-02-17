// import React from "react";
// import Logo from "../assets/logo.png";


// export const Navbar = () => {
//   return (
//     <header className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b border-gray-700">
//       <div className="container mx-auto flex items-center justify-between">
//         <button
//           onClick={() => {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//             window.history.pushState(null, "", "/");
//           }}
//           className="flex items-center"
//         >
//           <img src={Logo} alt="VESL" className="h-20" />
//           <span className="text-lg font-bold text-[#f4783f] tracking-wide">VAIBHAVI ENTERPRISE</span>
//         </button>

//         <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
//           {["Home", "Equipment", "Features", "Contact"].map((item) => (
//             <button
//               key={item}
//               onClick={() => {
//                 const element = document.getElementById(item.toLowerCase());
//                 if (element) {
//                   element.scrollIntoView({ behavior: "smooth" });
//                   // Update URL without hash if desired, or just keep it clean
//                   window.history.pushState(null, "", `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`);
//                 }
//               }}
//               className="hover:text-[#F26522] transition relative group"
//             >
//               {item}
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#F26522] group-hover:w-full transition-all"></span>
//             </button>
//           ))}
//         </nav>
//       </div>
//     </header>

//   );
// };


import React, { useState, useRef, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu"; // MUI Hamburger
import CloseIcon from "@mui/icons-material/Close"; // Optional for close icon
import Logo from "../assets/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = ["Home", "Equipment", "Features", "Contact"];

  const handleNavClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(
        null,
        "",
        `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`
      );
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b border-gray-700 pl-2 pr-2 lg:pl-20 lg:pr-20">       <div className="container mx-auto flex items-center justify-between">
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


      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-8 text-gray-300 font-medium">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className="hover:text-[#F26522] transition relative group"
          >
            {item}
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#F26522] group-hover:w-full transition-all"></span>
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="block lg:hidden relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-300 focus:outline-none"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-3 top-[24px] w-[137px] bg-black/90 text-gray-300 flex flex-col items-start py-2 rounded shadow-lg">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="w-full text-left px-4 py-2 hover:bg-[#F26522]/20 transition"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
    </header>
  );
};
