import { useState, useEffect, useRef, useCallback } from "react";
import DATA from "../data/questions";
import "./Quiz.css";

const LETTERS = ["A", "B", "C", "D"];
const POINTS = { easy: 1, medium: 2, hard: 3 };
const TIME_LIMIT = { easy: 30, medium: 20, hard: 12 };

// ── Simple audio utility ──────────────────────────────────
const AC = window.AudioContext ? new (window.AudioContext)() : null;
function beep(freq, dur, vol = 0.15, type = "sine") {
  if (!AC) return;
  const o = AC.createOscillator(), g = AC.createGain();
  o.connect(g); g.connect(AC.destination);
  o.frequency.value = freq; o.type = type; g.gain.value = vol;
  o.start();
  g.gain.exponentialRampToValueAtTime(0.001, AC.currentTime + dur);
  o.stop(AC.currentTime + dur);
}
const sounds = {
  correct: () => { beep(520, 0.15); setTimeout(() => beep(660, 0.2), 100); },
  wrong:   () => beep(220, 0.3, 0.1, "sawtooth"),
  tick:    () => beep(800, 0.05, 0.08),
  exit:    () => beep(330, 0.2, 0.1, "triangle"),
  complete:() => [523,659,784,1047].forEach((f,i) => setTimeout(() => beep(f, 0.25), i*120)),
};

