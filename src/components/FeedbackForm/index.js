import React, { useEffect } from "react";
import DaysTitle from "../DaysTitle";
import ReflectCard from "../ReflectCard";
import FeedbackCard from "../FeedbackCard";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import MoodBar from "../MoodBar";
import DayBar from "../DayBar";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import Notes from "../Notes";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const emojiArray = ["😰", "😟", "😐", "🙂", "😃"];

function FeedbackForm() {
  const [title, setTitle] = useState();
  const [dayrating, setDayRating] = useState(5);
  const [submit, setSubmit] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [reflect, setReflect] = useState("");
  const [mood, setMood] = useState(5);
  const [notes, setNotes] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [day, setDay] = useState(3);
  const navigate = useNavigate();

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
    console.log(feedback);
    if (Array.isArray(feedback)) {
      let arrayText = feedback[0];
      setFeedback(arrayText);
      console.log(feedback);
    }
    if (title && reflect && feedback) {
      setSubmit(!submit);
    } else {
      alert("Form not completed"); // replace alert with react function?
    }
    console.log(submit);
  }

  function handleFeedback(e) {
    const spreadFeedback = [...feedback, e];
    setFeedback(spreadFeedback[spreadFeedback.length - 1]);
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

  function handleNotes() {
    setNotes(notes + "  " + transcript);
    console.log(`Notes: ${notes}`);
  }

  function clearNotes() {
    setNotes("");
  }

  function handleFeedClick(e) {
    const buttonText = e.target.innerHTML;
    setFeedback(feedback + " " + buttonText);
    console.log(feedback);
  }

  function handleReflectClick(e) {
    const buttonText = e.target.innerHTML;
    setReflect(reflect + " " + buttonText);
    console.log(reflect);
  }

  function handleDay() {
    setDay(day + 1);
    if (day === 4) {
      setDay(0);
    }
    console.log(day);
  }

  const formPost = {
    day: dayArray[day],
    bc_name: "Boot Camperson",
    day_title: title,
    day_rating: dayrating,
    feedback: feedback,
    reflection: reflect,
    emotion: mood,
    notes: notes,
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
      handleDay();
      loadData();
      navigate("/dashboard");
    }
  }, [submit]);

  return (
    <main className="main-content">
      <DaysTitle handleTitle={(e) => handleTitle(e.target.value)} />
      <DayBar
        emoji={emojiArray[dayrating - 1]}
        handleDayRating={(e) => handleDayRating(e.target.value)}
      />
      <FeedbackCard
        handleFeedback={(e) => handleFeedback(e.target.value)}
        handleClick={(e) => {
          handleFeedClick(e);
        }}
        feedbackState={feedback}
      />
      <ReflectCard
        reflectState={reflect}
        handleClick={(e) => {
          handleReflectClick(e);
        }}
        handleReflect={(e) => handleReflect(e.target.value)}
      />
      <MoodBar
        emoji={emojiArray[mood - 1]}
        handleMood={(e) => handleMood(e.target.value)}
      />
      <Notes
        resetTranscript={clearNotes}
        handleNotes={handleNotes}
        transcript={notes}
        listening={listening}
        browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
      />
      <SubmitButton handleSubmit={(e) => handleSubmit(e)} />
    </main>
  );
}

export default FeedbackForm;
