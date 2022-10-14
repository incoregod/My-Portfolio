import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { client } from "../../client";
import { ThemeContext } from "../../ThemeContext";
import TimeLine from "./TimeLine";
import { Parallax } from "react-scroll-parallax";

let animateVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: -900,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [abouts, setAbouts] = useState([]);
  const [loaded, setLoaded] = useState(0);
  const [animation, setAnimation] = useState(animateVariants);

  const aboutsEl = abouts.map((about, index) => {
    if (loaded === index) {
      return (
        <motion.div
          key={about.title + index}
          whileInView={{ opacity: [0, 1] }}
          whileHover={{ cursor: "pointer" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          variants={animation}
          initial="hidden"
          animate="visible"
          className="app__about-item"
          onClick={() => handleAnimation(index)}
        >
          <Parallax scale={[0.75, 1]} easing="easeIn">
            <h2 style={{ marginTop: 20 }}>{about.title}</h2>
          </Parallax>
          <Parallax scaleX={[1, 1.3]}>
            <p className={`p-${theme}`} style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </Parallax>
        </motion.div>
      );
    }
  });

  function handleAnimation(index) {
    setAnimation({
      hidden: {
        opacity: 1,
        scale: 1,
        x: 0,
      },
      visible: {
        opacity: 0,
        scale: 0,
        x: 500,
        transition: { duration: 0.5, ease: "easeInOut" },
      },
    });

    if (index === loaded) {
      setTimeout(() => {
        setLoaded(index + 1);
        setAnimation(animateVariants);
      }, 500);
    }
    if (index === aboutsEl.length - 1) {
      setTimeout(() => {
        setLoaded(0);
        setAnimation(animateVariants);
      }, 500);
    }
  }

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <Parallax speed={-5} translateY={[-200, 50]} scale={[0.9, 1]}>
        <h2 className={`head-text about-${theme}`}>
          if <span>user's experience == Enjoyable</span> then <br />
          job <span>accomplished</span>
        </h2>
      </Parallax>
      <div className="app__about-profiles">{aboutsEl}</div>

      <TimeLine active={loaded} abouts={abouts} />
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg-"
);
