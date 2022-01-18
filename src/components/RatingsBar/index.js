import React from "react";

function RatingsBar({ handleDayRating }) {
  return (
    <div>
      <h3>Question for slider</h3>
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
  );
}

export default RatingsBar;
