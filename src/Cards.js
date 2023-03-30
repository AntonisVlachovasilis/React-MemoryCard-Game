import React from "react";

import { useState, useEffect } from "react";

const Cards = ({
  score,
  setScore,
  setMessage,
  cards,
  setCards,
  handleHighScore,
  audio,
}) => {
  const [deck, setDeck] = useState([]);
  const handleAudio = () => {
    audio.play();
  };

  useEffect(() => {
    let randomInt = [];
    const rep = () => {
      while (randomInt.length < 4) {
        const numGen = Math.floor(Math.random() * 29);
        if (randomInt.indexOf(numGen) === -1) {
          randomInt.push(numGen);
        }
      }
      return randomInt;
    };
    const newDeck = rep();
    setDeck(newDeck);
    console.log(newDeck);
  }, [score]);

  return (
    <div className="card">
      {deck.map((int) => {
        console.log(cards[int]);
        return (
          <img
            className="rand-card"
            src={cards[int].imgDir}
            alt="card-img"
            key={cards[int].id}
            onClick={() => {
              if (cards[int].clicked === false) {
                setScore(score + 1);
                setCards(
                  cards.map((card, i) => {
                    if (i === int) {
                      return { ...card, clicked: true };
                    }
                    return card;
                  })
                );
                handleAudio();
                setMessage("");
              } else {
                setScore(0);
                handleHighScore(score);
                setMessage("Game Over");
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default Cards;
