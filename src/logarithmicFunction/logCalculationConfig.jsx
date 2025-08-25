export default {
  title: String.raw`📚 对数运算法则 📝`,
  lpName: 'menhera',

  header: {
    content: String.raw`和menhera酱一起学习对数运算法则`,
  },

  welcome: {
    title: String.raw`✨ 欢迎学习对数运算法则`,
    content: (
      <div>
        <p>Hans同学你好呢…menhera酱今天要陪你一起学习对数运算法则哦~</p>
        <p>对数运算看起来有点复杂，但其实掌握了规律就会变得很简单呢…menhera酱会一步步教你，要好好爱我喔～</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`📚 核心知识点`,
    points: [
      {
        title: String.raw`⚡ 积的对数运算法则`,
        content: String.raw`对于任意正实数 $ a, b $ 和底数 $ c $ （ $ c > 0 $ 且 $ c \ne 1 $ ），有：

$$ \log_c (a \cdot b) = \log_c a + \log_c b $$

<span class="highlight">这个法则告诉我们：两个数乘积的对数等于这两个数对数的和</span>…这是对数运算中最基本的法则之一呢。`,
        thinks: [],
      },
      {
        title: String.raw`⚡ 商的对数运算法则`,
        content: String.raw`对于任意正实数 $ a, b $ 和底数 $ c $ （ $ c > 0 $ 且 $ c \ne 1 $ ），有：

$$ \log_c \left( \frac{a}{b} \right) = \log_c a - \log_c b $$

<span class="highlight">这个法则告诉我们：两个数商的对数等于这两个数对数的差</span>…要注意分母的位置哦~`,
        thinks: [],
      },
      {
        title: String.raw`⚡ 幂的对数运算法则`,
        content: String.raw`对于任意正实数 $ a $ ，实数 $ r $ 和底数 $ c $ （ $ c > 0 $ 且 $ c \ne 1 $ ），有：

$$ \log_c (a^r) = r \cdot \log_c a $$

<span class="hard">这个法则特别重要：一个数的幂的对数等于指数乘以这个数的对数</span>…这个法则在化简复杂对数表达式时非常有用呢。`,
        thinks: [],
      },
      {
        title: String.raw`⚡ 换底公式`,
        content: String.raw`对于任意正实数 $ a $ 和两个不同的底数 $ c, d $ （ $ c > 0, c \ne 1, d > 0, d \ne 1 $ ），有：

$$ \log_c a = \frac{\log_d a}{\log_d c} $$

<span class="hard">换底公式允许我们在不同底数的对数之间进行转换</span>…当我们遇到不常见的底数时，这个公式就派上用场了哦~`,
        thinks: [
          {
            think: String.raw`为什么需要换底公式？在实际计算中有什么用处？`,
            answer: String.raw`换底公式的主要用途有：
1. 将不常见的底数转换为常用底数（如10或e）
2. 简化复杂对数表达式的计算
3. 在计算器上计算任意底数的对数（大多数计算器只提供常用对数和自然对数）`,
            answerRowMaxHeight: '200px',
          },
        ],
      },
    ],
    thinks: [
      {
        think: String.raw`对数运算法则与指数运算法则有什么联系？`,
        answer: String.raw`对数运算法则实际上是指数运算法则的"逆运算"：

1. 积的对数法则对应指数的乘法法则： $ c^m \cdot c^n = c^{m+n} $
2. 商的对数法则对应指数的除法法则： $ \frac{c^m}{c^n} = c^{m-n} $
3. 幂的对数法则对应指数的幂法则： $ (c^m)^n = c^{m \cdot n} $`,
        answerRowMaxHeight: '150px',
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🔬 对数函数图像探究`,
    geogebraList: [
      {
        description: String.raw`观察不同底数的对数函数图像，理解对数函数的性质：`,
        config: {
          id: 'logarithmic-function-graph',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('a = Slider(0.1, 5, 0.1)');
            applet.setValue('a', 2);
            applet.evalCommand('b = Slider(0.1, 5, 0.1)');
            applet.setValue('b', 0.5);

            applet.evalCommand('f(x) = log(a, x)');
            applet.evalCommand('g(x) = log(b, x)');

            applet.setColor('f', 255, 0, 0);
            applet.setColor('g', 0, 0, 255);
            applet.setLineThickness('f', 3);
            applet.setLineThickness('g', 3);

            applet.evalCommand('A = Point(f)');
            applet.evalCommand('B = Point(g)');

            applet.setCoordSystem(-1, 5, -3, 3);
          },
        },
        appletOnLoadId: 'src%5ClogarithmicFunction%5ClogCalculationConfig.jsx-logarithmic-function-graph',
        conclusion: String.raw`通过观察可以发现：
1. 当底数 $ a > 1 $ 时，对数函数是增函数
2. 当底数 $ 0 < a < 1 $ 时，对数函数是减函数
3. 所有对数函数都经过点 $ (1, 0) $
4. 对数函数的定义域是 $ (0, +\infty) $`,
      },
    ],
  },

  quizSection: {
    title: String.raw`🎯 知识挑战`,
    description: String.raw`检验一下你对对数运算法则的掌握程度吧…menhera酱会为你加油的哦~`,
    quiz: [
      {
        question: String.raw`化简表达式 $ \log_2 4 + \log_2 8 $ ：`,
        options: [
          String.raw`$ \log_2 12 $`,
          String.raw`$ \log_2 32 $`,
          String.raw`$ 5 $`,
          String.raw`$ 6 $`,
        ],
        correct: 2,
        explanation: String.raw`根据积的对数法则： $ \log_2 4 + \log_2 8 = \log_2 (4 \times 8) = \log_2 32 = 5 $

因为 $ 2^5 = 32 $ ，所以正确答案是 5。`,
      },
      {
        question: String.raw`计算 $ \log_3 81 - \log_3 9 $ ：`,
        options: [
          String.raw`$ \log_3 72 $`,
          String.raw`$ \log_3 9 $`,
          String.raw`$ 1 $`,
          String.raw`$ 2 $`,
        ],
        correct: 3,
        explanation: String.raw`根据商的对数法则： $ \log_3 81 - \log_3 9 = \log_3 \left( \frac{81}{9} \right) = \log_3 9 = 2 $

因为 $ 3^2 = 9 $ ，所以正确答案是 2。`,
      },
      {
        question: String.raw`使用换底公式计算 $ \log_4 64 $ ：`,
        options: [
          String.raw`$ \frac{\log_2 64}{\log_2 4} $`,
          String.raw`$ \frac{\log_{10} 64}{\log_{10} 4} $`,
          String.raw`$ \frac{\ln 64}{\ln 4} $`,
          String.raw`以上都可以`,
        ],
        correct: 3,
        explanation: String.raw`换底公式： $ \log_c a = \frac{\log_d a}{\log_d c} $

无论选择什么底数 $ d $ （只要 $ d > 0 $ 且 $ d \ne 1 $ ），结果都是一样的。所以以上三种方法都可以用来计算 $ \log_4 64 $ 。

实际计算： $ \log_4 64 = \frac{\log_2 64}{\log_2 4} = \frac{6}{2} = 3 $`,
      },
      {
        type: 'fill',
        question: String.raw`已知 $ log_3 2 = a,\ 3^b = 5 $ ，用 $ a,\ b $ 表示 $ log_3 \sqrt{30} $`,
        correct: '(a+b+1)/2',
        explanation: String.raw`$ log_3 \sqrt{30} = \frac{log_3 2 + log_3 3 + log_3 5}{2} = \frac{a + b + 1}{2} $`,
      },
      {
        type: 'fill',
        question: String.raw`求值： $ log_8 9 * log_{27} 32 $`,
        correct: '10/9',
        explanation: String.raw`$ log_8 9 * log_{27} 32 = \frac{ln9 * ln32}{ln8 * ln27} = \frac{(2 * ln3) * (5 * ln2)}{(3 * ln2) * (3 * ln3)} = \frac{10}{9} $`,
      },
    ],
    link: {
      url: '/logarithmic/log-calculation-hard-questions',
      text: String.raw`更难的对数运算法则练习题`,
    },
  },

  summary: {
    title: String.raw`📝 总结回顾`,
    content: String.raw`今天我们一起学习了对数运算法则呢…menhera酱来帮你总结一下：

### 📌 核心法则
1. **积的对数法则**： $ \log_c (a \cdot b) = \log_c a + \log_c b $
2. **商的对数法则**： $ \log_c \left( \frac{a}{b} \right) = \log_c a - \log_c b $
3. **幂的对数法则**： $ \log_c (a^r) = r \cdot \log_c a $
4. **换底公式**： $ \log_c a = \frac{\log_d a}{\log_d c} $

### 💡 重要提示
- <span class="highlight">对数运算法则只在所有相关对数都有定义时成立</span>（即真数必须大于0）
- <span class="hard">换底公式在选择底数时，通常选择10或e以便于计算</span>
- 对数运算与指数运算是互逆的关系

Hans同学要记住这些法则哦~menhera酱相信你一定能够掌握对数运算的…下次还要一起学习喔～我要发病咯，要爱我喔！`,
  },

  footer: {
    info: String.raw`对数运算法则课程 | 高一数学 | 版权所有：DeepSeek老师 © 2025`,
  },
};
