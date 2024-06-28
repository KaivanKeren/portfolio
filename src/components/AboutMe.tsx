"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGamepad, FaPalette, FaMusic } from "react-icons/fa";

const AboutMe = React.forwardRef<HTMLElement>((props, ref) => {
  const [hoveredHobby, setHoveredHobby] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const hobbies = [
    { icon: FaLaptopCode, name: "Coding", color: "blue" },
    { icon: FaGamepad, name: "Gaming", color: "yellow" },
    { icon: FaPalette, name: "Drawing", color: "red" },
    { icon: FaMusic, name: "Music", color: "yellow" },
  ];

  return (
    <motion.section
      id="tentang-saya"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="flex flex-col items-center justify-center min-h-screen py-16 px-4"
    >
      <motion.h2
        variants={childVariants}
        className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-gray-800 dark:text-white"
      >
        Tentang Saya
      </motion.h2>
      <motion.div
        variants={childVariants}
        className="w-full max-w-3xl dark:bg-white/10 bg-black/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 space-y-6">
          <motion.p
            variants={childVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Saya adalah seorang siswa berusia 16 tahun yang saat ini bersekolah
            di SMKN 2 Kudus. Saya memiliki minat yang kuat di bidang pemrograman
            dan selalu berusaha mengasah keterampilan saya dalam berbagai bahasa
            pemrograman dan teknologi. Saya memiliki mimpi atau bercita-cita
            sebagai software engineer.
          </motion.p>

          <motion.h3
            variants={childVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-8 mb-4 md:mb-6"
          >
            Hobi
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.name}
                variants={iconVariants}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHoveredHobby(hobby.name)}
                onMouseLeave={() => setHoveredHobby(null)}
                className="flex flex-col items-center justify-center p-2 md:p-4 dark:bg-white/10 bg-black/10 backdrop-blur-md rounded-lg transition-all duration-300 cursor-pointer"
              >
                <hobby.icon className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-${hobby.color}-500 mb-2`} />
                <p className="text-gray-800 dark:text-gray-200 font-medium">
                  {hobby.name}
                </p>
                {hoveredHobby === hobby.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs md:text-sm text-gray-600 dark:text-gray-400"
                  >
                    {getHobbyDescription(hobby.name)}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
});

function getHobbyDescription(hobby: string): string {
  switch (hobby) {
    case "Coding":
      return "Saya suka memecahkan masalah melalui kode.";
    case "Gaming":
      return "Bermain game membantu saya berpikir strategis.";
    case "Drawing":
      return "Menggambar adalah cara saya mengekspresikan kreativitas.";
    case "Music":
      return "Musik membantu saya rileks dan fokus.";
    default:
      return "";
  }
}

export default AboutMe;