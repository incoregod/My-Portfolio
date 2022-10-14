import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { images } from "../../constants";
import { ThemeContext } from "../../ThemeContext";

let renderVariants = {
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

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  function handleChangeInput(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit() {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 5000);
  }

  return (
    <div className="app__footer">
      <motion.div
        className="app__footer-cards"
        variants={renderVariants}
        initial="hidden"
        animate="visible"
      >
        {!isFormSubmitted && (
          <h2 className={`head-text p-${theme}`}>
            Let's talk and <span>get to know</span> each other
          </h2>
        )}
        {!isFormSubmitted && (
          <div className="app__footer-card">
            <h2>email ? </h2>
            <motion.img
              src={images.email}
              alt="email"
              whileHover={{ rotate: 760, scale: [1, 1.5, 1] }}
            ></motion.img>
            <a href="mailto:incoreee@gmail.com" className="p-text">
              incoreee@gmail.com
            </a>
          </div>
        )}
        {!isFormSubmitted && <h2>else</h2>}
      </motion.div>
      {!isFormSubmitted ? (
        <motion.div
          className="app__footer-form app__flex"
          variants={renderVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={`app__flex form-${theme}`}>
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className={`app__flex form-${theme}`}>
            <input
              className="p-text"
              type="text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className={`app__flex form-${theme}`}
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </motion.div>
      ) : (
        <div>
          <h3>Thank you for your contact</h3>
        </div>
      )}
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg-"
);
