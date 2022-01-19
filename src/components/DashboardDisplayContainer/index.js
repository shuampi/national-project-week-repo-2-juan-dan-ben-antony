import React from "react";
import WeekChart from "../WeekChart";
import WeekSearch from "../WeekSearch";
import DayDisplay from "../DayDisplay";

function DashboardDisplayContainer() {
  return (
    <section>
      <WeekChart />
      <WeekSearch />
      <DayDisplay />
    </section>
  );
}

// note that the above is not final, it was just to check they are working

export default DashboardDisplayContainer;

// we need to have this so it will show the needed componet on demand and hide the others
// i think the link below give an example of how to do it
// https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components
