import { useEffect, useState } from 'react'
import { Controls } from '../components/Controls';
import { Score } from '../components/Score';
import styles from './styles.module.css';

export const App = () => {
  const [bestStreak, setBestStreak] = useState(0);
  const [makes, setMakes] = useState(0);
  const [misses, setMisses] = useState(0);
  const [streak, setStreak] = useState(0);
  const total = makes + misses;

  const handleMake = () => {
    setMakes((prevValue) => prevValue + 1)
    setStreak((prevValue) => {
      if (prevValue < 0) return 1;
      return prevValue + 1;
    });
  };
  const handleMiss = () => {
    setMisses((prevValue) => prevValue + 1)
    setStreak((prevValue) => {
      if (prevValue > 0) return -1;
      return prevValue - 1;
    });
  };

  const handleReset = () => {
    setBestStreak(0);
    setMakes(0);
    setMisses(0);
    setStreak(0);
  }

  useEffect(() => {
    if (streak > bestStreak) {
      setBestStreak(streak);
    }
  }, [streak]);

  return (
    <div className={styles.container}>
      <Score bestStreak={bestStreak} makes={makes} misses={misses} streak={streak} />
      <Controls onMake={handleMake} onMiss={handleMiss} onReset={handleReset} />
    </div>
  )
}
