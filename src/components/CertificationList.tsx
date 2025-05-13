import React from "react";
import { FaCertificate } from "react-icons/fa";
import { CertificationListProps } from "@/types/types";


const CertificationList: React.FC<CertificationListProps> = ({ title, certifications }) => {
  return (
    <div className="mb-10">
      <h1 className="mt-5 flex items-center justify-center text-justify font-roboto text-emerald-400 font-bold">
        {title}
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-5">
        {certifications.map((certificate) => (
          <div key={certificate.id} className="flex flex-col items-center">
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transform transition duration-300 ease-in-out"
            >
              <FaCertificate className="w-10 h-10 cursor-pointer text-blue-400" />
            </a>
            <p className="text-center">{certificate.title}</p>
            <p className="text-center">{certificate.description}</p>
            <p className="text-center">{certificate.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationList;