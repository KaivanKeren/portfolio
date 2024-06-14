"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBootstrap,
  SiBun,
  SiConstruct3,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
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
    { skill: "HTML", logo: <SiHtml5 /> },
    { skill: "CSS", logo: <SiCss3 /> },
    { skill: "JS", logo: <SiJavascript /> },
    { skill: "Python", logo: <SiPython /> },
    { skill: "React JS", logo: <SiReact /> },
    { skill: "Node JS", logo: <SiNodedotjs /> },
    { skill: "Laravel", logo: <SiLaravel /> },
    { skill: "Tailwind CSS", logo: <SiTailwindcss /> },
    { skill: "Bootstrap", logo: <SiBootstrap /> },
    { skill: "Vue JS", logo: <SiVuedotjs /> },
    { skill: "MySQL", logo: <SiMysql /> },
    { skill: "Next JS", logo: <SiNextdotjs /> },
    { skill: "Bun JS", logo: <SiBun /> },
    { skill: "Construct 3", logo: <SiConstruct3 /> },
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
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skillBars.map((skill, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                }}
                className="bg-gray-300/60 dark:bg-slate-800/70 p-3 rounded-lg shadow-md group"
              >
                <div className="flex items-center mb-4">
                  <i className="inline-block mr-2 text-2xl dark:text-slate-300 text-slate-800">
                    {skill.logo}
                  </i>
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {skill.skill}
                  </h3>
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
