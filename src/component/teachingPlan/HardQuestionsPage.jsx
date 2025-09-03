import { useState } from 'react';
import QuizContainer from '@/component/QuizContainer';
import { Helmet } from 'react-helmet-async';
import styles from '@/component/teachingPlan/basic.module.scss';
import TPButton from '@/component/TPButton';
import { Link } from 'react-router-dom';
import Section from '@/component/teachingPlan/Section';
import LearningPartnerCard from '@/component/teachingPlan/LearningPartnerCard';
import LearningPartnerImg from '@/component/teachingPlan/LearningPartnerImg';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import { sample } from 'lodash-es';
import { learningPartnerKeys } from '@/common/learningPartnerData';
import { wrapStringAsParagraph } from './utils';
import { getLinkItemsMdText, isNonEmptyArray } from '@/lib/utils';

function BackLink({ backLinks }) {
  if (!isNonEmptyArray(backLinks)) {
    return null;
  }
  if (backLinks.length === 1) {
    return (
      <>
        题目太难？回去学习：
        <Link to={backLinks[0].url}>
          <TPButton>{backLinks[0].text}</TPButton>
        </Link>
      </>
    );
  }
  const linkItemsMdText = getLinkItemsMdText(backLinks, '题目太难？回去学习：');
  return (
    <MarkdownRenderer
      className="not-prose"
      content={linkItemsMdText}
    />
  );
}

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

  const randomLp = sample(learningPartnerKeys);

  return (
    <div className={styles.container}>
      <Section>
        <LearningPartnerCard
          imgNode={(lpStyles) => (
            <LearningPartnerImg
              lpStyles={lpStyles}
              name={randomLp}
              status="thinking"
            />
          )}
        >
          <h2 className={styles.teachingPlanH2}>{config.welcome.title}</h2>
          {wrapStringAsParagraph(config.welcome.content)}
          <BackLink backLinks={config.welcome.backLinks} />
        </LearningPartnerCard>
      </Section>
      <Section>
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
