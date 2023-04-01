import "./App.css";
import data from "./data";
import Cards from "./Cards.js";
import audioClip from "./audio/metal.mp3";
import { useState, useEffect } from "react";

function MemoryCard() {
  const [audio] = useState(new Audio(audioClip));
  const [cards, setCards] = useState(data);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
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
  console.log(isGameOver);
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
          {isGameOver ? (
            <div className="over-modal">
              Game Over
              <button
                onClick={() => {
                  setIsGameOver(false);
                }}
              >
                restart
              </button>
            </div>
          ) : (
            <Cards
              setIsGameOver={setIsGameOver}
              score={score}
              setScore={setScore}
              setCards={setCards}
              cards={cards}
              handleHighScore={handleHighScore}
              audio={audio}
            />
          )}
        </div>
        <div className="loser">
          <audio>
            <source src={audioClip} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default MemoryCard;
