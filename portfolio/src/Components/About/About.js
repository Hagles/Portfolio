import { UserContext } from "../../UserContext";
import React, { useContext } from "react";
import "./About.css";
import paragliding from './paraglider.png'
import joiner from './joiner.png'
import sportBall from './sportBallCubeS.png'

export default function About() {
  const { scrollCount, width } = useContext(UserContext);

  return (
<div>

    
      <div
        className={`Bio ${scrollCount >= 50 && scrollCount < 90  ? "Bio": "transformBio"}` } 
        >
        <div className="containerBio">

        <p id="bio">Bio</p>
        <div className="containerBioText">
        <p className="BioText">"As a curious child, I would often take apart all of my toys. </p>
        <p className="BioText">However, over time, I not only learned to put them back together, </p>
        <p className="BioText">but these experiences also shaped me and formed the foundation of my </p>
        <p className="BioText">programming mindset."</p>
        </div >
        <div className="joinerContainer">
        <p className="BioText">Carpentry develops my tangible level of creativity.</p>
        <img src={joiner} alt="joiner" className="joiner"/>
        </div>
        <div className="paraglidingContainer">
        <img src={paragliding} alt="paragliding" className="paragliding"/>
        <p className="BioText">Paragliding brings me emotional and mental balance.</p>
        </div>
        <div className="sportBallContainer">
        <p className="BioText">Physical well-being is taken care of, among other things, by volleyball.</p>
        <img src={sportBall} alt="sport" className="sportBall"/>
        </div>
        </div>
        
        
        
        
         
      </div> 
    </div>
  );
}
