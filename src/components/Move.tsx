"use client";

import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const Move = () => {
  return (
    <>
      <div className="absolute bottom-10 right-0">
        <FaArrowUp
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 cursor-pointer text-cyan-950"
        />
      </div>
      <div className="absolute top-20 right-0">
        <FaArrowDown
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          className="w-10 h-10 cursor-pointer text-cyan-950"
        />
      </div>
    </>
  );
};
