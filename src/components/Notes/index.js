import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Notes({ handleNotes }) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Hit record to transcribe any extra thoughts or note you may have:</p>
      <input
        size="150"
        value={transcript}
        placeholder="Press and hold Rec to record"
        onChange={handleNotes}
      />
      <button
        type="button"
        onMouseDown={SpeechRecognition.startListening}
        onMouseUp={SpeechRecognition.stopListening}
      >
        Rec
      </button>
      {/* <button type="button" onClick={resetTranscript}>
        Reset
      </button> */}
      <p>Microphone: {listening ? "on" : "off"}</p>
    </div>
  );
}
export default Notes;
