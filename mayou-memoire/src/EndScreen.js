import React from 'react';

export default function EndScreen({ score, time, level, onReplay, onHome }) {
  // Calcul automatique du nombre de paires selon le niveau
  const gridSizes = { 'Débutant': 2, 'Intermédiaire': 4, 'Avancé': 6 };
  const gridSize = gridSizes[level];
  const pairsCount = (gridSize * gridSize) / 2;

  return (
    <div className="center-screen">
      <h1>MAYOU Card</h1>
      <h2>Félicitations !</h2>
      <div>
        <p>Score : {score} paires sur {pairsCount}</p>
        <p>Temps : {time} s</p>
      </div>
      <button onClick={onReplay}>Rejouer</button>
      <button onClick={onHome}>Accueil</button>
    </div>
  );
}
