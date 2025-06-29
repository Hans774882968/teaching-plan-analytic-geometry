import { useState } from 'react';
import { config } from './hardQuestionsConfig';
import QuizContainer from './QuizContainer';
import { Helmet } from 'react-helmet-async';
import styles from './EllipseDefinition.module.scss';
import TPButton from '../component/TPButton';

function Inner() {
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
      <section className={styles.teachingPlanSection}>
        <h2 className={styles.teachingPlanH2}>🧠 知识大挑战</h2>
        <p>🔥 来测试一下你对椭圆的理解够不够深刻吧！</p>
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
      </section>
    </div>
  );
}

export default function EllipseHardQuestions() {
  return (
    <>
      <Helmet>
        <title>更难的椭圆习题</title>
      </Helmet>
      <Inner />
    </>
  );
}
