import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "Contact Us",
    "Contact Us",
    "Contact Us",
    "Contact Us",
    "Contact Us",
  ];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pinning section
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      // end: "+=600",
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
    });

    // Fade + slide in text
    gsap.fromTo(
      ".contact-text-responsive",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          // start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col w-screen overflow-hidden font-montserrat items-center justify-between min-h-screen gap-1 mt-2 "
    >
      {/* First marquee tilted left */}
      <div className=" lg:-rotate-10 -rotate-24 mt-30 text-[#87e64b] ">
        <Marquee items={items} className=" text-[#87e64b] bg-transparent border-y-2" />
      </div>

      {/* Center text */}
      <div className="overflow-hidden font-light text-center text-xl pl-1">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-[#87e64b]">together</span> “
        </p>
      </div>

      {/* Second marquee tilted right */}
      <div className="rotate-29  lg:rotate-8 ">
        <Marquee
          items={items2}
          reverse={true}
          className="text-[#87e64b] bg-transparent border-y-2"
          iconClassName=" stroke-gold stroke-2 text-priamry"
          icon="line-md:phone-call-loop"
        />
      </div>
    </section>
  );
};

export default ContactSummary;
