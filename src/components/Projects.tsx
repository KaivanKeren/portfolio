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
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (projectsInView) {
      controls.start("visible");
    }
  }, [controls, projectsInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const projects = [
    {
      title: "XII TJKT 1",
      description: "Class XII TJKT 1 SMKN 2 Kudus website.",
      image: "/Project9.png",
      link: "https://xii-tjkt-1.vercel.app",
    },
    {
      title: "ZNMMIC",
      description:
        "MSME website that offers custom design services using vectors.",
      image: "/Project8.png",
      link: "https://znmmic.vercel.app",
    },
    {
      title: "Graduation Announcement",
      description:
        "Website announcing the graduation of grade 12 students at SMKN 2 Kudus.",
      image: "/Project1.png",
      link: "https://lulus.smkn2kudus.sch.id",
    },
  ];

  return (
    <motion.div
      id="project"
      ref={projectsRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="py-20 bg-gradient-to-r from-slate-500/50 to-indigo-700/50 dark:from-slate-800/50 dark:to-indigo-900/50 rounded-t-[2rem] backdrop-blur-lg text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200"
        >
          My Projects
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-center text-gray-200 mb-12"
        >
          Check out some of my latest projects.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-indigo-300/50"
            >
              <Zoom>
                <img
                  src={project.image}
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
                  <h3 className="text-2xl font-bold text-indigo-200 hover:text-white transition duration-300">
                    {project.title}
                  </h3>
                </a>
                <p className="text-gray-300 mb-4">{project.description}</p>
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
        <motion.div variants={itemVariants} className="flex justify-end mt-10">
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.05, x: 5 }}
              className="text-base sm:text-lg md:text-xl font-semibold text-indigo-200 hover:text-white transition duration-300 cursor-pointer"
            >
              See Other Projects →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
