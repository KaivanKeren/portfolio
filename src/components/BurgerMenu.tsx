"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-0.5 bg-gray-900 dark:bg-white mb-1 transition-transform duration-300 transform-gpu" />
        <div className="w-6 h-0.5 bg-gray-900 dark:bg-white mb-1 transition-transform duration-300 transform-gpu" />
        <div className="w-6 h-0.5 bg-gray-900 dark:bg-white transition-transform duration-300 transform-gpu" />
      </button>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 right-0 z-50 flex justify-between text-gray-900 dark:text-white items-center p-4`}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="w-64 bg-gray-300 dark:bg-gray-800 p-4 shadow-lg h-screen flex flex-col gap-5"
          >
            <button
              onClick={handleToggle}
              className="mb-4 focus:outline-none text-left text-3xl text-red-500"
              aria-label="Close menu"
            >
              x
            </button>
            <Link href="#tentang-saya">
              <h3 className="block hover:text-blue-500 transition duration-300 mb-2">
                About Me
              </h3>
            </Link>
            <Link href="#pencapaian">
              <h3 className="block hover:text-blue-500 transition duration-300 mb-2">
                Achievement
              </h3>
            </Link>
            <Link href="#riwayat-pendidikan">
              <h3 className="block hover:text-blue-500 transition duration-300 mb-2">
                Education
              </h3>
            </Link>
            <Link href="#keterampilan">
              <h3 className="block hover:text-blue-500 transition duration-300 mb-2">
                Skills
              </h3>
            </Link>
            <Link href="#project">
              <h3 className="block hover:text-blue-500 transition duration-300 mb-2">
                Project
              </h3>
            </Link>
          </motion.div>
          <div
            onClick={handleToggle}
            className="flex-grow bg-black bg-opacity-50"
          />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
