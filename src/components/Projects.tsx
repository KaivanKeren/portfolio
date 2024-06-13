"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Link from "next/link";

const Projects = () => {
  const controls = useAnimation();
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  React.useEffect(() => {
    if (projectsInView) {
      controls.start("visible");
    }
  }, [controls, projectsInView]);

  const projectsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={projectsRef}
      variants={projectsVariants}
      initial="hidden"
      animate={controls}
    >
      <section className="bg-gradient-to-r from-slate-500/70 to-indigo-700/70 dark:from-slate-800/70 dark:to-indigo-900/70 rounded-t-[2rem] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              variants={cardVariants}
              className="text-4xl font-bold mb-4"
            >
              Project Saya
            </motion.h2>
            <motion.p variants={cardVariants} className="text-gray-200">
              Lihat beberapa project terbaru saya.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
              className="bg-white/70 dark:bg-slate-900/70 text-indigo-600 dark:text-indigo-400 p-8 rounded-lg shadow-md relative overflow-hidden group"
            >
              <Zoom>
                <img
                  src="/Project1.png"
                  alt="Project 1"
                  className="w-full h-48 object-cover rounded-lg mb-4 transition duration-300 hover:scale-105"
                />
              </Zoom>
              <a href="https://lulus.smkn2kudus.sch.id" target="_blank">
                <h3 className="text-2xl font-bold mb-4">
                  Pengumuman Kelulusan
                </h3>
              </a>
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                Website pengumuman kelulusan siswa kelas 12 di SMKN 2 Kudus.
              </p>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-500 h-1 transform -translate-y-full group-hover:translate-y-0 transition duration-500"></div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
              className="bg-white/70 dark:bg-slate-900/70 text-indigo-600 dark:text-indigo-400 p-8 rounded-lg shadow-md relative overflow-hidden group"
            >
              <Zoom>
                <img
                  src="/Project2.png"
                  alt="Project 2"
                  className="w-full h-48 object-cover rounded-lg mb-4 transition duration-300 hover:scale-105"
                />
              </Zoom>
              <a href="https://antrian.tkjsmkn2kudus.my.id" target="_blank">
                <h3 className="text-2xl font-bold mb-4">Antrian PPDB Siswa</h3>
              </a>
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                Website pengambilan antrian pendaftaran peserta didik baru di
                SMKN 2 Kudus.
              </p>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-500 h-1 transform -translate-y-full group-hover:translate-y-0 transition duration-500"></div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
              className="bg-white/70 dark:bg-slate-900/70 text-indigo-600 dark:text-indigo-400 p-8 rounded-lg shadow-md relative overflow-hidden group"
            >
              <Zoom>
                <img
                  src="/Project3.png"
                  alt="Project 3"
                  className="w-full h-48 object-cover rounded-lg mb-4 transition duration-300 hover:scale-105"
                />
              </Zoom>
              <a href="https://bsdmart.tkjsmkn2kudus.my.id" target="_blank">
                <h3 className="text-2xl font-bold mb-4">BSD Mart</h3>
              </a>
              <p className="text-gray-600 dark:text-gray-200 mb-4">
                Aplikasi bank sampah digital berbasis website yang akan
                dipertandingkan di Krenova, Kabupaten Kudus pada tahun 2024.
              </p>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-500 h-1 transform -translate-y-full group-hover:translate-y-0 transition duration-500"></div>
            </motion.div>
          </div>
          <Link href="/projects">
            <motion.div whileHover={{scale: 1.01}} className="flex justify-end mt-5 hover:text-blue-200">
              <h1>Lihat Project Lainnya →</h1>
            </motion.div>
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
