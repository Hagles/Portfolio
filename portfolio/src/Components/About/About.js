import { UserContext } from "../../UserContext";
import React, { useContext } from "react";
import "./About.css";

export default function About() {
  const { scrollCount, width } = useContext(UserContext);

  return (
<div>

    
      <div
        className={`Bio ${scrollCount >= 50 && scrollCount < 90  ? "Bio": "transformBio"}` } 
        >
        <div className="containerBio">

        <p id="bio">Bio</p>
        <div>
        <p>"As a curious child, I would often take apart all of my toys. However, over time, I not only learned to put them back together, but these experiences also shaped me and formed the foundation of my programming mindset."</p>
        <p></p>
        <p></p>
        <p>fdgfdg</p>
        </div>
        </div>
         
      </div>
    </div>
  );
}
