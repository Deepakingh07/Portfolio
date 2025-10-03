// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";
// import Marquee from "../components/Marquee";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger);

// const ServiceSummary = () => {
//   const serviceRef = useRef(null);
//   const items = ["HTML", "CSS", "JAVA SCRIPT", "REACT", "NEXT JS"];
//   const items2 = ["GSAP", "MOTION", "NODE JS", "API", "MONGO DB"];
//   useGSAP(() => {
//     gsap.to(serviceRef.current, {
//       scrollTrigger: {
//         trigger: serviceRef.current,
//         start: "center center",
//         end: "+=800 center",
//         scrub: 0.5,
//         pin: true,
//         pinSpacing: true,
//         markers: false,
//       },
//     });
//   }, []);

//   useGSAP(() => {
//     gsap.to("#title-service-1", {
//       xPercent: 0,
//       scrollTrigger: {
//         target: "#title-service-1",
//         scrub: true,
//       },
//     });
//     gsap.to("#title-service-2", {
//       xPercent: 0,
//       // scrollTrigger: {
//       //   target: "#title-service-2",
//       //   scrub: true,
//       // },
//     });
//     gsap.to("#title-service-3", {
//       xPercent: 0,
//       // scrollTrigger: {
//       //   target: "#title-service-3",
//       //   scrub: true,
//       // },
//     });
//     gsap.to("#title-service-5", {
//       xPercent: 0,
//       // scrollTrigger: {
//       //   target: "#title-service-4",
//       //   scrub: true,
//       // },
//     });
//   });
//   return (
//     <section className=" mt-20 font-montserrat overflow-hidden font-light leading-sung text-center mb-4 contact-text-responsive">
//       <Marquee items={items} />
//       <div className="overflow-hidden font-light text-center contact-text-responsive">
//         <div id="title-service-1">
//           <p>Architucture</p>
//         </div>
//         <div
//           id="title-service-2"
//           className="flex items-center justify-center leading-8 gap-3 translate-x-75 "
//         >
//           <p className="font-normal">Development</p>
//           <div className="w-10 h-1 md:w-32 bg-amber-300 " />
//           <p>Deployment</p>
//         </div>
//         <div
//           id="title-service-3"
//           className="flex items-center justify-center gap-3 -translate-x-90"
//         >
//           <p>APIs</p>
//           <div className="w-10 h-1 md:w-32 bg-amber-300 " />
//           <p className="italic">Frontends</p>
//           <div className="w-10 h-1 md:my-32 bg-amber-300" />
//           <p>Scalability</p>
//         </div>

//         <div
//           id="title-service-4"
//           className="flex items-center justify-center gap-3 translate-x-75"
//         >
//           <p>Gsap</p>
//           <div className="w-10 h-1 md:w-32 bg-amber-300 " />
//           <p className="italic">Animation</p>
//           <div className="w-10 h-1 md:my-32 bg-amber-300" />
//           <p>Three js</p>
//         </div>
//         <div id="title-service-5" className=" -translate-x-0">
//           <p>Database</p>
//         </div>
//       </div>
//       <Marquee
//         items={items2}
//         reverse={true}
//         className="text-black bg-transparent border-y-2"
//         iconClassName=" stroke-gold  stroke-2 text-priamry"
//         icon="material-symbols-light:square"
//       />
//     </section>
//   );
// };

// export default ServiceSummary;
