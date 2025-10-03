import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Services = () => {
  const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="services" className="min-h-screen   bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Behind the scene, Beyond the screen"}
        title={"Service"}
        text={text}
        textColor={"text-[#87e64b]"}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-16 pb-12 !mt-40 text-[#87e64b] bg-black border-t-2 border-[#87e64b]/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 8}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 7}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between  gap-4 font-light">
            <div className="flex flex-col gap-6 ">
              <h2 className="text-3xl  lg:text-5xl">{service.title}</h2>
              <p className="text-xl   leading-8 font-montserrat tracking-widest lg:text-2xl text-[#87e64b]/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-xl  sm:gap-4 lg:text-3xl text-[#87e64b]/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-[#87e64b]/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-[#87e64b]/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
