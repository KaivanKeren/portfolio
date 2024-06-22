"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const Header: React.FC = () => {
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
        className="flex text-2xl font-bold cursor-pointer"
        initial={{ y: -100, opacity: 0 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          src="/logo.png"
          alt="Logo"
          width={60}
          height={60}
          className="-mt-2 fill-gray-900"
        />
        <Link href="/">
          <motion.h1
            whileHover={{
              scale: 1.15,
            }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-blue-500">ISM</span>AIL
          </motion.h1>
        </Link>
      </motion.div>
      <nav className="hidden md:flex space-x-8">
        <Link href="#tentang-saya">
          <h3 className="hover:text-blue-500 transition duration-300">Tentang Saya</h3>
        </Link>
        <Link href="#pencapaian">
          <h3 className="hover:text-blue-500 transition duration-300">Pencapaian</h3>
        </Link>
        <Link href="#riwayat-pendidikan">
          <h3 className="hover:text-blue-500 transition duration-300">Riwayat Pendidikan</h3>
        </Link>
        <Link href="#keterampilan">
          <h3 className="hover:text-blue-500 transition duration-300">Keterampilan</h3>
        </Link>
        <Link href="#project">
          <h3 className="hover:text-blue-500 transition duration-300">Project</h3>
        </Link>
      </nav>
      <BurgerMenu />
      <DarkModeToggle />
    </motion.header>
  );
};

export default Header;
