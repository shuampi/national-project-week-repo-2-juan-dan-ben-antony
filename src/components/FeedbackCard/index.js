import React from "react";

function FeedbackCard({ handleFeedback, handleClick, feedbackState }) {
  return (
    <div className="main-content">
      <p>What went well / not so well today and why?</p>
      <form id="input-form" className="flexContainer">
        <div id="results">
          <input
            placeholder="Select from below and / or type here..."
            value={feedbackState}
            onChange={handleFeedback}
            className="final"
            id="final_span"
          />
          <span className="interim" id="interim_span"></span>
        </div>
      </form>
      <div id="response-btn">
        <button onClick={handleClick} id="response-1" class="pos-btn">
          Easy to follow lesson.
        </button>
        <button onClick={handleClick} id="response-2" class="pos-btn">
          Exciting energiser!
        </button>
        <button onClick={handleClick} id="response-3" class="pos-btn">
          Coaches provided good support
        </button>
        <button onClick={handleClick} id="response-4" class="pos-btn">
          Workshop was clear and well structured
        </button>
        <button onClick={handleClick} id="response-5" class="neg-btn">
          Difficulty tracking down a coach
        </button>
        <button onClick={handleClick} id="response-6" class="neg-btn">
          Lesson was difficult to follow
        </button>
        <button onClick={handleClick} id="response-7" class="neg-btn">
          Problems with setting up:{" "}
        </button>
        <button onClick={handleClick} id="response-8" class="neg-btn">
          Had some questions I couldn't get answered
        </button>
      </div>
    </div>
  );
}

export default FeedbackCard;
