const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!response.ok) throw new Error(`API request failed: ${response.status}`)
  return response.json()
}

export const petApi = {
  subjects: () => request('/subjects/'),
  topics: () => request('/topics/'),
  questions: (params = '') => request(`/questions/${params}`),
  question: (id) => request(`/questions/${id}/`),
  mockTests: () => request('/mock-tests/'),
  notes: () => request('/notes/'),
  syllabus: () => request('/syllabus/'),
  progress: () => request('/progress/'),
  results: (options) => request('/results/', options),
}
