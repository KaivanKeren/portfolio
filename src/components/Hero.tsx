"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

type HeroProps = {
  scrollToRef: React.RefObject<HTMLElement>;
};

const Hero: React.FC<HeroProps> = ({ scrollToRef }) => {
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center rounded-xl shadow-xl min-h-screen p-4 bg-gradient-to-r from-slate-500/70 to-indigo-700/70 dark:from-slate-800/70 dark:to-indigo-900/70 text-white dark:bg-slate-800/70"
      >
        <div className="md:w-1/2 p-8 space-y-6 text-center md:text-left">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight text-white drop-shadow-lg dark:text-gray-200"
          >
            Saya 
            <Typewriter
              words={[" Ismail", " Siswa SMK"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1500}
            />
          </motion.div>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl sm:text-4xl md:text-4xl font-semibold text-white drop-shadow-md dark:text-gray-300"
          >
            Saya menyukai Coding
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-base sm:text-lg md:text-lg text-white drop-shadow-sm dark:text-gray-300"
          >
            Saya seorang siswa sekolah kejuruan berusia 16 tahun dan
            bercita-cita menjadi seorang Software Engineer.
          </motion.p>
          <div className="space-x-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 mb-5 hover:bg-transparent hover:text-white hover:border-white border-2 transition duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md dark:hover:text-white"
              onClick={() => scrollToSection(scrollToRef)}
            >
              Tentang Saya
            </motion.button>
            <a
              href="https://wa.me/6285338572860"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white mr-3 border-white border-2 hover:text-indigo-600 hover:bg-white transition duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md dark:border-gray-300 dark:hover:text-indigo-400 dark:hover:bg-white dark:hover:border-indigo-600"
              >
                Hubungi saya
              </motion.button>
            </a>
          </div>
        </div>
        <motion.div
          whileHover={{
            scale: 1.01,
            rotate: 1.6,
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Mengubah bayangan saat hover
            filter: "brightness(1.2)", // Menambahkan efek pencerahan pada gambar saat hover
          }}
          className="md:w-1/2 relative mt-8 md:mt-0"
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            src="/foto.jpg"
            alt="John Doe"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-900/50 to-sky-950/50"
          />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
