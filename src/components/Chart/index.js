/** @format */

import React from "react";
import ChartButton from "../ChartButton";
function Chart() {
  return (
    <section>
      <h1>Your current week</h1>
      <div className="chartBottonContainer">
        <ChartButton weekDay="Monday" />
        <ChartButton weekDay="Tuesday" />
        <ChartButton weekDay="Wednesday" />
        <ChartButton weekDay="Thursday" />
        <ChartButton weekDay="Friday" />
      </div>
    </section>
  );
}

export default Chart;
