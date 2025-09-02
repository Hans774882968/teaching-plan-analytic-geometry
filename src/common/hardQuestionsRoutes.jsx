import HardQuestionsPage from '@/component/teachingPlan/HardQuestionsPage';
import { hardQuestionsData } from './hardQuestionsData';

export const hardQuestionsRoutes = hardQuestionsData.map((hq) => {
  return {
    path: hq.pageUrl,
    element: <HardQuestionsPage config={hq} />,
  };
});
