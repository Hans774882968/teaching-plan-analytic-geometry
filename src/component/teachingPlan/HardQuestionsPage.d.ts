export type LinkItem = {
  url: string;
  text: string;
};

export type Welcome = {
  title: string;
  content: string;
  backLink: LinkItem; // 导向基础知识讲解课件
};

export type HardQuestionsPage = {
  pageUrl: string; // welcome.backLink.url + '-hard-questions'
  title: string;
  welcome?: Welcome;
  category: string[];
  difficulty: string;
  quiz: QuizItem[];
};
