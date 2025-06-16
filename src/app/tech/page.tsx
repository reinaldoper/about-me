"use client";
import React, { useState, useEffect } from "react";
import { techBackend, techFrntend } from "@/techs/tecnologias";
import { FaReact, FaNodeJs } from "react-icons/fa";
import Image from "next/image";
import TechCarousel from "@/components/TechCarousel";
import { Move } from "@/components/Move";
import { motion, AnimatePresence } from "framer-motion";

const Techs = () => {
  const [fa, setFa] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-x-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-40 text-emerald-400 opacity-10 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 1440 320"
      >
        <path d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,218.7C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>

      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div
              className="flex-1 bg-emerald-500 flex items-center justify-center"
              initial={{ x: 0 }}
              animate={{ x: "50vw" }}
              exit={{ x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            >
              <span className="text-white text-3xl font-bold tracking-widest">BACKEND</span>
            </motion.div>
            <motion.div
              className="flex-1 bg-cyan-500 flex items-center justify-center"
              initial={{ x: 0 }}
              animate={{ x: "-50vw" }}
              exit={{ x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            >
              <span className="text-white text-3xl font-bold tracking-widest">FRONTEND</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center gap-4 mt-16 mb-8">
            <h1 className="font-bold text-4xl md:text-5xl text-emerald-300 drop-shadow">
              Tecnologias
            </h1>
            <button
              className="ml-4 bg-slate-800 hover:bg-emerald-500 transition-colors rounded-full p-3 shadow-lg"
              onClick={() => setFa(!fa)}
              aria-label="Alternar stack"
            >
              {fa ? (
                <FaReact className="w-8 h-8 text-cyan-400" />
              ) : (
                <FaNodeJs className="w-8 h-8 text-green-400" />
              )}
            </button>
          </div>

          <div className="mb-10">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
              <rect x="10" y="10" width="60" height="60" rx="14" fill="#f8fafc" />
              <path d="M28 40L40 28L52 40" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="34" y="44" width="12" height="6" rx="2" fill="#10B981"/>
              <circle cx="40" cy="40" r="26" stroke="#10B981" strokeWidth="2" fill="none"/>
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-8 px-4 w-full max-w-5xl">
            {(fa ? techBackend : techFrntend).map((tech) => (
              <div
                key={tech.id}
                className="flex flex-col items-center bg-slate-800/80 rounded-xl p-4 shadow-md hover:scale-105 transition-transform"
              >
                <Image
                  className="mb-2"
                  src={tech.src}
                  alt={tech.titulo}
                  width={50}
                  height={50}
                />
                <p className="text-emerald-200 font-medium">{tech.titulo}</p>
              </div>
            ))}
          </div>

          <svg
            className="absolute bottom-0 right-0 w-full h-32 text-emerald-400 opacity-10 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 1440 320"
          >
            <path d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,154.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>

          <div className="mt-24 w-full max-w-4xl bg-gray-700/80 rounded-xl shadow-lg p-6">
            <TechCarousel />
          </div>
          <Move />
        </div>
      )}
    </div>
  );
};

export default Techs;