'use client'

import React from "react";
import { about } from "@/about/aboutMe";
import { FaCertificate } from "react-icons/fa";
import { certificates } from "@/about/certifications";



const AboutMe = () => {
  return (
    <div className="row-start-1 flex flex-col items-center justify-between min-h-screen w-full">
      <br />
      <hr />
      <div className="flex flex-col flex-wrap text-justify">
        <p className="mt-5 italic">{about.skills}</p>
        <p className="italic">{about.tolls}</p>
        <p className="italic">{about.strong}</p>
      </div>
      <br />
      <hr />
      <h1 className="mt-5 flex items-center justify-center text-justify font-roboto text-emerald-400 font-bold">Java Certifications</h1>
      <br />
      <div className="flex mb-5 flex-wrap justify-center items-center gap-4">
        {certificates.dioJava.map((certificate) => (
          <div key={certificate.id} className="flex flex-col items-center">
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="hover:scale-210 transform transition duration-300 ease-in-out">
              <FaCertificate className="w-10 h-10 cursor-pointer text-blue-400" />
            </a>
            <p className="text-center">{certificate.title}</p>
            <p className="text-center">{certificate.description}</p>
            <p className="text-center">{certificate.date}</p>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer"></a>
          </div>
        ))}
      </div>
      <br />
      <hr />
      <h1 className="mt-5 flex items-center justify-center text-justify font-roboto text-emerald-400 font-bold">Python Certifications</h1>
      <br />
      <div className="flex flex-wrap justify-center items-center gap-4 mb-5">
        {certificates.dioPython.map((certificate) => (
          <div key={certificate.id} className="flex flex-col items-center">
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="hover:scale-210 transform transition duration-300 ease-in-out">
              <FaCertificate className="w-10 h-10 cursor-pointer text-blue-400" />
            </a>
            <p className="text-center">{certificate.title}</p>
            <p className="text-center">{certificate.description}</p>
            <p className="text-center">{certificate.date}</p>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer"></a>
          </div>
        ))}
      </div>
      <br />
      <hr />
      <h1 className="mt-5 flex items-center justify-center text-justify font-roboto text-emerald-400 font-bold">Google Certifications</h1>
      <br />
      <div className="flex mb-5 flex-wrap justify-center items-center gap-4">
        {certificates.google.map((certificate) => (
          <div key={certificate.id} className="flex flex-col items-center">
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="hover:scale-210 transform transition duration-300 ease-in-out">
              <FaCertificate className="w-10 h-10 cursor-pointer text-blue-400" />
            </a>
            <p className="text-center">{certificate.title}</p>
            <p className="text-center">{certificate.description}</p>
            <p className="text-center">{certificate.date}</p>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer"></a>
          </div>
        ))}
      </div>
      <br />
      <hr />
      <h1 className="mt-5 flex items-center justify-center text-justify font-roboto text-emerald-400 font-bold">Trybe Certifications</h1>
      <br />
      <div className="flex mb-5 flex-wrap justify-center items-center gap-4">
        {certificates.trybe.map((certificate) => (
          <div key={certificate.id} className="flex flex-col items-center">
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="hover:scale-210 transform transition duration-300 ease-in-out">
              <FaCertificate className="w-10 h-10 cursor-pointer text-blue-400" />
            </a>
            <p className="text-center">{certificate.title}</p>
            <p className="text-center">{certificate.description}</p>
            <p className="text-center">{certificate.date}</p>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer"></a>
          </div>
        ))}
      </div>
    </div>
  );
} 


export default AboutMe