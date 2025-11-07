import React from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { socials } from "../constants";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  const text = `Got a question, how or project Idea?
  WE'D love to hear from you and
   discus further!`;
  const item = [
    "Just imagin, I code",
    "Just imagin, I code",
    "Just imagin, I code",
    "Just imagin, I code",
    "Just imagin, I code",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="inset-0 bg-gradient-to-br from-[#1f1f1f] to-black -z-20
      flex flex-col   justify- border-[#87e64b] border-t-2 min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"You Dream it, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-[#87e64b]"}
          withScrollTrigger={true}
        />
        <div className="flex flex-col px-10 pt-40 font-light text-[#87e64b] uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className=" flex flex-col w-full  gap-10">
            <div className="social-link md:text-3xl ">
              <h2>E-mail</h2>
              <div className=" w-full h-px my-2 bg-[#87e64b]/40" />
              <p className="text-sm tracking-wider lowercase  md:text-2xl lg:text-2xl">
                rwtsinghd@gmail.com
              </p>
            </div>

            <div className="social-link ">
              <h2>Phone</h2>
              <div className=" w-full h-px my-2 bg-[#87e64b]/40" />
              <p className="text-sm tracking-wider lowercase  md:text-[2vw] lg:text-xl">
                +91 7303621237
              </p>
            </div>

            <div className="social-link  ">
              <h2>Social Media</h2>
              <div className=" w-full h-px my-2 bg-[#87e64b]/40" />
              <div className="flex flex-wrap gap-2  ">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee
        items={item}
        className="text-[#87e64b] border-[#87e64b] border-b-0 border-t-2  bg-transparent"
      />
    </section>
  );
};

export default Contact;
