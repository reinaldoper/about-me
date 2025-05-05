"use client";

import React, { useState } from "react";
import { NodeJs } from "@/components/NodeJs";
import { FaAngular, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { JavaScript } from "@/components/JavaScript";
import { Angular } from "@/components/Angular";
import { NextJs } from "@/components/NextJs";
import { ReactNative } from "@/components/ReactNative";
import Image from "next/image";

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

  const allFa = !showNode && !showJs && !showAngular && !showNext && !showReactNative;

  return (
    <div className="relative min-h-screen flex font-extralight justify-center items-center">
      {allFa && (
        <div className="flex flex-col">
          <h1 className="hover:scale-y-210 font-bold flex justify-center items-center text-amber-300 mb-10">
            Projetos em destaques abaixo:
          </h1>

          <div className="flex justify-center items-center gap-1">
            <div className="relative group">
              <FaNodeJs
                className="w-20 h-20 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-20 cursor-pointer text-blue-400"
                onClick={handleClickNode}
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                NodeJs
              </span>
            </div>
            <div className="relative group">
              <FaJs
                className="w-20 h-20 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-20  cursor-pointer text-blue-400"
                onClick={handleClickJs}
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                JavaScript
              </span>
            </div>
            <div className="relative group">
              <FaAngular
                className="w-20 h-20 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-20  cursor-pointer text-blue-400"
                onClick={handleClickAngular}
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                Angular
              </span>
            </div>
            <div className="relative group">
              <Image
                className="w-20 h-20 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-20 cursor-pointer"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                alt="nextjs"
                width={20}
                height={20}
                onClick={handleClickNext}
              />
              
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                NextJs
              </span>
            </div>
            <div className="relative group">
              <FaReact
                className="w-20 h-20 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-20  cursor-pointer text-blue-400"
                onClick={handleClickReactNative}
              />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm px-2 py-1 rounded transition-opacity duration-300">
                  ReactNative
              </span>
            </div>
          </div>
        </div>
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
              <NodeJs />
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
              <JavaScript />
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
              <Angular />
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
              <NextJs />
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
              <ReactNative />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
