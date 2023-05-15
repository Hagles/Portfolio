"use client";
import { UserContext } from "./UserContext";
import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";

import corner1Image from "./Cblue.jpg";
import corner2Image from "./Cred.jpg";
import corner3Image from "./Cgreen.jpg";
import corner4Image from "./Cyellow.jpg";
import corner5Image from "./Ccolored.jpg";

import "./App.css";

function App() {
  const [scrollCount, setScrollCount] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [chosenComponent, setChosenComponent] = useState("");

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
      let cornerImage;
      if (chosenComponent === "Component1") {
        cornerImage = corner1Image;
      } else if (chosenComponent === "Component2") {
        cornerImage = corner2Image;
      } else if (chosenComponent === "Component3") {
        cornerImage = corner3Image;
      } else if (chosenComponent === "Component4") {
        cornerImage = corner4Image;
      }
      setChosenComponent(cornerImage);
      setScrollCount(scrollPosition / 10);
      setWidth(window.innerWidth / 10);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("zoom", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("zoom", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="App">
        {chosenComponent === "Component1" && <About />}
        {chosenComponent === "Component2" && <Skills />}
        {chosenComponent === "Component3" && <Contact />}
        {chosenComponent === "Component4" && <Resume />}
        <img src={chosenComponent} alt="Corner" className="corner-image" />
        <Helmet>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" /> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>

        <UserContext.Provider value={{ scrollCount, width }}>
          <Header className="Header" />
          <About className="AboutComponent" />
          <Skills className="Skills" />
          <Contact className="Contact" />
          <Resume className="Resume" />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
