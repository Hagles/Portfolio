"use client";
import { UserContext } from "./UserContext";
import { Helmet } from "react-helmet";
import React, { useEffect, useState , createContext } from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import ContactResume from "./Components/ContactResume/ContactResume";
import Intro from "./Components/Intro/Intro";

import "./App.css";


function App() {
  const [scrollCount, setScrollCount] = useState(0);
  const [introScroll, setIntroScroll] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      const zoomLevel = Math.round(window.devicePixelRatio * 100);
      const backgroundSize = zoomLevel < 1000 ? `${zoomLevel}%` : "cover";
      document.documentElement.style.setProperty(
        "--background-size",
        backgroundSize
      );

      let scrollIntro;
      if (scrollCount >=60 ) {
        scrollIntro = 60
      }else if(introScroll >=60){
        scrollIntro = 60
      }
      
      setIntroScroll(scrollIntro);
      setScrollCount(scrollPosition/width );
      setWidth(window.innerWidth / 30);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("zoom", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("zoom", handleScroll);
    };
  });

  return (
    <div className="App">
      <Helmet>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <UserContext.Provider value={{ scrollCount, width, introScroll, setScrollCount }}>
        <Intro className="Intro" />
        <Header className="Header" />
        <About className="About" />
        <Skills className="Skills" />
        <ContactResume className="ContactResume" />
      </UserContext.Provider>
    </div>
  );
}

export default App;