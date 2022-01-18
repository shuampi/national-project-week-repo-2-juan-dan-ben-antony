import React from "react";

function RatingsBar() {
  return (
    <div>
      <h3>Question for slider</h3>
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      />
    </div>
  );
}

export default RatingsBar;
