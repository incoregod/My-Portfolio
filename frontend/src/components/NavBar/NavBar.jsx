import React, { useState, useContext } from "react";
import { images } from "../../constants";
import "./NavBar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { ThemeContext } from "../../ThemeContext";
const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navLinks = ["home", "about", "skills", "work", "contact"];
  const [toggle, setToggle] = useState(false);

  function handleSideMenu() {
    setToggle((prevToggle) => !prevToggle);
  }

  const sideEl = navLinks.map((item, index) => (
    <li key={`item-${index}`}>
      <a onClick={handleSideMenu} href={`#${item}`}>
        {item}
      </a>
    </li>
  ));

  const navLinksEl = navLinks.map((item) => (
    <li className="app__flex" key={`links-${item}`}>
      <div />
      <a className={`text-${theme}`} href={`#${item}`}>
        {item}
      </a>
    </li>
  ));
  return (
    <nav id="navBar" className={`app__navbar ${theme}`}>
      <div className="app__navbar-logo">
        <a href="#home">
          <img
            src={theme === "light" ? images.logo_dark : images.logo_light}
            alt="logo-img"
          />
        </a>
      </div>
      <ul className="app__navbar-lists">{navLinksEl}</ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={handleSideMenu} />
        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 1 }}
          >
            <ul>{sideEl}</ul>
            <HiX onClick={handleSideMenu} />
          </motion.div>
        )}
      </div>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={toggleTheme}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
};

export default NavBar;
