import React, { useEffect } from "react";
import DaysTitle from "../DaysTitle";
import ReflectCard from "../ReflectCard";
import FeedbackCard from "../FeedbackCard";
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
    setSubmit(!submit);
    console.log(submit);
  }

  //Below - code structure for posting to database

  // const testob = {
  //   bc_name: "Mike Smith",
  //   day_title: "React and Postgres",
  //   day_rating: 3,
  //   feedback: "Had a jolly old time",
  //   reflection: "Looks good",
  //   emotion: 5,
  // };

  // const loadData = async () => {
  //   const response = await fetch("https://campfire-project.herokuapp.com/all", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(testob),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   loadData();
  // }, [submit]);

  return (
    <main>
      <DaysTitle handleTitle={(e) => handleTitle(e.target.value)} />
      <DayBar handleDayRating={(e) => handleDayRating(e.target.value)} />
      <FeedbackCard />
      <ReflectCard />
      <MoodBar />
      <SubmitButton handleSubmit={(e) => handleSubmit(e)} />
    </main>
  );
}

export default FeedbackForm;
