import { logHQ } from '@/logarithmicFunction/logHardQuestionsConfig';
import { ellipseDefinitionHQ } from '@/ellipseDefinition/hardQuestionsConfig';
import { hyperbolaDefinitionHQ } from '@/hyperbolaDefinition/hardQuestionsConfig';
import { parabolaDefinitionHQ } from '@/parabolaDefinition/hardQuestionsConfig';
import { conicSectionsVFHQ1 } from '@/conicSections/vietaFormulasHQC';
import { apolloniusHQC } from '@/apolloniusCircle/apolloniusHQC';
import { FaChartLine, FaShapes, FaPuzzlePiece } from 'react-icons/fa';

export const levelColorList = [
  'bg-blue-500',
  'bg-green-500',
  'bg-purple-500',
  'bg-yellow-500',
  'bg-red-500',
];

export const levelTextColorList = [
  'text-blue-500',
  'text-green-500',
  'text-purple-500',
  'text-yellow-500',
  'text-red-500',
];

export const levelIcons = {
  '椭圆的定义与性质': <FaShapes />,
  '双曲线的定义与性质': <FaShapes />,
  '抛物线的定义与性质': <FaShapes />,
  '对数函数': <FaChartLine />,
  '圆锥曲线与韦达定理精选题集1': <FaPuzzlePiece />,
  '阿氏圆和圆的反演习题集1': <FaShapes />,
};

export function getLevelColorByIndex(idx) {
  return levelColorList[idx % levelColorList.length];
}

export function getLevelTextColorByIndex(idx) {
  return levelTextColorList[idx % levelTextColorList.length];
}

const hardQuestionsData = [
  logHQ,
  ellipseDefinitionHQ,
  hyperbolaDefinitionHQ,
  parabolaDefinitionHQ,
  conicSectionsVFHQ1,
  apolloniusHQC,
].map((level, index) => ({
  ...level,
  bgColor: getLevelColorByIndex(index),
  textColor: getLevelTextColorByIndex(index),
  icon: levelIcons[level.title] || <FaShapes />,
}));

function processQuestions() {
  hardQuestionsData.forEach((hq) => {
    hq.quiz.forEach((question) => {
      question.belongLevel = hq;
    });
  });
}

processQuestions();

export { hardQuestionsData };
