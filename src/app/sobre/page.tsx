'use client';

import React from "react";
import { about } from "@/about/aboutMe";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="h-screen max-w-2xl w-full text-justify space-y-6">
      <h1 className="text-2xl font-semibold text-center text-emerald-600">Sobre Mim</h1>
      <hr />

      <p className="italic">{about.skills}</p>
      <p className="italic">{about.strong}</p>

      <hr />
      <div className="flex justify-center mt-4">
        <Link
          href="/certificacoes"
          className="px-4 py-2 border border-emerald-400 rounded-full text-emerald-400 hover:bg-emerald-50 transition"
        >
          Ver Certificações →
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
