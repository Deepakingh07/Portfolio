import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import TextType from "../components/TextType";

const Hero = () => {
  const text = `I help growing brands and startups gain 
  an unfair advantage through
  premium result driven web`;

  return (
    <section
      id="home"
      className="inset-0 bg-gradient-to-br from-[#1f1f1f] to-black -z-20
      relative flex flex-col justify-center min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/myimg/image.gif"
        alt=""
        className="
  w-[250px] sm:w-[230px] md:w-[350px] lg:w-[400px] rounded-xl
  max-[600px]:mx-auto max-[600px]:relative max-[600px]:mb-6
  sm:absolute sm:bottom-[37%]  sm:right-12 sm:mx-0 sm:mb-0 z-10"
      />

      {/* Main Content */}
      <div className="relative z-20">
        <AnimatedHeaderSection
          subTitle="404 No Bugs Found"
          title={
            <div className="sm:h-[50px] h-[20px] text-3xl sm:text-[7vw] md:text-[7.1vw] md:justify-start lg:text-[7vw] flex items-center justify-start lg:justify-start  ">
              <TextType
                text={["Deepak Singh Rawat"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={false}
                cursorCharacter="|"
              />
            </div>
          }
          text={text}
          textColor="text-[#87e64b]"
        />
      </div>
    </section>
  );
};

export default Hero;
