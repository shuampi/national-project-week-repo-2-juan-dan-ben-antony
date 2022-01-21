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
          <button onClick={handleClick} id="response-1" className="pos-btn">
            Worked well with my team
          </button>
          <button onClick={handleClick} id="response-2" className="pos-btn">
            Learnt something new:
          </button>
          <button onClick={handleClick} id="response-3" className="pos-btn">
            Gained a better understanding of:
          </button>
          <button onClick={handleClick} id="response-4" className="pos-btn">
            Solved a difficult problem
          </button>
          <button onClick={handleClick} id="response-5" className="neg-btn">
            Had a hard time keeping up
          </button>
          <button onClick={handleClick} id="response-6" className="neg-btn">
            Didn't understand the topic
          </button>
          <button onClick={handleClick} id="response-7" className="neg-btn">
            Had a hard time contributing to the team
          </button>
          <button onClick={handleClick} id="response-8" className="neg-btn">
            Missed time due to:
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReflectCard;
