import { shuffleArray } from '../../utils/shuffle';
import petHistoryQuestions from './pet_history';
import petGeographyQuestions from './pet_geography';
import petPolityQuestions from './pet_polity';
import petScienceQuestions from './pet_science';
import petEconomyQuestions from './pet_economy';
import petHindiQuestions from './pet_hindi';
import petMathsQuestions from './pet_maths';
import petReasoningQuestions from './pet_reasoning';
import petUpgkQuestions from './pet_upgk';
import sscGdQuestions from './ssc_gd';
import upPoliceQuestions from './up_police';

export {
  petHistoryQuestions,
  petGeographyQuestions,
  petPolityQuestions,
  petScienceQuestions,
  petEconomyQuestions,
  petHindiQuestions,
  petMathsQuestions,
  petReasoningQuestions,
  petUpgkQuestions,
  sscGdQuestions,
  upPoliceQuestions
};

export const allQuestions = [
  ...petHistoryQuestions,
  ...petGeographyQuestions,
  ...petPolityQuestions,
  ...petScienceQuestions,
  ...petEconomyQuestions,
  ...petHindiQuestions,
  ...petMathsQuestions,
  ...petReasoningQuestions,
  ...petUpgkQuestions,
  ...sscGdQuestions,
  ...upPoliceQuestions
];

export const getQuestionsByExam = (examId) => allQuestions.filter(q => q.exam === examId);
export const getQuestionsBySubject = (examId, subject) => allQuestions.filter(q => q.exam === examId && q.subject === subject);

export const getRandomQuestions = (examId, count, subject = null) => {
  let pool = subject ? getQuestionsBySubject(examId, subject) : getQuestionsByExam(examId);
  if (pool.length === 0) {
    // fallback if not enough questions
    pool = allQuestions;
  }
  return shuffleArray([...pool]).slice(0, count);
};
