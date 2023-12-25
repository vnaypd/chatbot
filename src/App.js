// src/components/Chatbot.js
import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

const Chatbot = () => {
  const [isRecording, setIsRecording] = useState(false);
  // eslint-disable-next-line
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const handleStartRecording = () => {
    setIsRecording(true);
    SpeechRecognition.startListening();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    SpeechRecognition.stopListening();
  };

  const handleClearTranscript = () => {
    resetTranscript();
  };

  return (

    <div className="chatbot-container">
    
      <div className="chat-header">
        <h1>Speech Recognition Chat</h1>
      </div>

      <div className="chat-content">

        <div className="chat-messages">
          <div className="message">
            <div className="message-text">Hello! How can I help you today?</div>
          </div>
          <div className="message">
            <div className="message-text">{transcript}</div>
          </div>
        </div>

        <div className="audio-controls">
          <button onClick={handleStartRecording} disabled={isRecording}>
            🎙️ Start Recording
          </button>
          <button onClick={handleStopRecording} disabled={!isRecording}>
            🛑 Stop Recording
          </button>
          <button onClick={handleClearTranscript}>Clear Transcript</button>
        </div>

      </div>

    </div>
  );
};

export default Chatbot;