import { useState } from 'react';
import QuizContainer from '@/component/QuizContainer';
import { Helmet } from 'react-helmet-async';
import styles from '@/component/teachingPlan/basic.module.scss';
import TPButton from '@/component/TPButton';
import { Link } from 'react-router-dom';
import Section from '@/component/teachingPlan/Section';
import Card from '@/component/teachingPlan/Card';

function Inner({ config }) {
  const [showFeedbacks, setShowFeedbacks] = useState({});
  // 检查答案
  const checkAnswers = () => {
    const feedbacks = {};
    config.quiz.forEach((_, index) => {
      feedbacks[index] = true;
    });
    setShowFeedbacks(feedbacks);
  };

  return (
    <div className={styles.container}>
      <Section>
        {/* TODO: 学习伙伴随机抽，博客链接更灵活 */}
        <h2 className={styles.teachingPlanH2}>{config.welcome.title}</h2>
        <p>{config.welcome.content}</p>
        <Card>
          题目太难？回去学习：
          <Link to={config.welcome.backLink.url}>
            <TPButton>{config.welcome.backLink.text}</TPButton>
          </Link>
        </Card>
        {
          config.quiz.map((quiz, index) => (
            <QuizContainer
              key={index}
              index={index}
              quiz={quiz}
              showFeedbacks={showFeedbacks}
            />
          ))
        }
        <div className={styles.checkAnswersContainer}>
          <TPButton onClick={checkAnswers}>
            检查答案
          </TPButton>
        </div>
      </Section>
    </div>
  );
}

export default function HardQuestionsPage({ config }) {
  return (
    <>
      <Helmet>
        <title>更难的《{config.title}》习题</title>
      </Helmet>
      <Inner config={config} />
    </>
  );
}
