import React from "react";

function SubmitButton({ handleSubmit }) {
  return (
    <div>
      <button className="submit-btn" type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}

export default SubmitButton;
