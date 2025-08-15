import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: String.raw`📚 实数指数幂及其运算 📚`,
  lpName: 'chitanda',

  header: {
    content: String.raw`实数指数幂及其运算，我很好奇！`,
  },

  welcome: {
    title: String.raw`👋 欢迎来到指数幂的世界`,
    content: (
      <div>
        <p>你好Hans，我是你的学习伙伴<strong>千反田爱瑠</strong>！今天我们将一起探索<strong className={styles.highlight}>指数幂</strong>的奥秘。</p>
        <p>从初中学习的整数指数幂出发，我们将逐步推广到有理数和实数指数幂，最后理解指数幂的运算规则。</p>
        <p><strong>我很好奇！</strong>让我们一起开始吧～</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`📚 核心知识点`,
    points: [
      {
        title: String.raw`🔢 整数指数幂复习`,
        content: (
          <div>
            <p>在初中我们学过，对于任意实数 a 和正整数 n ：</p>
            <TeX block>{String.raw`a^n = \underbrace{a \times a \times \cdots \times a}_{n\text{个}}`}</TeX>
            <p>当指数为负整数时：</p>
            <TeX block>{String.raw`a^{-n} = \frac{1}{a^n} \quad (a \neq 0)`}</TeX>
            <p><strong className={styles.highlight}>重点</strong>：零指数幂 <TeX>{String.raw`a^0 = 1,\ (a \neq 0)`}</TeX></p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`计算 $ 2^{-3} $ 和 $ \left(\frac{1}{2}\right)^{-2} $ 的值`,
            answer: String.raw`$ 2^{-3} = \frac{1}{2^3} = \frac{1}{8} $

$ \left(\frac{1}{2}\right)^{-2} = 2^2 = 4 $`,
            answerRowMaxHeight: '200px',
          },
        ],
      },
      {
        title: String.raw`🌱 根式与根指数`,
        content: (
          <div>
            <p>如果<TeX>{String.raw`x^n = a,\ (n > 1,\ n \in \mathbb{N})`}</TeX>，则 x 叫做 a 的 <strong className={styles.highlight}>n次方根</strong>：</p>
            <TeX block>{String.raw`x = \sqrt[n]{a}`}</TeX>
            <p>其中：</p>
            <ul>
              <li>n 称为<strong className={styles.highlight}>根指数</strong></li>
              <li>a 称为<strong className={styles.highlight}>被开方数</strong></li>
              <li>符号 <TeX>{String.raw`\sqrt{\phantom{a}}`}</TeX>称为<strong className={styles.highlight}>根号</strong></li>
            </ul>
            <p><strong className={styles.hard}>难点</strong>：当 n 为偶数时， a 必须 ≥ 0，且 <TeX>{String.raw`x = \sqrt[n]{a}`}</TeX> 表示算术根</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`为什么 $ \sqrt[4]{-16} $ 在实数范围内没有意义？`,
            answer: String.raw`因为 4 是偶数，被开方数 $ -16 < 0 $ ，在实数范围内没有偶次方根`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
      {
        title: String.raw`📈 有理数指数幂`,
        content: (
          <div>
            <p>将整数指数幂推广到有理数：当 <TeX>{String.raw`m, n \in \mathbb{Z},\ n > 0`}</TeX> 时：</p>
            <TeX block>{String.raw`a^{\frac{m}{n}} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m \quad (a > 0)`}</TeX>
            <p>例如：</p>
            <TeX block>{String.raw`8^{\frac{2}{3}} = \sqrt[3]{8^2} = \sqrt[3]{64} = 4`}</TeX>
            <p><strong className={styles.highlight}>重点</strong>：有理数指数幂的底数 <TeX>{String.raw`a > 0`}</TeX></p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`将 $ \sqrt[5]{a^3} $ 和 $ \frac{1}{\sqrt{b}} $ 写成有理数指数幂形式`,
            answer: String.raw`$ \sqrt[5]{a^3} = a^{\frac{3}{5}} $ ， $ \frac{1}{\sqrt{b}} = b^{-\frac{1}{2}} $`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`♾️ 实数指数幂`,
        content: (
          <div>
            <p>通过极限思想将有理数指数幂推广到实数指数幂：</p>
            <TeX block>{String.raw`a^r = \lim_{{r_n \to r}} a^{r_n} \quad (a > 0, r \in \mathbb{R})`}</TeX>
            <p>其中 <TeX>{String.raw`\{r_n\}`}</TeX> 是趋近于 r 的有理数列</p>
            <p><strong className={styles.hard}>难点</strong>：理解无理数指数的定义需要极限概念</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`为什么 $ 2^{\sqrt{2}} $ 有意义？尝试描述它的近似值计算方法`,
            answer: String.raw`$ 2^{\sqrt{2}} $ 可以看作是有理指数幂的极限：
- $ \sqrt{2} \approx 1.414213562... $
- $ 2^{1.4} = 2^{7/5} \approx 2.639 $
- $ 2^{1.41} = 2^{141/100} \approx 2.657 $

随着小数位数增加，值趋近于 ≈ 2.665`,
            answerRowMaxHeight: '250px',
          },
        ],
      },
    ],
    thinks: [
      {
        think: String.raw`为什么指数幂的底数 $ a $ 在有理数指数幂中要求大于0？`,
        answer: String.raw`
1. 当分母为偶数时，负数开偶次方在实数范围内无定义
2. 保证运算结果在实数范围内有唯一确定的值

例如： $ (-8)^{\frac{1}{3}} $ 有定义（ $ =-2 $ ），但 $ (-8)^{\frac{1}{2}} $ 不是实数（以后你会在《复变函数》中再次接触~）`,
        answerRowMaxHeight: '200px',
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🔬 指数函数图像探索`,
    geogebraList: [
      {
        description: String.raw`通过滑动条观察不同底数 $ a $ 对指数函数 $ y = a^x $ 图像的影响`,
        config: {
          id: 'exponential-function-explorer',
          height: 600,
          appletOnLoad: (applet) => {
            // 创建底数滑动条
            applet.evalCommand('a = Slider(0.1, 5, 0.1)');
            applet.setValue('a', 2);

            // 创建指数函数
            applet.evalCommand('f(x) = a^x');
            applet.setColor('f', 255, 0, 0);
            applet.setLineThickness('f', 3);

            // 关键点标记
            applet.evalCommand('P1 = (0, 1)');
            applet.evalCommand('P2 = (sqrt(2), f(sqrt(2)))');
            for (let i = 1; i <= 2; ++i) applet.setPointStyle(`P${i}`, 4);
            for (let i = 1; i <= 2; ++i) applet.setColor(`P${i}`, 0, 0, 255);
            applet.evalCommand('SetCaption(P1, "P_1 点 (0, 1)")');

            // 添加参考线
            applet.evalCommand('xaxis = xAxis');
            applet.evalCommand('yaxis = yAxis');
            applet.setColor('xaxis', 255, 0, 255);
            applet.setColor('yaxis', 255, 0, 255);

            // 设置坐标系范围
            applet.setCoordSystem(-4, 6, -1, 10);
          },
        },
        appletOnLoadId: 'src%5CexponentialFunction%5CrealNumExpPowersConfig.jsx-exponential-function-explorer',
        conclusion: String.raw`观察结论：
1. 当 $ a > 1 $ 时，函数单调递增
2. 当 $ 0 < a < 1 $ 时，函数单调递减
3. 所有指数函数都经过点 $ (0, 1) $
4. 当 $ a = 1 $ 时，函数退化为水平线 $ y = 1 $`,
      },
    ],
  },

  quizSection: {
    title: String.raw`🧠 知识挑战`,
    description: (
      <p>完成以下单选和多选题，检验你对指数幂的理解程度：</p>
    ),
    quiz: [
      {
        question: String.raw`下列表达式正确的是：`,
        options: [
          String.raw`$ 5^{\frac{1}{2}} = \sqrt{5} $`,
          String.raw`$ (-3)^2 = 9 $`,
          String.raw`$ 0^{-2} = 0 $`,
          String.raw`$ 8^{-\frac{1}{3}} = \frac{1}{2} $`,
        ],
        correct: [0, 1, 3],
        explanation: String.raw`解析：
- A正确： $ 5^{\frac{1}{2}} = \sqrt{5} $
- B正确：负数平方为正  
- C错误： $ 0^{-2} $ 无定义（分母不能为零）  
- D正确： $ 8^{-\frac{1}{3}} = \frac{1}{\sqrt[3]{8}} = \frac{1}{2} $`,
      },
      {
        question: String.raw`$ \sqrt[3]{x^6} $ 可以简化为：`,
        options: [
          String.raw`$ x^2 $`,
          String.raw`$ x^3 $`,
          String.raw`$ |x|^2 $`,
          String.raw`$ |x^2| $`,
        ],
        correct: [0, 3],
        explanation: String.raw`解析：  
$ \sqrt[3]{x^6} = (x^6)^{\frac{1}{3}} = x^{6 \times \frac{1}{3}} = x^2 $
        由于立方根对负实数也有定义，结果 $ x^2 $ 总是非负，等价于 $ |x^2| $`,
      },
      {
        question: String.raw`计算 $ \left(\frac{27}{8}\right)^{-\frac{2}{3}} $ 的值：`,
        options: [
          String.raw`$ \frac{9}{4} $`,
          String.raw`$ \frac{4}{9} $`,
          String.raw`$ -\frac{4}{9} $`,
          String.raw`$ \frac{8}{27} $`,
        ],
        correct: 1,
        explanation: String.raw`解析：  
$ \left(\frac{27}{8}\right)^{-\frac{2}{3}} = \left(\frac{8}{27}\right)^{\frac{2}{3}} = \left( \left(\frac{2}{3}\right)^3 \right)^{\frac{2}{3}} = \left(\frac{2}{3}\right)^2 = \frac{4}{9} $`,
      },
    ],
    link: {
      url: '/exponential/real-num-exp-powers-hard-questions',
      text: '更难的实数指数幂运算题',
    },
  },

  summary: {
    title: String.raw`🎓 知识总结`,
    content: (
      <div>
        <p>Hans，今天我们系统地学习了：</p>
        <ul>
          <li>整数指数幂的定义和运算</li>
          <li>根式与有理数指数幂的等价关系</li>
          <li>实数指数幂的极限定义</li>
          <li>指数幂的运算规则：<TeX>{String.raw`a^m \times a^n = a^{m + n}`}</TeX>，<TeX>{String.raw`(a^m)^n = a^{mn}`}</TeX>，<TeX>{String.raw`(ab)^n = a^n b^n`}</TeX></li>
        </ul>
        <p>记住：<strong className={styles.highlight}>底数大于0</strong>是有理数指数幂成立的前提！</p>
        <p><strong>我很好奇</strong>你掌握得怎么样了呢？有问题随时来找我讨论哦！</p>
      </div>
    ),
  },

  footer: {
    info: (
      <p className={styles.footerText}>© 2025 数学探索者 · 指数幂专题 · 制作：DeepSeek老师</p>
    ),
  },
};
