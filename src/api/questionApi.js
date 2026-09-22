import { getRandomQuestions } from '../data/questions/index';
import { fetchOpenTDB } from './externalApi';

export const fetchExternalQuestions = async (examId, count = 10) => {
  try {
    const external = await fetchOpenTDB({ amount: count });
    return external.map(q => ({ ...q, exam: examId }));
  } catch (e) {
    return [];
  }
};

export const fetchPracticeQuestions = (examId, subject, count) => {
  return getRandomQuestions(examId, count, subject);
};

export const fetchMockQuestions = (examId, count) => {
  return getRandomQuestions(examId, count);
};
