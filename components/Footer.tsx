"use client";

import Link from "next/link";
import { FaInstagram, FaPhone, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Обо мне", href: "#about" },
    { label: "Портфолио", href: "#gallery" },
    { label: "Услуги", href: "#services" },
    { label: "Цены", href: "#pricing" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              <span className="text-accent-gold">Мария</span> Григорьева
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Профессиональный визаж и стилизация. Помогаю каждой женщине почувствовать себя королевой.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Макияж</li>
              <li>Прически</li>
              <li>Полный образ</li>
              <li>Сопровождение</li>
              <li>Консультации</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="tel:+7"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-gold transition-colors"
              >
                <FaPhone className="text-lg" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </a>

              <p className="text-gray-400 text-sm">
                📧 maria@example.com
              </p>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-gold text-xl transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://t.me/maria_makeupspb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-gold text-xl transition-colors"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {currentYear} Мария Григорьева. Все права защищены.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent-gold transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="#" className="hover:text-accent-gold transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 hover:opacity-100 pointer-events-none hover:pointer-events-auto"
          aria-label="Вернуться в начало"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
