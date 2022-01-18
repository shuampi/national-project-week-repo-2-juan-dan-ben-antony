import React from "react";

function QuestionCard() {
  return (
    <div className="question-card">
      <p>What went well and why?</p>
      <form id="input-form" className="flexContainer">
        <input
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
        <button id="response-1">blah blah blah blah 1</button>
        <button id="response-2">blah blah blah blah 2</button>
        <button id="response-3">blah blah blah blah 3</button>
        <button id="response-4">blah blah blah blah 4</button>
        <button id="response-5">blah blah blah blah 5</button>
        <button id="response-6">blah blah blah blah 6</button>
      </div>
    </div>
  );
}

export default QuestionCard;
