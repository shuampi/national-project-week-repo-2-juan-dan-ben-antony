/** @format */

import React from "react";
import DayDisplay from "../DayDisplay";
//it will take as props: day_title

function ChartButton({ weekDay, getDayData }) {
  

  return (
    <div className="chartButton">
      <button
        type="button"
        onClick={() => {
          getDayData(weekDay);
        }}
      >
        <h3>{weekDay}</h3>
      </button>
    </div>
  );
}

export default ChartButton;
