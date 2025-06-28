import { useState } from 'react';
import { config } from './config';
import Geogebra from '../component/Geogebra';
import 'katex/dist/katex.min.css';
import './EllipseDefinition.css';
import conanThinking from '../assets/conan-thinking-1.png';
import conanThumbUp from '../assets/conan-thumb-up-1.png';

const EllipseDefinition = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
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

  // 处理选项选择
  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

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
      <header>
        <h1>🔍 {config.title} 🔍</h1>
        <p>与名侦探柯南一起揭开椭圆的神秘面纱！</p>
      </header>

      <section>
        <div className="conan-container">
          <div
            className="floating"
          >
            <img src={conanThinking} className="conan-img" alt="柯南思考中" />
          </div>
        </div>
        <div className="card">
          <h2>{config.welcome.title}</h2>
          <p>{config.welcome.content}</p>
        </div>
      </section>

      <section>
        <h2>椭圆的定义与基本性质</h2>

        <div className="knowledge-point">
          <h3>📏 {config.definition.title}</h3>
          <p>{config.definition.content}</p>
          <p>数学表达式：对于任意点P在椭圆上，有 {config.definition.mathExpression}，其中F₁和F₂是焦点，2a是常数。</p>
        </div>

        <div className="knowledge-point">
          <h3>📐 {config.equation.title}</h3>
          <p>{config.equation.content}</p>
          <div className="important">{config.equation.formula}</div>
          <p>其中：</p>
          <ul>
            {
              config.equation.parameters.map((param, i) => (
                <li key={i}>{param}</li>
              ))
            }
          </ul>
        </div>

        <div className="knowledge-point">
          <h3>🔍 {config.properties.title}</h3>
          {config.properties.items.map((item, i) => (
            <p key={i}>{i + 1}. {item}</p>
          ))}
        </div>
      </section>

      <section>
        <h2>🔬 椭圆实验室</h2>
        <p>调整参数，实时观察椭圆的变化：</p>
        <Geogebra
          id="ellipse-definition-1"
          className="ellipse-definition-1-wrapper"
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

      <section>
        <h2>💡 椭圆二级结论</h2>

        {config.secondary.map((item, i) => (
          <div key={i} className="card">
            <h3>{item.title}</h3>
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

      <section>
        <h2>🧠 知识挑战</h2>
        <p>测试一下你对椭圆的理解吧！</p>

        {config.quiz.map((quiz, index) => (
          <div key={index} className="quiz-container">
            <div className="question">
              {`${index + 1}. `}{quiz.question}
            </div>
            <div className="options">
              {quiz.options.map((option, optIndex) => (
                <div
                  key={optIndex}
                  className={`option ${selectedOptions[index] === optIndex ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(index, optIndex)}
                >
                  {option}
                </div>
              ))}
            </div>
            {showFeedbacks[index] && (
              <div
                className={`feedback ${selectedOptions[index] === quiz.correct ? 'correct' : 'incorrect'}`}
              >
                {selectedOptions[index] === quiz.correct ? '✅ 正确！' : '❌ 错误！'}
                {quiz.explanation}
              </div>
            )}
          </div>
        ))}

        <div className="check-answers-container">
          <button
            className="check-answers"
            onClick={checkAnswers}
          >
            检查答案
          </button>
        </div>
      </section>

      <section>
        <div className="conan-container">
          <div
            className="floating"
          >
            <img src={conanThumbUp} className="conan-img" alt="柯南点赞" />
          </div>
        </div>

        <div className="card">
          <h2>🎉 {config.conclusion.title}</h2>
          <p>{config.conclusion.content}</p>
          <p>{config.conclusion.tip}</p>
        </div>
      </section>

      <footer>
        <p>© 2025 椭圆探索之旅 | 为Hans7特别定制 | 数学侦探柯南</p>
      </footer>
    </div>
  );
};

export default EllipseDefinition;
