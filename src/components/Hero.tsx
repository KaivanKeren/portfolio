"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

type HeroProps = {
  scrollToRef: React.RefObject<HTMLElement>;
};

const Hero: React.FC<HeroProps> = ({ scrollToRef }) => {
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

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
        className="flex flex-col md:flex-row items-center justify-center rounded-xl shadow-xl min-h-screen p-4 bg-gradient-to-r from-slate-500/70 to-indigo-700/70 dark:from-slate-800/70 dark:to-indigo-900/70 text-white dark:bg-slate-800/70"
      >
        <div className="md:w-1/2 p-8 space-y-6 text-center md:text-left">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-4xl font-semibold text-white drop-shadow-md dark:text-gray-300"
          >
            Halo,
          </motion.h2>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide leading-tight text-white drop-shadow-lg dark:text-gray-200"
          >
            Saya
            <Typewriter
              words={[" Ismail", " Siswa SMK", " Programmer"]}
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
            className="text-base sm:text-lg md:text-lg text-white drop-shadow-sm dark:text-gray-300"
          >
            Seorang siswa SMK berusia 16 tahun yang
            bercita-cita menjadi seorang Software Engineer.
          </motion.p>
          <div className="space-x-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 mb-5 hover:bg-transparent hover:text-white hover:border-white border-2 transition duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md dark:hover:text-white"
              onClick={() => scrollToSection(scrollToRef)}
            >
              Tentang Saya
            </motion.button>
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
                className="bg-transparent text-white mr-3 border-white border-2 hover:text-indigo-600 hover:bg-white transition duration-300 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md dark:border-gray-300 dark:hover:text-indigo-400 dark:hover:bg-white dark:hover:border-indigo-600"
              >
                Hubungi saya
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
