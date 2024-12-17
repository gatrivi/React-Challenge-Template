import React from "react";
import "./Card.css";

function Card({ title, img, text }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img className="card-img" src={img} />
      <p className="card-text">{text}</p>

      <div className="button-box">
        <button className="button-action">Button 1</button>
        <button className="button-action">Button 2</button>
      </div>
    </div>
  );
}

export default Card;
