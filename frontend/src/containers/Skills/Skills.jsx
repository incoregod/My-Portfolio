import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { ThemeContext } from "../../ThemeContext";
import { Parallax } from "react-scroll-parallax";

let timeVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 100,
  },
  visible: {
    whileInView: { opacity: 1, scale: 1, y: 0 },
    transition: { duration: 1 },
  },
};

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = "*[_type == 'skills']";
    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);

  const skillsEl = skills.map((skill, index) => (
    <Parallax key={skill + index} speed={10} rotateY={[0, 360]}>
      <div className="app__skills-skill">
        <img src={urlFor(skill.icon)} alt={skill.title} />
        <p>{skill.title}</p>
      </div>
    </Parallax>
  ));

  useEffect(() => {
    const xpQuery = "*[_type == 'experiences']";

    client.fetch(xpQuery).then((data) => setExperiences(data));
  }, []);

  const xpEl = experiences.map((xp, index) => (
    <motion.div
      key={xp + index}
      className="app__skills-timeline"
      variants={timeVariants}
      initial="hidden"
      whileInView={timeVariants.visible.whileInView}
      transition={timeVariants.visible.transition}
    >
      <div className={`app__skills-year skills--${theme}`}>
        <p className={`p-${theme}`}>{xp.year}</p>
      </div>
      {xp.works.map((work, index) => (
        <div key={work + index} className="app__skills-xp">
          <p className="app__skills-title">{work.name} </p>
          <p className={`app__skills-subtitle p-${theme}`}>{work.company} </p>
          <div className="bla">
            <img src={urlFor(work.imgUrl)} alt={work.name} />
          </div>
        </div>
      ))}
    </motion.div>
  ));

  return (
    <div className="app__skills">
      <Parallax speed={-5} translateX={[-5, 1]} scale={[0.9, 1]}>
        <h2 className={`app__skills-header head-text p-${theme}`}>
          keepStuding ? <span>mySkills.push(newSkills)</span> :{" "}
          <span className={`p-${theme}`}>'Try Harder'</span>{" "}
        </h2>
      </Parallax>
      <div className="app__skills-wrapper">
        <div className="app__skills-skills">{skillsEl}</div>
        <div className="app__skills-experiencies">{xpEl}</div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg-"
);
