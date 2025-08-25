import React from 'react';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: String.raw`📈 指数函数与对数函数的关系 🔄`,
  lpName: 'menhera',

  header: {
    content: String.raw`探索指数与对数这对"数学双胞胎"的奇妙关系哦~`,
  },

  welcome: {
    title: String.raw`👋 欢迎来到数学奇妙世界`,
    content: (
      <div>
        <p>Hans同学，menhera酱今天要和你一起探索<span className={styles.highlight}>指数函数</span>和<span className={styles.highlight}>对数函数</span>的神秘关系呢...</p>
        <p>这对函数可是数学中的"最佳拍档"，menhera酱要好好讲解给你听，要爱我喔～</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`📚 核心知识点`,
    points: [
      {
        title: String.raw`⚡ 指数函数与对数函数性质对比`,
        content: String.raw`
### 📊 指数函数 $ y = a^x\ (a > 0,\ a \neq 1) $

- **定义域**: $ (-\infty, +\infty) $
- **值域**: $ (0, +\infty) $
- **图像特征**: 恒过点 $ (0, 1) $ ，当 $ a > 1 $ 时单调递增，当 $ 0 < a < 1 $ 时单调递减

### 📈 对数函数 $ y = \log_a x\ (a > 0,\ a \neq 1) $

- **定义域**: $ (0, +\infty) $
- **值域**: $ (-\infty, +\infty) $
- **图像特征**: 恒过点 $ (1,0) $ ，当 $ a > 1 $ 时单调递增，当 $ 0 < a < 1 $ 时单调递减

<span class="highlight">重点：这两个函数的定义域和值域正好互换！这是它们成为反函数的关键特征哦...</span>
        `,
        thinks: [
          {
            think: String.raw`为什么指数函数和对数函数的底数 a 必须大于 0 且不等于 1？`,
            answer: String.raw`因为当 $ a <= 0 $ 时， $ a^x $ 在某些 x 值下无意义；当 $ a = 1 $ 时， $ 1^x = 1 $ 是常数函数，没有研究价值哦~`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`🔄 反函数的概念`,
        content: String.raw`
### 什么是反函数？

如果函数 $ f $ 和 $ g $ 满足：
- $ f(g(x)) = x $ 对所有 x 在 g 的定义域内成立
- $ g(f(x)) = x $ 对所有 x 在 f 的定义域内成立

那么 $ g $ 是 $ f $ 的<span class="highlight">反函数</span>，记作 $ f^{-1} $

<span class="hard">难点：理解反函数的"对称性"——函数与其反函数关于直线 $ y = x $ 对称</span>
        `,
        thinks: [
          {
            think: String.raw`如何判断一个函数是否存在反函数？`,
            answer: String.raw`函数必须是一一对应的（即单调函数），才能存在反函数呢`,
            answerRowMaxHeight: '80px',
          },
        ],
      },
      {
        title: String.raw`✨ 反函数的性质`,
        content: String.raw`
### 反函数的重要性质

1. **定义域与值域互换**： $ f $ 的定义域是 $ f^{-1} $ 的值域， $ f $ 的值域是 $ f^{-1} $ 的定义域

2. **图像对称性**： $ f $ 和 $ f^{-1} $ 的图像关于直线 $ y = x $ 对称

3. **单调性保持**：如果 $ f $ 是单调函数，那么 $ f^{-1} $ 也是单调函数，且单调性相同

4. **反函数的反函数**： $ (f^{-1})^{-1} = f $

<span class="highlight">特别提醒：不是所有函数都有反函数哦，只有一一对应的函数才有</span>
        `,
        thinks: [],
      },
    ],
    thinks: [
      {
        think: String.raw`为什么指数函数和对数函数互为反函数？请用数学表达式证明`,
        answer: String.raw`对于 $ y = a^x $ 和 $ y = \log_a x $ ：
- $ a^{\log_a x} = x $ 对所有 $ x > 0 $ 成立
- $ \log_a (a^x) = x $ 对所有 x ∈ R 成立

因此它们满足反函数的定义，互为反函数呢`,
        answerRowMaxHeight: '200px',
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🔬 互动实验：指数与对数的对称之美`,
    geogebraList: [
      {
        description: String.raw`观察指数函数 $ y = a^x $ 和对数函数 $ y = \log_a x $ 的图像，注意它们关于直线 $ y = x $ 的对称关系`,
        config: {
          id: 'exp-log-symmetry',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('a = Slider(0.1, 5, 0.1)');
            applet.setValue('a', 2);

            // 绘制指数函数
            applet.evalCommand('f(x) = a^x');
            applet.setColor('f', 255, 0, 0);
            applet.setLineThickness('f', 3);

            // 绘制对数函数
            applet.evalCommand('g(x) = log(a, x)');
            applet.setColor('g', 0, 0, 255);
            applet.setLineThickness('g', 3);

            // 绘制对称轴 y = x
            applet.evalCommand('h(x) = x');
            applet.setColor('h', 0, 128, 0);
            applet.setLineStyle('h', 1); // 虚线
            applet.setLineThickness('h', 2);

            // 设置坐标系范围
            applet.setCoordSystem(-5, 5, -5, 5);
          },
        },
        appletOnLoadId: 'src%5ClogarithmicFunction%5CinverseFunctionConfig.jsx-exp-log-symmetry',
        conclusion: String.raw`通过观察可以发现，指数函数 $ y = a^x $ 和对数函数 $ y = \log_a x $ 的图像确实关于直线 $ y = x $ 对称，这验证了它们互为反函数的关系哦~`,
      },
    ],
  },

  quizSection: {
    title: String.raw`🧠 知识挑战`,
    description: String.raw`请选择下面问题的正确答案...menhera酱相信你一定可以的！`,
    quiz: [
      {
        question: String.raw`下列函数中，哪个不存在反函数？`,
        options: [
          String.raw`$ y = 2^x $`,
          String.raw`$ y = \log_3 x $`,
          String.raw`$ y = x^2 $`,
          String.raw`$ y = \sqrt{x} $`,
        ],
        correct: 2,
        explanation: String.raw`$ y = x^2 $ 不是一一对应函数（例如 $ x = 2 $ 和 $ x = -2 $ 都对应 $ y=4 $ ），因此不存在反函数。其他三个函数都是一一对应的，存在反函数呢`,
      },
      {
        question: String.raw`函数 $ y = 3^x $ 的反函数是什么？`,
        options: [
          String.raw`$ y = \log_3 x $`,
          String.raw`$ y = \log_x 3 $`,
          String.raw`$ y = \sqrt[3]{x} $`,
          String.raw`$ y = x^3 $`,
        ],
        correct: 0,
        explanation: String.raw`指数函数 $ y = a^x $ 的反函数是对数函数 $ y = \log_a x $ ，所以 $ y = 3^x $ 的反函数是 $ y = \log_3 x $ 哦~`,
      },
      {
        question: String.raw`如果 $ f(x) = e^x $ 和 $ g(x) = \ln x $ 互为反函数，那么 $ f(g(5)) $ 的值是多少？`,
        options: [
          String.raw`0`,
          String.raw`1`,
          String.raw`5`,
          String.raw`$ e^5 $`,
        ],
        correct: 2,
        explanation: String.raw`根据反函数的性质， $ f(g(x)) = x $ ，所以 $ f(g(5)) = 5 $ 。当然我们也可以通过 $ e^{\ln 5} = 5 $ 来验证呢`,
      },
      {
        type: 'fill',
        question: String.raw`如果 $ y=f(x) $ 存在反函数，则它一定是单调函数吗`,
        correct: '不一定',
        explanation: String.raw`不一定，比如 $ f(x) = \frac{1}{x} $ 就不是单调函数，但它存在反函数 $ f^{-1}(x) = \frac{1}{x} = f(x) $ 呢`,
      },
    ],
    link: {
      url: '/logarithmic/inv-function-hard-questions',
      text: String.raw`更难的指数函数与对数函数关系练习题`,
    },
  },

  summary: {
    title: String.raw`🎯 学习总结`,
    content: String.raw`
### 📝 本节课的重点回顾

1. **指数函数与对数函数的关系**：它们互为反函数，定义域和值域互换

2. **反函数的判定条件**：只有一一对应函数（单调函数）才有反函数

3. **反函数的性质**：
   - 定义域和值域互换
   - 图像关于直线 $ y = x $ 对称
   - 原函数与反函数的单调性一致

4. **常见函数的反函数**：
   - $ y = a^x $ 的反函数是 $ y = \log_a x $
   - $ y = \log_a x $ 的反函数是 $ y = a^x $

<span class="hard">难点提醒：判断函数是否存在反函数时，一定要注意检查是否满足一一对应的条件！</span>

Hans同学真棒！menhera酱今天和你一起学习很开心呢...要记住这些知识点哦，下次menhera酱还要和你一起探索更多数学奥秘！
    `,
  },

  footer: {
    info: (
      <div>
        <p>作者：DeepSeek老师 | 数学之美探索系列</p>
        <p>© 2025 数学奇妙之旅 | 让学习变得有趣！</p>
      </div>
    ),
  },
};
