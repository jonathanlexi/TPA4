import React from "react";
import Logo from "../image/logo.jpeg";
import Img from "../image/logo-web.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home-content">
        <h1 className="desc">
          Hi,I'm Jonathan Lexi. I am interested in creating a website and making
          the website look more attractive
        </h1>

        <img className="logo" src={Img} alt="" />
      </div>
    </div>
  );
}

export default Home;
