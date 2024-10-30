"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateCursor = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX + window.scrollX}px`;
        cursorRef.current.style.top = `${event.clientY + window.scrollY}px`;
      }
    };
    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    setIsHovering(true);
  };

  const handleMouseEnter = () => {
    if (cursorRef.current) {
      cursorRef.current.style.display = "block";
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.style.display = "none";
    }
    setIsHovering(false);
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const gradientStyle = isHovering
    ? {
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent 70%)`,
        opacity: 1,
      }
    : {
        opacity: 0,
      };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center rounded-xl shadow-xl min-h-screen p-4 bg-gradient-to-r from-sky-950/10 to-black/10 dark:from-sky-500/5 dark:to-white/10 dark:bg-slate-800/70 backdrop-blur-md"
      >
        <div className="md:w-1/2 p-8 space-y-6 text-center md:text-left">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-4xl font-semibold drop-shadow-md dark:text-gray-300"
          >
            Hallo,
          </motion.h2>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight drop-shadow-lg dark:text-gray-200"
          >
            I'm
            <Typewriter
              words={[" Ismail", " Student", " Programmer"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </motion.div>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-base sm:text-lg md:text-lg drop-shadow-sm dark:text-gray-300"
          >
            A 16 year old vocational school student who dreams of becoming a student
            Software Engineer.
          </motion.p>
          <div className="space-x-4">
            <Link href="#tentang-saya">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 dark:bg-white dark:text-indigo-600 text-white mb-5 hover:bg-transparent dark:hover:bg-transparent hover:text-black hover:border-slate-900 dark:hover:border-white border-2 transition duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md dark:hover:text-white"
              >
                About Me
              </motion.button>
            </Link>
            <a
              href="https://wa.me/6285338572860"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-black dark:text-white mr-3 dark:border border-slate-900 border-2 hover:text-white hover:bg-slate-900 transition duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md dark:border-slate-300 dark:hover:text-indigo-400 dark:hover:bg-white dark:hover:border-indigo-600"
              >
                Contact Me
              </motion.button>
            </a>
          </div>
        </div>
        <motion.div
          className="md:w-1/2 relative mt-8 md:mt-0"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            src="/foto2.png"
            alt="Ismail"
            className="w-full h-auto object-cover rounded-lg cursor-none"
          />
          <motion.div
            style={gradientStyle}
            className="absolute inset-0 rounded-lg pointer-events-none"
          />
        </motion.div>
        <div ref={cursorRef} className="custom-cursor"></div>
      </motion.section>
      <style jsx>{`
        .custom-cursor {
          width: 20px;
          height: 20px;
          border: 2px solid #fff;
          border-radius: 50%;
          position: absolute;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: background 0.2s, transform 0.2s;
          z-index: 9999;
          display: none;
        }
        .md\\:w-1\\/2.relative:hover .custom-cursor {
          display: block;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%) scale(1.2);
        }
      `}</style>
    </>
  );
};

export default Hero;
