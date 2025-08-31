import { ellipseDefinitionHQ } from '@/ellipseDefinition/hardQuestionsConfig';
import { hyperbolaDefinitionHQ } from '@/hyperbolaDefinition/hardQuestionsConfig';
import { logHQ } from '@/logarithmicFunction/logHardQuestionsConfig';
import { parabolaDefinitionHQ } from '@/parabolaDefinition/hardQuestionsConfig';
import { FaChartLine, FaShapes } from 'react-icons/fa';

export const levelColorList = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-yellow-500',
  'bg-red-500',
];

export function getLevelColorByIndex(idx) {
  return levelColorList[idx % levelColorList.length];
}

export const levelIcons = {
  '椭圆的定义与性质': <FaShapes />,
  '双曲线的定义与性质': <FaShapes />,
  '抛物线的定义与性质': <FaShapes />,
  '对数函数': <FaChartLine />,
};

export const levels = [
  ellipseDefinitionHQ,
  hyperbolaDefinitionHQ,
  parabolaDefinitionHQ,
  logHQ,
].map((level, index) => ({
  ...level,
  bgColor: getLevelColorByIndex(index),
  icon: levelIcons[level.title] || <FaShapes />,
}));

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
