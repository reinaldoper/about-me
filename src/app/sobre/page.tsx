'use client';

import React from "react";
import { about } from "@/about/aboutMe";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

const AboutMe = () => {
  return (
    <div className="relative bg-white overflow-hidden min-h-screen px-4 py-10 md:px-12 max-w-3xl mx-auto flex flex-col justify-between">
      <svg
        className="absolute top-0 left-0 w-full h-32 text-emerald-100 opacity-20 pointer-events-none"
        fill="currentColor"
        viewBox="0 0 1440 320"
      >
        <path d="M0,32L60,69.3C120,107,240,181,360,202.7C480,224,600,192,720,176C840,160,960,160,1080,160C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>

      <div>
        <motion.div
          className="flex items-center justify-center mb-8 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp}
          custom={0}
        >
          <svg
            className="w-12 h-12 text-emerald-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <h1 className="ml-3 text-4xl font-extrabold text-emerald-700 tracking-tight drop-shadow-sm">
            Sobre Mim
          </h1>
        </motion.div>

        <motion.p
          className="mb-8 text-xl leading-relaxed text-gray-800 font-light"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp}
          custom={1}
        >
          {about.data.trim()}
        </motion.p>

        <motion.div
          className="mb-8 bg-emerald-50 rounded-xl p-6 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp}
          custom={2}
        >
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">💡 O que você pode esperar de mim</h2>
          <p className="whitespace-pre-line text-gray-700">{about.skills.trim()}</p>
        </motion.div>

        <motion.div
          className="mb-8 bg-emerald-50 rounded-xl p-6 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp}
          custom={3}
        >
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">🛠️ Ferramentas do dia a dia</h2>
          <p className="whitespace-pre-line text-gray-700">{about.tolls.trim()}</p>
        </motion.div>

        <motion.div
          className="mb-10 bg-emerald-50 rounded-xl p-6 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeInUp}
          custom={4}
        >
          <h2 className="text-xl font-semibold text-emerald-600 mb-2">🔗 Destaques e Diferenciais</h2>
          <p className="whitespace-pre-line text-gray-700">{about.strong.trim()}</p>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center mt-4 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeInUp}
        custom={5}
      >
        <Link
          href="/certificacoes"
          className="px-6 py-2 border border-emerald-500 rounded-full text-emerald-600 hover:bg-emerald-100 transition font-semibold shadow"
        >
          Ver Certificações →
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutMe;