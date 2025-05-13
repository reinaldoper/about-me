'use client';

import React from "react";
import { about } from "@/about/aboutMe";
import { certificates } from "@/about/certifications";
import CertificationList from "@/components/CertificationList";

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

      <CertificationList title="Java Certifications" certifications={certificates.dioJava} />
      <CertificationList title="Python Certifications" certifications={certificates.dioPython} />
      <CertificationList title="Google Certifications" certifications={certificates.google} />
      <CertificationList title="Trybe Certifications" certifications={certificates.trybe} />
      <CertificationList title="Zylyty Certifications" certifications={certificates.zylyty} />
    </div>
  );
};

export default AboutMe;