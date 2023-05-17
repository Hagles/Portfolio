import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import ProfilePictureSmall from "./ProfPicSmall.png";
import "./Header.css";

export default function Header() {
  const { scrollCount, width, introScroll } = useContext(UserContext);

  return (
    <div
      className={`Header ${introScroll >= 60 ? "show" : "hidden"}`}
    >
      <div className="headerLeft">
        <img
          src={ProfilePictureSmall}
          alt="Profile"
          className="HeaderProfImg"
        />
        <a href="http://localhost:3000/" className="profName">
          Tomas Balaz
        </a>
        <a
          href="http://localhost:3000/"
          className={`headerLinks ${introScroll >= 60 ? "fade-in-Header " : "hidden"}`}
        >
          Bio
        </a>
        <a
          href="http://localhost:3000/"
          className={`headerLinks ${introScroll >= 60 ? "fade-in-Header " : "hidden"}`}
        >
          Skills
        </a>
        <p className="scroll">{introScroll}</p>
        <p className="scroll">{scrollCount}</p>
        <p className="scroll">{width}</p>
      </div>
      <div className="headerRight">
        <a
          href="http://localhost:3000/"
          id="ContactId"
          className={`headerLinks ${introScroll >=60 ? "fade-in-Header " : "hidden"}`}
        >
          Contact
        </a>
        <a
          href="http://localhost:3000/"
          className={`headerLinks ${introScroll >=60 ? "fade-in-Header " : "hidden"}`}
        >
          Resume
        </a>
        
      </div>
    </div>
  );
}
