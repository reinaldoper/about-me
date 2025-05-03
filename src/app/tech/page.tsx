"use client";
import React, { useState } from "react";
import { techBackend, techFrntend } from "@/techs/tecnologias";
import { FaReact, FaNodeJs } from "react-icons/fa";
import Image from "next/image";
import TechCarousel from "@/components/TechCarousel";
import { Move } from "@/components/Move";

const Techs = () => {
  const [fa, setFa] = useState(true);
  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-center items-center gap-4">
        <h1 className="mt-10 hover:scale-y-210 font-bold flex justify-center items-center text-amber-300 mb-10">
          Tecnologias
        </h1>
        {fa ? (
          <FaReact className="w-10 h-10 cursor-pointer text-blue-400" onClick={() => setFa(!fa)} />
        ) : (
          <FaNodeJs className="w-10 h-10 cursor-pointer text-blue-400" onClick={() => setFa(!fa)} />
        )}
      </div>
      <div className="mt-40 ml-4 flex me-4 justify-center items-center gap-10 flex-wrap">
        {fa
          ? techBackend.map((tech) => (
              <div key={tech.id} className="flex flex-col items-center">
                <Image
                  className="hover:scale-210 transform transition duration-300 ease-in-out"
                  src={tech.src}
                  alt={tech.titulo}
                  width={50}
                  height={50}
                />
                <p className="text-center">{tech.titulo}</p>
              </div>
            ))
          : techFrntend.map((tech) => (
              <div key={tech.id} className="flex flex-col items-center">
                <Image
                  className="hover:scale-210 transform transition duration-300 ease-in-out"
                  src={tech.src}
                  alt={tech.titulo}
                  width={50}
                  height={50}
                />
                <p className="text-center">{tech.titulo}</p>
              </div>
            ))}
      </div>
      <div className="mt-40 ml-10 me-10 bg-gray-700 rounded">
        <TechCarousel />
      </div>
      <Move />
    </div>
  );
};

export default Techs;
