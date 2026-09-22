import { useState, useEffect } from 'react';
import { getQuestionsByExam, getQuestionsBySubject, getRandomQuestions } from '../data/questions/index';
import { fetchExternalQuestions } from '../api/questionApi';
import { shuffleArray } from '../utils/shuffle';

export function useQuestions(examId, subject = null, count = 50) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      let local = subject
        ? getQuestionsBySubject(examId, subject)
        : getQuestionsByExam(examId);

      local = shuffleArray(local).slice(0, count);
      setQuestions(local);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    load(); 
  }, [examId, subject, count]);

  return { questions, loading, error, refetch: load };
}
