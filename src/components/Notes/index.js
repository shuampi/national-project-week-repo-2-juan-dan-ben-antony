import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Notes({
  handleNotes,
  transcript,
  listening,
  resetTranscript,
  browserSupportsSpeechRecognition,
}) {
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container">
      <p>Hold record to transcribe any extra thoughts or notes you may have:</p>
      <input
        size="150"
        value={transcript}
        placeholder={`Hold "Record" and speak into your mic to transcribe.`}
      />
      <button
        type="button"
        onMouseDown={SpeechRecognition.startListening}
        onMouseUp={SpeechRecognition.stopListening}
        onClick={handleNotes}
      >
        Record
      </button>
      <button className="reset-button" type="button" onClick={resetTranscript}>
        Reset
      </button>
      <p>Microphone: {listening ? "on" : "off"}</p>
    </div>
  );
}
export default Notes;
