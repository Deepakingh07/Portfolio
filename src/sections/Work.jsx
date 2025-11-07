import { useRef, useState, useEffect } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const cardRefs = useRef([]);
  const previewRefs = useRef([]);
  const bgRef = useRef(null);

  const [hoverIndex, setHoverIndex] = useState(null);
  const [isHoverEnabled, setIsHoverEnabled] = useState(
    window.innerWidth >= 1024
  );

  const text = `Featured projects that have been meticu-
 lously crafted with passion to drive
  results and impact.`;

  useEffect(() => {
    const handleResize = () => setIsHoverEnabled(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    // Card perspective setup
    cardRefs.current.forEach((card) =>
      gsap.set(card, { transformPerspective: 800 })
    );

    // 3D Title Animation on Scroll
    gsap.from(".project-title", {
      y: 40,
      rotateX: -60,
      opacity: 0,
      transformOrigin: "top center",
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#work",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const handleMouseMove = (e, index) => {
    if (!isHoverEnabled || hoverIndex !== index) return;
    const card = cardRefs.current[index];
    const img = previewRefs.current[index];
    const rect = card.getBoundingClientRect();

    const imgWidth = 420;
    const imgHeight = 180;
    let x = e.clientX - rect.left - imgWidth / 2;
    let y = e.clientY - rect.top - imgHeight / 2 - 40;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const margin = 20;
    let globalX = rect.left + x;
    let globalY = rect.top + y;

    if (globalX < margin) x += margin - globalX;
    if (globalX + imgWidth > viewportWidth - margin)
      x -= globalX + imgWidth - (viewportWidth - margin);
    if (globalY < margin) y += margin - globalY;
    if (globalY + imgHeight > viewportHeight - margin)
      y -= globalY + imgHeight - (viewportHeight - margin);

    gsap.to(img, {
      x,
      y,
      duration: 0.4,
      ease: "power4.out",
    });

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = -(y / rect.height - 0.5) * 5;
    gsap.to(card, { rotateY, rotateX, duration: 0.25, ease: "power2.out" });

    // Background parallax
    gsap.to(bgRef.current, {
      x: (e.clientX / window.innerWidth - 0.5) * 15,
      y: (e.clientY / window.innerHeight - 0.5) * 15,
      duration: 1.2,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = (index) => {
    if (!isHoverEnabled) return;
    setHoverIndex(index);
    const card = cardRefs.current[index];
    const img = previewRefs.current[index];
    if (!card || !img) return;

    gsap.fromTo(
      img,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
    );

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      backgroundColor: "rgba(255,255,255,0.05)",
      borderColor: "#ffffff14",

      // boxShadow: "0 0 25px rgba(135,230,75,0.25)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (!isHoverEnabled) return;
    const card = cardRefs.current[index];
    const img = previewRefs.current[index];
    if (!card || !img) return;

    gsap.to(img, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.inOut",
    });
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      backgroundColor: "rgba(255,255,255,0)",
      // borderColor: "rgba(255,255,255,0.1)",
      boxShadow: "none",
      duration: 0.4,
      ease: "power2.out",
    });
    setHoverIndex(null);
  };

  return (
    <section id="work" className="relative flex flex-col min-h-screen">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f] to-black -z-20"
      />

      <AnimatedHeaderSection
        subTitle="Logic meets Aesthetics, Seamlessly"
        title="Work"
        text={text}
        textColor="text-[#87e64b]"
        withScrollTrigger={true}
      />

      <div className="relative flex flex-col mt-34  sm:mt-48 gap-5 lg:gap-1 font-light">
        {projects.map((project, index) => (
          <a href={project.href} key={project.id} target="_blank">
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ willChange: "transform" }}
              className="relative flex flex-col gap-1 sm:gap-5 p-5  cursor-pointer group 
               lg:rounded-xl
              transition-all duration-700 ease-in-out border  sm:mb-2 border-transparent"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <div className="flex items-center justify-between  text-[#87e64b] lg:group-hover:text-white transition-all duration-500">
                <h2 className="project-title sm:text-[22px] font-bold text-[12px] uppercase">
                  {project.name}
                </h2>
                <Icon
                  icon="akar-icons:arrow-up-right"
                  className="lg:size-6 size-4"
                />
              </div>

              <div className="w-full h-[1px] bg-[#87e64b]/80 group-hover:bg-white transition-all duration-500" />

              <div className="flex flex-wrap gap-x-3 text-[2.8vw] uppercase sm:text-sm text-[#87e64b] lg:group-hover:text-white transition-all duration-500">
                {project.frameworks.map((fw) => (
                  <p key={fw.id}>{fw.name}</p>
                ))}
              </div>

              <div className="lg:hidden w-full mt-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full rounded-xl border border-[#87e64b]/60 object-cover shadow-lg"
                />
              </div>

              <div
                ref={(el) => (previewRefs.current[index] = el)}
                className="fixed top-0 left-0 z-50 pointer-events-none opacity-0 hidden lg:block rounded-4xl overflow-hidden border-4 border-[#fff]/10 shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-[420px] rounded-xl"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
