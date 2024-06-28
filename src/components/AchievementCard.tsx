import React from "react";
import { motion } from "framer-motion";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  certificateUrl: string;
  handleCertificateClick: (certificateUrl: string) => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  icon,
  title,
  certificateUrl,
  handleCertificateClick,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="dark:bg-white/10 bg-black/10 backdrop-blur-md border-2 border-gray-400 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-300 p-6"
    >
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl text-blue-600 dark:text-blue-400"
        >
          {icon}
        </motion.div>
        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-center text-gray-800 dark:text-white">
          {title}
        </h3>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="mt-4"
          onClick={() => handleCertificateClick(certificateUrl)}
        >
          <span className="inline-flex items-center cursor-pointer px-2 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-semibold hover:bg-blue-700 transition-colors duration-300">
            <BsFileEarmarkPdfFill className="mr-2 hidden sm:block" />
            Lihat Sertifikat
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;