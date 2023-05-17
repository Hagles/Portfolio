import "./Skills.css";
import { UserContext } from "../../UserContext";
import React, {  useContext } from "react";

export default function Skills() {

    const { scrollCount, width } = useContext(UserContext);

  return (
    <div
    className={`Skills ${scrollCount >= 81 && scrollCount < 120  ? "Skills": "transformSkills"}` } 
    >
    <div className="containerSkills">

    <p id="Skills">Bio</p>
    <div>
    <p>"As a curious child, I would often take apart all of my toys. However, over time, I not only learned to put them back together, but these experiences also shaped me and formed the foundation of my programming mindset."</p>
    <p></p>
    <p></p>
    <p>fdgfdg</p>
    </div>
    </div>
     
  </div>

  );
}
