import React from "react";

function MoodBar({ handleMood, emoji }) {
  return (
    <div className="mood-slider">
      <h3>Rate your mood today</h3>
      <input
        type="range"
        min="1"
        max="5"
        // value="50" - needs to be onChange to work correctly
        onChange={handleMood}
        className="slider"
        id="myRange"
      />
      <p>{emoji}</p>
    </div>
  );
}

export default MoodBar;
