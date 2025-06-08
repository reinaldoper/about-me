"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { about } from "@/about/aboutMe";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}>
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
          width={150}
          height={150}
          className="rounded-full mb-6 border border-gray-400"
        />

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-8 px-4 py-2 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Alternar tema
        </button>

        <section className="max-w-3xl space-y-6 text-base leading-relaxed">
          <p>{about.data}</p>
          <p className="text-lg font-medium text-indigo-500">{about.strong}</p>
          <p>{about.contact}</p>
          <p>
            Desenvolvedor com experiência em frontend e backend. Acredito em
            criar experiências digitais funcionais e elegantes.
          </p>
        </section>
      </div>
    </div>
  );
}
