import React from "react";
import dataBootcamper from "../../dashboardData";
import {useState} from "react"



 

function DayDisplay({dayOfTheWeek}) {


  return (
    <div>
      <button>Back</button>
      <p>{{dayOfTheWeek}}</p>
      <h3>{dataBootcamper[0].day_title}</h3>
      <p>{dataBootcamper[0].day_rating}</p>
      <p>{dataBootcamper[0].feedback}</p>
      <p> {dataBootcamper[0].reflection}</p>
      <p>{dataBootcamper[0].emotion}</p>
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
