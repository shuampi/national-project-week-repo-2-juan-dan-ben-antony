import React from "react";

function MoodBar({ handleMoodRating }) {
  return (
    <div className="mood-slider">
      <h3>Rate your mood today</h3>
      <input
        type="range"
        min="1"
        max="5"
        // value="50" - needs to be onChange to work correctly
        onChange={handleMoodRating}
        className="slider"
        id="myRange"
      />
    </div>
  );
}

export default MoodBar;
