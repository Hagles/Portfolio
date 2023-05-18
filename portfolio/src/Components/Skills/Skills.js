import "./Skills.css";
import { UserContext } from "../../UserContext";
import React, {  useContext } from "react";
import css from './icons/css1.png'
import git from './icons/git.png'
import html from './icons/html.png'
import jira from './icons/jira.png'
import js from './icons/js.svg'
import lightroom from './icons/lightroom.png'
import oracle from './icons/oracle.png'
import react from './icons/react.png'
import salesForce from './icons/salesForce.png'
import sap from './icons/sap.png'
import scrum from './icons/scrum.png'
import sql from './icons/sql.png'
import ts from './icons/ts.png'

export default function Skills() {

    const { scrollCount, width } = useContext(UserContext);

  return (
    <div
    className={`Skills ${scrollCount >= 90 && scrollCount < 130  ? "Skills": "transformSkills"}` } 
    >
    <div className="containerSkills">

    <p className="skillsText">Skills</p>
    <div>
    <p>At the age of 34, I decided to take a step forward and change my profession.</p>
    <p> Prior to that, I had completed an intensive 6-month bootcamp, preceded by over 7 months of self-learning. </p>
    <p></p>
    <p></p>
    <p className="logos">
      <img src={oracle} className="logo"  alt='logo' />
      <img src={salesForce} className="logo"  alt='logo' />
      <img src={react} className="logo"  alt='logo' />
      <img src={scrum} className="logo"  alt='logo' />
      <img src={sap} className="logo"  alt='logo' />
      <img src={jira} className="logo"  alt='logo' />
      <img src={git} className="logo"  alt='logo' />
    </p>
    <p className="logos">
      <img src={ts} className="logo"  alt='logo' />
      <img src={js} className="logo"  alt='logo' />
      <img src={html} className="logo"  alt='logo' />
      <img src={css} className="logo"  alt='logo' />
      <img src={sql} className="logo"  alt='logo' />
      <img src={lightroom} className="logo"  alt='logo' />

    </p>
    </div>
    </div>
     
  </div>

  );
}
