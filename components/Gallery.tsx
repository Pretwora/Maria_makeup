"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaTimes } from "react-icons/fa";

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

export default function Gallery() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: 1, category: "makeup", title: "Макияж 1", image: "makeup1.jpg" },
    { id: 2, category: "makeup", title: "Макияж 2", image: "makeup2.jpg" },
    { id: 3, category: "makeup", title: "Макияж 3", image: "makeup3.jpg" },
    { id: 4, category: "makeup", title: "Макияж 4", image: "makeup4.jpg" },
    { id: 5, category: "makeup", title: "Макияж 5", image: "makeup5.jpg" },
    { id: 6, category: "hair", title: "Прическа", image: "hair1.jpg" },
    { id: 7, category: "full", title: "Полный образ 1", image: "fullstyle1.jpg" },
    { id: 8, category: "full", title: "Полный образ 2", image: "fullstyle2.jpg" },
  ];

  const categories = [
    { id: "all", label: "Все работы" },
    { id: "makeup", label: "Макияж" },
    { id: "hair", label: "Прически" },
    { id: "full", label: "Полный образ" },
  ];

  const filtered =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="gallery" className="py-24 bg-primary-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Галерея работ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Примеры моих работ: до и после, разнообразные техники и стили
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              layoutId={`gallery-${item.id}`}
              onClick={() => setSelectedImage(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 25px 50px -12px rgba(157, 125, 95, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={`/images/${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center backdrop-blur-sm"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="text-center text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="font-semibold text-lg"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {item.title}
                  </motion.p>
                  <motion.p
                    className="text-sm text-white/80 mt-2"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    Нажмите для просмотра
                  </motion.p>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-primary-600"
                initial={{ opacity: 0, x: 20 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {categories.find((c) => c.id === item.category)?.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-serif font-bold">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="text-gray-500 hover:text-gray-900 text-2xl"
              >
                <FaTimes />
              </button>
            </div>
            <div className="rounded-xl overflow-hidden mb-4 max-h-96">
              <img
                src={`/images/${selectedImage.image}`}
                alt={selectedImage.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Категория:{" "}
              <span className="font-semibold">
                {categories.find((c) => c.id === selectedImage.category)?.label}
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
