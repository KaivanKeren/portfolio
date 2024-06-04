"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const EduHistory = () => {
  const educationData = [
    {
      institution: "SD 3 Adiwarno",
      degree: "Sekolah Dasar",
      period: "2013 - 2019",
      link: "https://www.google.com/maps/place/SD+Negeri+3+Hadiwarno/@-6.8236739,110.9019524,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70cf86ffffffff:0xefee82e387358d01!8m2!3d-6.8236792!4d110.9045273!16s%2Fg%2F11r7pnyc8?entry=ttu",
    },
    {
      institution: "SMP 2 Mejobo",
      degree: "Sekolah Menengah Pertama",
      period: "2019 - 2022",
      link: "https://www.google.com/maps/place/SMP+N+2+Mejobo/@-6.8297114,110.8944126,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70c5792ac04ba3:0xdf7f666fec4f39fd!8m2!3d-6.8297167!4d110.8969875!16s%2Fg%2F1hm4ch61h?entry=ttu",
    },
    {
      institution: "SMK 2 Kudus",
      degree: "Sekolah Menengah Kejuruan",
      period: "2022 - 2025",
      link: "https://www.google.com/maps/place/SMK+Negeri+2+Kudus/@-6.7442212,110.8953406,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70d080403423c7:0x58974ec098194b5d!8m2!3d-6.7442265!4d110.8979155!16s%2Fg%2F1ptxv84n4?entry=ttu",
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
            <Link href={item.link} target="_blank">
            <div
              key={index}
              className="bg-gray-100/70 dark:bg-slate-800/70 rounded-lg shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xl"
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
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EduHistory;
