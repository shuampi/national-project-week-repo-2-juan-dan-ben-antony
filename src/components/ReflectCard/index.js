import React from "react";

function ReflectCard({ handleReflect, handleClick }) {
  return (
    <div className="reflect-card">
      <p>Reflect on your experience today:</p>
      <form id="input-form" className="flexContainer">
        <input
          onChange={handleReflect}
          type="text"
          id="input-field"
          placeholder="Select from below, type or hold down mic to speak"
          autoFocus
          autoComplete="off"
        />
        <button type="button" id="mic-btn">
          <i className="fas fa-microphone"></i>
        </button>
      </form>
      <div id="response-btn">
        <button
          onClick={handleClick}
          style={{ backgroundColor: "green" }}
          id="response-1"
        >
          Worked well with my team
        </button>
        <button style={{ backgroundColor: "green" }} id="response-2">
          Learnt something new:
        </button>
        <button style={{ backgroundColor: "green" }} id="response-3">
          Gained a better understanding of:
        </button>
        <button style={{ backgroundColor: "green" }} id="response-4">
          Solved a difficult problem
        </button>
        <button style={{ backgroundColor: "red" }} id="response-5">
          Had a hard time keeping up
        </button>
        <button style={{ backgroundColor: "red" }} id="response-6">
          Didn't understand the topic
        </button>
        <button style={{ backgroundColor: "red" }} id="response-7">
          Had a hard time contributing to the team
        </button>
        <button style={{ backgroundColor: "red" }} id="response-8">
          Missed time due to:
        </button>
      </div>
    </div>
  );
}

export default ReflectCard;
