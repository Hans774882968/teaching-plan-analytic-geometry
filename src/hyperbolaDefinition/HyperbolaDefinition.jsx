import { Fragment, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { hyperbolaConfig as config } from './config';
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
import appletOnLoadCollection from '@/appletOnLoadCollection';
import { TypeAnimation } from 'react-type-animation';
import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter();

function Inner() {
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
  }, []);

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
        <p>
          <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={[
              '与名侦探柯南一起探索双曲线的奥秘！',
              1000,
              '',
              1000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </p>
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
                  {...think}
                />
              );
            })}
          </KnowledgePoint>
        ))}
        <Card>
          {config.thinks.map((think, index) => (
            <Think
              key={index}
              {...think}
            />
          ))}
        </Card>
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>{config.geogebraSection.title}</h2>
        {
          config.geogebraSection.geogebraList.map((geogebra, index) => {
            const appletOnLoadCodeBlock = appletOnLoadCodeBlockList[index];

            return (
              <Fragment key={index}>
                <Card>
                  <p>{geogebra.description}</p>
                  <MarkdownRenderer content={appletOnLoadCodeBlock} />
                </Card>
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

        <Card>
          题目太水？试试：
          <Link to="/hyperbola-hard-questions"><TPButton>更难的双曲线习题</TPButton></Link>
        </Card>
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
