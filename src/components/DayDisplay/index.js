import React from "react";

function DayDisplay({ day }) {
  return (
    <div className="container">
      <p>{day.day}</p>
      <h3>{day.day_title}</h3>
      <p>Day Rating: {day.day_rating}</p>
      <p>Emotion: {day.emotion}</p>
      <p>Reflection: {day.reflection}</p>
      <p>Feedback: {day.feedback}</p>
      <p>Notes: {day.notes}</p>
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
