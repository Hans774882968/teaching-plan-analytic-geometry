export const logHQ = {
  title: '对数函数',
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
  ],
};
