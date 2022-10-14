import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ThemeContextProvider } from "./ThemeContext";
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ParallaxProvider>
      <App />
      </ParallaxProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
