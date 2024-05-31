"use client";
import React from "react";
import { motion } from "framer-motion";

const EduHistory = () => {
  const educationData = [
    {
      institution: "SD 3 Adiwarno",
      degree: "Sekolah Dasar",
      period: "2013 - 2019",
    },
    {
      institution: "SMP 2 Mejobo",
      degree: "Sekolah Menengah Pertama",
      period: "2019 - 2022",
    },
    {
      institution: "SMK 2 Kudus",
      degree: "Sekolah Menengah Kejuruan",
      period: "2022 - 2025",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-screen p-8 text-slate-900 dark:text-gray-200"
    >
      <div className="w-full md:w-3/4 lg:w-1/2 p-8 space-y-8 text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight text-slate-900 dark:text-gray-200"
        >
          Riwayat Pendidikan
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8"
        >
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-gray-200">
                  {item.institution}
                </h3>
                <p className="text-base text-slate-700 dark:text-gray-300">
                  {item.degree}
                </p>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  {item.period}
                </p>
              </div>
              <div className="bg-gradient-to-r from-sky-400 to-blue-600 h-1"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EduHistory;