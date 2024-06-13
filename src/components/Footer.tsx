"use client"

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView();
  
  return (
    <footer className="bg-indigo-800 dark:bg-slate-950/80 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p>
              &copy; {new Date().getFullYear()} Ismail. All rights reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="https://github.com/KaivanKeren"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 mr-4"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              href="https://tiktok.com/@ismailkds4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 mr-4"
            >
              <i className="fab fa-tiktok fa-lg"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
