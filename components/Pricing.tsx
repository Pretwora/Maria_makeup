"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface PricingItem {
  id: number;
  service: string;
  price: string;
  description: string;
  popular?: boolean;
}

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const pricingItems: PricingItem[] = [
    {
      id: 1,
      service: "Дневной макияж",
      price: "2,500₽",
      description: "Свежий и естественный макияж на день",
    },
    {
      id: 2,
      service: "Вечерний макияж",
      price: "3,500₽",
      description: "Выразительный макияж на торжество",
      popular: true,
    },
    {
      id: 3,
      service: "Свадебный макияж",
      price: "5,500₽",
      description: "Профессиональный макияж для невесты",
    },
    {
      id: 4,
      service: "Простая прическа",
      price: "2,000₽",
      description: "Укладка в домашних условиях",
    },
    {
      id: 5,
      service: "Сложная прическа",
      price: "4,000₽",
      description: "Объемные и творческие прически",
      popular: true,
    },
    {
      id: 6,
      service: "Полный образ",
      price: "7,000₽",
      description: "Макияж + прическа для события",
    },
    {
      id: 7,
      service: "Сопровождение (час)",
      price: "1,500₽",
      description: "Коррекция макияжа и прически",
    },
    {
      id: 8,
      service: "Консультация",
      price: "500₽",
      description: "Индивидуальная консультация по образу",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="pricing" className="py-24 bg-primary-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Прайс-лист
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Прозрачные цены на все услуги. Скидки доступны при заказе нескольких услуг.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {pricingItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative p-6 rounded-2xl transition-all duration-300 border-2 overflow-hidden ${
                item.popular
                  ? "bg-gradient-to-br from-primary-600 to-primary-700 text-white border-primary-600 shadow-xl scale-105 md:scale-110"
                  : "bg-white border-gray-200 hover:border-primary-600 hover:shadow-lg"
              }`}
            >
              {item.popular && (
                <div className="inline-block bg-accent-gold text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  ⭐ Популярно
                </div>
              )}

              <h3 className={`text-xl font-serif font-bold mb-2 ${
                item.popular ? "text-white" : "text-gray-900"
              }`}>
                {item.service}
              </h3>

              <p className={`text-4xl font-bold mb-4 ${
                item.popular ? "text-white" : "text-primary-600"
              }`}>
                {item.price}
              </p>

              <p className={`text-sm mb-6 ${
                item.popular ? "text-white/90" : "text-gray-600"
              }`}>
                {item.description}
              </p>

              <Link
                href="#contact"
                className={`inline-block font-semibold transition-all ${
                  item.popular
                    ? "bg-white text-primary-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
                    : "text-primary-600 hover:text-primary-700"
                }`}
              >
                {item.popular ? "Записаться" : "Подробнее"}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-600"
        >
          <p>
            💬 Свяжитесь со мной для индивидуального предложения и скидок на комбо-услуги
          </p>
        </motion.div>
      </div>
    </section>
  );
}
