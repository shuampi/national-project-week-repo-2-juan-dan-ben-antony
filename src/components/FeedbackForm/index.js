import React, { useEffect } from "react";
import DaysTitle from "../DaysTitle";
import ReflectCard from "../ReflectCard";
import FeedbackCard from "../FeedbackCard";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import MoodBar from "../MoodBar";
import DayBar from "../DayBar";
import { Routes, Route, Link } from "react-router-dom";

function FeedbackForm() {
  const [title, setTitle] = useState();
  const [dayrating, setDayRating] = useState(5);
  const [submit, setSubmit] = useState(false);
  const [feedback, setFeedback] = useState();
  const [reflect, setReflect] = useState();
  const [mood, setMood] = useState(5);
  const [tag, setTag] = useState("");

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
    if (title && reflect && feedback) {
      setSubmit(!submit);
    } else {
      alert("Form not completed"); // replace alert with react function?
    }
    console.log(submit);
  }

  function handleFeedback(e) {
    setFeedback(e);
    console.log(`Feedback: ${feedback}`);
  }

  function handleReflect(e) {
    setReflect(e);
    console.log(`Reflection: ${reflect}`);
  }

  function handleMood(e) {
    setMood(e);
    console.log(`Mood: ${mood}`);
  }

  function handleClick(e) {
    const buttonText = e.target.innerHTML;
    console.log(buttonText);
    setTag(buttonText);
    console.log(tag);
    // define a variable that contains the inner text of the button
    // const inputValue = document.getElementById("final_span");
    // const buttonText = e.target.innerHTML;
    // console.log(buttonText);
    // let inputValueText = inputValue.value;
    // inputValueText = inputValueText + buttonText;
    // text value = input.value
    //let inputValue =
    //input.value = input.value + variable
    //inputValue = inputValue + buttonText
    // hand this function into onClick
  }

  function handleTag(e) {
    return "Data in the input box";
  }

  const formPost = {
    bc_name: "Boot Camperson",
    day_title: title,
    day_rating: dayrating,
    feedback: feedback,
    reflection: reflect,
    emotion: mood,
  };

  const loadData = async () => {
    const response = await fetch("https://campfire-project.herokuapp.com/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPost),
    });
    const data = await response.json();
    console.log(data);
    console.log(formPost);
  };

  useEffect(() => {
    if (title && reflect && feedback) {
      loadData();
    }
  }, [submit]);

  return (
    <main>
      <nav>
        <Link to="/form">Feedback Form</Link>
      </nav>
      <DaysTitle handleTitle={(e) => handleTitle(e.target.value)} />
      <DayBar handleDayRating={(e) => handleDayRating(e.target.value)} />
      <FeedbackCard
        handleTag={(e) => {
          handleTag(e.target.value);
        }}
        handleClick={handleClick}
        handleFeedback={(e) => handleFeedback(e.target.value)}
      />
      <ReflectCard handleReflect={(e) => handleReflect(e.target.value)} />
      <MoodBar handleMood={(e) => handleMood(e.target.value)} />
      <SubmitButton handleSubmit={(e) => handleSubmit(e)} />
    </main>
  );
}

export default FeedbackForm;
