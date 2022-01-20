/** @format */

import React from "react";
import DayDisplay from "../DayDisplay";
//it will take as props: day_title

function ChartButton({ weekDay, getDayData }) {
  async function getDayData(weekDay) {
    const response = await fetch("https://campfire-project.herokuapp.com/all");
    const data = await response.json();

    const dayObj = data.payload.map((item, index) => {
      if (item.day === weekDay) {
        return item;
      }
    });
    console.log(dayObj);
  }

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
