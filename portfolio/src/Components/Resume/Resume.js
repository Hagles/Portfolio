"use client";
import { UserContext } from "../../UserContext";
import React, {  useContext } from "react";
import "./Resume.css";

export default function Resume() {

  const { scrollCount, width } = useContext(UserContext);

  return (
    <div>
      <div className="Resume">
        <div className={`containerResume ${scrollCount >= 143 && scrollCount < 183 ? "containerResume" : "transformResume"}`}></div>
      </div>
      
    </div>
  );
}
