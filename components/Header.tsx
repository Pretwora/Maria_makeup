"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaPhone, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Обо мне", href: "#about" },
    { label: "Портфолио", href: "#gallery" },
    { label: "Услуги", href: "#services" },
    { label: "Записаться", href: "#contact" },
    { label: "Отзывы", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold">
            <span className="text-primary-600">Мария</span>
            <span className="text-primary-400"> Григорьева</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 transition-colors text-lg"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="tel:+7"
              className="text-gray-700 hover:text-primary-600 transition-colors text-lg"
              aria-label="Позвонить"
            >
              <FaPhone />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors py-2 px-2 rounded hover:bg-primary-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-4 pt-4 px-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-lg"
                >
                  <FaInstagram />
                </a>
                <a
                  href="tel:+7"
                  className="text-gray-700 hover:text-primary-600 transition-colors text-lg"
                >
                  <FaPhone />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
