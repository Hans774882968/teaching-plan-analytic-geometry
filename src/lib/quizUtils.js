export function processUserAnswer(userAnswer) {
  return userAnswer.trim();
}

export function isAnswerCorrect(userAnswer, quiz) {
  if (typeof quiz.correct === 'number') {
    return userAnswer === quiz.correct;
  }
  if (Array.isArray(quiz.correct)) {
    return quiz.correct.includes(userAnswer);
  }
  if (typeof quiz.correct === 'string') {
    return quiz.correct === processUserAnswer(userAnswer);
  }
  return false;
}
