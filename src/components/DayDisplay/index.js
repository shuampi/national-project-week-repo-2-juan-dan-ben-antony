import React from "react";




function DayDisplay({day}) {
  return (
    <div>
      <button>Back</button>
      <p>DAY OF WEEK</p>
      <h3>{day.day_title}</h3>
      <p>{day.day_rating}</p>
      <p>{}</p>
      <p>REFLECTION</p>
      <p>{day.emotion}</p>
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
