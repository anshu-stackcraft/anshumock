import { saveAttempt, getAttempts } from '../utils/storage';

export const saveMockResult = (result) => saveAttempt(result);
export const getMockHistory = () => getAttempts();
export const getMockHistoryByExam = (examId) => getAttempts().filter(a => a.examId === examId);
