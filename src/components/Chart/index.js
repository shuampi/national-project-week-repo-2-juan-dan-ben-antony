/** @format */

import React from "react";
import ChartButton from "../ChartButton";
function Chart() {
  return (
    <section>
      <div className="chartButtonContainer">
        <h1>Your current week</h1>
        <div className="chartButtons">
          <ChartButton weekDay="Monday" />
          <ChartButton weekDay="Tuesday" />
          <ChartButton weekDay="Wednesday" />
          <ChartButton weekDay="Thursday" />
          <ChartButton weekDay="Friday" />
        </div>
      </div>
    </section>
  );
}

export default Chart;
