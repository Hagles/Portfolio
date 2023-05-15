import "./Skills.css";
import { UserContext } from "../../UserContext";
import React, {  useContext } from "react";

export default function Skills() {

    const { scrollCount, width } = useContext(UserContext);

  return (
    <div>
      <div className="Skills">
      <div className={`containerSkills ${scrollCount >= 61 && scrollCount < 101 ? "containerSkills" : "transformSkills"}`}>

      I was a curious kid ,so I took apart all the  toys I had, but time has become to be able them put back together. 
      Thats why LEGO become my favorit game and set my mind to make valuable thinks from apart
      and as also a joiner , avilable creativity.    
      </div>
      </div>
      
    </div>
  );
}
