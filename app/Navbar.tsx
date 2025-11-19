"use client";

import CartIcon from "./components/carticon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => setMenuOpen((prev) => !prev);
  const toggleDesktopMenu = () => setDesktopMenuOpen((prev) => !prev);

  const categories = [
    ["Plateaux", "plateaux"],
    ["Sashimi", "sashimi"],
    ["Chirachi", "chirashi"],
    ["Maki California", "maki-california"],
    ["California Roll", "california-roll"],
    ["Spring Roll", "spring-roll"],
    ["Special Rolls", "special-roll"],
    ["Combinaisons", "combinaison"],
    ["Menu Végétarien", "menu-vegetarien"],
    ["Nigiri", "nigiri"],
    ["Gunkan", "gunkan"],
    ["Temaki", "temaki"],
    ["Maki", "maki"],
    ["Futomaki", "futomaki"],
    ["Suppléments", "supplements"],
    ["Poké Bowl", "poke-bowl"],
    ["Softs", "soft"],
    ["Bières", "bieres"],
    ["Desserts", "desserts"],
  ];

  const handleCategoryClick = (id: string) => {
    if (pathname !== "/menu") {
      router.push(`/menu#${id}`);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    setDesktopMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 text-black">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#b12c20] uppercase tracking-wide">
          FUTARI
        </h1>

        {/* --- Ordinateur --- */}
        <div className="hidden md:flex space-x-8 text-lg items-center relative">
          <Link href="/" className="hover:text-[#b12c20] transition">
            Accueil
          </Link>

          {/* Menu déroulant desktop */}
          <div className="relative">
            <button
              onClick={toggleDesktopMenu}
              className="flex items-center hover:text-[#b12c20] transition focus:outline-none"
            >
              Menu
              <ChevronDown className="ml-1" size={18} />
            </button>

            <AnimatePresence>
              {desktopMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white text-[#b12c20] shadow-lg rounded-lg py-2 w-60 max-h-96 overflow-y-auto border border-gray-100"
                >
                  {categories.map(([name, id]) => (
                    <button
                      key={id}
                      onClick={() => handleCategoryClick(id)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition"
                    >
                      {name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Icône panier */}
          <CartIcon />

        </div>

        {/* --- Téléphone --- */}
        <div className="md:hidden flex items-center space-x-6">
          <Link href="/" className="text-black hover:text-[#b12c20] transition">
            Accueil
          </Link>
          
          <CartIcon />
          <button
            onClick={toggleMobileMenu}
            className="text-[#b12c20] focus:outline-none"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* --- Menu déroulant mobile (beige foncé) --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#E8E0D4] text-black py-4 px-6 space-y-4 shadow-lg"
          >
            {categories.map(([name, id]) => (
              <button
                key={id}
                onClick={() => handleCategoryClick(id)}
                className="block w-full text-left hover:text-[#b12c20] transition"
              >
                {name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
