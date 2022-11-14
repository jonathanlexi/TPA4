import React from "react";
import Card from "../components/Card";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>What i've done</h2>
      <div className="portfolio-content">
        <Card menu="portfolioState" />
      </div>
    </div>
  );
}

export default Portfolio;
