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
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
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
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (skillsInView) {
      controls.start("visible");
    }
  }, [controls, skillsInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const skillBars = [
    { skill: "HTML", logo: <SiHtml5 />, color: "text-orange-500" },
    { skill: "CSS", logo: <SiCss3 />, color: "text-blue-500" },
    { skill: "JS", logo: <SiJavascript />, color: "text-yellow-500" },
    { skill: "Python", logo: <SiPython />, color: "text-blue-600" },
    { skill: "React JS", logo: <SiReact />, color: "text-cyan-400" },
    { skill: "Node JS", logo: <SiNodedotjs />, color: "text-green-500" },
{ skill: "Docker", logo: <SiDocker />, color: "text-blue-600" },
    { skill: "Laravel", logo: <SiLaravel />, color: "text-red-500" },
    { skill: "Tailwind CSS", logo: <SiTailwindcss />, color: "text-teal-400" },
    { skill: "Bootstrap", logo: <SiBootstrap />, color: "text-purple-500" },
    { skill: "Vue JS", logo: <SiVuedotjs />, color: "text-emerald-500" },
    { skill: "MySQL", logo: <SiMysql />, color: "text-blue-700" },
    { skill: "MongoDB", logo: <SiMongodb />, color: "text-green-600" },
    { skill: "Next JS", logo: <SiNextdotjs />, color: "text-gray-700" },
    { skill: "Bun JS", logo: <SiBun />, color: "text-pink-500" },
    { skill: "Construct 3", logo: <SiConstruct3 />, color: "text-indigo-500" },
  ];

  return (
    <motion.div
      id="keterampilan"
      ref={skillsRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="py-20 "
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6"
        >
          Keterampilan Saya
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Berikut adalah beberapa keterampilan yang saya peroleh selama lebih dari satu tahun belajar dan mengembangkan diri.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8"
        >
          {skillBars.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="dark:bg-white/10 bg-black/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-4 flex flex-col items-center">
                <div className={`text-4xl mb-4 ${skill.color}`}>{skill.logo}</div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{skill.skill}</h3>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;