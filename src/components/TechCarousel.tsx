"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { tecnologias } from "@/techs/tecnologias";
import Image from "next/image";

const TechCarousel = () => {
  const settings = {
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <Slider {...settings} className="flex flex-col items-center justify-center">
      {tecnologias.map((tech) => (
        <div key={tech.id} className="gap-4 p-4 ml-20">
          <Image className="shadow-2xl hover:scale-210 transform transition duration-300 ease-in-out" src={tech.src} alt={tech.titulo} width={150} height={150} />
        </div>
      ))}
    </Slider>
  );
};

export default TechCarousel;