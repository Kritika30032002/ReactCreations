import React, { useState, useEffect, useRef } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Button } from "antd"; // Import Button from Ant Design
import "./App.css";

function NotificationCard({ message, onClose }) {
  return (
    <div className="notify-message notification-card">
      <p>{message}</p>
    </div>
  );
}

function App() {
  const [text, setText] = useState("");
  const [notification, setNotification] = useState(null);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const textRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const commands = [
    {
      command: ["clear", "clear text"],
      callback: () => clearText(),
    },
    {
      command: ["uppercase", "convert to uppercase"],
      callback: () => convertToUppercase(),
    },
    {
      command: ["lowercase", "convert to lowercase"],
      callback: () => convertToLowercase(),
    },
    {
      command: ["copy text", "copy"],
      callback: () => copyText(),
    },
    {
      command: ["read text", "read"],
      callback: () => readText(),
    },
    {
      command:["Remove extra spaces","extra spaces"],
      callback:() =>removeExtraSpaces(),
    }
  ];

  useEffect(() => {
    if (transcript) {
      handleVoiceCommand(transcript);
      resetTranscript();
    }
  }, [transcript, resetTranscript]);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    updateWordCount(newText);
  };

  const updateWordCount = (newText) => {
    const words = newText.trim().split(/\s+/);
    const wordCount = words.length > 0 ? words.length : 0;
    setWordCount(wordCount);
  };
  const removeExtraSpaces = () => {
    const cleanedText = text.replace(/\s+/g, " ").trim();
    setText(cleanedText);
    updateWordCount(cleanedText);
    showNotification("Extra spaces removed");
  };

  const [wordCount, setWordCount] = useState(0);

  const convertToUppercase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
    showNotification("Text converted to Uppercase");
    updateWordCount(uppercaseText);
  };

  const convertToLowercase = () => {
    const lowercaseText = text.toLowerCase();
    setText(lowercaseText);
    showNotification("Text converted to Lowercase");
    updateWordCount(lowercaseText);
  };

  const clearText = () => {
    setText("");
    showNotification("Text cleared");
    updateWordCount("");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    showNotification("Text copied to clipboard");
  };

  const readText = () => {
    speakText(text);
    showNotification("Text read aloud");
  };

  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const handleVoiceCommand = (command) => {
    const normalizedCommand = command.toLowerCase();

    const matchedCommand = commands.find(({ command }) =>
      command.some((c) => normalizedCommand.includes(c))
    );

    if (matchedCommand) {
      matchedCommand.callback();
    } else {
      const lowerCaseCommand = normalizedCommand.toLowerCase();
      if (lowerCaseCommand.includes("uppercase")) {
        convertToUppercase();
      } else if (lowerCaseCommand.includes("lowercase")) {
        convertToLowercase();
      } else {
        setText(command);
        showNotification("Text set from voice command");
        updateWordCount(command);
      }
    }
  };


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.body;
    body.classList.toggle("dark-mode");
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="main-content">
        <div className="notification-container">
          {notification && (
            <NotificationCard
              message={notification}
              onClose={() => setNotification(null)}
            />
          )}
        </div>

        <div className="center-container ">
          <h1 class="title">TexT EdItOr WeBsIte</h1>
          <textarea
            ref={textRef}
            placeholder=""
            value={text}
            onChange={handleChange}
            style={{
              width: "96%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "1px",
              resize: "vertical",
            }}
          ></textarea>

          <div className="word-count-preview">
            <p>Word Count: {wordCount}</p>
          </div>

          <div className="controls">
            <Button type="primary" onClick={convertToUppercase}>
              Uppercase
            </Button>
            <Button type="primary" onClick={convertToLowercase}>
              Lowercase
            </Button>
            <Button type="primary" onClick={clearText}>
              Clear Text
            </Button>
            <Button type="primary" onClick={copyText}>
              Copy Text
            </Button>
            <Button type="primary" onClick={() => readText(text)}>
              Read Text
            </Button>
            <Button type="primary" onClick={removeExtraSpaces}>
              Remove Extra Spaces
            </Button>
            <Button type="primary" onClick={startListening}>
              Start Voice Command
            </Button>
            <Button type="primary" onClick={stopListening}>
              Stop Voice Command
            </Button>
            <Button
              type="primary"
              onClick={toggleDarkMode}
              className="toggle-button dark"
            >
              {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Button>
            <div class="preview preview-container">
              <h2>Preview</h2>
              <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
