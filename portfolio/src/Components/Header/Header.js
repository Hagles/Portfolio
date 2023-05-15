import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import "./Header.css";

export default function Header() {
  const { scrollCount, width } = useContext(UserContext);

  return (
    <div className="headerFixed">
    <div className="headerContainer">
      <a href="http://localhost:3000/" className={`about ${scrollCount >= 20 && scrollCount < 60 ? "Tabout": "about"}` } >About</a>
      <a href="http://localhost:3000/">Skills</a>
      <a href="http://localhost:3000/">Contact</a>
      <a href="http://localhost:3000/">Resume</a>
    </div>
    </div>
  );
}
