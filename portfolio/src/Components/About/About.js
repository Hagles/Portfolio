import { UserContext } from "../../UserContext";
import React, { useContext } from "react";
import "./About.css";

export default function About() {
  const { scrollCount, width } = useContext(UserContext);

  return (
<div>

    <div className='About'>
      <div
        className={`containerAbout ${scrollCount >= 20 && scrollCount < 60 ? "containerAbout": "transformAbout"}` } 
      
      >
        Hi, Welcom you for visiting my Site. I am Tomas, And this is my story
        ...

        </div>   
      </div>
    </div>
  );
}
