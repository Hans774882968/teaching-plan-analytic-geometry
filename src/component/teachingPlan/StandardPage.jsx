import { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '@/component/teachingPlan/basic.module.scss';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import QuizContainer from '@/component/QuizContainer';
import Geogebra from '@/component/Geogebra';
import TPButton from '@/component/TPButton';
import conanThinking from '@/assets/conan-thinking-1.png';
import conanThumbUp from '@/assets/conan-thumb-up-1.png';
import Section from '@/component/teachingPlan/Section';
import KnowledgePoint from '@/component/teachingPlan/KnowledgePoint';
import Card from '@/component/teachingPlan/Card';
import Header from '@/component/teachingPlan/Header';
import LearningPartnerCard from '@/component/teachingPlan/LearningPartnerCard';
import Think from '@/component/teachingPlan/Think';
import Footer from '@/component/teachingPlan/Footer';
import { Link } from 'react-router-dom';

function wrapStringAsParagraph(node) {
  if (typeof node === 'string') {
    return <p>{node}</p>;
  }
  return node;
}

function Inner({ config }) {
  const [showFeedbacks, setShowFeedbacks] = useState({});

  const checkAnswers = () => {
    const feedbacks = {};
    config.quizSection.quiz.forEach((_, index) => {
      feedbacks[index] = true;
    });
    setShowFeedbacks(feedbacks);
  };

  return (
    <div className={styles.container}>
      <Header>
        <h1 className={styles.teachingPlanH1}>{config.title}</h1>
        {wrapStringAsParagraph(config.header.content)}
      </Header>

      <Section>
        <LearningPartnerCard
          imgNode={(lpStyles) => <img src={conanThinking} className={lpStyles.conanImg} />}
        >
          <h2 className={styles.teachingPlanH2}>{config.welcome.title}</h2>
          {wrapStringAsParagraph(config.welcome.content)}
        </LearningPartnerCard>
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>{config.knowledgePointSection.title}</h2>
        {config.knowledgePointSection.points.map((point, index) => (
          <KnowledgePoint key={index}>
            <h3 className={styles.teachingPlanH3}>{point.title}</h3>
            <MarkdownRenderer content={point.content} />
            {Array.isArray(point.thinks) && point.thinks.map((think, index) => {
              return (
                <Think
                  key={index}
                  {...think}
                />
              );
            })}
          </KnowledgePoint>
        ))}
        {
          Array.isArray(config.knowledgePointSection.thinks) && (
            <Card>
              {
                config.knowledgePointSection.thinks.map((think, index) => (
                  <Think
                    key={index}
                    {...think}
                  />
                ))
              }
            </Card>
          )
        }
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>{config.geogebraSection.title}</h2>
        {
          config.geogebraSection.geogebraList.map((geogebra, index) => {
            return (
              <Fragment key={index}>
                <Card>
                  <MarkdownRenderer content={geogebra.description} />
                </Card>
                <Geogebra {...geogebra.config} />
                <Card>
                  <MarkdownRenderer content={geogebra.conclusion} />
                </Card>
              </Fragment>
            );
          })
        }
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>{config.quizSection.title}</h2>
        {wrapStringAsParagraph(config.quizSection.description)}

        {config.quizSection.quiz.map((quiz, index) => (
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

        <Card>
          题目太水？试试：
          <Link to={config.quizSection.link.url}><TPButton>{config.quizSection.link.text}</TPButton></Link>
        </Card>
      </Section>

      <Section>
        <LearningPartnerCard
          imgNode={(lpStyles) => <img src={conanThumbUp} className={lpStyles.conanImg} />}
        >
          <h2 className={styles.teachingPlanH2}>{config.summary.title}</h2>
          {wrapStringAsParagraph(config.summary.content)}
        </LearningPartnerCard>
      </Section>

      <Footer>
        {wrapStringAsParagraph(config.footer.info)}
      </Footer>
    </div>
  );
}

export default function StandardPage({ config }) {
  return (
    <>
      <Helmet>
        <title>{config.title}</title>
      </Helmet>
      <Inner config={config} />
    </>
  );
}
