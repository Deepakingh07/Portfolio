import { useEffect, useRef, useState } from "react";
import { socials } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    // Set initial styles
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set(linksRef.current, { autoAlpha: 0, y: -20, rotateX: 90 });
    gsap.set(contactRef.current.children, { autoAlpha: 0, y: -20 });

    // Timeline for navbar animation
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(navRef.current, {
      xPercent: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    tl.current.to(
      linksRef.current,
      {
        autoAlpha: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    );

    tl.current.to(
      contactRef.current.children,
      {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "<+0.2"
    );

    // Burger icon animation
    iconTl.current = gsap.timeline({ paused: true });
    iconTl.current.to(topLineRef.current, {
      rotate: 45,
      y: 10,
      duration: 0.3,
      ease: "power2.inOut",
    });
    iconTl.current.to(
      bottomLineRef.current,
      {
        rotate: -45,
        y: -5,
        duration: 0.3,
        ease: "power2.inOut",
      },
      "<"
    );
  }, []);

  // Show/hide burger on scroll
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        !e.target.closest(".burger-btn")
      ) {
        tl.current.reverse();
        iconTl.current.reverse();
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Toggle menu (sirf yeh rehne do)
  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black  text-[#87e64b]/80 py-10 gap-y-6 md:w-1/2 md:left-1/2"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-7xl">
          {["home", "about", "services", "work", "contact"].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  to={section}
                  smooth={true} // smooth scrolling enable
                  duration={800} // scroll duration in ms (800ms = smooth & fast)
                  offset={-50} // thoda upar stop ho (navbar ke overlap se bachne ke liye)
                  spy={true} // active section tracking (optional)
                  onClick={() => {
                    toggleMenu(); // close nav
                    setShowBurger(true);
                  }}
                  className="cursor-pointer transition-all duration-300  hover:text-white"
                >
                  {section}
                </Link>
              </div>
            )
          )}
        </div>

        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-4 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-[#87e64b]/50">E-mail</p>
            <a className="tracking-wide text-white hover:text-[#87e64b] text-xl lowercase text-pretty">
              rwtsinghd@gmail.com
            </a>
          </div>

          <div className="font-light">
            <p className="tracking-wider text-[#87e64b]/50">Social Media</p>
            <p className="flex flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-sm leading-loose tracking-widest uppercase text-white hover:text-[#87e64b] transition-colors duration-300"
                >
                  {"{"}
                  {social.name}
                  {"}"}
                </a>
              ))}
            </p>
          </div>
        </div>
      </nav>

      {/* Burger / Cross Button */}
      <div
        className="burger-btn fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full border-[#87e64b] border-2 cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu} // 👈 yahan sirf toggleMenu
        style={{
          clipPath: "circle(50% at 50% 50%)",
          opacity: showBurger ? 1 : 0.6,
        }}
      >
        {!isOpen ? (
          <>
            {/* Burger Icon */}
            <span className="block w-8 h-0.5 bg-[#87e64b] rounded-full origin-center" />
            <span className="block w-8 h-0.5 bg-[#87e64b] rounded-full origin-center" />
          </>
        ) : (
          <>
            {/* Cross Icon */}
            <span className="block w-8 h-0.5 bg-[#87e64b] rounded-full origin-center rotate-45 translate-y-2" />
            <span className="block w-8 h-0.5 bg-[#87e64b] rounded-full origin-center -rotate-45 -translate-y-2" />
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
