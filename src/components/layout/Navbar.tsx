"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopOrSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[999] transition-all duration-300",
          isScrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        {/* ✅ FIX UTAMA ADA DI SINI */}
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-8 lg:px-16">
          
          {/* LOGO */}
          <button
            onClick={() => scrollToTopOrSection("home")}
            className="flex items-center gap-1 text-2xl md:text-4xl font-bold"
          >
            <span className={cn("italic", isScrolled ? "text-black" : "text-orange-500")}>
              Alika
            </span>
            <span className={cn(isScrolled ? "text-orange-500" : "text-white")}>
              Cheryl
            </span>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {["home", "about", "blog", "gallery", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToTopOrSection(section)}
                className={cn(
                  "px-5 py-2 rounded-full capitalize font-medium transition-all",
                  isScrolled
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/20"
                )}
              >
                {section === "home" ? "Home" : section}
              </button>
            ))}
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={cn(
          "fixed inset-0 z-[998] flex items-center justify-center bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-50 transition-transform duration-500 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* (ISI MOBILE MENU TETAP — TIDAK DIUBAH) */}
      </div>
    </>
  );
}