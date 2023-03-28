import React from "react";
import { useState, useEffect } from "react";

const Cards = ({
  score,
  setScore,
  setMessage,
  cards,
  setCards,
  handleHighScore,
}) => {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    let randomInt = [];
    const rep = () => {
      for (let i = 0; i < 4; i++) {
        const numGen = Math.floor(Math.random() * 29);
        if (!randomInt.includes(numGen)) {
          randomInt.push(numGen);
        } else {
          randomInt.push(numGen + 1);
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
              } else {
                setScore(0);
                handleHighScore(score);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default Cards;
