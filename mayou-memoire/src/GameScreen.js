import React, { useEffect, useState } from 'react';
import Card from './Card';

function shuffle(array) {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function GameScreen({ level, onQuit, onFinish }) {
  // Définir la taille de la grille carrée selon le niveau
  const gridSizes = { 'Débutant': 2, 'Intermédiaire': 4, 'Avancé': 6 };
  const gridSize = gridSizes[level];
  const pairsCount = (gridSize * gridSize) / 2;

  const flags = [
    'grece', 'japon', 'espagne', 'russie', 'usa', 'bhoutan', 'arabie saoudite', 'nepal',
    'france', 'maroc', 'puerto rico', 'brésil', 'palestine', 'haiti', 'liban', 'egypt', 'nigeria', 'chile',
  ];
  const selectedflags = flags.slice(0, pairsCount);

  // Mélange et prépare les cartes (toujours un carré parfait)
  const [cards, setCards] = useState(shuffle([...selectedflags, ...selectedflags]));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // Reset cartes si on change de niveau
  useEffect(() => {
    setCards(shuffle([...selectedflags, ...selectedflags]));
    setFlipped([]);
    setMatched([]);
    setScore(0);
    setTimer(0);
  }, [level]); // reset si le niveau change

  useEffect(() => {
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      setIsLocked(true);
      setTimeout(() => {
        const [i, j] = flipped;
        if (cards[i] === cards[j]) {
          setMatched([...matched, i, j]);
          setScore(score + 1);
        }
        setFlipped([]);
        setIsLocked(false);
      }, 800);
    }
  }, [flipped]); // tu pourrais aussi mettre cards, matched, score dans les deps pour être plus sûr

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setTimeout(() => {
        onFinish(score, timer);
      }, 600);
    }
  }, [matched, cards, score, timer, onFinish]);

  function handleCardClick(idx) {
    if (flipped.length < 2 && !flipped.includes(idx) && !matched.includes(idx) && !isLocked) {
      setFlipped([...flipped, idx]);
    }
  }

  return (
    <div className="center-screen">
      <h1>MAYOU Card</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px', margin: '0 auto' }}>
        <span>Score : {score}</span>
        <span>Chrono : {timer} s</span>
      </div>
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 56px)`,
          gridGap: '12px',
          margin: '32px 0',
        }}
      >
        {cards.map((shape, idx) => (
          <Card
            key={idx}
            shape={flipped.includes(idx) || matched.includes(idx) ? shape : null}
            highlight={
              matched.includes(idx)
                ? 'green'
                : flipped.length === 2 && flipped.includes(idx) && cards[flipped[0]] !== cards[flipped[1]]
                ? 'red'
                : null
            }
            onClick={() => handleCardClick(idx)}
          />
        ))}
      </div>
      <button onClick={onQuit}>Quitter</button>
    </div>
  );
}
