import { UserContext } from "../../UserContext";
import React, { useContext, useEffect, useState } from "react";
import ProfilePicture from "./ProfPic.png";

import "./Intro.css";

export default function Intro() {
  const { scrollCount, width  } = useContext(UserContext);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  
  }, []);

  return (
    <div className="Intro">
      <div className={`fade-in ${isLoaded ? "" : ""}`}>
        <div
          className={`IntroContainer ${
            scrollCount >= 0 && scrollCount < 40 ? "IntroContainer" : "FadeOut"
          }`}
        >
          <img src={ProfilePicture} alt="Profile" className="IntroImg" />        

          <div className="textArea">
            <p className="introText1">Hi </p>
            <p className="introText2">My name is Tomas Balaz</p>
            <p className="introText3">FullStack developer</p>
            <p className="introText4">Please scroll for more...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
