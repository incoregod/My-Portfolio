import React, { useContext } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import "./FooterCover.scss";
import { ThemeContext } from "../../ThemeContext";
import { Parallax } from "react-scroll-parallax";


const FooterCover = (props) => {
  const { theme } = useContext(ThemeContext);


  
  return (
    <div className={`app__footer-cover $footer-${theme}`}>
      <Parallax translateY={[-100, 5]} opacity={[0, 1]}>
        <h2 className={`head-text p-${theme}`}>
          const <span>contactMe</span> = ( ) => onClick (
          <span>Contact-Form)</span>{" "}
        </h2>
      </Parallax>
      <Parallax rotate={[0, 846]}>
        <div onClick={() => props.handleCover()} className="app__footer-svg">
          <FaRegEnvelope />
        </div>
      </Parallax>
    </div>
  );
};

export default FooterCover;
