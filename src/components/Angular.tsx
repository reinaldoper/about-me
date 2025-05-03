'use client'

import React from "react";
import { projetos } from "@/about/projetos";
import { FaAngular } from "react-icons/fa";



export const Angular = () => {
  return (
    <div>
      {projetos.angular.map((projeto) => (
        <div key={projeto.id} className="flex flex-col items-center">
          <p className="text-center text-black">{projeto.title}</p>
          <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="hover:scale-310 transform transition duration-300 ease-in-out">
            <FaAngular className="w-10 h-10 cursor-pointer text-orange-700" />
          </a>
          <p className="text-center text-black">{projeto.description}</p>
          <p className="text-center text-black">{projeto.date}</p>
        </div>
      ))}
    </div>
  );
};