import React from "react";
import DaysTitle from "../DaysTitle";
import QuestionCard from "../QuestionCard";
import RatingsBar from "../RatingsBar";
import SubmitButton from "../SubmitButton";
import { useState } from "react";

function FeedbackForm() {
  const [title, setTitle] = useState("");
  const [dayrating, setDayRating] = useState(5);

  function handleTitle(e) {
    setTitle(e);
    console.log(`Page title: ${title}`);
  }

  function handleDayRating(e) {
    setDayRating(e);
    console.log(`Day rating: ${dayrating}`);
  }

  return (
    <div>
      <DaysTitle handleTitle={(e) => handleTitle(e.target.value)} />
      <RatingsBar handleDayRating={(e) => handleDayRating(e.target.value)} />
      <QuestionCard />
      <QuestionCard />
      <RatingsBar />
      <SubmitButton />
    </div>
  );
}

export default FeedbackForm;
