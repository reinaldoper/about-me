"use client";

import React from "react";
import Image from "next/image";
import { projetos } from "@/about/projetos";

export const NextJs = () => {
  return (
    <div>
      {projetos.next.map((projeto) => (
        <div key={projeto.id} className="flex flex-col items-center">
          <p className="text-center text-black">{projeto.title}</p>
          <a
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-210 transform transition duration-300 ease-in-out"
          >
            <Image
              className="hover:scale-210 transform transition duration-300 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="nextjs"
              width={20}
              height={20}
            />
          </a>
          <p className="text-center text-black">{projeto.description}</p>
          <p className="text-center text-black">{projeto.date}</p>
        </div>
      ))}
    </div>
  );
};
