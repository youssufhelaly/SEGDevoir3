import React from 'react';

export default function StartScreen({ level, setLevel, onStart }) {
  return (
    <div className="fullscreen-center">
      <h1 style={{ fontSize: '3rem', marginBottom: 32 }}>MAYOU Card</h1>
      <label htmlFor="niveau" style={{ fontSize: '1.5rem' }}>Niveau :</label>
      <select
        id="niveau"
        value={level}
        onChange={e => setLevel(e.target.value)}
        style={{ fontSize: '1.5rem', padding: '12px', margin: '24px 0', minWidth: 200 }}
      >
        <option>Débutant</option>
        <option>Intermédiaire</option>
        <option>Avancé</option>
      </select>
      <button
        onClick={() => onStart(level)}
        style={{ fontSize: '1.5rem', padding: '16px 48px', borderRadius: 8, marginTop: 16 }}
      >
        Démarrer
      </button>
    </div>
  );
}
