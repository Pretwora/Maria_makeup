"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Как долго держится макияж?",
      answer:
        "Профессиональный макияж держится в среднем 8-12 часов в зависимости от типа кожи. Я использую качественные длительные средства для максимальной стойкости.",
    },
    {
      id: 2,
      question: "Какие материалы вы используете?",
      answer:
        "Работаю только с профессиональной косметикой от проверенных производителей. Все средства гипоаллергенны и безопасны для кожи. Могу подобрать гипоаллергенные варианты под ваши потребности.",
    },
    {
      id: 3,
      question: "Как далеко вы ездите на выездные работы?",
      answer:
        "Работаю в пределах города и приезжаю на любые мероприятия. Стоимость выезда обсуждается отдельно. Готова приехать в отель, дом или на площадку проведения события.",
    },
    {
      id: 4,
      question: "Нужна ли предварительная консультация?",
      answer:
        "Консультация не обязательна, но очень рекомендуется. Это поможет обсудить ваши пожелания, выбрать оптимальный вариант и убедиться, что мы на одной волне.",
    },
    {
      id: 5,
      question: "Какие методы оплаты вы принимаете?",
      answer:
        "Принимаю оплату наличными, переводом на карту и мобильными платежами. Для выездных работ может потребоваться частичная предоплата.",
    },
    {
      id: 6,
      question: "Возможна ли отмена или перенос записи?",
      answer:
        "Да, отмену или перенос нужно согласовать за 24 часа до назначенного времени. Отмена с меньшим уведомлением может повлечь штраф в размере 50% стоимости услуги.",
    },
    {
      id: 7,
      question: "Как я могу заказать вас на свадьбу?",
      answer:
        "Напишите мне в мессенджер или позвоните. Мы обсудим детали вашей свадьбы, примерку образа и согласуем стоимость. Рекомендую бронировать как можно раньше.",
    },
    {
      id: 8,
      question: "Что такое пробный макияж?",
      answer:
        "Пробный макияж — это сеанс перед главным событием, где мы проверяем, как держится макияж на вашей коже, какие оттенки вам подходят и вносим необходимые коррективы.",
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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg text-gray-600">
            Не нашли ответ на свой вопрос? Свяжитесь со мной напрямую!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="border-2 border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-primary-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {item.question}
                </h3>
                <motion.div
                  animate={{
                    rotate: expandedId === item.id ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-primary-600 flex-shrink-0 ml-4"
                >
                  <FaChevronDown />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedId === item.id ? "auto" : 0,
                  opacity: expandedId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-primary-50/50 border-t-2 border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-primary-50 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Остались вопросы?
          </h3>
          <p className="text-gray-600 mb-6">
            Готова ответить на любые вопросы о услугах и помочь вам выбрать идеальный образ
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Связаться со мной
          </a>
        </motion.div>
      </div>
    </section>
  );
}
