"use client";

import React, { useState } from "react";
import { NodeJs } from "@/components/NodeJs";
import { FaAngular, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { JavaScript } from "@/components/JavaScript";
import { Angular } from "@/components/Angular";
import { NextJs } from "@/components/NextJs";
import { ReactNative } from "@/components/ReactNative";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projetos() {
  const [showNode, setShowNode] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const [showAngular, setShowAngular] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [showReactNative, setShowReactNative] = useState(false);

  const handleClickNode = () => {
    setShowNode(true);
    setTimeout(() => {
      setShowNode(false);
    }, 4000);
  };

  const handleClickJs = () => {
    setShowJs(true);
    setTimeout(() => {
      setShowJs(false);
    }, 4000);
  };

  const handleClickAngular = () => {
    setShowAngular(true);
    setTimeout(() => {
      setShowAngular(false);
    }, 4000);
  };

  const handleClickNext = () => {
    setShowNext(true);
    setTimeout(() => {
      setShowNext(false);
    }, 4000);
  };

  const handleClickReactNative = () => {
    setShowReactNative(true);
    setTimeout(() => {
      setShowReactNative(false);
    }, 4000);
  };

  const allFa =
    !showNode && !showJs && !showAngular && !showNext && !showReactNative;

  return (
    <div className="relative min-h-screen flex font-extralight justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {allFa && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          {/* SVG Profissional no topo */}
          <div className="mb-6">
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg"
            >
              <rect x="10" y="10" width="70" height="70" rx="16" fill="#f8fafc" />
              <path d="M30 45 L45 30 L60 45" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="35" y="50" width="20" height="8" rx="2" fill="#0ea5e9"/>
              <circle cx="45" cy="45" r="32" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          {/* Mensagem de boas-vindas */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center drop-shadow">
            Bem-vindo ao meu portfólio de projetos
          </h1>
          <p className="text-lg text-slate-200 mb-10 text-center max-w-xl">
            Explore soluções modernas, escaláveis e profissionais em diversas tecnologias.<br />
            Clique em um ícone para ver projetos de cada stack.
          </p>
          <h2 className="font-bold flex justify-center items-center text-amber-300 mb-10 text-xl md:text-2xl">
            Projetos em destaque abaixo:
          </h2>
          {/* Ícones das stacks */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="relative group">
              <FaNodeJs
                className="w-20 h-20 cursor-pointer text-green-500 hover:scale-110 transition-transform"
                onClick={handleClickNode}
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                NodeJs
              </span>
            </div>
            <div className="relative group">
              <FaJs
                className="w-20 h-20 cursor-pointer text-yellow-400 hover:scale-110 transition-transform"
                onClick={handleClickJs}
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                JavaScript
              </span>
            </div>
            <div className="relative group">
              <FaAngular
                className="w-20 h-20 cursor-pointer text-red-500 hover:scale-110 transition-transform"
                onClick={handleClickAngular}
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                Angular
              </span>
            </div>
            <div className="relative group">
              <Image
                className="w-20 h-20 cursor-pointer hover:scale-110 transition-transform"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="nextjs"
                width={50}
                height={50}
                onClick={handleClickNext}
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                NextJs
              </span>
            </div>
            <div className="relative group">
              <FaReact
                className="w-20 h-20 cursor-pointer text-cyan-400 hover:scale-110 transition-transform"
                onClick={handleClickReactNative}
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                ReactNative
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {showNode && (
        <div className="w-screen">
          <div
            className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-500 ${
              showNode ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-cyan-300 p-6 rounded-lg shadow-lg max-w-lg w-[90%] h-[70%] text-center flex flex-col justify-center items-center">
              <h1 className="font-roboto italic text-emerald-400 font-bold mb-4">
                Projetos NodeJs
              </h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <NodeJs />
              </motion.div>
            </div>
          </div>
        </div>
      )}
      {showJs && (
        <div className="w-screen">
          <div
            className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-500 ${
              showJs ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[90%] h-[70%] text-center flex flex-col justify-center items-center">
              <h1 className="font-roboto italic text-emerald-400 font-bold mb-4">
                Projetos JavaScript
              </h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <JavaScript />
              </motion.div>
            </div>
          </div>
        </div>
      )}
      {showAngular && (
        <div className="w-screen">
          <div
            className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-500 ${
              showAngular ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-orange-200 p-6 rounded-lg shadow-lg max-w-lg w-[90%] h-[70%] text-center flex flex-col justify-center items-center">
              <h1 className="font-roboto italic text-emerald-400 font-bold mb-4">
                Projetos Angular
              </h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Angular />
              </motion.div>
            </div>
          </div>
        </div>
      )}
      {showNext && (
        <div className="w-screen">
          <div
            className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-500 ${
              showNext ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[90%] h-[70%] text-center flex flex-col justify-center items-center">
              <h1 className="font-roboto italic text-emerald-400 font-bold mb-4">
                Projetos NextJs
              </h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <NextJs />
              </motion.div>
            </div>
          </div>
        </div>
      )}
      {showReactNative && (
        <div className="w-screen">
          <div
            className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-500 ${
              showReactNative ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[90%] h-[70%] text-center flex flex-col justify-center items-center">
              <h1 className="font-roboto italic text-emerald-400 font-bold mb-4">
                Projetos React-native
              </h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ReactNative />
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}