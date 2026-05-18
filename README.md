# 🧠 QuizMaster — React Quiz App

A fully interactive quiz application built with React for a 2nd semester project.

---

## 🚀 Features

- **6 Categories** — React/JS, Science, History, Mathematics, General Knowledge, Technology
- **3 Difficulty Levels** — Easy (30s, 1pt), Medium (20s, 2pt), Hard (12s, 3pt)
- **Countdown Timer** — per question, turns red when time is low
- **🔥 Streak System** — consecutive correct answers earn bonus points
- **⚡ 50/50 Lifeline** — eliminates 2 wrong options
- **⏭ Skip Lifeline** — skip one question without penalty
- **🔊 Sound Effects** — correct, wrong, tick, victory sounds via Web Audio API
- **✕ Mid-Game Exit Button** — quit anytime with a confirmation modal showing current progress
- **🏅 Persistent Leaderboard** — top 10 scores saved via localStorage
- **🎉 Confetti** — fires on a new best score
- **📋 Answer Review** — full review of every question after the quiz
- **Responsive UI** — works on mobile and desktop

---

## 🛠️ Tech Stack

- **React** (Functional components, hooks)
- **useState** — all UI state management
- **useEffect** — countdown timer logic
- **useRef** — timer interval reference
- **useCallback** — memoized timer stop function
- **localStorage** — leaderboard persistence
- **Web Audio API** — sound effects (no external library)
- **CSS** — custom animations, transitions, gradients

---

## 📁 Project Structure

```
src/
├── App.js                  # Root component, screen routing
├── App.css                 # Global styles
├── data/
│   └── questions.js        # All quiz questions (6 categories × 3 levels × 5 questions)
└── components/
    ├── Home.jsx             # Home screen (name, category, difficulty, options)
    ├── Home.css
    ├── Quiz.jsx             # Quiz screen (questions, timer, lifelines, exit modal)
    ├── Quiz.css
    ├── Results.jsx          # Results screen (score ring, stats, leaderboard, review)
    └── Results.css
```

---

## ▶️ How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start

# 3. Open in browser
http://localhost:3000
```

---

## 🌐 Deployment

Deployed on Vercel: [your-vercel-link-here]

---

## 📌 React Concepts Used

| Concept | Where Used |
|---|---|
| useState | All state: score, timer, screen, answers |
| useEffect | Countdown timer that resets each question |
| useRef | Holding interval reference without re-render |
| useCallback | Stable stopTimer function |
| Props | Passing config & callbacks between screens |
| Conditional rendering | Switching between Home / Quiz / Results |
| Component composition | App → Home/Quiz/Results → sub-components |
| localStorage | Leaderboard persistence across sessions |

---

*Built with ❤️ using React*
