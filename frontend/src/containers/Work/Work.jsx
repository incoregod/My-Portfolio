import React, { useState, useEffect, useContext } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { ThemeContext } from "../../ThemeContext";
import { Parallax } from "react-scroll-parallax";

let appWorksVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    x: "500vw",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const { theme } = useContext(ThemeContext);

  const filters = ["Web App", "React JS", "Five M", "All"];

  const filterEl = filters.map((item, index) => (
    <div
      key={index}
      onClick={() => handleWorkFilter(item)}
      className={`app__work-filter-item app__flex p-text ${
        activeFilter === item ? "item-active" : ""
      }`}
    >
      <Parallax translateX={[-10, 5]} opacity={[0.8, 1]}>
        {item}
      </Parallax>
    </div>
  ));

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const workEl = filterWork.map((work, index) => (
    <div className={`app__work-item app__flex work-${theme}`} key={index}>
      <div className="app__work-img app__flex">
        <Parallax opacity={[0.5, 1]} scale={[0.9, 1]}>
          <img src={urlFor(work.imgUrl)} alt={work.name} />
        </Parallax>

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="app__work-hover app__flex"
        >
          <a href={work.projectLink} target="_blank" rel="noreferrer">
            {work.projectLink && (
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillEye />
              </motion.div>
            )}
          </a>
          <a href={work.codeLink} target="_blank" rel="noreferrer">
            {work.codeLink && (
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillGithub />
              </motion.div>
            )}
          </a>
        </motion.div>
      </div>
      <Parallax translateX={[-3, 3]} scale={[0.9, 1]}>
        <div className="app__work-content app__flex">
          <h4 className={`bold-text p-${theme}`}>{work.title}</h4>
          <p className={`p-text p-${theme}`} style={{ marginTop: 10 }}>
            {work.description}
          </p>

          <div className={`app__work-tag app__flex work-${theme}`}>
            <p className={`p-text p-${theme}`}>{work.tags[0]}</p>
          </div>
        </div>
      </Parallax>
    </div>
  ));

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <div className={`app__works-main`}>
      <motion.div
        className="app__works"
        variants={appWorksVariants}
        initial="hidden"
        animate="visible"
      >
        <Parallax speed={-20} translateY={[-100, 80]} scale={[0.9, 1]}>
          <p className={`head-text app_works-script p-${theme}`}>
            while ( inPortfolio ) <span>'Enjoy'</span>
          </p>
        </Parallax>
        <div className="app__work-filter">{filterEl}</div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {workEl}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works-main"),
  "work",
  "app__whitebg-"
);
