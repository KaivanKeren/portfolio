"use client";

import { motion, useAnimation } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "react-medium-image-zoom/dist/styles.css";
import Header from "@/components/Header";
import Loading from "@/components/Loading";

const page = () => {
  const controls = useAnimation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);
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
    <>
      {loading ? (
        <Loading />
      ) : (
        <motion.div
          className="bg-light bg-light-pattern dark:bg-dark dark:bg-dark-pattern"
          ref={projectsRef}
          variants={projectsVariants}
          initial="hidden"
          animate={controls}
          layout
        >
          <Header />
          <section className="bg-light bg-light-pattern dark:bg-dark dark:bg-dark-pattern dark:text-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <motion.h2
                  variants={cardVariants}
                  className="text-4xl font-bold mb-4"
                >
                  Project
                </motion.h2>
                <motion.p
                  variants={cardVariants}
                  className="dark:text-gray-200"
                >
                  Lihat beberapa project saya.
                </motion.p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    imgSrc: "/Project1.png",
                    title: "Pengumuman Kelulusan",
                    description:
                      "Website pengumuman kelulusan siswa kelas 12 di SMKN 2 Kudus.",
                    link: "https://lulus.smkn2kudus.sch.id",
                  },
                  {
                    imgSrc: "/Project2.png",
                    title: "Antrian PPDB Siswa",
                    description:
                      "Website pengambilan antrian pendaftaran peserta didik baru di SMKN 2 Kudus.",
                    link: "https://antrian.tkjsmkn2kudus.my.id",
                  },
                  {
                    imgSrc: "/Project3.png",
                    title: "BSD Mart",
                    description:
                      "Aplikasi bank sampah digital berbasis website yang akan dipertandingkan di Krenova, Kabupaten Kudus pada tahun 2024.",
                    link: "https://bsdmart.tkjsmkn2kudus.my.id",
                  },
                  {
                    imgSrc: "/Project4.png",
                    title: "Expenses",
                    description:
                      "Belajar membuat website pengelola pengeluaran menggunakan Bun JS, Next JS, Hono JS, dan Supabase.",
                    link: "https://github.com/KaivanKeren/expenses",
                  },
                  {
                    imgSrc: "/Project5.png",
                    title: "Mahabharata War",
                    description:
                      "Project game pertama saya tentang perang Mahabharata, yang akan dipertandingkan di GKGS 2023.",
                    link: "https://kaivankeren.itch.io/mahabharata",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                    }}
                    className="bg-white/70 dark:bg-slate-600/70 text-indigo-600 dark:text-indigo-400 p-8 rounded-lg shadow-md relative overflow-hidden group flex flex-col"
                    layout
                  >
                    <Zoom>
                      <div className="img-wrapper">
                        <img
                          src={project.imgSrc}
                          alt={project.title}
                          className="transition duration-300 hover:scale-105 rounded-lg"
                        />
                      </div>
                    </Zoom>
                    <a href={project.link} target="_blank">
                      <h3 className="text-2xl font-bold mb-4 mt-3">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-gray-600 dark:text-gray-200 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-500 h-1 transform -translate-y-full group-hover:translate-y-0 transition duration-500"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </>
  );
};

export default page;
