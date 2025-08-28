import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: '📐 抛物线的奥秘 🔍',
  lpName: 'conan',
  welcome: {
    title: '👬 欢迎Hans7来到抛物线世界',
    content: '我是你的学习伙伴柯南，今天我们一起探索抛物线这个神奇的曲线！抛物线不仅是数学中的重要概念，在物理、工程和日常生活中也有广泛应用。',
  },
  knowledgePoints: [
    {
      title: '📏 抛物线的定义',
      content: (
        <div>
          <p>抛物线是平面上到<strong className={styles.highlight}>定点</strong>（焦点）和<strong className={styles.highlight}>定直线</strong>（准线）距离相等的点的轨迹。</p>
          <p>数学定义：给定点F（焦点）和直线l（准线），点P满足|PF| = |P到l的距离|，则P的轨迹是抛物线。</p>
          <p><strong className={styles.hard}>难点理解</strong>：焦点和准线是定义抛物线的关键要素，它们决定了抛物线的形状和位置。</p>
        </div>
      ),
      thinks: [
        {
          think: '为什么抛物线有如此完美的反射特性？这与它的几何定义有何关联？',
          answer: '抛物线的反射特性源于其定义：焦点到抛物线上任一点的距离等于该点到准线的距离。这使得从焦点发出的光线经抛物线反射后，所有反射光线都平行于对称轴，满足"光程相等"原理。',
        },
      ],
    },
    {
      title: '📐 标准方程',
      content: (
        <div>
          <p>当顶点在原点，焦点在x轴上时，标准方程为：</p>
          <TeX>{String.raw`y^2 = 2px`}</TeX>
          <p>其中：</p>
          <ul>
            <li>p 是焦点到准线的距离</li>
            <li>焦点坐标为 <TeX>{String.raw`(\frac{p}{2}, 0)`}</TeX></li>
            <li>准线方程为 <TeX>{String.raw`x = -\frac{p}{2}`}</TeX></li>
          </ul>
          <p><strong className={styles.highlight}>重要结论</strong>：开口方向由p的符号决定，<TeX>{String.raw`p > 0`}</TeX>时开口向右，<TeX>{String.raw`p < 0`}</TeX>时开口向左。</p>
        </div>
      ),
    },
    {
      title: '🔍 几何性质',
      content: (
        <div>
          <p>1. <strong className={styles.highlight}>对称性</strong>：抛物线是轴对称图形，对称轴是通过焦点且垂直于准线的直线。</p>
          <p>2. <strong className={styles.hard}>焦点性质</strong>：从焦点发出的光线经抛物线反射后会平行于对称轴。</p>
          <p>3. 顶点是抛物线上离焦点和准线最近的点。</p>
          <p>4. 离心率<TeX>{String.raw`e=1`}</TeX>，这是抛物线的定义特征。</p>
        </div>
      ),
    },
    {
      title: '🔍 参数方程',
      content: (
        <div>
          <p>抛物线<TeX>{String.raw`y^2 = 2px`}</TeX>的参数方程为：</p>
          <TeX block>{String.raw`\begin{cases} x = 2pt^2 \\ y = 2pt \end{cases}`}</TeX>
          <p>其中t为参数，表示抛物线上点的位置。</p>
          <p><strong className={styles.highlight}>应用</strong>：参数方程在解决与角度相关的问题时非常有用。</p>
        </div>
      ),
    },
    {
      title: '💡 二级结论',
      content: (
        <div>
          <p>1. 过抛物线<TeX>{String.raw`y^2 = 2px`}</TeX>上一点<TeX>{String.raw`(x_0, y_0)`}</TeX>的切线方程为：</p>
          <TeX block>{String.raw`y y_0 = p(x + x_0)`}</TeX>

          <p>
            2. 焦点弦性质：过焦点F的弦AB满足：
            <TeX>{String.raw`\frac{1}{|AF|} + \frac{1}{|BF|} = \frac{1}{p}`}</TeX>，
            其中<TeX>{String.raw`|AF| = \frac{p}{1 - cos\theta},\ BF = \frac{p}{1 + cos\theta}`}</TeX>，
            <TeX>{String.raw`tan\theta`}</TeX>为AB的斜率
          </p>

          <p>3. <strong className={styles.hard}>光学性质</strong>：抛物线的切线平分焦点与切点连线和切点与准线垂线的夹角。</p>
        </div>
      ),
    },
  ],
  thinks: [
    {
      think: '如何求过抛物线上一点的切线方程？',
      answerRowMaxHeight: '300px',
      answer: (
        <div>
          <p>设抛物线<TeX>{String.raw`y^2 = 2px`}</TeX>上一点<TeX>{String.raw`P(x_0, y_0)`}</TeX></p>
          <p>对抛物线方程两边求导：<TeX>{String.raw`2y \frac{dy}{dx} = 2p`}</TeX></p>
          <p>得到斜率：<TeX>{String.raw`k = \frac{dy}{dx} = \frac{p}{y_0}`}</TeX></p>
          <p>切线方程：<TeX>{String.raw`y - y_0 = \frac{p}{y_0}(x - x_0)`}</TeX></p>
          <p>化简得：<TeX>{String.raw`y y_0 = p(x + x_0)`}</TeX></p>
        </div>
      ),
    },
  ],
  geogebraConfig: {
    id: 'parabola-definition',
    height: 600,
    appletOnLoad: (applet) => {
      const p = 2;
      applet.evalCommand(`parabola: y^2 = ${2 * p}x`); // 抛物线 y²=4x
      applet.evalCommand(`F: (${p / 2}, 0)`); // 焦点
      applet.evalCommand(`d: x = -${p / 2}`); // 准线
      applet.evalCommand('A: Point(parabola)'); // 抛物线上动点
      applet.evalCommand('s1: Segment(F, A)'); // 焦点到A的线段
      applet.evalCommand('h: PerpendicularLine(A, d)');
      applet.evalCommand('B: Intersect(d, h)');
      applet.evalCommand('s2: Segment(A, B)'); // A到准线垂线
      applet.setColor('s1', 255, 0, 0);
      applet.setColor('s2', 0, 0, 255);
      applet.setColor('h', 0, 0, 255);
      applet.setLineStyle('h', 1);
      applet.setLineThickness('s1', 5);
      applet.setLineThickness('s2', 5);
      applet.setCoordSystem(-5, 5, -5, 5);
    },
  },
  appletOnLoadId: 'src%5CparabolaDefinition%5Cconfig.jsx-parabola-definition',
  quiz: [
    {
      qid: '抛物线的定义与性质-1',
      question: <p>抛物线 <TeX>{String.raw`y^2 = 8x`}</TeX> 的焦点坐标是？</p>,
      options: [
        '(2, 0)',
        '(4, 0)',
        '(0, 2)',
        '(0, 4)',
      ],
      correct: 0,
      explanation: <p>标准方程 <TeX>{String.raw`y^2 = 2px`}</TeX>，其中 <TeX>{String.raw`2p = 8`}</TeX>，所以 <TeX>{String.raw`p = 4`}</TeX>，焦点坐标为 <TeX>{String.raw`(\frac{p}{2}, 0) = (2, 0)`}</TeX></p>,
    },
    {
      qid: '抛物线的定义与性质-2',
      question: '下列关于抛物线性质的描述，错误的是？',
      options: [
        '离心率恒等于1',
        '是轴对称图形',
        '是中心对称图形',
        '有一个焦点和一条准线',
      ],
      correct: 2,
      explanation: '抛物线是轴对称图形，但不是中心对称图形，它没有对称中心。',
    },
    {
      qid: '抛物线的定义与性质-3',
      question: <p>过抛物线 <TeX>{String.raw`y^2 = 4x`}</TeX> 焦点且垂直于x轴的弦长是？</p>,
      options: [
        '2',
        '4',
        '8',
        '16',
      ],
      correct: 1,
      explanation: <p>焦点<TeX>{String.raw`(1,0)`}</TeX>，垂直于x轴的直线为<TeX>{String.raw`x=1`}</TeX>，代入方程得 <TeX>{String.raw`y^2 = 4`}</TeX>，所以 <TeX>{String.raw`y = \pm2`}</TeX>，弦长为<TeX>{String.raw`|2-(-2)|=4`}</TeX></p>,
    },
  ],
  summary: {
    title: '🎉 恭喜完成抛物线学习！',
    content: 'Hans7，你已经掌握了抛物线的基本定义、标准方程、几何性质和重要二级结论。这些知识在解决物理光学问题和工程抛物线设计时非常有用。继续加油，数学侦探！',
  },
};
