import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { ThemeContext } from "../ThemeContext";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    const { theme } = React.useContext(ThemeContext);
    return (
      <div id={idName} className={`app__container ${classNames + theme}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className={`p-text p-${theme}`}> @2022 Fábio Rolo</p>
            <p className={`p-text p-${theme}`}>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
