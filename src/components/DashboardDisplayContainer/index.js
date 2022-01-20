import React from "react";
import WeekChart from "../WeekChart";
import WeekSearch from "../WeekSearch";
import DayDisplay from "../DayDisplay";
import { useState } from "react";

function DashboardDisplayContainer() {
  const [day, setDay] = useState("");

  async function getDayData(weekDay) {
    const response = await fetch("https://campfire-project.herokuapp.com/all");
    const data = await response.json();

    data.payload.map((item, index) => {
      if (item.day === weekDay) {
        setDay(item);
      }
    });
  }
  return (
    <section>
      <WeekChart getDayData={getDayData} />
      <WeekSearch />
      <DayDisplay day={day} />
    </section>
  );
}

// note that the above is not final, it was just to check they are working

export default DashboardDisplayContainer;

// we need to have this so it will show the needed componet on demand and hide the others
// i think the link below give an example of how to do it
// https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components
