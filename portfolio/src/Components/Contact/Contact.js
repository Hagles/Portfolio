import "./Contact.css";
import { UserContext } from "../../UserContext";
import React,  {  useContext } from "react";

export default function Contact() {

    const { scrollCount, width } = useContext(UserContext);

  return (
    <div>
      <div className="Contact">
      <div className={`containerContact ${scrollCount >= 102 && scrollCount < 142 ? "containerContact" : "transformContact"}`}>rh</div>
      </div>
      
    </div>
  );
}
