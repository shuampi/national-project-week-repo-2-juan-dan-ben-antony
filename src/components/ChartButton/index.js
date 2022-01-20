/** @format */

import React from "react";
//it will take as props: day_title

function ChartButton({ weekDay }) {
  return (
    <div className="chartButton">
    <button type="button"><h3>{weekDay}</h3></button>
    </div>
  );
}

export default ChartButton;
