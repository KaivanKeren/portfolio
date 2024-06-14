"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGamepad, FaPalette, FaMusic } from "react-icons/fa";

const AboutMe = React.forwardRef<HTMLElement>((props, ref) => {
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

  return (
    <>
      <motion.section
        id="tentang-saya"
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-col items-center justify-center rounded-xl shadow-xl min-h-[80vh] p-2 bg-gradient-to-r from-gray-400/50 to-sky-500/80 dark:from-slate-700/70 dark:to-sky-950/70 text-slate-900 dark:text-gray-200"
      >
        <div className="w-full md:w-3/4 lg:w-1/2 p-2 space-y-8 text-center">
          <motion.h2
            variants={childVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight text-slate-900 dark:text-gray-200"
          >
            Tentang Saya
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-base sm:text-lg md:text-xl text-slate-900 dark:text-gray-300"
          >
            Saya adalah seorang siswa berusia 16 tahun yang saat ini bersekolah
            di SMKN 2 Kudus. Saya memiliki minat yang kuat di bidang pemrograman
            dan selalu berusaha mengasah keterampilan saya dalam berbagai bahasa
            pemrograman dan teknologi. Saya memiliki mimpi atau bercita-cita
            sebagai software engineer.
          </motion.p>

          <motion.h3
            variants={childVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide leading-tight text-slate-900 dark:text-gray-200 mt-8"
          >
            Hobi
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              variants={iconVariants}
              className="flex flex-col items-center space-y-2"
            >
              <FaLaptopCode className="text-4xl text-blue-500" />
              <p className="text-slate-900 dark:text-gray-300">Coding</p>
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="flex flex-col items-center space-y-2"
            >
              <FaGamepad className="text-4xl text-green-600" />
              <p className="text-slate-900 dark:text-gray-300">Gaming</p>
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="flex flex-col items-center space-y-2"
            >
              <FaPalette className="text-4xl text-red-600" />
              <p className="text-slate-900 dark:text-gray-300">Drawing</p>
            </motion.div>
            <motion.div
              variants={iconVariants}
              className="flex flex-col items-center space-y-2"
            >
              <FaMusic className="text-4xl text-yellow-600" />
              <p className="text-slate-900 dark:text-gray-300">Music</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
});

export default AboutMe;
