import React from "react";

function DayBar({ handleDayRating, emoji }) {
  return (
    <div className="container">
      <div className="day-slider">
        <h3>Rate your experience: </h3>
        <div className="emoji-slider">
          <h3 className="emoji-icons">{emoji}</h3>
          <input
            type="range"
            min="1"
            max="5"
            // value="50" - needs to be onChange to work correctly
            onChange={handleDayRating}
            className="slider"
            id="myRange"
          />
        </div>
      </div>
    </div>
  );
}

export default DayBar;
