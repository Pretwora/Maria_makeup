"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const milestones = [
    { year: "2018", text: "Начало пути в визаже" },
    { year: "2019", text: "Первые профессиональные работы" },
    { year: "2020", text: "Развитие специализации" },
    { year: "2024", text: "Признание и достижения" },
  ];

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 rounded-3xl shadow-xl overflow-hidden"
          >
            <img
              src="/images/maria2.jpg"
              alt="Портрет Марии"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                Обо мне
              </h2>
              <div className="h-1 w-24 bg-primary-600 rounded"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Я визажист с многолетним опытом, помогающая женщинам раскрыть свою природную красоту и почувствовать себя уверенно в любой ситуации.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed"
            >
              Моя работа — это больше, чем просто макияж. Это создание образа, который подчеркивает вашу уникальность и индивидуальность. Я верю, что каждая женщина прекрасна по-своему, и моя задача — помочь этой красоте сиять.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 leading-relaxed"
            >
              Я работаю с качественной косметикой, прошла множество профессиональных курсов и постоянно развиваюсь в своём мастерстве. Каждая клиентка для меня — это отдельная история, и я подхожу к каждой с любовью и вниманием.
            </motion.p>

            {/* Milestones */}
            <motion.div variants={itemVariants} className="space-y-3 pt-6">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4 items-start"
                >
                  <div className="text-primary-600 font-bold text-xl min-w-fit">
                    {milestone.year}
                  </div>
                  <div className="text-gray-600 pt-1">{milestone.text}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 italic pt-6 border-l-4 border-primary-600 pl-4"
            >
              "Ваша красота уже внутри вас. Я просто помогаю ей сияться наружу. Каждый штрих, каждый оттенок — это часть вашей уникальной истории успеха."
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
