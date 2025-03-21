import React, { useState, useEffect } from 'react';

function Game() {
  const [isRunning, setIsRunning] = useState(false);
  const [isPunching, setIsPunching] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => {
        if (!isPunching) {
          setGameOver(true);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isRunning, isPunching]);

  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      setIsPunching(true);
      setTimeout(() => setIsPunching(false), 500);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const startGame = () => {
    setIsRunning(true);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      {gameOver ? (
        <div>
          <h1>Game Over</h1>
          <button onClick={startGame}>Retry</button>
        </div>
      ) : (
        <div>
          <div className={`man ${isRunning ? 'running' : ''} ${isPunching ? 'punching' : ''}`}></div>
          <div className="wall"></div>
        </div>
      )}
    </div>
  );
}

export default Game;