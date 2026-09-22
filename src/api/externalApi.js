const fetchJson = (url) => fetch(url).then((response) => { if (!response.ok) throw new Error('External question source unavailable'); return response.json() })

// External trivia is supplementary only; curated exam questions remain primary.
export const openTriviaQuestions = ({ amount = 10, difficulty = 'medium' } = {}) => fetchJson(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
export const triviaApiQuestions = ({ limit = 10, difficulty = 'medium' } = {}) => fetchJson(`https://the-trivia-api.com/v2/questions?limit=${limit}&difficulties=${difficulty}`)
