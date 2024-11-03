import React from "react";
import "./Card.css";
function Card({ cardName, cardImage, cardYear, cardDuration, cardQuality }) {
  return (
    <div className="movie-card">
      <div className="hd-badge">{cardQuality}</div>
      <img src={cardImage} alt="Movie Poster" />
      <div className="movie-info">
        <h5>{cardName}</h5>
        <div className="details">
          <span className="year">{cardYear}</span>
          <span className="duration">{cardDuration}m</span>
          <div className="movie-type">Movie</div>
        </div>
      </div>
    </div>
  );
}
export default Card;
