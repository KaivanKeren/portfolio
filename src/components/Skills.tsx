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
  SiNginx,
  SiNodedotjs,
  SiPhp,
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
    { skill: "PHP", logo: <SiPhp />, color: "text-purple-600" },
    { skill: "React JS", logo: <SiReact />, color: "text-cyan-400" },
    { skill: "Node JS", logo: <SiNodedotjs />, color: "text-green-500" },
    { skill: "Docker", logo: <SiDocker />, color: "text-blue-600" },
    { skill: "Laravel", logo: <SiLaravel />, color: "text-red-500" },
    { skill: "Tailwind CSS", logo: <SiTailwindcss />, color: "text-teal-400" },
    { skill: "Bootstrap", logo: <SiBootstrap />, color: "text-purple-500" },
    { skill: "Vue JS", logo: <SiVuedotjs />, color: "text-emerald-500" },
    { skill: "MySQL", logo: <SiMysql />, color: "text-blue-700" },
    { skill: "MongoDB", logo: <SiMongodb />, color: "text-green-600" },
    { skill: "Next JS", logo: <SiNextdotjs />, color: "text-gray-900" },
    { skill: "Bun JS", logo: <SiBun />, color: "text-teal-400" },
    { skill: "Construct 3", logo: <SiConstruct3 />, color: "text-gray-400" },
    { skill: "Nginx", logo: <SiNginx />, color: "text-green-700" },
  ];

  return (
    <motion.div
      id="keterampilan"
      ref={skillsRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-6"
        >
          My Skills
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Here are some of the skills I have acquired over the years from a year
          of learning and developing myself.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8"
        >
          {skillBars.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`dark:bg-white/10 bg-black/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl ${skill.color}`}
            >
              <div className="p-2 md:p-4 flex flex-col items-center">
                <div className="text-2xl md:text-3xl lg:text-4xl mb-4">
                  {skill.logo}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200">
                  {skill.skill}
                </h3>
              </div>
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2"></div>{" "}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
