'use client';

import React from "react";
import { certificates } from "@/about/certifications";
import CertificationList from "@/components/CertificationList";
import Link from "next/link";

const Certificacoes = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-emerald-600 mb-8">
        Certificações
      </h1>

      <CertificationList title="Java Certifications" certifications={certificates.dioJava} />
      <CertificationList title="Python Certifications" certifications={certificates.dioPython} />
      <CertificationList title="Google Certifications" certifications={certificates.google} />
      <CertificationList title="Trybe Certifications" certifications={certificates.trybe} />
      <CertificationList title="Zylyty Certifications" certifications={certificates.zylyty} />

      <div className="flex justify-center mt-10">
        <Link
          href="/sobre"
          className="px-4 py-2 border border-gray-400 rounded-full hover:bg-gray-100"
        >
          ← Voltar ao Sobre
        </Link>
      </div>
    </div>
  );
};

export default Certificacoes;
