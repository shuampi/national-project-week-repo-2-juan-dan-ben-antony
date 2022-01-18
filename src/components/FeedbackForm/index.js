import React, { useEffect } from "react";
import DaysTitle from "../DaysTitle";
import QuestionCard from "../QuestionCard";

import SubmitButton from "../SubmitButton";
import { useState } from "react";
import MoodBar from "../MoodBar";
import DayBar from "../DayBar";

function FeedbackForm() {
  const [title, setTitle] = useState("");
  const [dayrating, setDayRating] = useState(5);
  const [submit, setSubmit] = useState(false);

  function handleTitle(e) {
    setTitle(e);
    console.log(`Page title: ${title}`);
  }

  function handleDayRating(e) {
    setDayRating(e);
    console.log(`Day rating: ${dayrating}`);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(!submit);
    console.log(submit);
  }

  const loadData = async () => {
    const response = await fetch("https://campfire-project.herokuapp.com/all");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    loadData();
  }, [submit]);

  return (
    <main>
      <DaysTitle handleTitle={(e) => handleTitle(e.target.value)} />
      <DayBar handleDayRating={(e) => handleDayRating(e.target.value)} />
      <QuestionCard />
      <QuestionCard />
      <MoodBar />
      <SubmitButton handleSubmit={(e) => handleSubmit(e)} />
    </main>
  );
}

export default FeedbackForm;
