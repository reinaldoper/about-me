"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { about } from "@/about/aboutMe";
import AnimatePresenceComponent from "@/components/AnimatePresence";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      
      {AnimatePresenceComponent("Bem-vindo", "Ao meu portifólio.")}

      
      {!showIntro && (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bem-vindo ao meu portfólio
          </motion.h1>

          <Image
            src="/images/eu.png"
            alt="Minha foto"
            width={120}
            height={120}
            className="rounded-full mb-6 border border-gray-400"
          />

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mb-8 px-4 py-2 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Alternar tema
          </button>

          <section className="max-w-2xl space-y-6 text-base leading-relaxed">
            <p>{about.data}</p>
            <p className="text-2xl font-bold text-indigo-600 my-8">
              Construindo experiências digitais simples e eficientes.
            </p>
            <div className="flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="mx-auto my-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="48"
                  height="48"
                  rx="12"
                  fill={darkMode ? "#1e293b" : "#f1f5f9"}
                />
                <path
                  d="M18 20L12 24L18 28"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 20L36 24L30 28"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26 16L22 32"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p>
              Desenvolvedor com experiência em frontend e backend. Acredito em
              criar experiências digitais funcionais e elegantes.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}