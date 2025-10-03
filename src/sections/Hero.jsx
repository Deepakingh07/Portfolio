import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import TextType from "../components/TextType";

const Hero = () => {
  const text = `I help growing brands and startups gain 
  an unfair advantage through
  premium result driven web`;

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/myimg/image.gif"
        alt=""
        className="w-[200px] lg:w-[400px] rounded-xl absolute right-12 bottom-[37%] z-10"
      />

      {/* Main Content */}
      <div className="relative z-20">
        <AnimatedHeaderSection
          subTitle="404 No Bugs Found"
          title={
            <TextType
              text={["Deepak Singh Rawat"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={false}
              cursorCharacter="|"
            />
          }
          text={text}
          textColor="text-[#87e64b]"
        />
      </div>
    </section>
  );
};

export default Hero;
