"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-primary-50 to-accent-rose/20 overflow-hidden pt-20">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-peach/30 rounded-full blur-3xl -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl -ml-48"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-24"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight"
            >
              Создаю <span className="text-primary-600">образы</span> мечты
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
            >
              Профессиональный визаж и стилизация для любых событий. Я помогу вам почувствовать себя прекрасной и уверенной.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-500 font-medium"
            >
              ✨ Макияж • 💇 Прически • 👗 Полный образ • 🎉 Сопровождение на мероприятиях
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(157, 125, 95, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg text-center"
                >
                  Записаться на консультацию
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, backgroundColor: "rgba(157, 125, 95, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#gallery"
                  className="block border-2 border-primary-600 text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Смотреть работы
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full max-h-[500px] rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="/images/maria1.jpg"
                alt="Мария - визажист"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Floating decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-primary-300/20 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-primary-600 text-3xl">↓</div>
      </motion.div>
    </section>
  );
}
