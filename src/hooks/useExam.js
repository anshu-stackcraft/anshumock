import { useState } from 'react'
import { exams } from '../data/exams'
export function useExam() { const [examId, setExamId] = useState(exams[0].id); return { examId, setExamId, exam: exams.find((item) => item.id === examId) || exams[0] } }
