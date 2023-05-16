import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import "./Header.css";

export default function Header() {
  const { scrollCount, width } = useContext(UserContext);

  return (
    
    <div className="headerFixed">
      
      
      <div className={`headerContainer ${
            scrollCount >= 20 && scrollCount < 1000 ? "Tabout" : "about"
          }`}>
        <a
          href="http://localhost:3000/"
          
        >
          Tomas Balaz
        </a>
        {/* <a href="http://localhost:3000/">Skills</a>
        <a href="http://localhost:3000/">Contact</a>
        <a href="http://localhost:3000/">Resume</a> */}
      </div>
      
    </div>
    
  );
}
