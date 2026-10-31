import { useEffect, useState } from "react";
import DATA from "../data/questions";
import "./Results.css";

function getLB() { try { return JSON.parse(localStorage.getItem("qm_lb") || "[]"); } catch { return []; } }
function saveLB(lb) { try { localStorage.setItem("qm_lb", JSON.stringify(lb)); } catch {} }

function Confetti() {
  const colors = ["#a78bfa","#60a5fa","#34d399","#f59e0b","#f87171","#ec4899"];
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: 6 + Math.random() * 6,
    duration: 2 + Math.random() * 2,
    delay: Math.random() * 0.5,
  }));
  return (
    <div className="confetti-wrap">
      {pieces.map((p) => (
        <div key={p.id} className="confetti-piece" style={{
          left: `${p.left}vw`, background: p.color,
          width: p.size, height: p.size,
          animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s`,
        }} />
      ))}
    </div>
  );
}

export default function Results({ config, result, onHome, onReplay }) {
  const { playerName, selectedCat, difficulty } = config;
  const { score, bestStreak, bonusPoints, totalTime, answers } = result;

  const [showReview, setShowReview] = useState(false);
  const [lb, setLb] = useState([]);
  const [myPos, setMyPos] = useState(-1);
  const [isNewBest, setIsNewBest] = useState(false);

  const total = answers.length;
  const correct = answers.filter((a) => a.wasCorrect).length;
  const pct = Math.round((correct / total) * 100);
  const maxPts = total * { easy: 1, medium: 2, hard: 3 }[difficulty];
  const ringOffset = 346 * (1 - Math.min(score / Math.max(maxPts + 5, 1), 1));
  const ringColor = pct >= 70 ? "#10b981" : pct >= 50 ? "#f59e0b" : "#ef4444";

  const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎯" : pct >= 50 ? "📚" : "💪";
  const title = pct >= 90 ? "Outstanding!" : pct >= 70 ? "Great job!" : pct >= 50 ? "Good effort!" : "Keep practicing!";

  useEffect(() => {
    let updatedLB = getLB();
    updatedLB.push({ name: playerName, score, cat: selectedCat, diff: difficulty, date: new Date().toLocaleDateString() });
    updatedLB.sort((a, b) => b.score - a.score);
    updatedLB = updatedLB.slice(0, 10);
    saveLB(updatedLB);
    const pos = updatedLB.findIndex((e) => e.name === playerName && e.score === score);
    setLb(updatedLB);
    setMyPos(pos);
    setIsNewBest(pos === 0);
  }, []); // eslint-disable-line

  return (
    <div className="results-screen">
      {isNewBest && <Confetti />}
      <div className="results-wrap">

        {/* Hero */}
        <div className="res-hero">
          <span className="res-emoji">{emoji}</span>
          <h2 className="res-title">{title}</h2>
          <p className="res-sub">{DATA[selectedCat].name} · {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} · {playerName}</p>
        </div>

        {/* Score ring */}
        <div className="score-ring-wrap">
          <svg width="140" height="140" viewBox="0 0 140 140" style={{ transform: "rotate(-90deg)" }}>
            <circle className="ring-bg" cx="70" cy="70" r="55" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="8" />
            <circle cx="70" cy="70" r="55" fill="none" stroke={ringColor} strokeWidth="8"
              strokeLinecap="round" strokeDasharray="346"
              strokeDashoffset={ringOffset}
              style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(.4,0,.2,1) .3s" }}
            />
          </svg>
          <div className="score-center">
            <div className="score-num">{score}</div>
            <div className="score-den">pts</div>
            {isNewBest && <div className="new-best">🏆 New Best!</div>}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-box"><div className="stat-val" style={{ color: "#a78bfa" }}>{pct}%</div><div className="stat-lbl">Accuracy</div></div>
          <div className="stat-box"><div className="stat-val" style={{ color: "#60a5fa" }}>{Math.round(totalTime / Math.max(total, 1))}s</div><div className="stat-lbl">Avg Time</div></div>
          <div className="stat-box"><div className="stat-val" style={{ color: "#f59e0b" }}>{bestStreak}</div><div className="stat-lbl">Best Streak</div></div>
          <div className="stat-box"><div className="stat-val" style={{ color: "#34d399" }}>+{bonusPoints}</div><div className="stat-lbl">Streak Bonus</div></div>
        </div>

        {/* Leaderboard */}
        <div className="leaderboard">
          <p className="lb-title">🏅 Leaderboard</p>
          {lb.slice(0, 5).map((e, i) => (
            <div key={i} className={`lb-row ${i === myPos && e.name === playerName ? "highlight" : ""}`}>
              <div className={`lb-rank ${i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : ""}`}>
                {["🥇","🥈","🥉"][i] || i + 1}
              </div>
              <div className="lb-name">{e.name}</div>
              <div className="lb-meta">{e.cat}·{e.diff}</div>
              <div className="lb-score">{e.score}pts</div>
            </div>
          ))}
        </div>

        {/* Answer review */}
        <div className="review-section">
          <button className="review-toggle" onClick={() => setShowReview(!showReview)}>
            {showReview ? "📋 Hide Answer Review" : "📋 Show Answer Review"}
          </button>
          {showReview && (
            <div className="review-list">
              {answers.map((a, i) => (
                <div key={i} className="review-item">
                  <div className="ri-q">Q{i + 1}. {a.q}</div>
                  <div className="ri-tags">
                    {a.skipped
                      ? <span className="ri-tag ri-n">Skipped</span>
                      : a.chosen >= 0
                        ? <span className={`ri-tag ${a.wasCorrect ? "ri-y" : "ri-n"}`}>{a.wasCorrect ? "✓" : "✗"} {a.opts[a.chosen]}</span>
                        : <span className="ri-tag ri-n">⏰ Timed out</span>
                    }
                    {!a.wasCorrect && !a.skipped && a.chosen !== -1 &&
                      <span className="ri-tag ri-a">Correct: {a.opts[a.correct]}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="action-row">
          <button className="action-btn" onClick={onHome}>🏠 Home</button>
          <button className="action-btn primary-btn" onClick={onReplay}>🔄 Play Again</button>
        </div>
      </div>
    </div>
  );
}
