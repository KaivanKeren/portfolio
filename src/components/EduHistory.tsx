"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const EduHistory = () => {
  const educationData = [
    {
      institution: "SDN 3 Adiwarno",
      degree: "Elementary school",
      period: "2013 - 2019",
      link: "https://www.google.com/maps/place/SD+Negeri+3+Hadiwarno/@-6.8236739,110.9019524,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70cf86ffffffff:0xefee82e387358d01!8m2!3d-6.8236792!4d110.9045273!16s%2Fg%2F11r7pnyc8?entry=ttu",
    },
    {
      institution: "SMPN 2 Mejobo",
      degree: "Junior high school",
      period: "2019 - 2022",
      link: "https://www.google.com/maps/place/SMP+N+2+Mejobo/@-6.8297114,110.8944126,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70c5792ac04ba3:0xdf7f666fec4f39fd!8m2!3d-6.8297167!4d110.8969875!16s%2Fg%2F1hm4ch61h?entry=ttu",
    },
    {
      institution: "SMKN 2 Kudus",
      degree: "Vocational School",
      period: "2022 - 2025",
      link: "https://www.google.com/maps/place/SMK+Negeri+2+Kudus/@-6.7442212,110.8953406,17z/data=!3m1!4b1!4m6!3m5!1s0x2e70d080403423c7:0x58974ec098194b5d!8m2!3d-6.7442265!4d110.8979155!16s%2Fg%2F1ptxv84n4?entry=ttu",
    },
  ];

  return (
    <motion.section
      id="riwayat-pendidikan"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-screen py-16 px-4"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 text-center text-gray-800 dark:text-white"
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl space-y-12"
      >
        {educationData.map((item, index) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
            className="dark:bg-white/10 bg-black/10 backdrop-blur-md border-2 border-gray-400 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.institution}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  {item.degree}
                </p>
                <p className="text-md font-medium text-blue-600 dark:text-blue-400">
                  {item.period}
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.1 }} className="mt-4 md:mt-0">
                <Link
                  href={item.link}
                  key={index}
                  target="_blank"
                  className="block"
                >
                  <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
                    View Location
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default EduHistory;
