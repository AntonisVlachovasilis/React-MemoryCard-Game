import "./App.css";
import data from "./data";
import Cards from "./Cards.js";
import { useState, useEffect } from "react";

function MemoryCard() {
  const [cards, setCards] = useState(data);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (score === 0) {
      setCards(data);
    }
  }, [score]);
  const handleHighScore = (currentScore) => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  };
  return (
    <div className="App">
      <div className="app-body">
        <div className="header-container">
          <div className="title-container">
            <h1>Magic Memory</h1>
          </div>
          <div className="instructions">
            <p>
              Earn points by choosing a card. Be careful! Clicking the same card
              twice , means Game Over!!!
            </p>
          </div>
          <div className="scoreboard-container">
            <div className="current-score">Score:{score}</div>
            <div className="high-score">High Score:{highScore}</div>
          </div>
        </div>
        <div className="card-container">
          <Cards
            score={score}
            setScore={setScore}
            setMessage={setMessage}
            setCards={setCards}
            cards={cards}
            handleHighScore={handleHighScore}
          />
        </div>
        <div className="loser">
          <h1>{message}</h1>
        </div>
      </div>
    </div>
  );
}

export default MemoryCard;
