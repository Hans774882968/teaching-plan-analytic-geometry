import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export const hyperbolaConfig = {
  title: '📐 双曲线的定义与基本性质 🔍',
  lpName: 'conan',
  welcome: {
    title: '👬 欢迎Hans7学习双曲线',
    content: <p>
      我是你的数学学习伙伴柯南！今天我们来学习
      <strong className={styles.highlight}>双曲线</strong>
      的定义、性质和一些重要结论。双曲线是一种重要的圆锥曲线，在数学和物理中都有广泛应用。
    </p>,
  },
  knowledgePoints: [
    {
      title: '📏 双曲线的定义',
      content: (
        <>
          <p>双曲线是平面上到两个定点（焦点）的距离差的绝对值为定值的点的轨迹。数学表达式：<TeX>{String.raw`|PF_1 - PF_2| = 2a`}</TeX></p>
          <p>其中：</p>
          <ul>
            <li><strong className={styles.highlight}>F₁, F₂</strong> 是双曲线的两个焦点</li>
            <li><strong className={styles.highlight}>2a</strong> 是实轴长度</li>
          </ul>
        </>
      ),
    },
    {
      title: '📐 标准方程',
      content: (
        <>
          <p>中心在原点，焦点在x轴上的双曲线标准方程：</p>
          <TeX block>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1`}</TeX>
          <p>中心在原点，焦点在y轴上的双曲线标准方程：</p>
          <TeX block>{String.raw`\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1`}</TeX>
          <p>其中：</p>
          <ul>
            <li><strong className={styles.highlight}>a</strong> 是半实轴长度</li>
            <li><strong className={styles.highlight}>b</strong> 是半虚轴长度</li>
            <li><strong className={styles.highlight}>c</strong> 是焦距的一半。满足 <TeX>{String.raw`c^2 = a^2 + b^2`}</TeX></li>
          </ul>
        </>
      ),
    },
    {
      title: '📏 渐近线',
      content: (
        <>
          <p>
            双曲线有两条渐近线，当双曲线无限延伸时，曲线会无限接近这两条直线。
            对于标准方程 <TeX>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1`}</TeX>，渐近线方程为：
          </p>
          <TeX block>{String.raw`y = \pm \frac{b}{a}x`}</TeX>
          <p>
            同理，对于标准方程 <TeX>{String.raw`\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1`}</TeX>，渐近线方程为：
            <TeX>{String.raw`y = \pm \frac{a}{b}x`}</TeX>
          </p>
        </>
      ),
      thinks: [
        {
          think: '渐近线的斜率是如何确定的？',
          answer: <p>当x趋于无穷时，<TeX>{String.raw`\frac{x^2}{a^2}, \ \frac{y^2}{b^2}`}</TeX>也都趋于无穷，所以可近似认为<TeX>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 0`}</TeX>。简单整理即得渐近线的斜率。</p>,
        },
        {
          think: '试着从反函数的角度思考这一知识点！',
          answer: <p>焦点在x轴上时，渐近线的斜率是<TeX>{String.raw`\pm \frac{a}{b}`}</TeX>。把x和y互换，便得到焦点在y轴上的双曲线，简单计算发现，渐近线的斜率变为原来的倒数。</p>,
        },
      ],
    },
    {
      title: '♥️ 离心率',
      content: (
        <>
          <p>双曲线的离心率e定义为焦距与实轴长度的比值：</p>
          <TeX block>{String.raw`e = \frac{c}{a} > 1`}</TeX>
          <p><strong className={styles.highlight}>离心率</strong>反映了双曲线的"开口"程度：</p>
          <ul>
            <li>e越大，双曲线开口越宽</li>
            <li>e越小，双曲线开口越窄</li>
          </ul>
        </>
      ),
    },
    {
      title: '🔍 参数方程',
      content: (
        <>
          <p>双曲线的参数方程可以表示为：</p>
          <TeX block>{String.raw`\begin{cases}
            x = a \sec \theta \\
            y = b \tan \theta
          \end{cases}`}</TeX>
          <p><strong className={styles.hard}>注意</strong>：这里的θ不是几何角度，而是参数。</p>
        </>
      ),
      thinks: [
        {
          think: '如何得到双曲线的参数方程？',
          answer: <p>提示：相关公式：<TeX>{String.raw`\sec^2 \theta = \tan^ 2 \theta + 1, \ sec\theta = \frac{1}{cos\theta}`}</TeX></p>,
        },
      ],
    },
    {
      title: '📐 双曲线的第二定义',
      content: <p>动点P到焦点<TeX>{String.raw`F(c, 0), \ c > 0`}</TeX>的距离与到准线<TeX>{String.raw`l: x = \frac{a^2}{c}`}</TeX>的距离之比等于离心率<TeX>{String.raw`e,\ e > 1`}</TeX>，即为双曲线的右支。</p>,
      thinks: [
        {
          answerRowMaxHeight: '300px',
          think: '如何由双曲线的第二定义推出其标准方程？',
          answer: (
            <div>
              双曲线上任意点 <TeX>{String.raw`P(x, y)`}</TeX> 满足：
              <TeX>{String.raw`\frac{\sqrt{(x - c)^2 + y^2}}{\left|x - \frac{a^2}{c}\right|} = \frac{c}{a}`}</TeX>
              <br />
              考虑双曲线右支（<TeX>{String.raw`x > \frac{a^2}{c}`}</TeX>）：
              <br />
              <TeX>{String.raw`\sqrt{(x - c)^2 + y^2} = \frac{c}{a} \left( x - \frac{a^2}{c} \right)`}</TeX>
              <br />
              化简右边：
              <br />
              <TeX>{String.raw`\sqrt{(x - c)^2 + y^2} = \frac{c}{a}x - a`}</TeX>
              <br />
              两边平方：
              <br />
              <TeX>{String.raw`(x - c)^2 + y^2 = \left( \frac{c}{a}x - a \right)^2`}</TeX>
              <br />
              展开两边：
              <br />
              <TeX>{String.raw`x^2 - 2cx + c^2 + y^2 = \frac{c^2}{a^2}x^2 - 2cx + a^2`}</TeX>
              <br />
              移项整理：
              <br />
              <TeX>{String.raw`x^2 - \frac{c^2}{a^2}x^2 + y^2 = a^2 - c^2`}</TeX>
              <br />
              <TeX>{String.raw`\left(1 - \frac{c^2}{a^2}\right)x^2 + y^2 = a^2 - c^2`}</TeX>
              <br />
              因 <TeX>{String.raw`c > a`}</TeX>，令 <TeX>{String.raw`b^2 = c^2 - a^2`}</TeX>（<TeX>{String.raw`b > 0`}</TeX>)：
              <br />
              <TeX>{String.raw`\left(\frac{a^2 - c^2}{a^2}\right)x^2 + y^2 = -(c^2 - a^2)`}</TeX>
              <br />
              <TeX>{String.raw`-\frac{b^2}{a^2}x^2 + y^2 = -b^2`}</TeX>
              <br />
              两边乘以 -1：
              <br />
              <TeX>{String.raw`\frac{b^2}{a^2}x^2 - y^2 = b^2`}</TeX>
              <br />
              两边同除 <TeX>{String.raw`b^2`}</TeX> 得标准方程：
              <br />
              <TeX>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1`}</TeX>
              <br />
              注：左支推导同理（取焦点 <TeX>{String.raw`F(-c,0)`}</TeX> 和准线 <TeX>{String.raw`x = -\frac{a^2}{c}`}</TeX>），得到相同方程。
            </div>
          ),
        },
      ],
    },
  ],
  thinks: [
    {
      think: '为什么双曲线的离心率e必须大于1？',
      answer: <p>因为根据定义<TeX>{String.raw`c > a`}</TeX>，所以<TeX>{String.raw`e = \frac{c}{a} > 1`}</TeX>。这与椭圆的情况不同，椭圆的离心率<TeX>{String.raw`0 \leq e < 1`}</TeX>。</p>,
    },
    {
      think: '如何从双曲线的标准方程判断它的开口方向？',
      answer: <p>看<TeX>{String.raw`x^2`}</TeX>和<TeX>{String.raw`y^2`}</TeX>项系数的符号：如果<TeX>{String.raw`x^2`}</TeX>项为正，开口方向为左右；如果<TeX>{String.raw`y^2`}</TeX>项为正，开口方向为上下。'</p>,
    },
  ],
  geogebraSection: {
    title: '🔬 双曲线实验',
    geogebraList: [
      {
        description: '拖动点A，观察双曲线上点到两焦点的距离差',
        config: {
          id: 'hyperbola-definition-1',
          height: 720,
          appletOnLoad: (applet) => {
            applet.evalCommand('hyperbola: x^2/16 - y^2/9 = 1');
            applet.setColor('hyperbola', 255, 0, 0);
            applet.setLineThickness('hyperbola', 3);
            applet.setCaption('hyperbola', '双曲线: \\frac{x^2}{16} - \\frac{y^2}{9} = 1');

            applet.evalCommand('A: Point(hyperbola)');
            applet.evalCommand('F1: (5, 0)');
            applet.evalCommand('F2: (-5, 0)');
            applet.evalCommand('s1: Segment(F1, A)');
            applet.evalCommand('s2: Segment(F2, A)');
            applet.evalCommand('diff: abs(s1 - s2)');
            applet.evalCommand('e: sqrt(16 + 9) / sqrt(16)');

            applet.evalCommand('asymptote1: y = (3/4)x');
            applet.evalCommand('asymptote2: y = -(3/4)x');
            applet.setColor('asymptote1', 0, 0, 255);
            applet.setColor('asymptote2', 0, 0, 255);
            applet.setLineThickness('asymptote1', 1);
            applet.setLineThickness('asymptote2', 1);

            applet.setCoordSystem(-10, 10, -8, 8);
          },
        },
        appletOnLoadId: 'src%5ChyperbolaDefinition%5Cconfig.jsx-hyperbola-definition-1',
      },
      {
        description: '双曲线的反函数： A\' 确实在 hyperbola2 上',
        config: {
          id: 'hyperbola-definition-2',
          height: 560,
          appletOnLoad: (applet) => {
            applet.evalCommand('hyperbola1: x^2/16 - y^2/9 = 1');
            applet.setColor('hyperbola1', 255, 0, 0);
            applet.setLineThickness('hyperbola1', 3);
            applet.evalCommand('hyperbola2: y^2/16 - x^2/9 = 1');
            applet.setColor('hyperbola2', 0, 0, 255);
            applet.setLineThickness('hyperbola2', 3);

            applet.evalCommand('A: Point(hyperbola1)');
            applet.evalCommand('l: y = x');
            applet.evalCommand('A\': Reflect(A, l)');
            applet.setLineThickness('l', 1);
            applet.evalCommand('Distance(A\', hyperbola2)');

            applet.setCoordSystem(-10, 10, -8, 8);
          },
        },
        appletOnLoadId: 'src%5ChyperbolaDefinition%5Cconfig.jsx-hyperbola-definition-2',
      },
    ],
  },
  quiz: [
    {
      question: <>双曲线 <TeX>{String.raw`\frac{x^2}{9} - \frac{y^2}{16} = 1`}</TeX> 的实轴长度是多少？</>,
      options: ['3', '6', '4', '8'],
      correct: 1,
      explanation: <p>标准方程中 <TeX>{String.raw`a^2 = 9`}</TeX> ，所以 <TeX>{String.raw`a = 3`}</TeX> ，实轴长度 <TeX>{String.raw`2a = 6`}</TeX></p>,
    },
    {
      question: '双曲线的离心率e的范围是？',
      options: [
        <TeX>{String.raw`e > 1`}</TeX>,
        <TeX>{String.raw`0 < e < 1`}</TeX>,
        <TeX>{String.raw`e = 1`}</TeX>,
        <TeX>{String.raw`e \geq 0`}</TeX>,
      ],
      correct: 0,
      explanation: '双曲线的离心率总是大于1',
    },
    {
      question: <>双曲线 <TeX>{String.raw`\frac{y^2}{4} - \frac{x^2}{5} = 1`}</TeX> 的渐近线方程是？</>,
      options: [
        <TeX>{String.raw`y = \pm \frac{2\sqrt{5}}{5} x`}</TeX>,
        <TeX>{String.raw`y = \pm \frac{\sqrt{5}}{2} x`}</TeX>,
        <TeX>{String.raw`y = \pm \frac{4}{5} x`}</TeX>,
        <TeX>{String.raw`y = \pm \frac{5}{4} x`}</TeX>,
      ],
      correct: 0,
      explanation: <p><TeX>{String.raw`a = 2,\ b = \sqrt5`}</TeX>，所以渐近线斜率为<TeX>{String.raw`\pm \frac{a}{b} = \pm \frac{2}{\sqrt5}`}</TeX></p>,
    },
  ],
  summary: {
    title: '🎉 恭喜完成双曲线探索！',
    content: 'Hans7，今天我们学习了双曲线的定义、标准方程、渐近线、离心率等重要概念。双曲线在物理光学、天体力学等领域都有重要应用。数学就像侦探破案，每一步都需要仔细观察和严谨推理。继续努力，你一定能成为数学界的"名侦探"！',
  },
};
