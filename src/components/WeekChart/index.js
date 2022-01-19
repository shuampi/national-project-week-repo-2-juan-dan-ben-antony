/** @format */

import React from "react";
import ChartButton from "../ChartButton";
import DayDisplay from "../DayDisplay";
import WeekSearch from "../WeekSearch";

function WeekChart() {
  return (
    <section>
      <div className="chartButtonContainer">
        <h1>Your current week</h1>
        <p>Click the day to retreive info</p>
        <div className="chartButtons">
          <ChartButton weekDay="Monday" />
          <ChartButton weekDay="Tuesday" />
          <ChartButton weekDay="Wednesday" />
          <ChartButton weekDay="Thursday" />
          <ChartButton weekDay="Friday" />
        </div>
        <h3>Click here for other weeks</h3>
      </div>
    </section>
  );
}

export default WeekChart;
