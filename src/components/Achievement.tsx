"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaMedal, FaTrophy } from "react-icons/fa";

const Achievement = () => {
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
    <motion.section
      id="pencapaian"
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      variants={containerVariants}
      className="flex flex-col items-center justify-center rounded-xl shadow-xl min-h-screen p-8 bg-gradient-to-r from-green-400/50 to-blue-500/80 dark:from-green-700/70 dark:to-blue-950/70 text-slate-900 dark:text-gray-200"
    >
      <div className="w-full md:w-3/4 lg:w-1/2 p-8 space-y-8 text-center">
        <motion.h2
          variants={childVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight text-slate-900 dark:text-gray-200"
        >
          Pencapaian
        </motion.h2>
        <motion.div variants={childVariants} className="grid grid-cols-1 gap-6">
          <motion.div
            variants={iconVariants}
            className="flex flex-col items-center space-y-2"
          >
            <FaTrophy className="text-5xl text-yellow-500" />
            <p className="text-xl text-slate-900 dark:text-gray-300">
              Juara II Lomba Kompetensi Siswa (LKS) Web Technology Tingkat
              kabupaten Kudus tahhun 2024
            </p>
          </motion.div>
          <motion.div
            variants={iconVariants}
            className="flex flex-col items-center space-y-2"
          >
            <FaMedal className="text-5xl text-gray-500" />
            <p className="text-xl text-slate-900 dark:text-gray-300">
              Teater terbaik 5 Festival Teater Pelajar Tingkat Kabupaten Kudus
              tahun 2023
            </p>
          </motion.div>
          <motion.div
            variants={iconVariants}
            className="flex flex-col items-center space-y-2"
          >
            <FaCertificate className="text-5xl text-blue-500" />
            <p className="text-xl text-slate-900 dark:text-gray-300">
              Sertifikasi Belajar Dasar Visualisasi Data
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievement;
