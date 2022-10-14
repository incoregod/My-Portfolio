import React, { useState, useContext } from "react";
import Footer from "./Footer";
import FooterCover from "./FooterCover";
import { ThemeContext } from "../../ThemeContext";

const WorkMain = () => {
  const [footerCover, setFootCover] = useState(true);
  const { theme } = useContext(ThemeContext);

  function handleCover() {
    setFootCover(false);
  }

  return (
    <div className={`footer-${theme}`}>
      {footerCover ? <FooterCover handleCover={handleCover} /> : <Footer />}
    </div>
  );
};

export default WorkMain;
