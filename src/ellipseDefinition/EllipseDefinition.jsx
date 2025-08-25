import { useState } from 'react';
import { config } from './config';
import Geogebra from '@/component/Geogebra';
import styles from '@/component/teachingPlan/basic.module.scss';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import conanThinking from '@/assets/conan-thinking-1.png';
import conanThumbUp from '@/assets/conan-thumb-up-1.png';
import QuizContainer from '@/component/QuizContainer';
import { Helmet } from 'react-helmet-async';
import TPButton from '@/component/TPButton';
import { Link } from 'react-router-dom';
import Section from '@/component/teachingPlan/Section';
import KnowledgePoint from '@/component/teachingPlan/KnowledgePoint';
import Card from '@/component/teachingPlan/Card';
import Header from '@/component/teachingPlan/Header';
import LearningPartnerCard from '../component/teachingPlan/LearningPartnerCard';
import Think from '@/component/teachingPlan/Think';
import Footer from '@/component/teachingPlan/Footer';
import appletOnLoadCollection from '@/appletOnLoadCollection';
import { TypeAnimation } from 'react-type-animation';
import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter();

const Inner = () => {
  const [showFeedbacks, setShowFeedbacks] = useState({});

  const appletOnLoadCodeBlock = `
\`\`\`js
${appletOnLoadCollection[config.geogebraObject.appletOnLoadId] || ''}
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
        <h1 className={styles.teachingPlanH1}>🔭 {config.title} 🔍</h1>
        <p>
          <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={[
              '与名侦探柯南一起揭开椭圆的神秘面纱！',
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
          imgNode={(lpStyles) => <img src={conanThinking} className={lpStyles.conanImg} alt="柯南思考中" />}
        >
          <h2 className={styles.teachingPlanH2}>👬 {config.welcome.title}</h2>
          <p>{config.welcome.content}</p>
        </LearningPartnerCard>
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>📚 椭圆的定义与基本性质</h2>

        <KnowledgePoint>
          <h3 className={styles.teachingPlanH3}>📏 {config.definition.title}</h3>
          <p>{config.definition.content}</p>
          <p>数学表达式：对于任意点P在椭圆上，有 {config.definition.mathExpression}，其中F₁和F₂是焦点，2a是常数。</p>
        </KnowledgePoint>

        <KnowledgePoint>
          <h3 className={styles.teachingPlanH3}>📐 {config.equation.title}</h3>
          <p>{config.equation.contentX}</p>
          <div>{config.equation.formulaX}</div>
          <p>其中：</p>
          <ul>
            {
              config.equation.parameters.map((param, i) => (
                <li key={i}>{param}</li>
              ))
            }
          </ul>
          <p>{config.equation.contentY}</p>
          <div>{config.equation.formulaY}</div>
          <Think
            think={config.equation.thinkWhenAEqB}
            answer={config.equation.answerWhenAEqB}
          />
          <Think
            think={config.equation.letUsDeriveQ}
            answer={config.equation.letUsDeriveA}
            answerRowMaxHeight='300px'
          />
        </KnowledgePoint>

        <KnowledgePoint>
          <h3 className={styles.teachingPlanH3}>🔍 {config.properties.title}</h3>
          {config.properties.items.map((item, i) => (
            <p key={i}>{i + 1}. {item}</p>
          ))}
        </KnowledgePoint>
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>🔬 椭圆实验室</h2>
        <Card>
          <p>移动动点A，实时观察椭圆的变化：</p>
          <MarkdownRenderer content={appletOnLoadCodeBlock} />
        </Card>
        <Geogebra
          id={config.geogebraObject.config.id}
          height={720}
          showToolbar={true}
          showMenuBar={true}
          allowStyleBar={true}
          showAlgebraInput={true}
          enableLabelDrags={false}
          enableShiftDragZoom={true}
          capturingThreshold={null}
          showToolBarHelp={false}
          errorDialogsActive={true}
          showTutorialLink={true}
          appletOnLoad={config.geogebraObject.config.appletOnLoad}
        />
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>💡 椭圆二级结论</h2>

        {config.secondary.map((item, i) => (
          <Card key={i}>
            <h3 className={styles.teachingPlanH3}>{item.title}</h3>
            <p>{item.content}</p>
            {item.points && (
              <ul>
                {item.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </Section>

      <Section>
        <h2 className={styles.teachingPlanH2}>🧠 知识挑战</h2>
        <p>测试一下你对椭圆的理解吧！</p>

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

        <Card>
          题目太水？试试：
          <Link to="/ellipse-hard-questions"><TPButton>更难的椭圆习题</TPButton></Link>
        </Card>
      </Section>

      <Section>
        <LearningPartnerCard
          imgNode={(lpStyles) => <img src={conanThumbUp} className={lpStyles.conanImg} alt="柯南点赞" />}
        >
          <h2 className={styles.teachingPlanH2}>🎉 {config.conclusion.title}</h2>
          <p>{config.conclusion.content}</p>
          <p>{config.conclusion.tip}</p>
        </LearningPartnerCard>
      </Section>

      <Footer>
        <p>© 2025 椭圆探索之旅 | 为Hans7特别定制 | 数学侦探柯南</p>
      </Footer>
    </div>
  );
};

export default function EllipseDefinition() {
  return (
    <>
      <Helmet>
        <title>椭圆的定义、基本性质与二级结论</title>
      </Helmet>
      <Inner />
    </>
  );
}
