/** @format */

import React, { useEffect, useState } from "react";
import ChartButton from "../ChartButton";
import DayDisplay from "../DayDisplay";
import WeekSearch from "../WeekSearch";

const dayColors = [
  "#f94144ff",
  "#f3722cff",
  "#f9c74fff",
  "#90be6dff",
  "#43aa8bff",
];

function WeekChart({ getDayData, data }) {
  const [mon, setMon] = useState();
  const [tues, setTues] = useState();
  const [wed, setWed] = useState();
  const [thurs, setThurs] = useState();
  const [fri, setFri] = useState();

  async function getRatingData() {
    const response = await fetch("https://campfire-project.herokuapp.com/all");
    const data = await response.json();
    data.payload.map((item) => {
      if (item.day === "monday") {
        setMon(item.day_rating);
      } else if (item.day === "tuesday") {
        setTues(item.day_rating);
      } else if (item.day === "wednesday") {
        setWed(item.day_rating);
      } else if (item.day === "thursday") {
        setThurs(item.day_rating);
      } else if (item.day === "friday") {
        setFri(item.day_rating);
      }
    });
  }

  useEffect(() => {
    getRatingData();
  }, []);

  return (
    <section>
      <div className="chartButtonContainer">
        <h1>Your current week</h1>
        <p>Click the day to retreive info</p>
        <div className="chartButtons">
          <ChartButton
            style={dayColors[mon - 1]}
            getDayData={getDayData}
            weekDay="monday"
          />
          <ChartButton
            style={dayColors[tues - 1]}
            getDayData={getDayData}
            weekDay="tuesday"
          />
          <ChartButton
            style={dayColors[wed - 1]}
            getDayData={getDayData}
            weekDay="wednesday"
          />
          <ChartButton
            style={dayColors[thurs - 1]}
            getDayData={getDayData}
            weekDay="thursday"
          />
          <ChartButton
            style={dayColors[fri - 1]}
            getDayData={getDayData}
            weekDay="friday"
          />
        </div>
        <h3>Click here for other weeks</h3>
      </div>
    </section>
  );
}

export default WeekChart;
