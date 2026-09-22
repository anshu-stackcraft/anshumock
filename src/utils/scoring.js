export const calculateScore = (questions, answers, config) => {
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let skipped = 0;
  const topicStats = {};

  questions.forEach((q, index) => {
    const ans = answers[index];
    const subject = q.subject || 'General';

    if (!topicStats[subject]) {
      topicStats[subject] = { subject, correct: 0, total: 0, accuracy: 0 };
    }
    topicStats[subject].total += 1;

    if (ans === -1) {
      skipped += 1;
    } else if (ans === q.answer) {
      correct += 1;
      score += config.marksPerQuestion;
      topicStats[subject].correct += 1;
    } else {
      wrong += 1;
      if (config.negativeMarking) {
        score -= config.negativeMarks;
      }
    }
  });

  const maxScore = questions.length * config.marksPerQuestion;
  const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
  const attempted = correct + wrong;
  const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;

  const topicBreakdown = Object.values(topicStats).map(t => ({
    ...t,
    accuracy: t.total > 0 ? (t.correct / t.total) * 100 : 0
  }));

  const weakTopics = detectWeakTopics(topicBreakdown);

  return {
    score,
    maxScore,
    percentage,
    correct,
    wrong,
    skipped,
    accuracy,
    topicBreakdown,
    weakTopics
  };
};

export const detectWeakTopics = (topicBreakdown) => {
  return topicBreakdown.filter(t => t.accuracy < 60).map(t => t.subject);
};
