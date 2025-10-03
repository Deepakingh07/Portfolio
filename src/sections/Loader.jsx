import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const fillRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      fillRef.current,
      { height: "100%" },
      {
        height: 0,
        duration: 3,
        ease: "linear",
        scale: 3,
        onComplete: onComplete, // Call parent when done
      }
    );
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#020202]">
      <div className="relative inline-block">
        {/* Base text */}
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent relative z-10">
          HEY, I'M DEEPAK
        </p>

        {/* Overlay fill */}
        <span
          ref={fillRef}
          className="absolute top-0 left-0 w-full flex items-center justify-center overflow-hidden z-0"
        >
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bebas font-extrabold text-[#87e64b]">
            HEY, I'M DEEPAK
          </p>
        </span>
      </div>
    </div>
  );
};

export default Loader;
