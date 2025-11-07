import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const text = `Passionate about clean architecture I build scal-
     able, high-performance solutions from 
    prototype to production`;

  const aboutText = `Hi 👋 I’m Deepak, a Frontend Developerwho loves crafting beautiful interfaces and adding life to them with animations.
    I specialize in React, Tailwind CSS, and JavaScript along with animation libraries like GSAP and Locomotive.js. My goal is to build applications that not only work smoothly but also leave a lasting impression on users.
    

  💻 Frontend Development – React.js, Tailwind CSS
  
🎨 UI/UX Design – Responsive & User-friendly layouts

⚡ Animations – GSAP & Locomotive.js

🌐 API Integration – Dynamic and interactive apps`;

  const imgRef = useRef(null);

  useGSAP(() => {
    // 👉 Section shrink when scrolling up
    gsap.to("#about", {
      scale: 0.85,
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
      ease: "power1.inOut",
    });

    // 👉 Image reveal
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  }, []);

  return (
    <section
      id="about"
      className="inset-0 bg-gradient-to-br from-[#1f1f1f] to-black -z-20
      min-h-screen bg-black  border-[#87e64b] rounded-b-sm"
    >
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-[#87e64b]"}
        withScrollTrigger={true}
      />

      <div
        className="  
      flex flex-col items-center justify-center gap-16 px-30 pb-36 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-2xl text-[#87e64b]/60"
      >
        {/* Profile Image */}
        <div className="flex flex-col items-center pt-50 ml-[-100px] lg:pt-30 lg:pl-[10px] gap-6 lg:gap-8">
          <img
            ref={imgRef}
            src="/assets/myimg/aboutimg.jpeg"
            alt="man"
            className="w-[250px] lg:w-lg rounded-3xl"
          />

          <a
            href="/assets/mycv/Deepak_CV.pdf"
            download
            className=" text-[4vw] sm:text-2xl  px-3 py-1 bg-white/20 text-[#87e64b] font-semibold rounded-xs sm:rounded-xl shadow-lg 
            hover:bg-neutral-50 hover:text-black/80 transition-all duration-300"
          >
            📄 Download CV
          </a>
        </div>

        {/* About Text */}
        <AnimatedTextLines
          text={aboutText}
          className={
            "w-screen px-8 text-[3.6vw]  lg:text-[1.7vw] sm:text-[3vw]  lg:pt-40 md:text-xl"
          }
        />
      </div>
    </section>
  );
};

export default About;
