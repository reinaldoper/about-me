"use client";

import React from "react";
import { projetos } from "@/about/projetos";
import { FaReact } from "react-icons/fa";

export const ReactNative = () => {
  return (
    <div>
      {projetos.native.map((projeto) => (
        <div key={projeto.id} className="flex flex-col items-center">
          <p className="text-center text-black">{projeto.title}</p>
          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-310 transform transition duration-300 ease-in-out"
          >
            <FaReact className="w-10 h-10 cursor-pointer text-blue-400" />
          </a>
          <p className="text-center text-black">{projeto.description}</p>
          <p className="text-center text-black">{projeto.date}</p>
        </div>
      ))}
    </div>
  );
};
