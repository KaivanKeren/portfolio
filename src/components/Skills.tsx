"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  SiHtml5,
  SiLaravel,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";

const Skills = () => {
  const controls = useAnimation();
  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  React.useEffect(() => {
    if (skillsInView) {
      controls.start("visible");
    }
  }, [controls, skillsInView]);

  const skillsVariants = {
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

  const skillBars = [
    { skill: "Web Development", level: "80%", logo: <SiHtml5 /> },
    { skill: "React JS", level: "60%", logo: <SiReact /> },
    { skill: "Node JS", level: "70%", logo: <SiNodedotjs /> },
    { skill: "Laravel", level: "75%", logo: <SiLaravel /> },
    { skill: "Tailwind CSS", level: "70%", logo: <SiTailwindcss /> },
    { skill: "Vue JS", level: "50%", logo: <SiVuedotjs /> },
  ];

  return (
    <motion.div
      ref={skillsRef}
      variants={skillsVariants}
      initial="hidden"
      animate={controls}
    >
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              variants={cardVariants}
              className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
            >
              Keterampilan Saya
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-gray-600 dark:text-gray-200"
            >
              Berikut adalah beberapa keterampilan yang saya peroleh selama lebih dari satu tahun belajar.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillBars.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                }}
                className="bg-gray-300/70 dark:bg-slate-800/70 p-8 rounded-lg shadow-md group"
              >
                <div className="flex items-center mb-4">
                  <i className="inline-block mr-2 text-3xl dark:text-slate-300 text-slate-800">
                    {skill.logo}
                  </i>
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {skill.skill}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-200">
                  {`Saya memiliki keterampilan ${skill.skill.toLowerCase()}.`}
                </p>
                <div className="bg-gray-300 rounded-full h-5 mt-4 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-full rounded-full"
                    style={{
                      width: skill.level,
                      transition: "width 1s ease-in-out",
                    }}
                  ></div>
                  <span className="absolute right-0 top-0 text-sm text-white px-2 bg-indigo-600 rounded opacity-0 group-hover:opacity-100 group-hover:scale-110 group-hover:bg-indigo-500 transition-all duration-300">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
