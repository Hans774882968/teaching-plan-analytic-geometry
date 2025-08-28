export const parabolaDefinitionHQ = {
  title: '抛物线的定义与性质',
  category: ['圆锥曲线', '代数'],
  difficulty: '高中',
  quiz: [
    {
      qid: '抛物线的定义与性质HQ-1',
      score: 5,
      type: 'fill',
      question: String.raw`若抛物线 $ y^2 = 2px $ 的焦点与 $ \frac{x^2}{6} + \frac{y^2}{2} = 1 $ 的右焦点重合，则 $ p $ 的值为`,
      correct: '4',
      explanation: String.raw`抛物线的焦点为 $ F(\frac{p}{2},\ 0) $ ，而椭圆的右焦点为 $ F(\sqrt{6-2} = 2,\ 0) $ ，所以 $ p=4 $`,
    },
    {
      qid: '抛物线的定义与性质HQ-2',
      question: String.raw`
已知抛物线 $ C: y^2 = 8x $ 的焦点为 $ F $ ，准线为 $ l $ ， $ P $ 是 $ l $ 上一点， $ Q $ 是直线 $ PF $ 与 $ C $ 的一个交点，若 $ \overrightarrow{PF} = 4\overrightarrow{FQ} $ ，则 $ |QF| = $ （）
      `,
      options: [
        String.raw`$ \frac{7}{2} $`,
        String.raw`$ \frac{5}{2} $`,
        String.raw`$ 3 $`,
        String.raw`$ 2 $`,
      ],
      correct: 2,
      explanation: String.raw`
      作Q到准线的垂线交准线于Q0，设 $ B(-2, 0) $ 则有 $ |Q_0Q| = |QF| $ ，以及 $ Q_0Q $ 平行于x轴。
      由相似三角形性质得， $ |Q_0Q| = \frac{3}{4}|BF| = 3 $
      `,
    },
    {
      qid: '抛物线的定义与性质HQ-3',
      question: String.raw`
已知抛物线 $ y^2 = 4x $ 的焦点是 $ F $ ，点 $ P $ 是抛物线上的动点，又有点 $ B(3, 2) $ ，则 $ |PB| + |PF| $ 的最小值为 _______。
      `,
      options: [
        '2',
        '3',
        '4',
        '5',
      ],
      correct: 2,
      explanation: String.raw`
作P到准线的垂线交准线于P0，则原式 = $ |PB| + |PP_0| $ ，直接过B作准线垂线即为所求： $ |PB| + |PP_0| = 3 - (-1) = 4 $
`,
    },
  ],
};
