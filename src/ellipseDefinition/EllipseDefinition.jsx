import { useState } from 'react';
import { config } from './config';
import Geogebra from '../component/Geogebra';
import 'katex/dist/katex.min.css';
import styles from './EllipseDefinition.module.scss';
import conanThinking from '../assets/conan-thinking-1.png';
import conanThumbUp from '../assets/conan-thumb-up-1.png';
import QuizContainer from './QuizContainer';
import { Helmet } from 'react-helmet-async';
import TPButton from '../component/TPButton';

const Inner = () => {
  const [showFeedbacks, setShowFeedbacks] = useState({});

  const drawEllipse = (applet) => {
    applet.evalCommand('ellipse: x^2/25 + y^2/9 = 1');
    applet.setColor('ellipse', 255, 0, 0);
    applet.setLineThickness('ellipse', 3);
    applet.setCaption('ellipse', '椭圆: \\frac{x^2}{25} + \\frac{y^2}{9} = 1');

    applet.evalCommand('A: Point(ellipse)');
    applet.evalCommand('C1: (4, 0)');
    applet.evalCommand('C2: (-4, 0)');
    applet.evalCommand('s1: Segment(C1, A)');
    applet.evalCommand('s2: Segment(C2, A)');
    applet.evalCommand('lenSum: s1 + s2');

    applet.setCoordSystem(-6, 6, -4, 4);
  };

  const checkAnswers = () => {
    const feedbacks = {};
    config.quiz.forEach((_, index) => {
      feedbacks[index] = true;
    });
    setShowFeedbacks(feedbacks);
  };

  return (
    <div className={styles.container}>
      <header className={styles.teachingPlanHeader}>
        <h1 className={styles.teachingPlanH1}>🔭 {config.title} 🔍</h1>
        <p>与名侦探柯南一起揭开椭圆的神秘面纱！</p>
      </header>

      <section className={styles.teachingPlanSection}>
        <div className={styles.conanContainer}>
          <div
            className={styles.floating}
          >
            <img src={conanThinking} className={styles.conanImg} alt="柯南思考中" />
          </div>
        </div>
        <div className={styles.card}>
          <h2 className={styles.teachingPlanH2}>👬 {config.welcome.title}</h2>
          <p>{config.welcome.content}</p>
        </div>
      </section>

      <section className={styles.teachingPlanSection}>
        <h2 className={styles.teachingPlanH2}>📚 椭圆的定义与基本性质</h2>

        <div className={styles.knowledgePoint}>
          <h3 className={styles.teachingPlanH3}>📏 {config.definition.title}</h3>
          <p>{config.definition.content}</p>
          <p>数学表达式：对于任意点P在椭圆上，有 {config.definition.mathExpression}，其中F₁和F₂是焦点，2a是常数。</p>
        </div>

        <div className={styles.knowledgePoint}>
          <h3 className={styles.teachingPlanH3}>📐 {config.equation.title}</h3>
          <p>{config.equation.content}</p>
          <div className={styles.important}>{config.equation.formula}</div>
          <p>其中：</p>
          <ul>
            {
              config.equation.parameters.map((param, i) => (
                <li key={i}>{param}</li>
              ))
            }
          </ul>
        </div>

        <div className={styles.knowledgePoint}>
          <h3 className={styles.teachingPlanH3}>🔍 {config.properties.title}</h3>
          {config.properties.items.map((item, i) => (
            <p key={i}>{i + 1}. {item}</p>
          ))}
        </div>
      </section>

      <section className={styles.teachingPlanSection}>
        <h2 className={styles.teachingPlanH2}>🔬 椭圆实验室</h2>
        <p>调整参数，实时观察椭圆的变化：</p>
        <Geogebra
          id="ellipse-definition-1"
          className={styles.ellipseDefinition1Wrapper}
          width={1080}
          height={600}
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
          appletOnLoad={drawEllipse}
        />
      </section>

      <section className={styles.teachingPlanSection}>
        <h2 className={styles.teachingPlanH2}>💡 椭圆二级结论</h2>

        {config.secondary.map((item, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.teachingPlanH3}>{item.title}</h3>
            <p>{item.content}</p>
            {item.points && (
              <ul>
                {item.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className={styles.teachingPlanSection}>
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
      </section>

      <section className={styles.teachingPlanSection}>
        <div className={styles.conanContainer}>
          <div
            className={styles.floating}
          >
            <img src={conanThumbUp} className={styles.conanImg} alt="柯南点赞" />
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.teachingPlanH2}>🎉 {config.conclusion.title}</h2>
          <p>{config.conclusion.content}</p>
          <p>{config.conclusion.tip}</p>
        </div>
      </section>

      <footer className={styles.teachingPlanFooter}>
        <p>© 2025 椭圆探索之旅 | 为Hans7特别定制 | 数学侦探柯南</p>
      </footer>
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
