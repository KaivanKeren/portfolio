"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const Header: React.FC = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Atur isHeaderFixed berdasarkan posisi scroll
      setIsHeaderFixed(window.scrollY > 0);
    };

    // Tambahkan event listener untuk mendengarkan scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener setelah komponen dilepas
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`flex justify-between text-gray-900 dark:text-white items-center p-4 ${
        isHeaderFixed
          ? "fixed top-0 left-0 right-0 z-50 bg-gray-300 dark:bg-gray-800 bg-opacity-65 dark:bg-opacity-65 backdrop-filter backdrop-blur-sm"
          : ""
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex text-2xl font-bold ml-5 cursor-pointer"
        initial={{ y: -100, opacity: 0 }}
        whileHover={{
          scale: 1.15,
        }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span className="text-blue-500">ISM</span>AIL
      </motion.div>
      <DarkModeToggle />
    </motion.header>
  );
};

export default Header;
