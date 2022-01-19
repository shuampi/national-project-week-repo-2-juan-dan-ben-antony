/** @format */

import React from "react";
//it will take as props: day_title

function ChartButton({ weekDay }) {
  return (
    <div className="chartButton">
      <h3>{weekDay}</h3>
     <a> More info</a>
    </div>
  );
}

export default ChartButton;
