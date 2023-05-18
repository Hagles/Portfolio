import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import ProfilePictureSmall from "./ProfPicSmall.png";
import "./Header.css";

export default function Header() {
  const { scrollCount, width, introScroll, setScrollCount  } = useContext(UserContext);

  const handleDownload = () => {
    const fileName = 'Balaz Tomas-Resume.pdf'; 
    const fileUrl = `${process.env.PUBLIC_URL}/${fileName}`; // Construct the file URL
  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = (value) => {
    // Update the scrollCount value based on the clicked value
    setScrollCount(value);
  };

  return (
    <div
      className={`Header ${introScroll >= 60 ? "show" : "hidden"}`}
    >
      <div className="headerLeft" >
        <img
          src={ProfilePictureSmall}
          onClick={() => handleClick(0)}
          alt="Profile"
          className="HeaderProfImg"
        />
        <p onClick={() => handleClick(0)} id="bt" className="headerLinks">
          Tomas Balaz
        </p>
        <p
           onClick={() => handleClick(60)}
          className={`headerLinks ${introScroll >= 60 ? "fade-in-Header " : "hidden"}`}
        >
          Bio
        </p>
        <p
           onClick={() => handleClick(95)}
          className={`headerLinks ${introScroll >= 60 ? "fade-in-Header " : "hidden"}`}
        >
          Skills
        </p>
        {/* <p className="scroll">{introScroll}</p>
        <p className="scroll">{scrollCount}</p>
        <p className="scroll">{width}</p> */}
      </div>
      <div className="headerRight">
        <p
          onClick={() => handleClick(135)}
          id="ContactId" 
          className={`headerLinks ${introScroll >=60 ? "fade-in-Header " : "hidden"}`}
        >
          Contact
        </p>
        <p
          href="" onClick={handleDownload}
          className={`headerLinks ${introScroll >=60 ? "fade-in-Header " : "hidden"}`}
        >
          Resume
        </p>
      </div>
    </div>
  );
}
