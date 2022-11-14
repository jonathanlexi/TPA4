import React from "react";
import Ig from "../image/instagram.png";
import Gh from "../image/github.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3>Follow my Progress</h3>

      <div className="sosmed">
        <div className="ig">
          <img src={Ig} alt="" width="30" height="30px" />
          <a href="https://www.instagram.com/jonathanlexi/" target="_blank">
            Instagram
          </a>
        </div>
        <div className="gh">
          <img src={Gh} alt="" width="30px" height="30px" />
          <a href="https://github.com/jonathanlexi" target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
