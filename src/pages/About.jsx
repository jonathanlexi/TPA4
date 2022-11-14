import React from "react";
import Card from "../components/Card";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h2>About me</h2>

      <div className="about-cards">
        <Card menu="initialState" />
      </div>
    </div>
  );
}

export default About;
