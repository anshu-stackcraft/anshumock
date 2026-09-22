import { getAttempts, saveAttempt as storageSave } from '../utils/storage';
import { useState } from 'react';

export function usePerformance() {
  const [attempts, setAttempts] = useState(getAttempts);

  const saveAttempt = (attempt) => {
    storageSave(attempt);
    setAttempts(getAttempts());
  };

  const getStats = (examId) => {
    const filtered = attempts.filter(a => a.examId === examId);
    if (!filtered.length) return null;
    return {
      totalAttempts: filtered.length,
      bestScore: Math.max(...filtered.map(a => a.percentage)),
      averageScore: filtered.reduce((sum, a) => sum + a.percentage, 0) / filtered.length,
      lastAttempt: filtered[0]
    };
  };

  return { attempts, saveAttempt, getStats };
}
