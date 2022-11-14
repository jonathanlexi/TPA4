import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div>
          <span className="navbar-brand">
            <Link className="logo" to={"/"}>
              Jonathan Lexi
            </Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-item nav-link active">
              <Link className="span" to={"/"}>
                Home
              </Link>{" "}
              <span className="sr-only">(current)</span>
            </span>
            <span className="nav-item nav-link">
              <Link className="span" to={"/about"}>
                About
              </Link>
            </span>
            <span className="nav-item nav-link">
              <Link className="span" to={"/portfolio"}>
                Portfolio
              </Link>
            </span>
            <span className="nav-item nav-link disabled">
              <Link className="span" to={"/blog"}>
                Blog
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
