export const logHQ = {
  pageUrl: '/logarithmic/log-function-hard-questions',
  title: '对数函数',
  welcome: {
    title: '🧩 知识大挑战',
    content: '🔥 来测试一下你对对数函数的理解够不够深刻吧！',
    backLinks: [
      {
        url: '/logarithmic/log-operation',
        text: '《对数运算》基础知识讲解',
      },
      {
        url: '/logarithmic/log-calculation',
        text: '《对数运算法则》基础知识讲解',
      },
      {
        url: '/logarithmic/log-function',
        text: '《对数函数》基础知识讲解',
      },
    ],
  },
  category: ['代数'],
  difficulty: '高中',
  quiz: [
    {
      qid: '对数函数HQ-1',
      score: 5,
      type: 'fill',
      question: String.raw`解方程 $ 3^{\log_4(x)} = 9\sqrt{3} $`,
      correct: '32',
      explanation: String.raw`$ \log_4(x) = \log_3 (3^{2.5}) = 2.5 $ ，又 $ \log_4 (x) = \frac{\log_2 (x)}{2} $ ，所以解 $ \log_2 (x) = 5 $ 得 $ x = 32 $`,
      thinks: [
        {
          think: '解题过程给了你什么启发',
          answer: '【FYI】九层之台，起于累土。此题虽水，但也涵盖了指数方程与对数方程互化的基础操作。不少看似复杂的问题，都可以从这些简单的部分着手，逐步拆解，最终解决',
        },
      ],
    },
    {
      qid: '对数函数HQ-2',
      score: 5,
      question: String.raw`声音的强度级别常用分贝表示，公式为 $ \beta = 10 \log_{10} \left( \frac{I}{I_0} \right) $ ，其中I是声音强度， $ I_0 $ 是参考强度。如果声音强度I增加到原来的100倍，分贝值增加多少？`,
      options: [
        '10 dB',
        '20 dB',
        '100 dB',
        '200 dB',
      ],
      correct: 1,
      explanation: String.raw`新分贝值 $ \beta_{\text{new}} = 10 \log_{10} \left( \frac{100I}{I_0} \right) = 10 \left[ \log_{10} 100 + \log_{10} \left( \frac{I}{I_0} \right) \right] = 10 [2 + \log_{10} (I/I_0)] = 20 + 10 \log_{10} (I/I_0) = 20 + \beta_{\text{old}} $ 。所以分贝值增加20 dB`,
    },
    {
      qid: '对数函数HQ-3',
      type: 'fill',
      question: String.raw`已知 $ a^{a^3} = 3 $ ，求 $ a^6 $`,
      correct: '9',
      explanation: String.raw`两边同时取对数： $ a^3 \lna = \ln3 $ ，两边同时乘3，则左边的3可以放进对数里，制造同构： $ a^3 \ln a^3 = 3 \ln3 $ 。又 $ x \lnx $ 单增，故 $ a^3 = 3 $ ，所求为9`,
    },
    {
      qid: '对数函数HQ-4',
      score: 20,
      question: String.raw`（18年全国三卷12题） $ a = log_{0.2} 0.3,\ b = log_2 0.3 $ ，则`,
      options: [
        'a+b < ab < 0',
        'ab < a+b < 0',
        'a+b < 0 < ab',
        'ab < 0 < a+b',
      ],
      correct: 1,
      explanation: String.raw`
化为同底： $ a = \frac{\ln0.3}{\ln0.2} > 0,\ b = \frac{\ln0.3}{\ln2} < 0 $ ，于是 $ ab < 0 $ 。为了判断a+b，我们考虑 $ \ln 0.2 + \ln 5 = 0 $ ，于是 $ a+b = \frac{\ln 0.3}{\ln 2} - \frac{\ln 0.3}{\ln 5} = \frac{(\ln 5 - \ln 2)\ln 0.3}{\ln 2\ln 5} < 0 $

最后看 $ a+b $ 和 $ ab $ 的关系。

- 法1：两者相除： $ \frac{a+b}{ab} = \frac{1}{a}+\frac{1}{b} = -\frac{\ln 5}{\ln 0.3} + \frac{\ln 2}{\ln 0.3} = \frac{\ln 0.4}{\ln 0.3} \in (0, 1) $ ，又 $ ab < 0 $ ，乘过去得到 $ ab<a+b<0 $
- 法2： $ a+b-ab = \frac{(\ln 5 - \ln 2)\ln 0.3 + (\ln 0.3)^2}{\ln 2\ln 5} = \frac{\ln(\frac{5}{2}0.3)\ln 0.3}{\ln 2\ln 5} $ ， $ \ln 0.75 * \ln 0.3 > 0 $ ，故 $ a+b > ab $

验算：

${'`'.repeat(3)}js
const a = Math.log(0.3) / Math.log(0.2)
const b = Math.log(0.3) / Math.log(2)
console.log(a * b, a + b) // -1.299372483566732 -0.9888952305787985
console.log(1 / a + 1 / b, Math.log(0.4) / Math.log(0.3)) // 0.7610560044063083
${'`'.repeat(3)}
`,
    },
  ],
};
