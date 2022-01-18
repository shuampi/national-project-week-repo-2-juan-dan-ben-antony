import React from "react";

function SubmitButton({ handleSubmit }) {
  return (
    <div className="submit-btn">
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default SubmitButton;
