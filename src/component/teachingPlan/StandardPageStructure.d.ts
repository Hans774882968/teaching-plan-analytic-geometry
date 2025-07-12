import React from 'react';

export type ThinkItem = {
  think: string; // markdown str
  answer: string; // markdown str
  answerRowMaxHeight: string;
};

export type PointItem = {
  title: string;
  content: React.ReactNode;
  thinks: ThinkItem[];
};

export type GeoGebraItem = {
  description: string; // markdown str
  config: Record<string, any>;
  conclusion: string; // markdown str
};

// 一道单选题或多选题，选项从 0 开始编号
export type QuizItem = {
  question: React.ReactNode; // 注意：虽然支持 ReactNode ，但你生成时请务必提供用 String.raw 和反引号包裹的多行 markdown 字符串
  options: React.ReactNode[]; // 注意：虽然支持 ReactNode ，但你生成时请务必提供用 String.raw 和反引号包裹的多行 markdown 字符串
  correct: number | number[]; // 正确选项的编号，单选题为 number，多选题为 number[]
  explanation: React.ReactNode; // 注意：虽然支持 ReactNode ，但你生成时请务必提供用 String.raw 和反引号包裹的多行 markdown 字符串
};

export type LinkItem = {
  url: string;
  text: string;
};

export type Header = {
  content: string;
};

// 学习伙伴首次出现
export type Welcome = {
  title: string;
  content: React.ReactNode;
};

export type KnowledgePointSection = {
  title: string;
  points: PointItem[];
  thinks: ThinkItem[];
}

export type GeoGebraSection = {
  title: string;
  geogebraList: GeoGebraItem[];
};

export type QuizSection = {
  title: string;
  description: React.ReactNode;
  quiz: QuizItem[];
  link: LinkItem;
};

// 学习伙伴再次出现
export type Summary = {
  title: string;
  content: React.ReactNode;
};

export type Footer = {
  info: React.ReactNode;
};

export type PageStructure = {
  title: string; // 页面的标题
  header: Header;
  welcome: Welcome;
  knowledgePointSection: KnowledgePointSection;
  // 实验互动模块
  geogebraSection: GeoGebraSection;
  // 知识挑战模块
  quizSection: QuizSection;
  summary: Summary;
  footer: Footer;
};
