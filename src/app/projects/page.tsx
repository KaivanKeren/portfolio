"use client";

import { motion, useAnimation } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "react-medium-image-zoom/dist/styles.css";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";
import Link from "next/link";

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
        <>
          <motion.div
            className="bg-light bg-light-pattern dark:bg-dark dark:bg-dark-pattern"
            ref={projectsRef}
            variants={projectsVariants}
            initial="hidden"
            animate={controls}
            layout
          >
            <Header />
            <section className="dark:text-white py-16">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <motion.h2
                    variants={cardVariants}
                    className="text-4xl font-bold mb-4"
                  >
                    Projects
                  </motion.h2>
                  <motion.p
                    variants={cardVariants}
                    className="dark:text-gray-200"
                  >
                    Check out some of my projects.
                  </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      imgSrc: "/Project9.png",
                      title: "XII TJKT 1",
                      description: "Class XII TJKT 1 SMKN 2 Kudus website.",
                      link: "https://xii-tjkt-1.vercel.app",
                    },
                    {
                      imgSrc: "/Project8.png",
                      title: "ZNMMIC",
                      description:
                        "MSME website that offers custom design services using vectors.",
                      link: "https://znmmic.vercel.app",
                    },
                    {
                      imgSrc: "/Project1.png",
                      title: "Graduation Announcement",
                      description:
                        "Website announcing the graduation of grade 12 students at SMKN 2 Kudus.",
                      link: "https://lulus.smkn2kudus.sch.id",
                    },
                    {
                      imgSrc: "/Project2.png",
                      title: "Student PPDB Queue",
                      description:
                        "Website for taking the registration queue for new students at SMKN 2 Kudus.",
                      link: "https://antrian.tkjsmkn2kudus.my.id",
                    },
                    {
                      imgSrc: "/Project3.png",
                      title: "BSD Mart",
                      description:
                        "Website-based digital waste bank application.",
                      link: "https://bsdmart.tkjsmkn2kudus.my.id",
                    },
                    {
                      imgSrc: "/Project4.png",
                      title: "Expenses",
                      description:
                        "Learn to create an expense management website using Bun JS, Next JS, Hono JS, and Supabase.",
                      link: "https://github.com/KaivanKeren/expenses",
                    },
                    {
                      imgSrc: "/Project5.png",
                      title: "Mahabharata War",
                      description:
                        "My first game project about the Mahabharata war.",
                      link: "https://kaivankeren.itch.io/mahabharata",
                    },
                    {
                      imgSrc: "/Project6.png",
                      title: "Shopping List",
                      description:
                        "Learn to create a shopping list website using HTML, CSS and the Vue JS framework.",
                      link: "https://github.com/KaivanKeren/List-Belanja",
                    },
                    {
                      imgSrc: "/Project7.png",
                      title: "M-Bot",
                      description: "My first project uses HTML, CSS, and JS.",
                      link: "https://github.com/KaivanKeren/Project-Pertama-JS",
                    },
                  ].map((project, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="bg-black/10  dark:bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-indigo-300/50"
                    >
                      <Zoom>
                        <img
                          src={project.imgSrc}
                          alt={project.title}
                          className="w-full h-48 object-cover transition duration-300 hover:opacity-80"
                        />
                      </Zoom>
                      <div className="p-6">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mb-3"
                        >
                          <h3 className="text-2xl font-bold dark:text-indigo-200 dark:hover:text-white transition duration-300">
                            {project.title}
                          </h3>
                        </a>
                        <p className="dark:text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                        >
                          View Projects
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
          <Footer />
        </>
      )}
    </>
  );
};

export default page;
