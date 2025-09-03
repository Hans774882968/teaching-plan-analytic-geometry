export type LinkItem = {
  url: string;
  text: string;
};

export type LessonUrlDesc = LinkItem | string;

export type Welcome = {
  title: string;
  content: string;
  backLinks: LessonUrlDesc[]; // 导向基础知识讲解课件
};

export type HardQuestionsPage = {
  pageUrl: string; // welcome.backLinks[0].url + '-hard-questions'
  title: string;
  welcome?: Welcome;
  category: string[];
  difficulty: string;
  quiz: QuizItem[];
};
