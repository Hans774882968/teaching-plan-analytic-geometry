import { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { hyperbolaConfig as config } from './config';
import styles from '../component/teachingPlan/basic.module.scss';
import QuizContainer from '../component/QuizContainer';
import Geogebra from '../component/Geogebra';
import TPButton from '../component/TPButton';
import conanThinking from '@/assets/conan-thinking-1.png';
import conanThumbUp from '@/assets/conan-thumb-up-1.png';
import Section from '../component/teachingPlan/Section';
import KnowledgePoint from '../component/teachingPlan/KnowledgePoint';
import Card from '../component/teachingPlan/Card';
import Header from '../component/teachingPlan/Header';
import LearningPartnerCard from '../component/teachingPlan/LearningPartnerCard';
import Think from '../component/teachingPlan/Think';
import Footer from '@/component/teachingPlan/Footer';

function Inner() {
  const [showFeedbacks, setShowFeedbacks] = useState({});

  const checkAnswers = () => {
    const feedbacks = {};
    config.quiz.forEach((_, index) => {
      feedbacks[index] = true;
    });
    setShowFeedbacks(feedbacks);
  };

  return (
    <div className={styles.container}>
      <Header>
        <h1 className={styles.teachingPlanH1}>{config.title}</h1>
        <p>与名侦探柯南一起探索双曲线的奥秘！</p>
      </Header>

      <Section>
        <LearningPartnerCard
          imgNode={(lpStyles) => <img src={conanThinking} className={lpStyles.conanImg} />}
        >
          <h2 className={styles.teachingPlanH2}>{config.welcome.title}</h2>
          {config.welcome.content}
        </LearningPartnerCard>
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>📚 双曲线的定义与基本性质</h2>
        {config.knowledgePoints.map((point, index) => (
          <KnowledgePoint key={index}>
            <h3 className={styles.teachingPlanH3}>{point.title}</h3>
            {point.content}
            {point.thinks && point.thinks.map((think, index) => {
              return (
                <Think
                  key={index}
                  think={think.question}
                  answer={think.answer}
                />
              );
            })}
          </KnowledgePoint>
        ))}
        <Card>
          {config.thinks.map((think, index) => (
            <Think
              key={index}
              think={think.question}
              answer={think.answer}
              answerRowMaxHeight="300px"
            />
          ))}
        </Card>
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>{config.geogebraSection.title}</h2>
        {
          config.geogebraSection.geogebraList.map((geogebra, index) => {
            return (
              <Fragment key={index}>
                <p>{geogebra.description}</p>
                <Geogebra {...geogebra.config} />
              </Fragment>
            );
          })
        }
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>🧠 知识挑战</h2>
        <p>测试一下你对双曲线的理解吧！</p>

        {config.quiz.map((quiz, index) => (
          <QuizContainer
            key={index}
            index={index}
            quiz={quiz}
            showFeedbacks={showFeedbacks}
          />
        ))}

        <div className={styles.checkAnswersContainer}>
          <TPButton onClick={checkAnswers}>
            检查答案
          </TPButton>
        </div>
      </Section>

      <Section>
        <LearningPartnerCard
          imgNode={(lpStyles) => <img src={conanThumbUp} className={lpStyles.conanImg} />}
        >
          <h2 className={styles.teachingPlanH2}>{config.summary.title}</h2>
          <p>{config.summary.content}</p>
        </LearningPartnerCard>
      </Section>

      <Footer>
        <p>© 2025 双曲线探索之旅 | 为Hans7特别定制 | 数学侦探柯南</p>
      </Footer>
    </div>
  );
}

export default function HyperbolaDefinition() {
  return (
    <>
      <Helmet>
        <title>{config.title}</title>
      </Helmet>
      <Inner />
    </>
  );
}
