"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaGamepad,
  FaPalette,
  FaMusic,
} from "react-icons/fa";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <motion.section
      id="tentang-saya"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center rounded-xl shadow-xl min-h-screen p-8 bg-gradient-to-r from-gray-200 to-sky-300 dark:from-slate-700 dark:to-sky-950 text-slate-900 dark:text-gray-200"
    >
      <div className="w-full md:w-3/4 lg:w-1/2 p-8 space-y-8 text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight text-slate-900 dark:text-gray-200"
        >
          Tentang Saya
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-slate-900 dark:text-gray-300"
        >
          Saya bernama Ismail. Saat ini saya berusia 16 tahun. Saya menempuh
          pendidikan di SMK Negeri 2 Kudus di kompetensi keahlian Teknik
          Komputer dan Jaringan, saat ini saya masih duduk di bangku kelas XI
          (Sebelas). Saya memiliki mimpi atau bercita-cita sebagai software
          engineer.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-2"
          >
            <FaLaptopCode className="text-4xl text-blue-500" />
            <p className="text-slate-900 dark:text-gray-300">Coding</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-2"
          >
            <FaGamepad className="text-4xl text-green-500" />
            <p className="text-slate-900 dark:text-gray-300">Gaming</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-2"
          >
            <FaPalette className="text-4xl text-red-500" />
            <p className="text-slate-900 dark:text-gray-300">Drawing</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-2"
          >
            <FaMusic className="text-4xl text-yellow-500" />
            <p className="text-slate-900 dark:text-gray-300">Music</p>
          </motion.div>
        </div>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-slate-900 dark:text-gray-300"
        >
          Tujuan saya adalah menjadi Software Engineer profesional dan
          berkontribusi untuk project-project bermakna yang membuat perbedaan.
          Saya bersemangat mengenai hal ini masa depan dan peluang yang ada di
          masa depan dalam industri teknologi.
        </motion.p>
      </div>
    </motion.section>
  );
});

export default AboutMe;
