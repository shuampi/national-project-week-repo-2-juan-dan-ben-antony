import React from "react";

function DaysTitle({ handleTitle }) {
  return (
    <div>
      <h3>Enter a title for today</h3>
      <input onChange={handleTitle}></input>
    </div>
  );
}

export default DaysTitle;
