import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import Game from '../components/Game';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoaded ? <Game /> : <SplashScreen />}
    </div>
  );
}

export default Home;