"use client"

import { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import EduHistory from "@/components/EduHistory";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Loading from "@/components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-white dark:bg-slate-900">
          <Header />
          <div className="m-5 mt-4 mb-8">
            <Hero />
          </div>
          <div className="mx-5 flex flex-col gap-6">
            <AboutMe />
            <EduHistory />
          </div>
          <Skills />
          <Projects />
          <Footer />
        </div>
      )}
    </>
  );
}
