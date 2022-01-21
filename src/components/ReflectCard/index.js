import React from "react";

function ReflectCard({ handleReflect, handleClick, reflectState }) {
  return (
    <div className="container">
    <div className="reflect-card">
      <p>Reflect on your experience today:</p>
      <form id="input-form" className="flexContainer">
        <input
          value={reflectState}
          onChange={handleReflect}
          type="text"
          id="input-field"
          placeholder="Select from below and / or type here..."
          autoFocus
          autoComplete="off"
        />
      </form>
      <div id="response-btn">
        <button onClick={handleClick} id="response-1" class="pos-btn">
          Worked well with my team
        </button>
        <button onClick={handleClick} id="response-2" class="pos-btn">
          Learnt something new:
        </button>
        <button onClick={handleClick} id="response-3" class="pos-btn">
          Gained a better understanding of:
        </button>
        <button onClick={handleClick} id="response-4" class="pos-btn">
          Solved a difficult problem
        </button>
        <button onClick={handleClick} id="response-5" class="neg-btn">
          Had a hard time keeping up
        </button>
        <button onClick={handleClick} id="response-6" class="neg-btn">
          Didn't understand the topic
        </button>
        <button onClick={handleClick} id="response-7" class="neg-btn">
          Had a hard time contributing to the team
        </button>
        <button onClick={handleClick} id="response-8" class="neg-btn">
          Missed time due to:
        </button>
      </div>
    </div>
    </div>
  );
}

export default ReflectCard;
