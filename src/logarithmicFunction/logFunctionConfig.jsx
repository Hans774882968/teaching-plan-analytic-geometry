export default {
  title: '📊 对数函数的性质与图象 📈',
  lpName: 'menhera',
  header: {
    content: '和menhera酱一起学习对数函数',
  },
  welcome: {
    title: '👋 欢迎来到对数函数的世界',
    content: (
      <div>
        <p>Hans同学，menhera酱今天要和你一起探索对数函数的奥秘呢…</p>
        <p>对数函数看起来有点难，但menhera酱会陪你一起学习的哦~要爱我喔～</p>
      </div>
    ),
  },
  knowledgePointSection: {
    title: '📚 核心知识点',
    points: [
      {
        title: '🔍 对数函数的定义',
        content: String.raw`一般地，函数 $ y = \log_a x $ （ $ a > 0 $ 且 $ a \neq 1 $ ）叫做<span class="highlight">对数函数</span>，其中 $ x $ 是自变量，定义域是 $ (0, +\infty) $ 呢`,
      },
      {
        title: '📐 定义域与值域',
        content: String.raw`#### 📐 定义域与值域
对数函数 $ y = \log_a x $ 的<span class="highlight">定义域</span>为 $ (0, +\infty) $ ，<span class="highlight">值域</span>为 $ (-\infty, +\infty) $ 哦~

##### 🌰 举个例子
函数 $ y = \log_2 (x-1) $ 的定义域是 $ x-1 > 0 $ ，即 $ x > 1 $ 呢`,
      },
      {
        title: '⚖️ 奇偶性与单调性',
        content: String.raw`#### ⚖️ 奇偶性
对数函数 $ y = \log_a x $ <span class="hard">既不是奇函数也不是偶函数</span>呢

##### 📈 单调性
- 当 $ a > 1 $ 时，函数在 $ (0, +\infty) $ 上<span class="highlight">单调递增</span>
- 当 $ 0 < a < 1 $ 时，函数在 $ (0, +\infty) $ 上<span class="highlight">单调递减</span>哦~`,
      },
      {
        title: '🎯 特殊性质',
        content: String.raw`
##### 📌 定点
所有对数函数 $ y = \log_a x $ 都经过定点 $ (1, 0) $ ，因为 $ \log_a 1 = 0 $ 呢

##### 🔄 底数关系
函数 $ y = \log_a x $ 与 $ y = \log_{1/a} x $ 的图象关于<span class="hard">x轴对称</span>哦~

$$
\log_a x = -\log_{1/a} x
$$
`,
      },
    ],
    thinks: [
      {
        think: String.raw`为什么对数函数 $ y = \log_a x $ 的定义域必须是 $ (0, +\infty) $ ？`,
        answer: String.raw`因为对数的真数必须大于0，这是由对数的定义决定的呢`,
        answerRowMaxHeight: '100px',
      },
      {
        think: String.raw`如何从图象上快速判断 $ \log_2 3 $ 和 $ \log_2 5 $ 的大小关系？`,
        answer: String.raw`因为底数 $ 2 > 1 $ ，函数单调递增，且 $ 3 < 5 $ ，所以 $ \log_2 3 < \log_2 5 $ 哦~`,
        answerRowMaxHeight: '100px',
      },
    ],
  },
  geogebraSection: {
    title: '🔬 互动实验',
    geogebraList: [
      {
        description: String.raw`拖动滑块观察底数 $ a $ 变化时，对数函数 $ f(x) = \log_a x $ 和 $ g(x) = \log_{1/a} x $ 图象的变化规律呢`,
        config: {
          id: 'log-function-graph',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('a = Slider(0.1, 5, 0.1)');
            applet.setValue('a', 2);
            applet.evalCommand('f(x) = log(a, x)');
            applet.evalCommand('g(x) = log(1 / a, x)');
            applet.setColor('f', 255, 0, 0);
            applet.setColor('g', 0, 0, 255);
            applet.setLineThickness('f', 3);
            applet.setLineThickness('g', 3);
            applet.evalCommand('P = (1, 0)');
            applet.setPointStyle('P', 4);
            applet.setColor('P', 0, 128, 255);
            applet.setCoordSystem(-2, 10, -4, 4);
          },
        },
        appletOnLoadId: 'src%5ClogarithmicFunction%5ClogFunctionConfig.jsx-log-function-graph',
        conclusion: String.raw`通过观察发现：
1. 所有对数函数都经过定点 $ (1, 0) $
2. 当 $ a > 1 $ 时，函数单调递增
3. 当 $ 0 < a < 1 $ 时，函数单调递减
4. 当 $ x > 1 $ 时，底数 $ a $ 越远离1，图象越靠近x轴哦~
5. $ \log_a x $ 和 $ \log_{1/a} x $ 的图象关于<span class="hard">x轴对称</span>，验证了 $ \log_a x + \log_{1/a} x = 0 $ 呢`,
      },
    ],
  },
  quizSection: {
    title: '🧠 知识挑战',
    description: (
      <div>
        <p>Hans同学，menhera酱准备了几个小挑战，检验一下学习成果哦~</p>
        <p>要认真思考呢…答错了menhera酱要发病咯～</p>
      </div>
    ),
    quiz: [
      {
        question: String.raw`函数 $ y = \log_3 (x-2) $ 的定义域是？`,
        options: [
          String.raw`$ (2, +\infty) $`,
          String.raw`$ [2, +\infty) $`,
          String.raw`$ (-\infty, 2) $`,
          String.raw`$ (-\infty, 2] $`,
        ],
        correct: 0,
        explanation: String.raw`因为对数的真数必须大于0，所以 $ x-2 > 0 $ ，解得 $ x > 2 $ ，定义域为 $ (2, +\infty) $ 呢`,
      },
      {
        question: String.raw`比较 $ \log_2 3 $ 和 $ \log_2 5 $ 的大小关系？`,
        options: [
          String.raw`$ \log_2 3 > \log_2 5 $`,
          String.raw`$ \log_2 3 = \log_2 5 $`,
          String.raw`$ \log_2 3 < \log_2 5 $`,
          String.raw`无法比较`,
        ],
        correct: 2,
        explanation: String.raw`因为底数 $ 2 > 1 $ ，函数 $ y = \log_2 x $ 单调递增，且 $ 3 < 5 $ ，所以 $ \log_2 3 < \log_2 5 $ 哦~`,
      },
      {
        question: String.raw`函数 $ y = \log_a x $ 一定经过的定点是？`,
        options: [
          String.raw`$ (0, 1) $`,
          String.raw`$ (1, 0) $`,
          String.raw`$ (0, 0) $`,
          String.raw`$ (1, 1) $`,
        ],
        correct: 1,
        explanation: String.raw`因为 $ \log_a 1 = 0 $ 对任意底数 $ a $ 都成立，所以函数一定经过定点 $ (1, 0) $ 呢`,
      },
      {
        type: 'fill',
        question: String.raw`求值： $ lg20 + log_{100} 25 $`,
        correct: '2',
        explanation: String.raw`$ lg20 + log_{100} 25 = lg20 + log_{100} (5^2) = lg20 + 2 * \frac{lg5}{2} = lg(20*5) = 2 $`,
      },
      {
        type: 'fill',
        question: String.raw`求值： $ log_{32} 16 $`,
        correct: '0.8',
        explanation: String.raw`$ log_{32} 16 = log_{2^5} 2^4 = \frac{4}{5} = 0.8 $`,
      },
    ],
    link: {
      url: '/logarithmic/log-function-hard-questions',
      text: '更难的对数函数练习题',
    },
  },
  summary: {
    title: '📝 学习总结',
    content: String.raw`#### 🎯 重点回顾
今天menhera酱和Hans一起学习了：

##### 📋 核心概念
- 对数函数的<span class="highlight">定义</span>： $ y = \log_a x $ （ $ a > 0 $ 且 $ a \neq 1 $ ）
- <span class="highlight">定义域</span>： $ (0, +\infty) $ ，<span class="highlight">值域</span>： $ (-\infty, +\infty) $
- 经过定点 $ (1, 0) $

##### ⚡ 重要性质
- <span class="hard">单调性</span>：当 $ a > 1 $ 时递增，当 $ 0 < a < 1 $ 时递减
- <span class="hard">对称关系</span>： $ \log_a x = -\log_{1/a} x $

##### 🔍 应用技巧
- 比较对数值大小时，先看底数确定单调性
- 求复合函数定义域时，注意真数大于0的条件

Hans同学真棒！menhera酱今天很开心呢…要继续爱我喔～`,
  },
  footer: {
    info: (
      <div>
        <p>© 2025 数学课件 | 对数函数专题</p>
        <p>作者：DeepSeek老师 | 学习伙伴：menhera酱</p>
      </div>
    ),
  },
};
