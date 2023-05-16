import { UserContext } from "../../UserContext";
import React, { useContext, useEffect, useState } from "react";
import ProfilePicture from "./ProfPic.png";
import ProfilePictureSmall from "./ProfPicSmall.png";
import "./Intro.css";

export default function Intro() {
  const { scrollCount, width } = useContext(UserContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollTimer, setScrollTimer] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    let scrollFade;
    if (scrollCount > 20) {
      scrollFade = true;
    }
    setScrollTimer(scrollFade);
  }, []);

  return (
    <div className="Intro">
      <div className={`fade-in ${isLoaded ? "loaded" : ""}`}>
        <div
          className={`IntroContainer ${
            scrollCount >= 0 && scrollCount < 60 ? "IntroContainer" : "FadeOut"
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