export default function Quiz({ config, onFinish, onExit }) {
  const { playerName, selectedCat, difficulty, use5050, useSkip, useSound, questions } = config;

  const [current, setCurrent]       = useState(0);
  const [score, setScore]           = useState(0);
  const [streak, setStreak]         = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);
  const [selected, setSelected]     = useState(null);
  const [answered, setAnswered]     = useState(false);
  const [hidden50, setHidden50]     = useState([]);
  const [used5050, setUsed5050]     = useState(false);
  const [usedSkip, setUsedSkip]     = useState(false);
  const [answers, setAnswers]       = useState([]);
  const [timeLeft, setTimeLeft]     = useState(TIME_LIMIT[difficulty]);
  const [totalTime, setTotalTime]   = useState(0);
  const [showExit, setShowExit]     = useState(false);

  const timerRef   = useRef(null);
  const maxTime    = TIME_LIMIT[difficulty];
  const q          = questions[current];
  const total      = questions.length;
  const play       = (key) => { if (useSound) sounds[key]?.(); };

  // ── Timer ────────────────────────────────────────────────
  const stopTimer = useCallback(() => clearInterval(timerRef.current), []);

  useEffect(() => {
    if (answered || showExit) return;
    if (timeLeft <= 0) { stopTimer(); handleSelect(-1); return; }
    if (timeLeft <= 5) play("tick");
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
      setTotalTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timeLeft, answered, showExit]); // eslint-disable-line

  // ── Answer selection ─────────────────────────────────────
  const handleSelect = (idx) => {
    stopTimer();
    if (answered) return;
    setSelected(idx);
    setAnswered(true);

    const correct = idx === q.ans;
    const pts = POINTS[difficulty];
    let newScore = score;
    let newStreak = streak;
    let newBonus = bonusPoints;

    if (correct) {
      newScore += pts;
      newStreak = streak + 1;
      if (newStreak > bestStreak) setBestStreak(newStreak);
      if (newStreak >= 3) {
        const bonus = Math.floor(newStreak / 3);
        newScore += bonus;
        newBonus += bonus;
      }
      play("correct");
    } else {
      newStreak = 0;
      if (idx >= 0) play("wrong");
    }

    setScore(newScore);
    setStreak(newStreak);
    setBonusPoints(newBonus);
    setAnswers((prev) => [...prev, { q: q.q, chosen: idx, correct: q.ans, opts: q.opts, wasCorrect: correct }]);
  };

  // ── Next question ─────────────────────────────────────────
  const handleNext = () => {
    if (current + 1 >= total) {
      play("complete");
      onFinish({ score, bestStreak, bonusPoints, totalTime, answers: [...answers] });
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
    setAnswered(false);
    setHidden50([]);
    setTimeLeft(maxTime);
  };

  // ── Skip ──────────────────────────────────────────────────
  const handleSkip = () => {
    if (usedSkip || answered) return;
    stopTimer();
    setUsedSkip(true);
    setStreak(0);
    play("exit");
    setAnswers((prev) => [...prev, { q: q.q, chosen: -2, correct: q.ans, opts: q.opts, wasCorrect: false, skipped: true }]);
    if (current + 1 >= total) {
      onFinish({ score, bestStreak, bonusPoints, totalTime, answers });
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
      setHidden50([]);
      setTimeLeft(maxTime);
    }
  };

  // ── 50/50 ─────────────────────────────────────────────────
  const handle5050 = () => {
    if (used5050 || answered) return;
    setUsed5050(true);
    const wrong = [0,1,2,3].filter((i) => i !== q.ans).sort(() => Math.random() - 0.5).slice(0, 2);
    setHidden50(wrong);
    beep(440, 0.1);
  };

  // ── Exit modal ────────────────────────────────────────────
  const openExit = () => { stopTimer(); play("exit"); setShowExit(true); };
  const closeExit = () => {
    setShowExit(false);
    if (!answered) {
      // Resume countdown
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => { if (t <= 1) { stopTimer(); handleSelect(-1); return 0; } return t - 1; });
        setTotalTime((t) => t + 1);
      }, 1000);
    }
  };
  const confirmExit = () => { setShowExit(false); stopTimer(); onExit(); };

  // ── Option class helper ───────────────────────────────────
  const optClass = (i) => {
    let cls = "opt-btn";
    if (hidden50.includes(i)) return cls + " hidden-50";
    if (answered) {
      if (i === q.ans) cls += " correct";
      else if (i === selected) cls += " wrong";
    } else if (selected === i) cls += " selected-opt";
    return cls;
  };

  const timerPct = (timeLeft / maxTime) * 100;
  const timerColor = timerPct > 60 ? "#7c3aed" : timerPct > 30 ? "#f59e0b" : "#ef4444";
  const feedbackType = selected === -1 ? "timeout" : selected === q?.ans ? "correct" : "wrong";

  return (
    <div className="quiz-screen">
      <div className="quiz-wrap">

        {/* Top bar */}
        <div className="quiz-top">
          <div className="player-badge">
            <div className="player-avatar">{playerName.charAt(0).toUpperCase()}</div>
            <span className="player-name-txt">{playerName}</span>
          </div>
          <div className="right-controls">
            <div className={`streak-badge ${streak > 0 ? "pop" : ""}`}>🔥 {streak}</div>
            <div className="score-badge">{score} pts</div>
            {/* EXIT BUTTON */}
            <button className="exit-btn" onClick={openExit} title="Exit quiz">
              ✕ Exit
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="progress-row">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${(current / total) * 100}%` }} />
          </div>
          <span className="q-fraction">{current + 1}/{total}</span>
        </div>

        {/* Timer bar */}
        <div className="timer-bar-wrap">
          <span className="timer-label">{timeLeft}s</span>
          <div className="timer-track">
            <div className="timer-fill" style={{ width: `${timerPct}%`, background: timerColor }} />
          </div>
        </div>

        {/* Question card */}
        <div className="q-card">
          <div className="q-meta">
            <span className="q-cat-pill">{DATA[selectedCat].name}</span>
            <span className={`diff-pill diff-${difficulty}`}>{difficulty}</span>
          </div>
          <p className="q-text">{q.q}</p>
        </div>

        {/* Options */}
        <div className="options-grid">
          {q.opts.map((opt, i) => (
            <button key={i} className={optClass(i)} disabled={answered || hidden50.includes(i)} onClick={() => handleSelect(i)}>
              <span className="opt-letter">{LETTERS[i]}</span>
              <span className="opt-text">{opt}</span>
              <span className="checkmark">
                {answered && i === q.ans ? "✓" : answered && i === selected && i !== q.ans ? "✗" : ""}
              </span>
            </button>
          ))}
        </div>

        {/* Feedback */}
        {answered && (
          <div className={`feedback-box feedback-${feedbackType}`}>
            {selected === -1 ? "⏰ Time's up! " : selected === q.ans ? "✓ Correct! " : "✗ Wrong. "}
            <em>{q.exp}</em>
          </div>
        )}

        {/* Bottom row */}
        <div className="bottom-row">
          {use5050 && (
            <button className={`lifeline-btn ${used5050 ? "used" : ""}`} disabled={used5050 || answered} onClick={handle5050}>
              ⚡ 50/50
            </button>
          )}
          {useSkip && (
            <button className={`lifeline-btn ${usedSkip ? "used" : ""}`} disabled={usedSkip || answered} onClick={handleSkip}>
              ⏭ Skip
            </button>
          )}
          {answered && (
            <button className="next-btn" onClick={handleNext}>
              {current + 1 >= total ? "See Results 🏁" : "Next Question →"}
            </button>
          )}
        </div>
      </div>

      {/* ── EXIT MODAL ── */}
      {showExit && (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && closeExit()}>
          <div className="modal-box">
            <span className="modal-icon">🚪</span>
            <h2 className="modal-title">Quit the quiz?</h2>
            <p className="modal-sub">Your progress will be lost and your score won't be saved to the leaderboard.</p>
            <div className="modal-stats">
              <div className="modal-stat">
                <div className="modal-stat-val">{current}/{total}</div>
                <div className="modal-stat-lbl">Progress</div>
              </div>
              <div className="modal-stat">
                <div className="modal-stat-val">{score}</div>
                <div className="modal-stat-lbl">Points so far</div>
              </div>
              <div className="modal-stat">
                <div className="modal-stat-val">{streak}🔥</div>
                <div className="modal-stat-lbl">Streak</div>
              </div>
            </div>
            <div className="modal-btns">
              <button className="modal-quit-btn" onClick={confirmExit}>Yes, quit</button>
              <button className="modal-continue-btn" onClick={closeExit}>Keep playing</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
