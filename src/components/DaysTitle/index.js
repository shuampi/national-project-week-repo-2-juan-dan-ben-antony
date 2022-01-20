import React from "react";

function DaysTitle({ handleTitle }) {
  return (
    <div>
      <input
        class="title-input"
        onChange={handleTitle}
        placeholder="Type here what you worked on today..."
      ></input>
    </div>
  );
}

export default DaysTitle;
