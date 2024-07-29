"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaMedal, FaTrophy } from "react-icons/fa";
import AchievementCard from "./AchievementCard";

const Achievement = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleCertificateClick = (certificateUrl: string) => {
    window.open(certificateUrl, "_blank");
  };

  return (
    <motion.section
      id="pencapaian"
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      variants={containerVariants}
      className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-slate-900 dark:text-gray-200"
    >
      <div className="w-full md:w-3/4 lg:w-full p-8 space-y-8 text-center">
        <motion.h2
          variants={childVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide leading-tight text-slate-900 dark:text-gray-200"
        >
          Achievement
        </motion.h2>
        <motion.div
          variants={childVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AchievementCard
            icon={<FaTrophy className="text-5xl text-yellow-500" />}
            title="First Place in the 2024 Faculty of Engineering Dekan Cup Web Design Competition."
            certificateUrl="/DekanCup.pdf"
            handleCertificateClick={handleCertificateClick}
          />
          <AchievementCard
            icon={<FaTrophy className="text-5xl text-yellow-500" />}
            title="Second place in the Student Competency Competition (LKS) Web Technology at Kudus Regency Level in 2024."
            certificateUrl="/LKS.pdf"
            handleCertificateClick={handleCertificateClick}
          />
          <AchievementCard
            icon={<FaMedal className="text-5xl text-gray-500" />}
            title="The best theater in the 5 Kudus Regency Student Theater Festivals in 2023."
            certificateUrl="/Teater.pdf"
            handleCertificateClick={handleCertificateClick}
          />
          <AchievementCard
            icon={<FaCertificate className="text-5xl text-blue-500" />}
            title="Dicoding Basic Learning Certification of Data Visualization."
            certificateUrl="/Dicoding.pdf"
            handleCertificateClick={handleCertificateClick}
          />
          <AchievementCard
            icon={<FaCertificate className="text-5xl text-blue-500" />}
            title="Codepolitan Computer Programming Certification."
            certificateUrl="/Codepolitan.pdf"
            handleCertificateClick={handleCertificateClick}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievement;