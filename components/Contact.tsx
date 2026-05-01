"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Новая заявка от ${formData.name}. Телефон: ${formData.phone}, Email: ${formData.email}, Услуга: ${formData.service}, Дата: ${formData.date}, Сообщение: ${formData.message}`;

    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    console.log("Form submitted:", formData);
    alert("Спасибо за вашу заявку! Мария свяжется с вами в ближайшее время.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      message: "",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 bg-primary-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Свяжитесь со мной
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Готова помочь вам с вашим образом. Заполните форму или напишите в мессенджер.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
              <a
                href="tel:+7"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                +7 (XXX) XXX-XX-XX
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Доступна с 10:00 до 21:00
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:maria@example.com"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                maria@example.com
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Ответ в течение 24 часов
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Мессенджеры
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://t.me/maria_makeupspb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-50 hover:bg-primary-100 rounded-lg text-primary-600 text-xl transition-all"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary-50 hover:bg-primary-100 rounded-lg text-primary-600 text-xl transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder="Анна"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder="+7 (999) 999-99-99"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                  placeholder="anna@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Выберите услугу
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                >
                  <option value="">Выберите услугу...</option>
                  <option value="makeup">Макияж</option>
                  <option value="hair">Прическа</option>
                  <option value="full">Полный образ</option>
                  <option value="event">Сопровождение на событие</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Предпочтительная дата
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Сообщение
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
                placeholder="Расскажите о ваших пожеланиях..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Отправить заявку
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Я обещаю быстро ответить на вашу заявку и помочь вам создать идеальный образ.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
