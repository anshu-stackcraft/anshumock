import { useState } from 'react';
import { syllabus } from '../data/syllabus';
import { getSelectedExam, setSelectedExam as setStorageExam } from '../utils/storage';

export function useExam() {
  const [selectedExamId, setSelectedExamIdState] = useState(getSelectedExam);
  const examsList = Object.keys(syllabus).map(key => ({ id: key, name: key.replace(/_/g, ' ') }));
  const selectedExam = examsList.find(e => e.id === selectedExamId) || examsList[0];

  const setSelectedExam = (examId) => {
    setSelectedExamIdState(examId);
    setStorageExam(examId);
  };

  return { selectedExam, setSelectedExam, exams: examsList };
}
