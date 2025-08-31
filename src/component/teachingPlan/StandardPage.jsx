import { Fragment, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '@/component/teachingPlan/basic.module.scss';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import QuizContainer from '@/component/QuizContainer';
import Geogebra from '@/component/Geogebra';
import TPButton from '@/component/TPButton';
import Section from '@/component/teachingPlan/Section';
import KnowledgePoint from '@/component/teachingPlan/KnowledgePoint';
import Card from '@/component/teachingPlan/Card';
import Header from '@/component/teachingPlan/Header';
import LearningPartnerCard from '@/component/teachingPlan/LearningPartnerCard';
import LearningPartnerImg from './LearningPartnerImg';
import Think from '@/component/teachingPlan/Think';
import Footer from '@/component/teachingPlan/Footer';
import { Link } from 'react-router-dom';
import appletOnLoadCollection from '@/appletOnLoadCollection';
import { TypeAnimation } from 'react-type-animation';
import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter();

function wrapStringAsParagraph(node) {
  if (typeof node === 'string') {
    return <p>{node}</p>;
  }
  return node;
}

function Inner({ config }) {
  const headerContent = config.header.content;

  const [showFeedbacks, setShowFeedbacks] = useState({});

  const appletOnLoadCodeBlockList = useMemo(() => {
    return config.geogebraSection.geogebraList.map((geogebra) => {
      const appletOnLoadSrcCode = appletOnLoadCollection[geogebra.appletOnLoadId] || '';
      const res = `
\`\`\`js
${appletOnLoadSrcCode}
\`\`\`
`;
      return res;
    });
  }, [config]);

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
        {
          typeof headerContent === 'string' ? (
            <p>
              <TypeAnimation
                splitter={(str) => splitter.splitGraphemes(str)}
                sequence={[
                  headerContent,
                  3000,
                  '',
                  3000,
                ]}
                speed={30}
                wrapper="span"
                repeat={Infinity}
              />
            </p>
          ) : (
            headerContent
          )
        }
      </Header>

      <Section>
        <LearningPartnerCard
          imgNode={(lpStyles) => (
            <LearningPartnerImg
              lpStyles={lpStyles}
              name={config.lpName}
              status="thinking"
            />
          )}
        >
          <h2 className={styles.teachingPlanH2}>{config.welcome.title}</h2>
          {wrapStringAsParagraph(config.welcome.content)}
        </LearningPartnerCard>
      </Section>

      <Section>
        <MarkdownRenderer
          content={`## ${config.knowledgePointSection.title}`}
        />
        {config.knowledgePointSection.points.map((point, index) => (
          <KnowledgePoint key={index}>
            {
              typeof point.content === 'string' ? (
                <MarkdownRenderer
                  content={`### ${point.title}\n\n${point.content}`}
                />
              ) : (
                <>
                  <MarkdownRenderer
                    content={`### ${point.title}`}
                  />
                  {point.content}
                </>
              )
            }
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
        <MarkdownRenderer
          content={`## ${config.geogebraSection.title}`}
        />
        {
          config.geogebraSection.geogebraList.map((geogebra, index) => {
            const appletOnLoadCodeBlock = appletOnLoadCodeBlockList[index];

            return (
              <Fragment key={index}>
                <Card>
                  <MarkdownRenderer content={geogebra.description} />
                  <MarkdownRenderer content={appletOnLoadCodeBlock} />
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
        <Card>
          {wrapStringAsParagraph(config.quizSection.description)}
        </Card>

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
          imgNode={(lpStyles) => (
            <LearningPartnerImg
              lpStyles={lpStyles}
              name={config.lpName}
              status="thumbUp"
            />
          )}
        >
          <h2 className={styles.teachingPlanH2}>{config.summary.title}</h2>
          <MarkdownRenderer content={config.summary.content} />
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
