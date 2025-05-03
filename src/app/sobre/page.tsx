"use client";
import React from "react";
import AboutMe from "@/components/AboutMe";
import { Move } from "@/components/Move";

const Sobre = () => {
  return (
    <>
      <div className="relative flex flex-col font-extralight justify-center items-center ml-5 me-5 mt-5">
        <AboutMe />
        <Move />
      </div>
    </>
  );
};
export default Sobre;
