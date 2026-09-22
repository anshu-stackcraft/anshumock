export const fetchOpenTDB = async ({ amount = 10, difficulty = 'medium', category = 9 } = {}) => {
  try {
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`);
    const data = await res.json();
    if (data.response_code !== 0) return [];
    
    return data.results.map((q, i) => {
      const options = [q.correct_answer, ...q.incorrect_answers];
      // Basic shuffle
      options.sort(() => Math.random() - 0.5);
      const answerIndex = options.indexOf(q.correct_answer);
      
      const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      };

      return {
        id: `tdb_${Date.now()}_${i}`,
        exam: 'GENERAL',
        subject: 'General Knowledge',
        topic: 'Mixed',
        question: decodeHtml(q.question),
        options: options.map(decodeHtml),
        answer: answerIndex,
        explanation: 'Sourced from OpenTDB.',
        difficulty: q.difficulty,
        source: 'external',
        year: 0
      };
    });
  } catch (e) {
    console.error('Error fetching OpenTDB', e);
    return [];
  }
};

export const fetchTriviaAPI = async ({ limit = 10, difficulty = 'medium' } = {}) => {
  try {
    const res = await fetch(`https://the-trivia-api.com/v2/questions?limit=${limit}&difficulties=${difficulty}`);
    const data = await res.json();
    
    return data.map((q, i) => {
      const options = [q.correctAnswer, ...q.incorrectAnswers];
      options.sort(() => Math.random() - 0.5);
      const answerIndex = options.indexOf(q.correctAnswer);
      
      return {
        id: `tapi_${Date.now()}_${i}`,
        exam: 'GENERAL',
        subject: q.category || 'General Knowledge',
        topic: q.tags?.[0] || 'Mixed',
        question: q.question.text,
        options: options,
        answer: answerIndex,
        explanation: 'Sourced from TriviaAPI.',
        difficulty: q.difficulty || 'medium',
        source: 'external',
        year: 0
      };
    });
  } catch (e) {
    console.error('Error fetching TriviaAPI', e);
    return [];
  }
};
