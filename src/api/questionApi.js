import { petApi } from '../services/api'
export const getQuestions = ({ exam, subject, topic, difficulty } = {}) => {
  const params = new URLSearchParams({ ...(exam && { exam }), ...(subject && { subject }), ...(topic && { topic }), ...(difficulty && { difficulty }) })
  return petApi.questions(`?${params.toString()}`)
}
