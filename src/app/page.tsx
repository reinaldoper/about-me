"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { about } from "@/about/aboutMe";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div
      className={
        !show
          ? "relative flex flex-col items-center justify-center min-h-screen w-full"
          : "relative flex flex-col items-center justify-center min-h-screen w-full bg-dark text-white"
      }
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className={
              !show
                ? "text-4xl font-bold text-gray-800"
                : "text-4xl font-bold text-white"
            }
          >
            Bem-vindo ao meu portfólio!
          </h1>
          <Image
            className="absolute hover:opacity-40 top-27 left-25 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            src="/images/eu.png"
            alt="eu"
            width={200}
            height={200}
          />
          <Image
            className="absolute cursor-pointer top-25 end-0 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
            src="/images/lua.png"
            alt="eu"
            width={100}
            onClick={() => setShow(!show)}
            height={100}
          />
        </motion.div>
      </div>
      <section className="py-10 text-justify">
        <p className="flex flex-wrap text-justify ml-20 me-20 font-roboto italic w-dvw-40 text-foreground font-bold">
          {about.data}
        </p>
        <br />
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Desenvolvedor com experiência em frontend e backend, quero ajudar você
          a criar experiências digitais impactantes.
        </p>
        <br />
        <p className="mt-4 text-center max-w-2xl mx-auto">{about.strong}</p>
        <br />
        <p className="mt-4 text-center max-w-2xl mx-auto">{about.contact}</p>
        <br />
      </section>
    </div>
  );
}
