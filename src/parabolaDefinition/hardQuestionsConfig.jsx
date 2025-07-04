export const config = {
  quiz: [
    {
      question: String.raw`
已知抛物线 $ C: y^2 = 8x $ 的焦点为 $ F $，准线为 $ l $，$ P $ 是 $ l $ 上一点，$ Q $ 是直线 $ PF $ 与 $ C $ 的一个交点，若 $ \overrightarrow{PF} = 4\overrightarrow{FQ} $，则 $ |QF| = $ （）
      `,
      options: [
        String.raw`$\frac{7}{2}$`,
        String.raw`$\frac{5}{2}$`,
        String.raw`$3$`,
        String.raw`$2$`,
      ],
      correct: 2,
      explanation: String.raw`
      作Q到准线的垂线交准线于Q0，设 $ B(-2, 0) $ 则有 $ |Q_0Q| = |QF| $ ，以及 $ Q_0Q $ 平行于x轴。
      由相似三角形性质得， $ |Q_0Q| = \frac{3}{4}|BF| = 3 $
      `,
    },
    {
      question: String.raw`
已知抛物线 $ y^2 = 4x $ 的焦点是 $ F $，点 $ P $ 是抛物线上的动点，又有点 $ B(3, 2) $，则 $ |PB| + |PF| $ 的最小值为 _______。
      `,
      options: [
        '2',
        '3',
        '4',
        '5',
      ],
      correct: 2,
      explanation: String.raw`
      作P到准线的垂线交准线于P0，则原式 = $ |PB| + |PP_0| $，直接过B作准线垂线即为所求： $ |PB| + |PP_0| = 3 - (-1) = 4 $
      `,
    },
  ],
};
