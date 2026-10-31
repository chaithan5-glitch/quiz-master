import { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import "./App.css";

// Screens: "home" | "quiz" | "results"
export default function App() {
  const [screen, setScreen] = useState("home");
  const [config, setConfig] = useState(null);  // quiz settings
  const [result, setResult] = useState(null);  // quiz outcome

  const handleStart = (quizConfig) => {
    setConfig(quizConfig);
    setScreen("quiz");
  };

  const handleFinish = (quizResult) => {
    setResult(quizResult);
    setScreen("results");
  };

  const handleExit = () => {
    setScreen("home");
  };

  const handleHome = () => {
    setConfig(null);
    setResult(null);
    setScreen("home");
  };

  const handleReplay = () => {
    // Restart with same config
    setResult(null);
    setScreen("quiz");
  };

  return (
    <div className="app">
      {screen === "home" && (
        <Home onStart={handleStart} />
      )}
      {screen === "quiz" && config && (
        <Quiz
          config={config}
          onFinish={handleFinish}
          onExit={handleExit}
        />
      )}
      {screen === "results" && config && result && (
        <Results
          config={config}
          result={result}
          onHome={handleHome}
          onReplay={handleReplay}
        />
      )}
    </div>
  );
}
// test
