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
        About Me
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
            I am a 16 year old student currently attending school
            at SMKN 2 Kudus. I have a strong interest in programming
            and always try to hone my skills in various languages
            programming and technology. I have a dream or aspire
            as a software engineer.
          </motion.p>

          <motion.h3
            variants={childVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-8 mb-4 md:mb-6"
          >
            Hobby
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
      return "I love solving problems through code.";
    case "Gaming":
      return "Playing games helps me think strategically.";
    case "Drawing":
      return "Drawing is my way of expressing creativity.";
    case "Music":
      return "Music helps me relax and focus.";
    default:
      return "";
  }
}

export default AboutMe;