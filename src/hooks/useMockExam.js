import { useState, useCallback } from 'react';
import { calculateScore } from '../utils/scoring';

export function useMockExam(questions, config) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(-1));
  const [marked, setMarked] = useState(Array(questions.length).fill(false));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState(null);

  const goTo = useCallback((idx) => {
    if (idx >= 0 && idx < questions.length) {
      setCurrentIndex(idx);
    }
  }, [questions.length]);

  const setAnswer = useCallback((idx, answerIdx) => {
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[idx] = answerIdx;
      return newAnswers;
    });
  }, []);

  const toggleMark = useCallback((idx) => {
    setMarked(prev => {
      const newMarked = [...prev];
      newMarked[idx] = !newMarked[idx];
      return newMarked;
    });
  }, []);

  const submit = useCallback((secondsUsed) => {
    const calculatedResults = calculateScore(questions, answers, config);
    calculatedResults.timeTaken = secondsUsed;
    calculatedResults.examId = questions.length > 0 ? questions[0].exam : 'UNKNOWN';
    calculatedResults.timestamp = Date.now();
    setResults(calculatedResults);
    setIsSubmitted(true);
    return calculatedResults;
  }, [questions, answers, config]);

  return { currentIndex, answers, marked, goTo, setAnswer, toggleMark, submit, isSubmitted, results };
}
