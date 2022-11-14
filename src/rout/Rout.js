import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

function Rout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default Rout;
