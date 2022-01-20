import React from "react";
import dataBootcamper from "../../dashboardData";
import { useState } from "react";
import ChartButton from "../ChartButton";

function DayDisplay(dayObj) {
  return (
    <div>
      <button>Back</button>
      <p>DAY OF WEEK</p>
      <h3>TITLE</h3>
      <p>RATING</p>
      <p>FEEDBACK</p>
      <p>REFLECTION</p>
      <p>EMOTION</p>
    </div>
  );
}

export default DayDisplay;

// display the date
// days title - text string
// daybar rating - number
// feedback - text string
// reflect rating - text string
// mood rating - number

// have an onclick that will return us to the chart
// this element will render in the place of the chart
