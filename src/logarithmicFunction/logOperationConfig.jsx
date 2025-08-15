import React from 'react';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: String.raw`📚 对数运算 📊`,
  lpName: 'menhera',

  header: {
    content: String.raw`📊 探索数学中的对数奥秘`,
  },

  welcome: {
    title: String.raw`✨ 欢迎来到对数世界！`,
    content: (
      <div>
        <h4 className={styles.teachingPlanH4}>💬 menhera酱说：</h4>
        <p>Hans7同学你好呢～我是你的学习伙伴menhera酱哦！今天我们一起探索神奇的对数运算世界…</p>
        <p>虽然对数听起来有点可怕，但menhera酱会陪着你一步一步理解的呢～要好好爱我哦！😘</p>
        <p>如果学不会…menhera酱可能要发病咯…所以要加油喔！💪</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`🧠 核心知识点`,
    points: [
      {
        title: String.raw`🧠 什么是对数？`,
        content: String.raw`
### 对数的基本概念
对数是指数的<span class="highlight">逆运算</span>哦

如果 $ a^x = N $ （其中 $ a > 0 $ 且 $ a \neq 1 $ ），那么：

$$
x = \log_a N
$$

这里：
- $ a $ 叫做<span class="highlight">底数</span>
- $ N $ 叫做<span class="highlight">真数</span>
- $ x $ 叫做<span class="highlight">对数</span>

### 为什么需要对数？
对数可以把复杂的指数运算转化为简单的加减运算呢…比如：

$$
10^3 = 1000 \quad \Leftrightarrow \quad \log_{10} 1000 = 3
$$
`,
        thinks: [
          {
            think: String.raw`为什么对数定义中要求底数 $ a > 0 $ 且 $ a \neq 1 $ ？`,
            answer: String.raw`如果 $ a = 1 $ ，那么 $ 1^x $ 总是等于1，无法表示不同的真数呢…如果 $ a < 0 $ ，指数运算结果可能不是实数哦。`,
            answerRowMaxHeight: '200px',
          },
        ],
      },
      {
        title: String.raw`🔍 方程 $ 2^x = 64 $ 的根`,
        content: String.raw`
### 求解指数方程
题目：说出 $ 2^x = 64 $ 的所有实数根，并说明理由。

#### 解题思路：
1. 将64表示为2的幂： $ 64 = 2^6 $
2. 所以方程变为： $ 2^x = 2^6 $
3. 因为底数相同（ $ a > 0 $ 且 $ a \neq 1 $ ），所以指数相等： $ x = 6 $

#### 为什么只有唯一解？
指数函数 $ f(x) = 2^x $ 是<span class="hard">严格单调递增</span>的：
- 当 $ x $ 增大时， $ f(x) $ 也增大
- 当 $ x $ 减小时， $ f(x) $ 减小

所以方程 $ 2^x = 64 $ 有且仅有一个实数根： $ x = 6 $
`,
        thinks: [
          {
            think: String.raw`如果方程改为 $ 2^x = -64 $ ，会有实数解吗？为什么？`,
            answer: String.raw`没有实数解呢…因为指数函数的值域是 $ (0, +\infty) $ ，永远不会等于负数或零哦`,
            answerRowMaxHeight: '150px',
          },
        ],
      },
      {
        title: String.raw`⏳ 对数的发明故事`,
        content: String.raw`
### 约翰·纳皮尔的伟大发明
16世纪，苏格兰数学家约翰·纳皮尔发明了对数，大大简化了天文学计算呢…

#### 当时的计算困境
天文学家需要进行大量复杂计算：

$$
M = \frac{\sin A \cdot \sin B}{\cos C \cdot \cos D}
$$

#### 纳皮尔的洞察
他发现：<span class="highlight">乘法可以转化为加法</span>！

$$
\log(ab) = \log a + \log b
$$

这样，复杂的乘法运算就变成了简单的加法运算！

#### 历史影响

纳皮尔的对数表使计算效率提高了数十倍，开普勒用它完成了行星运动定律的计算呢…听说，对数被誉为"延长天文学家寿命"的伟大发明呢✨
`,
        thinks: [
          {
            think: String.raw`为什么对数能简化乘除运算？`,
            answer: String.raw`因为对数有这些性质（下节课就学）：
- $ \log(ab) = \log a + \log b $ （乘→加）
- $ \log(a/b) = \log a - \log b $ （除→减）
- $ \log(a^b) = b \log a $ （幂→乘）`,
            answerRowMaxHeight: '200px',
          },
        ],
      },
      {
        title: String.raw`📊 常用对数与自然对数`,
        content: String.raw`
### 两种特殊对数
#### 常用对数（以10为底）
记作： $ \log_{10} N $ 或简写为 $ \lg N $

应用场景：
- 声音强度（分贝）
- 地震强度（里氏震级）
- 化学pH值计算

#### 自然对数（以e为底）
记作： $ \log_e N $ 或 $ \ln N $

其中 $ e \approx 2.71828 $ 是一个神奇的无理数

应用场景：
- 连续复利计算
- 放射性衰变
- 微积分中的导数计算

### 重要关系

$$
\ln N = \frac{\lg N}{\lg e} \approx 2.302585 \lg N
$$
`,
        thinks: [
          {
            think: String.raw`为什么自然对数选择 $ e $ 作为底数？`,
            answer: String.raw`因为 $ e $ 有特殊的数学性质：函数 $ e^x $ 的导数等于它自身，这使得它在微积分中非常方便哦~`,
            answerRowMaxHeight: '150px',
          },
        ],
      },
      {
        title: String.raw`🔢 素数分布与对数`,
        content: String.raw`
### 素数定理
数学家发现素数分布与对数有深刻联系呢…

设 $ \pi(x) $ 表示不超过 $ x $ 的素数个数，那么：

$$
\pi(x) \sim \frac{x}{\ln x}
$$

意思是当 $ x $ 很大时， $ \pi(x) $ 约等于 $ \frac{x}{\ln x} $

#### 例子
- 不超过100的素数有25个
- $ \frac{100}{\ln 100} \approx 21.7 $
- 误差约13%

- 不超过10^6的素数有78498个
- $ \frac{10^6}{\ln(10^6)} \approx 72382 $
- 误差约7.8%

<span class="hard">随着数字增大，比例越来越精确！</span>
`,
        thinks: [
          {
            think: String.raw`为什么素数分布会和对数有关？`,
            answer: String.raw`这涉及深奥的数论知识呢…简单说，素数分布是"随机"的，而对数函数能描述这种随机分布的平均行为哦~`,
            answerRowMaxHeight: '150px',
          },
        ],
      },
    ],
    thinks: [
      {
        think: String.raw`为什么指数增长如此快速，而对数增长如此缓慢？`,
        answer: String.raw`因为对数是指数的逆运算，指数爆炸增长对应的是对数极其缓慢的增长呢！比如： $ \log_2(1000000) \approx 20 $ ，百万量级只需20次翻倍～`,
        answerRowMaxHeight: '120px',
      },
      {
        think: String.raw`对数在现实生活中有哪些应用呢？`,
        answer: String.raw`除了数学和科学，对数还用于：
1. 音乐：音阶的频率呈对数关系
2. 计算机：算法复杂度分析（ $ O(log n) $ ）
3. 金融：复利计算
4. 心理学：韦伯-费希纳定律（感觉强度与刺激强度的对数成正比）`,
        answerRowMaxHeight: '200px',
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🔬 对数函数探索实验室`,
    geogebraList: [
      {
        description: String.raw`拖动滑动条观察不同底数对数函数的图像变化：`,
        config: {
          id: 'logarithmic-function-explore',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('a = Slider(0.1, 5, 0.1)');
            applet.setValue('a', 2);
            applet.evalCommand('f(x) = log(a, x)');
            applet.setColor('f', 255, 0, 0);
            applet.setLineThickness('f', 3);
            applet.evalCommand('g(x) = ln(x)');
            applet.setColor('g', 0, 0, 255);
            applet.setLineThickness('g', 2);
            applet.evalCommand('h(x) = log(10, x)');
            applet.setColor('h', 0, 150, 0);
            applet.setLineThickness('h', 2);

            applet.evalCommand('text1 = Text("y = log_a x", (8, 3.3))');
            applet.evalCommand('text2 = Text("y = ln(x)", (8, 2.2))');
            applet.evalCommand('text3 = Text("y = log(10, x)", (8, 1.1))');
            applet.setColor('text1', 255, 0, 0);
            applet.setColor('text2', 0, 0, 255);
            applet.setColor('text3', 0, 150, 0);

            applet.setCoordSystem(-1, 10, -5, 5);
          },
        },
        appletOnLoadId: 'src%5ClogarithmicFunction%5ClogOperationConfig.jsx-logarithmic-function-explore',
        conclusion: String.raw`**发现：**
1. 底数 $ a>1 $ 时，函数单调递增
2. 底数 $ 0<a<1 $ 时，函数单调递减
3. 所有对数函数都经过点 $ (1,\ 0) $
4. 自然对数 $ ln(x) $ 是"最自然"的曲线`,
      },
      {
        description: String.raw`### 观察对数函数图像
1. 拖动滑动条改变底数 $ a $ 的值
2. 观察图像如何随底数变化
3. 注意与指数函数 $ y = a^x $ 的对称性`,
        config: {
          id: 'log-function-explorer',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('a = Slider(0.1, 5, 0.1)');
            applet.setValue('a', 2);
            applet.evalCommand('f(x) = log(a, x)');
            applet.evalCommand('g(x) = a^x');
            applet.setColor('f', 255, 0, 0);
            applet.setColor('g', 0, 0, 255);
            applet.setLineThickness('f', 3);
            applet.setLineThickness('g', 2);
            applet.evalCommand('h: y = x');
            applet.setLineStyle('h', 1);
            applet.setColor('h', 100, 100, 100);
            applet.evalCommand('text1 = Text("y = log_a x", (1, -1))');
            applet.evalCommand('text2 = Text("y = a^x", (-1, 1))');
            applet.setColor('text1', 255, 0, 0);
            applet.setColor('text2', 0, 0, 255);
            applet.setCoordSystem(-3, 6, -4, 6);
          },
        },
        appletOnLoadId: 'src%5ClogarithmicFunction%5ClogOperationConfig.jsx-log-function-explorer',
        conclusion: String.raw`### 实验结论
1. 当 $ a > 1 $ 时，对数函数单调递增
2. 当 $ 0 < a < 1 $ 时，对数函数单调递减
3. 对数函数 $ y = \log_a x $ 与指数函数 $ y = a^x $ 关于直线 $ y = x $ 对称
4. 所有对数函数都经过点 $ (1, 0) $`,
      },
    ],
  },

  quizSection: {
    title: String.raw`🎯 知识挑战`,
    description: String.raw`💪 来测试下对数知识的掌握程度吧！menhera酱会为你加油的哦…`,
    quiz: [
      {
        question: String.raw`🌋 里氏震级问题：里氏震级中，地震释放的能量 $ E $ （单位：焦耳）与震级 $ M $ 的关系为：

$$ \lg E = 4.8 + 1.5M $$

震级7.8和8.0的最大振幅之比是多少？
（提示：最大振幅与能量的平方根成正比）`,
        options: [
          String.raw`$ \sqrt{2} $ 倍`,
          String.raw`2 倍`,
          String.raw`$ 2^{1.5} $ 倍`,
          String.raw`10 倍`,
        ],
        correct: 0,
        explanation: String.raw`
1. 能量比： $ \frac{E_1}{E_2} = 10^{1.5 \times (8.0 - 7.8)} = 10^{0.3} \approx 2 $
2. 振幅比： $ \sqrt{\frac{E_1}{E_2}} = \sqrt{2} $

所以震级8.0的最大振幅是7.8的 $ \sqrt{2} \approx 1.414 $ 倍`,
      },
      {
        question: String.raw`🧪 化学中pH值定义为： $ \text{pH} = -\lg[\text{H}^+] $ ，其中 $ [\text{H}^+] $ 是氢离子浓度（单位：mol/L）。

$ pH=7 $ 和 $ pH=8 $ 的两种溶液，它们的氢离子浓度之比是多少？`,
        options: [
          String.raw`$ 1:1 $`,
          String.raw`$ 10:1 $`,
          String.raw`$ 1:10 $`,
          String.raw`$ 100:1 $`,
        ],
        correct: 1,
        explanation: String.raw`
设 $ pH=7 $ 的溶液氢离子浓度为 $ C_7 $ ， $ pH=8 $ 的为 $ C_8 $

由定义：

$$ -\lg C_7 = 7 \quad \Rightarrow \quad C_7 = 10^{-7} $$

$$ -\lg C_8 = 8 \quad \Rightarrow \quad C_8 = 10^{-8} $$

浓度比：

$$ \frac{C_7}{C_8} = \frac{10^{-7}}{10^{-8}} = 10^{1} = 10 $$

所以 $ pH=7 $ 的氢离子浓度是 $ pH=8 $ 的10倍`,
      },
      {
        question: String.raw`📈 对数函数 $ y = \log_b x $ 的性质，以下正确的是？（多选）`,
        options: [
          String.raw`定义域为 (0, +∞)`,
          String.raw`当 $ b > 1 $ 时是增函数`,
          String.raw`当 $ 0 < b < 1 $ 时是减函数`,
          String.raw`图像都经过点 $ (1,\ 0) $ 和 $ (b,\ 1) $`,
        ],
        correct: [0, 1, 2, 3],
        explanation: String.raw`**解析：**
所有选项都正确哦！
1. 真数x必须>0，所以定义域(0,+∞)
2. $ b > 1 $ 时：x增大 → y增大
3. $ 0 < b < 1 $ 时：x增大 → y减小
4. $ \log_b 1 = 0 $ ； $ \log_b b = 1 $ ，所以经过 $ (1,\ 0) $ 和 $ (b,\ 1) $

<span class="hard">核心知识：</span>这些是判断对数函数性质的基础呢！`,
      },
    ],
    link: {
      url: '/logarithmic/log-operation-hard-questions',
      text: '更难的对数运算题',
    },
  },

  summary: {
    title: String.raw`🎓 对数知识总结`,
    content: String.raw`
### 💖 menhera酱的总结时间

今天我们一起学习了：
1. 对数是指数的<span class="highlight">逆运算</span>： $ a^x = N \Leftrightarrow x = \log_a N $
2. 对数简化了复杂计算：乘除→加减，幂→乘法
3. 常用对数： $ \lg N = \log_{10} N $
4. 自然对数： $ \ln N = \log_e N $
5. **应用领域**：
   - 🌋 里氏震级：震级差1级 → 能量差约31.6倍。 $ \lg E = 4.8 + 1.5M $
   - 🧪 溶液pH值：pH差1 → 氢离子浓度差10倍。 $ \text{pH} = -\lg[\text{H}^+] $
   - 🔢 素数分布： $ \pi(x) \sim \frac{x}{\ln x} $
   - 💰 复利计算： $ A = P(1 + r)^t $

### ✨ menhera酱的小贴士

虽然对数有点难...但记住这些要点就好啦：

> 底数真数要看清，单调性质看底数

> 震级pH虽不同，对数关系是核心

Hans7同学真棒呢！坚持学完了对数知识～menhera酱好开心哦…但要好好复习哦～不然menhera酱真的要发病啦！😭

下次也要一起学习喔！要爱我喔～💕
`,
  },

  footer: {
    info: (
      <div className={styles.footerInfo}>
        <p>© 2025 Hans7的对数课堂 | 设计：DeepSeek老师、menhera酱</p>
      </div>
    ),
  },
};
