import React, { useContext } from "react";
import "./Header.scss";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { ThemeContext } from "../../ThemeContext";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const line1 = "Hello, I'm   Fábio";
  const line2 = "Front-End    Developer";
  const line3 = "People   Manager";
  const line4 = "Self   taught";
  const line5 = "&";
  const line6 = "Learning   Enthusiast";
  const imagesArray = [images.sass, images.react, images.javascript];
  const { handleScroll, scrollPosition } = useContext(ThemeContext);
  const isDesktop = useMediaQuery({ query: `(min-width: 1200px)` });

  const imagesEl = imagesArray.map((image, index) => (
    <Parallax
      key={`image-${index}`}
      className="app__header-skill"
      speed={10}
      translateY={[-100, 50]}
      opacity={[10, -1]}
    >
      <motion.div

        whileInView={{ scale: [0.5, 1], opacity: [0.5, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Parallax
          style={{ display: "flex", justifyContent: "center" }}
          rotate={[0, 360]}
        >
          <img src={image} alt="header-img" />
        </Parallax>
      </motion.div>
    </Parallax>
  ));

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { scale: 0, opacity: 0, x: -900 },
    visible: {
      opacity: 1,
      x: 0,
      scale: [1.2, 0.1, 1],
    },
  };

  function handleLines(line) {
    let newLine = line.split("").map((char, index) => (
      <motion.span
        className="app__header-span"
        key={`${char} ${index}`}
        variants={letter}
      >
        {char}
      </motion.span>
    ));
    return newLine;
  }

  return (
    <div className="app__header">
      <motion.img
        className="app__header-profile"
        src={images.profile}
      ></motion.img>
      <motion.h3
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="app__header-phrases"
      >
        <div className="lines line-1">
          {handleLines(line1)}
          <motion.img
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 4, ease: "easeInOut" }}
            src={images.profile}
            alt="profile_pic"
            className="app__header-img-wrapper"
          />
        </div>
        <div className="lines line-2">{handleLines(line2)}</div>
        <div className="lines">{handleLines(line3)}</div>
        <div className="lines">{handleLines(line4)}</div>
        <div className="lines">{handleLines(line5)}</div>
        <div className="lines">{handleLines(line6)}</div>
      </motion.h3>
      <div className="app__header-skills">{imagesEl}</div>
      {!isDesktop && <motion.svg
        className={`arrows ${scrollPosition > 600 ? "fade-out" : ""}`}
        whileInView={{ opacity: [0, 1], scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </motion.svg>}
    </div>
  );
};

export default AppWrap(Header, "home", "header-");


