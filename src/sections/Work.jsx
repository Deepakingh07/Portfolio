import { useRef, useState, useEffect } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Work = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);
  const cardRefs = useRef([]);
  const bgRef = useRef(null); // Parallax background

  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.2,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: { trigger: "#project" },
    });

    // Setup 3D perspective for project cards
    cardRefs.current.forEach((card) =>
      gsap.set(card, { transformPerspective: 600 })
    );

    // Initialize parallax background
    gsap.set(bgRef.current, { x: 0, y: 0 });
  }, []);

  // Mouse Enter → Floating preview + overlay + 3D tilt
  const handleMouseEnter = (index, e) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    const card = cardRefs.current[index];
    if (!el || !card) return;

    gsap.set(previewRef.current, {
      x: e.clientX + 24,
      y: e.clientY + 24,
      opacity: 0,
    });

    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
    );
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // 3D tilt
    card.onmousemove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = (x / rect.width - 0.5) * 30;
      const rotateX = -(y / rect.height - 0.5) * 45;
      gsap.to(card, { rotateY, rotateX, duration: 0.3, ease: "power2.out" });

      // Parallax background reacts slightly to cursor
      const moveXVal = (event.clientX / window.innerWidth - 0.5) * 20;
      const moveYVal = (event.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(bgRef.current, {
        x: moveXVal,
        y: moveYVal,
        duration: 0.8,
        ease: "power3.out",
      });
    };
  };

  // Mouse Leave
  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    const card = cardRefs.current[index];
    if (!el || !card) return;

    gsap.to(el, { opacity: 0, scale: 0.9, duration: 0.2, ease: "power2.in" });
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: "power2.out",
    });
    card.onmousemove = null;

    // Reset background
    gsap.to(bgRef.current, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
  };

  // Mouse Move → Floating preview follows cursor
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="relative flex flex-col min-h-screen">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gradient-to-br from-[#1f1f1f] to-[#000000] -z-20"
      />

      <AnimatedHeaderSection
        subTitle={"Logic meets Aestics, Seamlessly"}
        title={"Work"}
        text={text}
        textColor={"text-[#87e64b]"}
        withScrollTrigger={true}
      />

      <div
        className="relative flex flex-col mt-45 font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            ref={(el) => (cardRefs.current[index] = el)}
            className="relative flex flex-col gap-1 py-1 cursor-pointer group md:gap-0"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}
            <div
              ref={(el) => (overlayRefs.current[index] = el)}
              className="absolute inset-0 hidden md:block -z-10 bg-white/10 transition-all duration-700 ease-in-out"
            />

            {/* title */}
            <div className="flex justify-between px-10 pt-0 mt-10 text-[#87e64b] transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[22px] pt-0 font-bold text-[16px] leading-none">
                {project.name}
              </h2>
              <Icon
                icon="akar-icons:arrow-up-right"
                className="md:size-6 size-5"
              />
            </div>

            <div className="w-full h-0.5 group-hover:bg-white bg-[#87e64b]/80" />

            <div className="flex sm:px-10 px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-[#87e64b] text-[2.4vw] transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Floating preview */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 rounded-4xl border-white pointer-events-none w-[460px] md:block hidden opacity-0"
        >
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt="preview"
              className="object-center w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
