import React from "react";

function SubmitButton({ handleSubmit }) {
  return (
    <div className="submit-btn">
      <button type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
}

export default SubmitButton;
