import React, { useRef } from "react";

import { AnimatedTextLines } from "../components/AnimatedTextLines.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contexRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contexRef.current,
          }
        : undefined,
    });
    tl.from(contexRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);
  return (
    <div ref={contexRef}>
      <div style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center lg:gap-14 gap-10  !px-5  sm:gap-16"
        >
          <p
            className={`text-[2.5vw] lg:text-[1vw] sm:text-[2.8vw] md:text-[1.1vw]  font-montserrat md:pl-2  pt-18 tracking-[0.5rem] uppercase  ${textColor}`}
          >
            {/* */}
            {subTitle}
          </p>
          <div className="">
            <h1
              className={`flex flex-col flex-wrap font-bebas font-bold text-5xl  ${textColor} uppercase sm:text-3xl md:text-7xl  lg:text-[8vw] sm:gap-11  md:block leading-[8vw] md:leading-[4.4vw] `}
            >
              {/* */}
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative  ${textColor}`}>
        <div className=" absolute inset-x-0  border-t-2">
          <div className=" !py-10 sm:py-16 text-end">
            <AnimatedTextLines
              text={text}
              className={`${textColor} font-medium font-montserrat  uppercase px-10 text-xs sm:text-[2.5vw] md:text-xl lg:text-xl`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
