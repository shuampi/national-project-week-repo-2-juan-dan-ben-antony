import React from "react";
import DaysTitle from "../DaysTitle";
import QuestionCard from "../QuestionCard";
import RatingsBar from "../RatingsBar";
import SubmitButton from "../SubmitButton";

function FeedbackForm() {
  return (
    <div>
      <DaysTitle />
      <RatingsBar />
      <QuestionCard />
      <QuestionCard />
      <RatingsBar />
      <SubmitButton />
    </div>
  );
}

export default FeedbackForm;
