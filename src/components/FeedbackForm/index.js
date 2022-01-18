import React from "react";
import DaysTitle from "../DaysTitle";
import QuestionCard from "../QuestionCard";

import SubmitButton from "../SubmitButton";
import { useState } from "react";
import MoodBar from "../MoodBar";
import DayBar from "../DayBar";

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
    <main>
      <DaysTitle handleTitle={(e) => handleTitle(e.target.value)} />
      <DayBar handleDayRating={(e) => handleDayRating(e.target.value)} />
      <QuestionCard />
      <QuestionCard />
      <MoodBar />
      <SubmitButton />
    </main>
  );
}

export default FeedbackForm;
