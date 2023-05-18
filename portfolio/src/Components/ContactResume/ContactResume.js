import "./ContactResume.css";
import { UserContext } from "../../UserContext";
import React, { useContext } from "react";
import GitHub2 from "./git.svg";
import LinkedIn from "./linkedin.png";

export default function ContactResume() {
  const { scrollCount, width } = useContext(UserContext);

  const handleDownload = () => {
    const fileName = "Balaz Tomas-Resume.pdf";
    const fileUrl = `${process.env.PUBLIC_URL}/${fileName}`; // Construct the file URL

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`ContactResume ${
        scrollCount >= 130 && scrollCount < 1000
          ? "ContactResume"
          : "transformContactResume"
      }`}
    >
      <div className="containerContactResume">
        <p id="visiting">Thank you for visiting my site!</p>
        <p className="interested">
          If you are interested or have any questions,
        </p>
        <p className="interested1">
          {" "}
          please feel free to contact me using the information below.
        </p>

        <p className="ContactText">Contact:</p>
        <div className="GitAndLinkedIn">

          <a
            href="https://www.linkedin.com/in/tomas-balaz-637979212/" className="linkedIn">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Hagles" className="gitHub">
            <img src={GitHub2} alt="github" />
          </a>


        </div>
          <p className="email">email: balaz.tamas.86@gmail.com</p>

          <p className="canDownload">Or you can download my resume bellow </p>
          <button className="download" onClick={handleDownload}>
            Download Resume
          </button>
      </div>
    </div>
  );
}
