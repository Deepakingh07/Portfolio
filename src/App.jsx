import React, { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
// import ServiceSummary from "./sections/ServiceSummary";
import ReactLenis from "lenis/react";
import Services from "./sections/Services";
import About from "./sections/About";
import Work from "./sections/Work";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import Loader from "./sections/Loader";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {/* {loadingComplete ? ( */}
      <div>
        <Navbar />
        <Hero />
        {/* <ServiceSummary /> */}
        <Services />
        <About />
        <Work />
        <ContactSummary />
        <Contact />
      </div>
      {/* ) : (
        <Loader onComplete={() => setLoadingComplete(true)} />
      )} */}
    </ReactLenis>
  );
};

export default App;
//
