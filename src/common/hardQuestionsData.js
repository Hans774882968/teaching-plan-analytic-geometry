import { ellipseDefinitionHQ } from '@/ellipseDefinition/hardQuestionsConfig';
import { hyperbolaDefinitionHQ } from '@/hyperbolaDefinition/hardQuestionsConfig';
import { logHQ } from '@/logarithmicFunction/logHardQuestionsConfig';
import { parabolaDefinitionHQ } from '@/parabolaDefinition/hardQuestionsConfig';

const hardQuestionsData = [
  ellipseDefinitionHQ,
  hyperbolaDefinitionHQ,
  parabolaDefinitionHQ,
  logHQ,
];

function processQuestions() {
  hardQuestionsData.forEach((hq) => {
    hq.quiz.forEach((question) => {
      question.belongLevel = hq;
    });
  });
}

processQuestions();

export { hardQuestionsData };
