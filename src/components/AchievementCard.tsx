import React from "react";
import { motion, useInView } from "framer-motion";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { useInView as useIntersectionObserver } from "react-intersection-observer";

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  certificateUrl: string;
  handleCertificateClick: (certificateUrl: string) => void;
}

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AchievementCard: React.FC<AchievementCardProps> = ({
  icon,
  title,
  certificateUrl,
  handleCertificateClick,
}) => {
  const [ref, inView] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    triggerOnce: true, // Agar animasi hanya dijalankan sekali
  });

  return (
    <motion.div
      ref={ref}
      variants={iconVariants}
      initial="hidden"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
      }}
      animate={inView ? "visible" : "hidden"}
      className="bg-gradient-to-r from-gray-400/50 to-sky-300/80 dark:from-slate-800/70 dark:to-sky-950/70 rounded-lg shadow-md p-6 flex flex-col items-center space-y-4"
    >
      {icon}
      <p className="text-xl text-slate-900 dark:text-gray-300">{title}</p>
      <div
        className="flex items-center space-x-2 cursor-pointer transition duration-300 hover:scale-105"
        onClick={() => handleCertificateClick(certificateUrl)}
      >
        <BsFileEarmarkPdfFill className="text-3xl text-red-500" />
        <span className="text-sm text-slate-900 dark:text-gray-300">
          Lihat Sertifikat
        </span>
      </div>
    </motion.div>
  );
};

export default AchievementCard;