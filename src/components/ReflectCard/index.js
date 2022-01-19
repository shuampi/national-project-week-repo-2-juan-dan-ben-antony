import React from "react";

function ReflectCard({ handleReflect, handleClick, reflectState }) {
  return (
    <div className="reflect-card">
      <p>Reflect on your experience today:</p>
      <form id="input-form" className="flexContainer">
        <input
          size="150"
          value={reflectState}
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
        <button onClick={handleClick} id="response-1">
          Worked well with my team
        </button>
        <button onClick={handleClick} id="response-2">
          Learnt something new:
        </button>
        <button onClick={handleClick} id="response-3">
          Gained a better understanding of:
        </button>
        <button onClick={handleClick} id="response-4">
          Solved a difficult problem
        </button>
        <button onClick={handleClick} id="response-5">
          Had a hard time keeping up
        </button>
        <button onClick={handleClick} id="response-6">
          Didn't understand the topic
        </button>
        <button onClick={handleClick} id="response-7">
          Had a hard time contributing to the team
        </button>
        <button onClick={handleClick} id="response-8">
          Missed time due to:
        </button>
      </div>
    </div>
  );
}

export default ReflectCard;
