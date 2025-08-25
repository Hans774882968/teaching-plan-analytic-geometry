import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from '@/component/teachingPlan/basic.module.scss';

import MarkdownRenderer from '@/component/MarkdownRenderer';

// 导入教学组件
import Section from '@/component/teachingPlan/Section';
import KnowledgePoint from '@/component/teachingPlan/KnowledgePoint';
import Header from '@/component/teachingPlan/Header';
import LearningPartnerCard from '@/component/teachingPlan/LearningPartnerCard';
import Think from '@/component/teachingPlan/Think';
import Footer from '@/component/teachingPlan/Footer';
import QuizContainer from '@/component/QuizContainer';
import Card from '@/component/teachingPlan/Card';
import TPButton from '@/component/TPButton';
import Geogebra from '@/component/Geogebra';

// 导入图片
import conanThinking from '@/assets/conan-thinking-1.png';
import conanThumbUp from '@/assets/conan-thumb-up-1.png';

// 导入配置
import config from './config';
import { Link } from 'react-router-dom';

import appletOnLoadCollection from '@/appletOnLoadCollection';

import { TypeAnimation } from 'react-type-animation';
import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter();

function Inner() {
  const [showFeedbacks, setShowFeedbacks] = useState({});

  const appletOnLoadCodeBlock = `
\`\`\`js
${appletOnLoadCollection[config.appletOnLoadId] || ''}
\`\`\`
`;

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
        <h1 className={styles.teachingPlanH1}>
          {config.title}
        </h1>
        <p>
          <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={[
              '与名侦探柯南一起探索抛物线的奥秘！',
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
          imgNode={(lpStyles) => <img src={conanThinking} alt="柯南思考" className={lpStyles.conanImg} />}
        >
          <h2 className={styles.teachingPlanH2}>{config.welcome.title}</h2>
          <p>{config.welcome.content}</p>
        </LearningPartnerCard>
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>📚 核心知识点</h2>
        <p>我们将学习抛物线的核心知识点，注意标记的重点和难点！</p>
        {config.knowledgePoints.map((point, index) => (
          <KnowledgePoint key={index}>
            <h3 className={styles.teachingPlanH3}>
              {index + 1}. {point.title}
            </h3>
            <div className="space-y-3">{point.content}</div>

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
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>💡 深度思考</h2>
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
        <h2 className={styles.teachingPlanH2}>🔬 实验互动</h2>
        <Card>
          <p>拖动点A，观察焦点到抛物线上点的距离与到准线距离的关系：</p>
          <MarkdownRenderer content={appletOnLoadCodeBlock} />
        </Card>
        <Geogebra
          {...config.geogebraConfig}
        />
        <Card>
          <strong className={styles.highlight}>观察结论</strong>：无论点A在抛物线上如何移动，红色线段|FA|总是等于蓝色线段|AB|，这验证了抛物线的定义。
        </Card>
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>🧠 知识挑战</h2>
        <p>测试一下你对抛物线的理解吧！</p>

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
          <Link to="/parabola-hard-questions"><TPButton>更难的抛物线习题</TPButton></Link>
        </Card>
      </Section>

      <Section>
        <LearningPartnerCard
          imgNode={(lpStyles) => <img src={conanThumbUp} alt="柯南点赞" className={lpStyles.conanImg} />}
        >
          <h2 className={styles.teachingPlanH2}>{config.summary.title}</h2>
          <p>{config.summary.content}</p>
        </LearningPartnerCard>
      </Section>

      <Footer>
        <p>
          © 2025 数学课件 | 抛物线专题 | 制作：hans7
        </p>
      </Footer>
    </div>
  );
}

export default function ParabolaDefinition() {
  return (
    <>
      <Helmet>
        <title>{config.title}</title>
      </Helmet>
      <Inner />
    </>
  );
}
