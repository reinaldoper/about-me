"use client";
import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const WHATS_APP_NUMBER = process.env.NEXT_WHATS_APP || "";
  const EMAIL = process.env.NEXT_GMAIL || "";
  const subject = "Contato via site";
  const body = "Olá, gostaria de falar com você...";

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 640;
      setIsMobile(isNowMobile);

      if (!isNowMobile) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <html lang="pt-BR">
      <title>Meu Portfolio</title>
      <div className="items-center justify-items-center min-h-screen">
        <nav className="row-start-1 w-full flex items-center justify-between p-6 bg-gray-800 text-white">
          <div className="text-xl font-bold">
            Meu
            <span className="text-red-500">
              <Link className="hover:underline" href="/">
                Portfolio
              </Link>
            </span>
          </div>
          {isMobile && !isMenuOpen && (
            <button
              className="block text-white focus:outline-none"
              id="menu-toggle"
              onClick={() => setIsMenuOpen(true)}
            >
              ☰
            </button>
          )}
          <ul
            className={`${
              isMenuOpen || !isMobile ? "block" : "hidden"
            } sm:flex gap-[24px]`}
            id="menu"
          >
            <li>
              <a
                href="https://github.com/reinaldoper"
                target="_blank"
                className="hover:underline text-green-500"
              >
                <FaGithub size={24} color="#0A66C2" />
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATS_APP_NUMBER}?text=${encodeURIComponent(
                  "Ola, estou entrando em contato:"
                )}`}
                target="_blank"
                className="hover:underline text-green-200"
              >
                <FaWhatsapp size={24} color="#25D366" />
              </a>
            </li>
            <li>
              <a href="/sobre" className="hover:underline">
                Sobre
              </a>
            </li>
            <li>
              <a href="/projetos" className="hover:underline">
                Projetos
              </a>
            </li>
            <li>
              <a href="/tech" className="hover:underline">
                Tecnologias
              </a>
            </li>
          </ul>
        </nav>
        <body suppressHydrationWarning>{children}</body>

        <footer className="bg-gray-800 p-6 min-h-full min-w-full row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <span className="text-white">Entre em contato:</span>
          <div className="flex gap-[24px]">
            <a
              href={`https://wa.me/${WHATS_APP_NUMBER}?text=${encodeURIComponent(
                "Ola, estou entrando em contato:"
              )}`}
              target="_blank"
              className="hover:underline text-green-200"
            >
              <FaWhatsapp size={24} color="#25D366" />
            </a>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                subject
              )}&body=${encodeURIComponent(body)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail size={24} color="#D14836" />
            </a>

            <span className="text-white">Desenvolvido por</span>
            <a
              href="https://www.linkedin.com/in/reinaldo-pereira/"
              target="_blank"
              className="hover:underline text-green-500"
            >
              <FaLinkedin size={24} color="#0A66C2" />
            </a>
          </div>
        </footer>
      </div>
    </html>
  );
}
