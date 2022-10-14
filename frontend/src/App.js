import React from "react";
import "./App.scss";
import { About, Header, Skills, WorkMain, MainFooter, SvgTrack } from "./containers";
import { NavBar } from "./components";
import { Parallax } from "react-scroll-parallax";
import { images } from "./constants";
import { useMediaQuery } from "react-responsive";
import {
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";




function App() {
  const isMobile = useMediaQuery({ query: `(max-width: 700px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1200px)` });
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.35], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });




  function checkDevice() {
    if (isMobile) {
      return [0.2, 0.5];
    } else if (isTablet) {
      return [0.4, 0.7];
    } else {
      return [1, 0.5];
    }
  }

  return (
    <div className="App">
      <SvgTrack isMobile={isMobile} isTablet={isTablet} pathLength={pathLength} />
      <NavBar isMobile={isMobile} isTablet={isTablet} pathLength={pathLength} />

      <Parallax opacity={[1.3, 0, "easeIn"]}>
      <Header />
      </Parallax>
      <About />
      <Parallax
        className="smoke-img"
        opacity={[1, -0.5]}
        scale={checkDevice()}
        translateY={[-10, 5]}
        speed={10}
        easing="easeInQuad"
      >
        {" "}
        <img src={images.smoke} alt="smoke" />
      </Parallax>
      <Skills />
      <Parallax
        className="smoke-img2"
        opacity={[0, 1]}
        scale={checkDevice()}
        translateY={[50, 40]}
        speed={-10}
        easing="easeInQuad"
      >
        {" "}
        <img src={images.smoke2} alt="smoke2" />
      </Parallax>
      <WorkMain />
      <MainFooter />
    </div>
  );
}

export default App;
