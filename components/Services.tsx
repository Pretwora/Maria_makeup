"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const services: Service[] = [
    {
      id: 1,
      icon: "💄",
      title: "Визаж (макияж)",
      description:
        "Профессиональный макияж для любого случая. От естественного дневного до выразительного вечернего.",
      features: ["Дневной макияж", "Вечерний макияж", "Свадебный макияж"],
    },
    {
      id: 2,
      icon: "💇",
      title: "Прическа",
      description:
        "Стильные прически для создания идеального образа. Классические и современные техники.",
      features: ["Локоны", "Высокие прически", "Косы"],
    },
    {
      id: 3,
      icon: "✨",
      title: "Полный образ",
      description:
        "Комплексная услуга: макияж + прическа. Я создам идеальный гармоничный образ.",
      features: ["Консультация", "Макияж", "Прическа"],
    },
    {
      id: 4,
      icon: "🎉",
      title: "Сопровождение на мероприятиях",
      description:
        "Полная поддержка вашего образа во время события. Коррекция макияжа и прически.",
      features: ["Свадьба", "Праздник", "Фотосессия"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Услуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Я предлагаю полный спектр услуг для создания вашего идеального образа
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-cream/50 border-2 border-primary-200/50 hover:border-primary-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-primary-600">
                  Что включено:
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center gap-2">
                      <span className="text-primary-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#contact"
                className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Узнать подробнее →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
