import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Services = () => {
  const text = `I build secure, high-performance full-stack
    apps with smooth UX to drive growth 
    not headaches.`;
  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "49rem" }); //768px
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
    <section
      id="services"
      className=" inset-0 bg-gradient-to-br from-[#1f1f1f] to-black -z-20
    min-h-screen   bg-black rounded-t-xl"
    >
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
          className="bg-gradient-to-br from-[#1f1f1f] to-black 
          sticky px-10 pt-16 pb-28 md:pb-64 !mt-40 text-[#87e64b] bg-black border-t-2 border-[#87e64b]/30"
          style={
            isDesktop
              ? {
                  top: `calc(1vh + ${index * 8}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 7}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between     font-light">
            <div className="flex flex-col gap-4  mt-5 ">
              <h2 className="text-3xl   -mt-7 sm:text-5xl">{service.title}</h2>
              <p className="text-xs   leading-5 sm:leading-8 font-montserrat tracking-widest lg:text-xl text-[#87e64b]/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-4   text-xs  sm:gap-3 sm:text-3xl text-[#87e64b]/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className=" mr-6 sm:mr-12 text-xl sm:text-2xl text-[#87e64b]/30">
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
