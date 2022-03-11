import fitty from 'fitty';
import { useEffect, useRef } from "react";
import styles from './styles.module.css';

interface ScoreProps {
  makes: number;
  misses: number;
  streak: number;
}

export const Score = (props: ScoreProps) => {
  const { makes, misses, streak } = props;
  const scoreRef = useRef(null);
  const metricsRef = useRef(null);
  const total = makes + misses;
  const percentage = Math.round((makes / total) * 100 || 0);

  useEffect(() => {
    if (scoreRef.current && metricsRef.current) {
      fitty(scoreRef.current, {
        maxSize: 150,
        minSize: 50,
      });
      fitty(metricsRef.current, {
        maxSize: 36,
        minSize: 20,
      });
    }
  }, [metricsRef, scoreRef]);

  return (
    <div className={styles.score}>
      <div className={styles.ratio}>
        <div><p ref={scoreRef}>{makes} / {total}</p></div>
      </div>
      <div className={styles.metrics}>
        <div><p ref={metricsRef}>Streak: {streak} | Percentage: {percentage}%</p></div>
      </div>
    </div>
  );
}