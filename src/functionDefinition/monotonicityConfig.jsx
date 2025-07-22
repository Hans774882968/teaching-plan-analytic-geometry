import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: String.raw`📈 函数的单调性 📉`,

  header: {
    content: String.raw`函数的单调性是函数的重要性质，它描述了函数值随自变量变化的趋势`,
  },

  welcome: {
    title: String.raw`👋 欢迎来到函数单调性的探索之旅！`,
    content: (
      <div>
        <h4 className={styles.teachingPlanH4}>🔍 柯南侦探小提示</h4>
        <p>嗨，Hans7！我是名侦探柯南。今天我们将一起破解函数单调性的神秘案件！</p>
        <p>就像侦探需要观察线索的变化规律一样，我们将学习如何分析函数值的变化趋势，找出函数上升和下降的规律。</p>
        <p>准备好你的"数学放大镜"，让我们开始吧！</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`📚 核心知识点`,
    points: [
      {
        title: String.raw`📝 单调性的定义与证明`,
        content: (
          <div>
            <h5 className={styles.teachingPlanH5}>🔍 定义</h5>
            <p>设函数 f(x) 的定义域为 D，区间 I ⊆ D：</p>
            <ul>
              <li>如果对任意 x₁, x₂ ∈ I，当 x₁ &lt; x₂ 时，有 f(x₁) &lt; f(x₂)，则称 f(x) 在区间 I 上<strong className={styles.highlight}>单调递增</strong></li>
              <li>如果对任意 x₁, x₂ ∈ I，当 x₁ &lt; x₂ 时，有 f(x₁) &gt; f(x₂)，则称 f(x) 在区间 I 上<strong className={styles.highlight}>单调递减</strong></li>
            </ul>

            <h5 className={styles.teachingPlanH5}>🔧 证明方法</h5>
            <p>证明函数单调性的两种基本方法：</p>
            <ol>
              <li><strong className={styles.highlight}>定义法</strong>：任取 x₁, x₂ ∈ I (x₁ &lt; x₂)，计算 f(x₁) - f(x₂) 并判断符号</li>
              <li><strong className={styles.highlight}>导数法</strong>：若 f'(x) &gt; 0，则函数递增；若 f'(x) &lt; 0，则函数递减</li>
            </ol>

            <h6 className={styles.teachingPlanH6}>⚠️ 难点注意</h6>
            <p><strong className={styles.hard}>区间选择</strong>：必须明确说明函数在<strong>哪个区间</strong>上单调！</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`函数 $ f(x) = \frac{1}{x} $ 在整个定义域上是单调函数吗？为什么？`,
            answer: String.raw`不是。虽然在 $ (-\infty, 0) $ 上单调递减，在 $ (0, +\infty) $ 上也单调递减，但在整个定义域上不是单调的。例如： $ f(-1) = -1 $ , $ f(1) = 1 $ ，虽然 $ -1 < 1 $ ，但 $ f(-1) < f(1) $ 不满足递减定义。`,
            answerRowMaxHeight: '150px',
          },
        ],
      },
      {
        title: String.raw`🏆 最值概念`,
        content: (
          <div>
            <h5 className={styles.teachingPlanH5}>🎯 定义</h5>
            <p>设函数 f(x) 的定义域为 D：</p>
            <ul>
              <li>如果存在 x₀ ∈ D，使得对所有 x ∈ D，都有 f(x) ≤ f(x₀)，则称 f(x₀) 是函数的<strong className={styles.highlight}>最大值</strong>，x₀ 称为<strong className={styles.highlight}>最大值点</strong></li>
              <li>如果存在 x₀ ∈ D，使得对所有 x ∈ D，都有 f(x) ≥ f(x₀)，则称 f(x₀) 是函数的<strong className={styles.highlight}>最小值</strong>，x₀ 称为<strong className={styles.highlight}>最小值点</strong></li>
            </ul>

            <h6 className={styles.teachingPlanH6}>⚠️ 难点注意</h6>
            <p><strong className={styles.hard}>最值与极值</strong>：最值是全局概念，极值是局部概念！</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`单调函数一定有最值吗？为什么？`,
            answer: String.raw`不一定。例如 $ f(x) = x $ 在 $ \mathbb{R} $ 上单调递增，但没有最大值和最小值。`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`📊 函数的平均变化率`,
        content: (
          <div>
            <h5 className={styles.teachingPlanH5}>🧮 定义</h5>
            <p>函数 <TeX>{String.raw`y = f(x)`}</TeX> 在区间 <TeX>{String.raw`[x_1, x_2]`}</TeX> 上的平均变化率为：</p>
            <TeX block>{String.raw`\text{平均变化率} = \frac{\Delta y}{\Delta x} = \frac{f(x_2) - f(x_1)}{x_2 - x_1}`}</TeX>

            <h5 className={styles.teachingPlanH5}>🔗 与单调性的关系</h5>
            <p>平均变化率反映了函数在区间上的整体变化趋势：</p>
            <ul>
              <li>平均变化率 &gt; 0 ⇒ 函数在区间上递增</li>
              <li>平均变化率 &lt; 0 ⇒ 函数在区间上递减</li>
            </ul>

            <h6 className={styles.teachingPlanH6}>⚠️ 难点注意</h6>
            <p><strong className={styles.hard}>瞬时变化率</strong>：当 <TeX>{String.raw`\Delta x \to 0`}</TeX> 时，平均变化率的极限就是导数 <TeX>{String.raw`f'(x)`}</TeX></p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`如何用平均变化率解释一次函数 $ f(x) = kx + b $ 的单调性？`,
            answer: String.raw`在任意区间 $ [x_1, x_2] $ 上，平均变化率为 $ \frac{(kx_2+b) - (kx_1+b)}{x_2-x_1} = k $。所以当 $ k > 0 $ 时函数递增， $ k < 0 $ 时函数递减。`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
      {
        title: String.raw`⚡ 物理中的变化率`,
        content: (
          <div>
            <h5 className={styles.teachingPlanH5}>🚀 物理意义</h5>
            <p>变化率在物理学中有广泛应用：</p>
            <ul>
              <li>位移对时间的变化率 → 速度</li>
              <li>速度对时间的变化率 → 加速度</li>
              <li>质量对体积的变化率 → 密度</li>
            </ul>

            <h5 className={styles.teachingPlanH5}>🔬 实例分析</h5>
            <p>自由落体运动：<TeX>{String.raw`s(t) = \frac{1}{2}gt^2`}</TeX></p>
            <ul>
              <li>速度：<TeX>{String.raw`v(t) = s'(t) = gt`}</TeX></li>
              <li>加速度：<TeX>{String.raw`a(t) = v'(t) = g`}</TeX></li>
            </ul>

            <h6 className={styles.teachingPlanH6}>⚠️ 难点注意</h6>
            <p><strong className={styles.hard}>二阶变化率</strong>：加速度是速度的变化率，也是位移的<strong className={styles.highlight}>二阶变化率</strong></p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`如果一辆汽车的速度函数 $ v(t) = t^2 - 4t + 3 $，如何分析汽车的运动状态？`,
            answer: String.raw`
1. 加速度 $ a(t) = v'(t) = 2t - 4 $
2. 当 $ t < 2 $ 时， $ a(t) < 0 $ ，汽车减速
3. 当 $ t > 2 $ 时， $ a(t) > 0 $ ，汽车加速
4. 当 $ t = 2 $ 时， $ a(t) = 0 $ ，加速度为零`,
            answerRowMaxHeight: '180px',
          },
        ],
      },
    ],
    thinks: [
      {
        think: String.raw`综合思考：函数 $ f(x) = x^3 $ 是单调函数吗？它在 $ x=0 $ 处有极值吗？`,
        answer: String.raw`
1. $ f(x) = x^3 $ 在整个定义域 $ \mathbb{R} $ 上是单调递增的，因为 $ f'(x) = 3x^2 \geq 0 $ 且仅在 $ x=0 $ 处导数为零
2. 在 $ x=0 $ 处没有极值，因为函数值在该点两侧都小于或大于零的说法不成立（左侧为负，右侧为正）`,
        answerRowMaxHeight: '150px',
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🔬 函数单调性实验`,
    geogebraList: [
      {
        description: String.raw`通过调整参数 a, b, c，观察二次函数 $ f(x) = ax^2 + bx + c $ 的单调性变化`,
        config: {
          id: 'function-monotonicity-1',
          height: 600,
          appletOnLoad: (applet) => {
            // 创建参数滑块
            applet.evalCommand('a = Slider(-3, 3, 0.1, 1, 100, false, true, false)');
            applet.setValue('a', 1);
            applet.evalCommand('b = Slider(-5, 5, 0.1, 1, 100, false, true, false)');
            applet.evalCommand('SetValue(b, 2)');
            applet.evalCommand('c = Slider(-5, 5, 0.1, 1, 100, false, true, false)');
            applet.setValue('c', 1);

            applet.evalCommand('SetConditionToShowObject(a, false)');
            applet.evalCommand('SetConditionToShowObject(b, false)');
            applet.evalCommand('SetConditionToShowObject(c, false)');

            // 创建二次函数
            applet.evalCommand('f(x) = a*x^2 + b*x + c');
            applet.setColor('f', 255, 0, 0); // 红色
            applet.setLineThickness('f', 3);

            // 计算顶点和对称轴
            applet.evalCommand('vertex_x = -b/(2a)');
            applet.evalCommand('vertex_y = f(vertex_x)');
            applet.evalCommand('vertex = (vertex_x, vertex_y)');

            // 设置点样式
            applet.setPointStyle('vertex', 5); // 大点
            applet.setColor('vertex', 0, 0, 255); // 蓝色

            // 设置坐标系范围
            applet.setCoordSystem(-5, 5, -10, 10);
          },
        },
        appletOnLoadId: 'src%5CfunctionDefinition%5CmonotonicityConfig.jsx-function-monotonicity-1',
        conclusion: String.raw`实验结论：
1. 当 $ a > 0 $ 时，函数开口向上，在对称轴左侧单调递减，右侧单调递增
2. 当 $ a < 0 $ 时，函数开口向下，在对称轴左侧单调递增，右侧单调递减
3. 顶点处是函数的极值点，也是最大值点或最小值点`,
      },
    ],
  },

  quizSection: {
    title: String.raw`💡 知识挑战`,
    description: (
      <div>
        <h5 className={styles.teachingPlanH5}>🧠 挑战你的理解力！</h5>
        <p>完成以下题目，检验你对函数单调性的掌握程度</p>
      </div>
    ),
    quiz: [
      {
        question: String.raw`已知函数 $ f(x) = x^2 - 4x + 3 $，下列说法正确的是：`,
        options: [
          String.raw`在 $ (-\infty, 2) $ 上单调递增`,
          String.raw`在 $ (2, +\infty) $ 上单调递增`,
          String.raw`在 $ (-\infty, 2) $ 上单调递减`,
          String.raw`在 $ (2, +\infty) $ 上单调递减`,
        ],
        correct: [1, 2],
        explanation: String.raw`解析：
- 函数 $ f(x) = x^2 - 4x + 3 $ 是二次函数，开口向上
- 对称轴为 $ x = -\frac{b}{2a} = 2 $
- 在 $ (-\infty, 2) $ 上单调递减
- 在 $ (2, +\infty) $ 上单调递增
- 所以选项 B, C 正确`,
      },
      {
        question: String.raw`关于函数的单调性，以下说法正确的是（多选）：`,
        options: [
          String.raw`常数函数既是增函数也是减函数`,
          String.raw`单调递增函数的导数一定大于0`,
          String.raw`在定义域上单调的函数一定有反函数`,
          String.raw`严格单调函数一定有反函数`,
        ],
        correct: [0, 3], // A和D正确
        explanation: String.raw`解析：
- A. 正确：常数函数同时满足增函数和减函数的定义
- B. 错误：单调递增函数可以有导数为0的点（如 $ f(x) = x^3 $ 在 $ x=0 $ 处）
- C. 错误：必须在定义域上严格单调才有反函数
- D. 正确：严格单调函数是一一映射，一定有反函数`,
      },
    ],
    link: {
      url: '/function-definition/monotonicity-hard-questions',
      text: '更难的单调性练习题',
    },
  },

  summary: {
    title: String.raw`🎯 总结回顾`,
    content: (
      <div>
        <h4 className={styles.teachingPlanH4}>🔍 柯南侦探总结</h4>
        <p>Hans7，今天我们破解了函数单调性的案件，主要发现：</p>
        <ol>
          <li>单调性描述了函数值随自变量变化的趋势（递增或递减）</li>
          <li>通过定义法或导数法可以证明函数的单调性</li>
          <li>最值是函数在整个定义域上的全局特性</li>
          <li>平均变化率 = <TeX>{String.raw`\frac{\Delta y}{\Delta x}`}</TeX> 是分析函数变化的重要工具</li>
          <li>物理中的速度、加速度等都是变化率的实际应用</li>
        </ol>
        <p>记住这些关键点，你就能像侦探一样，准确分析任何函数的变化规律！</p>
      </div>
    ),
  },

  footer: {
    info: (
      <div>
        <p>© 2025 数学侦探社 | 制作：Hans7</p>
        <p>学习伙伴：名侦探柯南</p>
      </div>
    ),
  },
};
