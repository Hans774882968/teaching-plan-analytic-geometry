import { hardQuestionsData as levels } from '@/common/hardQuestionsData';

export { levels };

export const levelsMp = levels.reduce((res, level) => {
  res[level.title] = level;
  return res;
}, {});

export const allQuestions = levels.reduce((res, level) => {
  res.push(...level.quiz);
  return res;
}, []);

export const allQuestionsMp = allQuestions.reduce((res, question) => {
  res[question.qid] = question;
  return res;
}, {});
