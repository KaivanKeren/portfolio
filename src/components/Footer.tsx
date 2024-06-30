import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaTiktok, FaArrowUp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { ref, inView } = useInView();
  const [isVisible, setIsVisible] = useState(false);
  const [activeIcon, setActiveIcon] = useState<number | null>(null);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/KaivanKeren", label: "GitHub" },
    { icon: FaTiktok, href: "https://tiktok.com/@ismailkds4", label: "TikTok" },
    { icon: FaEnvelope, href: "mailto:x.iml.7122@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 dark:from-slate-950 dark:to-slate-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Ismail</h3>
            <p className="mb-1">
              &copy; {new Date().getFullYear()} Hak Cipta Dilindungi
            </p>
            <p>Kudus, Jawa Tengah, Indonesia</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-xl font-semibold mb-3">Ikuti Saya</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={() => setActiveIcon(index)}
                  onHoverEnd={() => setActiveIcon(null)}
                >
                  <link.icon className="text-2xl" />
                  {activeIcon === index && (
                    <motion.span
                      className="absolute mt-1 text-xs bg-white text-indigo-800 px-2 py-1 rounded"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {link.label}
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      {isVisible && (
        <motion.button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 bg-gray-800 text-white dark:bg-white dark:text-indigo-800 p-3 rounded-full shadow-lg transition duration-300 dark:hover:bg-indigo-100 hover:bg-slate-800"
          aria-label="Gulir ke atas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
