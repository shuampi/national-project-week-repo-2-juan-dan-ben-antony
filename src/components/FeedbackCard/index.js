import React from "react";

// function handleSpeech() {
//   startButton();
//   console.log("speech button");
// }

function FeedbackCard({ handleFeedback, handleClick, feedbackState }) {
  return (
    <div className="feedback-card">
      <p>What went well / not so well today and why?</p>
      <form id="input-form" className="flexContainer">
        <div id="results">
          <input
            size="150"
            value={feedbackState}
            onChange={handleFeedback}
            className="final"
            id="final_span"
          />
          <span className="interim" id="interim_span"></span>
        </div>
        <button type="button" id="mic-btn">
          <i className="fas fa-microphone"></i>
        </button>
      </form>
      <div id="response-btn">
        <button onClick={handleClick} id="response-1">
          Easy to follow lesson.
        </button>
        <button onClick={handleClick} id="response-2">
          Exciting energiser!
        </button>
        <button onClick={handleClick} id="response-3">
          Coaches provided good support
        </button>
        <button onClick={handleClick} id="response-4">
          Workshop was clear and well structured
        </button>
        <button onClick={handleClick} id="response-5">
          Difficulty tracking down a coach
        </button>
        <button onClick={handleClick} id="response-6">
          Lesson was difficult to follow
        </button>
        <button onClick={handleClick} id="response-7">
          Problems with setting up:{" "}
        </button>
        <button onClick={handleClick} id="response-8">
          Had some questions I couldn't get answered
        </button>
      </div>
    </div>
  );
}

// let final_transcript = "";
// let recognizing = false;

// const start_button = document.getElementById("mic-btn");
// const final_span = document.getElementById("final_span");
// const interim_span = document.getElementById("interim_span");

// //start_button.style.display = "inline-block";

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.continuous = true;
// recognition.interimResults = true;

// recognition.onstart = function () {
//   recognizing = true;
// };

// recognition.onresult = function (event) {
//   let interim_transcript = "";

//   for (let i = event.resultIndex; i < event.results.length; ++i) {
//     if (event.results[i].isFinal) {
//       final_transcript += event.results[i][0].transcript;
//     } else {
//       interim_transcript += event.results[i][0].transcript;
//     }
//   }
//   final_transcript = capitalize(final_transcript);

//   //final_span.value = linebreak(interim_transcript);
//   final_span.value = linebreak(final_transcript);
//   interim_span.innerHTML = linebreak(interim_transcript);
//   console.log(linebreak(final_transcript));
// };

// let two_line = /\n\n/g;
// let one_line = /\n/g;
// function linebreak(s) {
//   return s.replace(two_line, "<p></p>").replace(one_line, "<br>");
// }

// let first_char = /\S/;
// function capitalize(s) {
//   return s.replace(first_char, function (m) {
//     return m.toUpperCase();
//   });
// }

// function startButton(event) {
//   if (recognizing) {
//     recognition.stop();
//     return;
//   }
//   final_transcript = "";
//   recognition.start();

//   //final_span.innerHTML = "";
//   interim_span.innerHTML = "";
// }

export default FeedbackCard;

// <input
//           onChange={handleFeedback}
//           type="text"
//           id="input-field"
//           placeholder="Select from below, type or hold down mic to speak"
//           autoFocus
//           autoComplete="off"
//         />
