import { useState } from "react";
import DATA from "../data/questions";
import "./Home.css";

export default function Home({ onStart }) {
  const [playerName, setPlayerName] = useState("");
  const [selectedCat, setSelectedCat] = useState(null);
  const [difficulty, setDifficulty] = useState("easy");
  const [use5050, setUse5050] = useState(true);
  const [useSkip, setUseSkip] = useState(true);
  const [useSound, setUseSound] = useState(true);

  const canStart = playerName.trim() && selectedCat;

  const handleStart = () => {
    if (!canStart) return;
    onStart({
      playerName: playerName.trim(),
      selectedCat,
      difficulty,
      use5050,
      useSkip,
      useSound,
      questions: DATA[selectedCat].questions[difficulty],
    });
  };

  const lb = (() => {
    try { return JSON.parse(localStorage.getItem("qm_lb") || "[]"); }
    catch { return []; }
  })();

  return (
    <div className="home-screen">
      <div className="home-inner">
        {/* Brand */}
        <div className="brand">
          <span className="brand-icon">🧠</span>
          <h1>QuizMaster</h1>
          <p>Challenge yourself across 6 categories</p>
        </div>

        {/* Name Input */}
        <div className="field-group">
          <label className="field-label">Your Name</label>
          <input
            className="name-input"
            type="text"
            placeholder="Enter your name..."
            maxLength={20}
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>

        {/* Categories */}
        <p className="section-label">Choose a Category</p>
        <div className="cat-grid">
          {Object.entries(DATA).map(([key, cat]) => (
            <div
              key={key}
              className={`cat-card cat-${key} ${selectedCat === key ? "selected" : ""}`}
              onClick={() => setSelectedCat(key)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-count">5 questions per level</div>
            </div>
          ))}
        </div>

        {/* Difficulty */}
        <p className="section-label">Difficulty</p>
        <div className="diff-row">
          {[
            { key: "easy", label: "🟢 Easy", sub: "30s · 1pt" },
            { key: "medium", label: "🟡 Medium", sub: "20s · 2pt" },
            { key: "hard", label: "🔴 Hard", sub: "12s · 3pt" },
          ].map((d) => (
            <button
              key={d.key}
              className={`diff-btn ${difficulty === d.key ? "selected" : ""}`}
              onClick={() => setDifficulty(d.key)}
            >
              {d.label}
              <span className="diff-sub">{d.sub}</span>
            </button>
          ))}
        </div>

        {/* Options */}
        <p className="section-label">Options</p>
        <div className="options-row">
          {[
            { label: "⚡ 50/50 Lifeline", state: use5050, toggle: setUse5050 },
            { label: "⏭ Skip Once", state: useSkip, toggle: setUseSkip },
            { label: "🔊 Sound FX", state: useSound, toggle: setUseSound },
          ].map((opt) => (
            <button
              key={opt.label}
              className={`option-toggle ${opt.state ? "on" : ""}`}
              onClick={() => opt.toggle(!opt.state)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Start */}
        <button className="start-btn" disabled={!canStart} onClick={handleStart}>
          {canStart
            ? `Start ${DATA[selectedCat].name} Quiz →`
            : "Enter name & choose category"}
        </button>

        {/* Leaderboard preview */}
        {lb.length > 0 && (
          <div className="hs-row">
            <span className="hs-pill">🥇 Best: <strong>{lb[0].name} — {lb[0].score}pts</strong></span>
            {lb[1] && <span className="hs-pill">🥈 <strong>{lb[1].name} — {lb[1].score}pts</strong></span>}
          </div>
        )}
      </div>
    </div>
  );
}
