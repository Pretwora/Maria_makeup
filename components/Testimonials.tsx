"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Анна Смирнова",
      text: "Мария создала мне идеальный образ на свадьбу! Макияж держался весь день, прическа была восхитительной. Все гости говорили, что я выглядела как королева. Спасибо за то, что сделала мой день идеальным!",
      rating: 5,
      avatar: "👰",
    },
    {
      id: 2,
      name: "Елена Петрова",
      text: "Профессионал своего дела! Мария слушает и понимает, что тебе нужно. Я пришла с размытым представлением о том, какой макияж мне подходит, а она за 10 минут поняла мою кожу, мой цветотип и создала шедевр. Рекомендую всем подругам.",
      rating: 5,
      avatar: "👩‍🦱",
    },
    {
      id: 3,
      name: "Ольга Иванова",
      text: "Макияж получился не просто красивым, но очень уютным и естественным. Чувствовала себя собой, только лучше! Даже подруги не верили, что это я в зеркале. Теперь только к Марии!",
      rating: 5,
      avatar: "👩",
    },
    {
      id: 4,
      name: "Виктория Морозова",
      text: "На фотосессии Мария работала как волшебница. Фото получились потрясающие, благодаря её работе! Макияж идеально смотрелся в кадре и был очень стойким. Просто супер!",
      rating: 5,
      avatar: "👩‍🦰",
    },
    {
      id: 5,
      name: "Екатерина Воробьева",
      text: "Я очень нервничала перед важным событием и не знала, как себя преобразить. Мария не только сделала красивый макияж и прическу, но и подарила мне уверенность в себе. Я чувствовала себя богиней весь вечер!",
      rating: 5,
      avatar: "💃",
    },
    {
      id: 6,
      name: "Мария Козлова",
      text: "Первый раз попробовала услугу пробного макияжа перед свадьбой. Мария учла все мои пожелания и переделала всё с максимальной аккуратностью. На самой свадьбе я была уверена, что выглядела идеально!",
      rating: 5,
      avatar: "💇‍♀️",
    },
    {
      id: 7,
      name: "Дарья Сидорова",
      text: "Записалась на консультацию и осталась в восторге! Мария подробно объяснила, какие оттенки мне подходят, как правильно ухаживать за кожей, чтобы макияж держался дольше. Это был не просто макияж, это была целая школа красоты!",
      rating: 5,
      avatar: "👩",
    },
    {
      id: 8,
      name: "Татьяна Лебедева",
      text: "Мне нужна была помощь с образом для деловой встречи. Мария создала макияж, который выглядит натурально, но при этом подчеркивает мои лучшие черты. Все коллеги спрашивали, что я изменила! Спасибо за чудо!",
      rating: 5,
      avatar: "👨‍💼",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="testimonials" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Что говорят обо мне мои клиентки
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-accent-cream/50 p-8 md:p-12 rounded-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">
                  {testimonials[currentSlide].avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentSlide].name}
                  </h3>
                  <div className="flex gap-1 text-accent-gold mt-1">
                    {Array.from({
                      length: testimonials[currentSlide].rating,
                    }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed italic">
                "{testimonials[currentSlide].text}"
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-all"
              aria-label="Предыдущий отзыв"
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentSlide
                      ? "bg-primary-600 w-8"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Отзыв ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-all"
              aria-label="Следующий отзыв"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-gray-600">
            {currentSlide + 1} / {testimonials.length}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-primary-600">500+</div>
            <p className="text-gray-600 mt-2">Довольных клиентов</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600">1000+</div>
            <p className="text-gray-600 mt-2">Выполненных образов</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600">4.9★</div>
            <p className="text-gray-600 mt-2">Средняя оценка</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
