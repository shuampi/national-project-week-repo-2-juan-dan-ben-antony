import React from "react";

function MoodBar({ handleMood, emoji }) {
  return (
    <div className="container">
      <div className="mood-slider">
        <h3>Rate your mood today:</h3>
        <div className="emoji-slider">
          <h3 className="emoji-icons">{emoji}</h3>
          <input
            type="range"
            min="1"
            max="5"
            // value="50" - needs to be onChange to work correctly
            onChange={handleMood}
            className="slider"
            id="myRange"
          />
        </div>
      </div>
    </div>
  );
}

export default MoodBar;
