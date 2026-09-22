import { useState, useEffect, useRef, useCallback } from 'react';

export function useTimer(totalSeconds) {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = useCallback(() => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
    }
  }, [isRunning, timeLeft]);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback((newTotal = totalSeconds) => {
    setIsRunning(false);
    setTimeLeft(newTotal);
  }, [totalSeconds]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            clearInterval(intervalRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formattedTime = `${Math.floor(timeLeft / 60).toString().padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`;
  const percentLeft = totalSeconds > 0 ? (timeLeft / totalSeconds) * 100 : 0;

  return { timeLeft, isRunning, start, pause, reset, formattedTime, percentLeft };
}
