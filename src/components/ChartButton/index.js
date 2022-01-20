/** @format */

import React, { useState } from "react";
import DayDisplay from "../DayDisplay";
//it will take as props: day_title

function ChartButton({ weekDay, getDayData, style }) {
  const buttonColor = {
    backgroundColor: `${style}`,
  };

  return (
    <div className="container">
      <button
        style={buttonColor}
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
