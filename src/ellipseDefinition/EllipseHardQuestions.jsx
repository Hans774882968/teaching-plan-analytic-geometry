import { useState } from 'react';
import { config } from './hardQuestionsConfig';
import QuizContainer from './QuizContainer';
import { Helmet } from 'react-helmet-async';
// TODO: 解决样式冲突风险
import '../common/teachingPlans.css';
import './EllipseDefinition.scss';

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
    <div className="container">
      <section className="teaching-plan-section">
        <h2 className="teaching-plan-h2">🧠 知识大挑战</h2>
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
        <div className="check-answers-container">
          <button
            className="check-answers"
            onClick={checkAnswers}
          >
            检查答案
          </button>
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
