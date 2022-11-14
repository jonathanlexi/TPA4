import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AboutContext } from "../AboutProvider";
import "./Card.css";

function Card(props) {
  const { state } = useContext(AboutContext);

  const handleClick = () => {};

  return (
    <div className="cards">
      {state[props.menu].map((item) => (
        <div className="card" key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.desc}</p>
            <a
              href={item.url}
              rel="noreferrer"
              target="_blank"
              className="detail"
            >
              {item.buttontext}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
