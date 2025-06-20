import React, { useState } from 'react';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import EndScreen from './EndScreen';
import './styles.css';

function App() {
  const [screen, setScreen] = useState('start'); // start | game | end
  const [level, setLevel] = useState('Débutant');
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <div className="app-bg">
      {screen === 'start' && (
        <StartScreen
          level={level}
          setLevel={setLevel}
          onStart={() => setScreen('game')}
        />
      )}
      {screen === 'game' && (
        <GameScreen
          level={level}
          onQuit={() => setScreen('start')}
          onFinish={(finalScore, finalTime) => {
            setScore(finalScore);
            setTime(finalTime);
            setScreen('end');
          }}
        />
      )}
      {screen === 'end' && (
        <EndScreen
          score={score}
          time={time}
          level={level}
          onReplay={() => setScreen('game')}
          onHome={() => setScreen('start')}
        />
      )}
    </div>
  );
}

export default App;
