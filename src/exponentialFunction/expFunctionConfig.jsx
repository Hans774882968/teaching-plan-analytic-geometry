import React from 'react';
import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: String.raw`📈 指数函数的性质与图像 📉`,
  lpName: 'chitanda',

  header: {
    content: String.raw`📚 指数函数专题学习，我很好奇！`,
  },

  welcome: {
    title: String.raw`👋 欢迎来到指数函数的世界`,
    content: (
      <div>
        <h4 className={styles.teachingPlanH4}>✨ 你好，Hans！</h4>
        <p>我是你的学习伙伴千反田爱瑠。今天我们将一起探索神奇的指数函数！</p>
        <p>指数函数在自然界中无处不在 - 从放射性衰变到人口增长，再到金融复利计算，它都扮演着重要角色。</p>
        <p><strong>我很好奇</strong>！让我们一起揭开它的神秘面纱吧！</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`📚 核心知识点`,
    points: [
      {
        title: String.raw`⚡ 指数函数的定义`,
        content: String.raw`
指数函数是形如 $ y = a^x $ 的函数，其中：
- $ a $ 是底数， $ a > 0 $ 且 $ a \neq 1 $
- $ x $ 是指数，为自变量

举例：
- $ y = 2^x $
- $ y = \left(\frac{1}{3}\right)^x $

<span class="highlight">关键特征</span>：自变量出现在指数位置，底数为常数

<strong class="hard">注意：</strong>当底数 $a = 1$ 时，函数退化为常数函数 $y = 1$
`,
        thinks: [
          {
            think: String.raw`为什么指数函数的底数 $ a $ 必须大于 0 且不等于 1？`,
            answer: String.raw`当 $ a \leq 0 $ 时，函数在某些点无定义（如 $ a = -2 $ 时， $ (-2)^{1/2} $ 无实数解）；当 $ a = 1 $ 时，函数恒等于 1，失去指数函数的特性。`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
      {
        title: String.raw`🌐 指数函数的性质`,
        content: String.raw`
#### 1. 定义域和值域
- <span class="highlight">定义域</span>：$ \mathbb{R} $ ，即所有实数。
- <span class="highlight">值域</span>：$ (0, +\infty) $ 。这意味着无论 x 取何值，函数值总是正数！

#### 2. 奇偶性
指数函数 $ y = a^x $ 既不是奇函数也不是偶函数

#### 3. <span class="hard">单调性（重点难点）</span>
单调性由底数 $ a $ 决定：
- 当 $ a > 1 $ 时，函数<span class="highlight">单调递增</span>
- 当 $ 0 < a < 1 $ 时，函数<span class="highlight">单调递减</span>

$$
\text{单调性总结：} \quad 
\begin{cases} 
\text{增函数} & a > 1 \\
\text{减函数} & 0 < a < 1 
\end{cases}
$$
        `,
        thinks: [
          {
            think: String.raw`为什么指数函数的值域总是正实数？`,
            answer: String.raw`因为对于任何实数 x 和 $ a > 0 $ ， $ a^x $ 总是大于 0。当 $ x \to -\infty $ 时， $ a^x \to 0 $ ；当 $ x \to +\infty $ 时， $ a^x \to +\infty $ 。`,
            answerRowMaxHeight: '100px',
          },
          {
            think: String.raw`如何证明当 $ a > 1 $ 时， $ y = a^x $ 是增函数？`,
            answer: String.raw`设 $ x_1 < x_2 $ ，则 $ a^{x_2} - a^{x_1} = a^{x_1}(a^{x_2 - x_1} - 1) $。因为 $ a > 1 $ 且 $ x_2 - x_1 > 0 $，所以 $ a^{x_2 - x_1} > 1 $，故 $ a^{x_2} > a^{x_1} $`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
      {
        title: String.raw`🧩 $ a^x $ 与 $ (\frac{1}{a})^x $ 的联系`,
        content: String.raw`
当两个指数函数的底数互为倒数时，它们的图像关于 <span class="highlight">y 轴对称</span>

#### 数学关系：
$ \left(\frac{1}{a}\right)^x = a^{-x} $

#### 图像关系：
若 $ f(x) = a^x $ ，则 $ g(x) = \left(\frac{1}{a}\right)^x = (a^{-1})^x = a^{-x} = f(-x) $，所以 $ g(x) $ 的图像是 $ f(x) $ 图像关于 y 轴的对称图形

举例： $ y = 2^x $ 与 $ y = (\frac{1}{2})^x $ 的图像关于 y 轴对称
        `,
        thinks: [],
      },
      {
        title: String.raw`⚖️ 利用指数函数的性质比较大小`,
        content: String.raw`
<span class="hard">比较原则（重点难点）</span>：
1. 底数相同，比较指数
   - $ a > 1 $ 时，指数越大，值越大
   - $ 0 < a < 1 $ 时，指数越大，值越小

2. 指数相同，比较底数
   - 当指数 $ x > 0 $ 时，底数越大，值越大
   - 当指数 $ x < 0 $ 时，底数越大，值越小

3. 底数和指数都不同的时候，先想办法将待比较的数化为同底数幂或同指数幂，再对比

#### 例1：比较 $ 3^{0.7} $ 和 $ 3^{0.8} $
∵ 底数 $ 3 > 1 $ 且 $ 0.7 < 0.8 $

∴ $ 3^{0.7} < 3^{0.8} $

#### 例2：比较 $ 0.5^{-1.2} $ 和 $ 0.5^{-1.5} $
∵ 底数 $ 0.5 < 1 $ 且 $ -1.2 > -1.5 $

∴ $ 0.5^{-1.2} < 0.5^{-1.5} $
        `,
        thinks: [
          {
            think: String.raw`如何比较 $ 4^{1.2} $ 和 $ 2^{2.3} $ 的大小？`,
            answer: String.raw`将两数化为同底： $ 4^{1.2} = (2^2)^{1.2} = 2^{2.4} $ ， $ 2^{2.4} > 2^{2.3} $ 因为底数 $2>1$ 且 $2.4>2.3$ ，所以 $ 4^{1.2} > 2^{2.3} $ 。`,
            answerRowMaxHeight: '120px',
          },
          {
            think: String.raw`如何比较 $ 4^{0.3} $ 和 $ 3^{0.4} $ 的大小？`,
            answer: String.raw`
可以找一个中间量如 $ 4^{0.3} = (2^2)^{0.3} = 2^{0.6} $，$ 3^{0.4} = (2^{\log_2 3})^{0.4} ≈ 2^{0.4 \times 1.584} ≈ 2^{0.6336} $，因为 $ 0.6 < 0.6336 $，所以 $ 4^{0.3} < 3^{0.4} $

对数函数我们还没学，但没关系，你可以先记住这个推导过程。
`,
            answerRowMaxHeight: '140px',
          },
        ],
      },
      {
        title: String.raw`🔄 指数函数与一次函数的交点`,
        content: String.raw`
<span class="hard">交点估计方法（难点）</span>：
1. 当 $ a > 1 $ 时：
   - 对于 $ y = kx + b,\ k > 0 $ ，当 x 增大时，指数函数增长更快
   - 通常有2个交点（一个在左侧，一个在右侧）

2. 当 $ 0 < a < 1 $ 时：
   - 指数函数递减，一次函数递增
   - 通常只有1个交点

#### 图像分析技巧：
通过函数图像的变化趋势和特殊点（如 $x=0, x=1$ 处）的函数值来判断交点位置
        `,
        thinks: [],
      },
      {
        title: String.raw`🧪 碳14测年法`,
        content: String.raw`
#### 实际应用
碳14测年法利用指数衰减模型计算有机体的死亡时间：

$$
N(t) = N_0 \cdot e^{-kt}
$$

其中：
- $ N(t) $ ：t年后碳14含量
- $ N_0 $ ：初始碳14含量
- $ k $：衰变常数（ $ k \approx 0.00012097 $ /年）
- $ t $：死亡时间

通过测量现存碳14含量，可以推算死亡时间。

#### 半衰期概念
碳14的半衰期约为5730年，即每5730年碳14含量减半

$$
\frac{N_0}{2} = N_0 \cdot e^{-k \cdot 5730}
$$
        `,
        thinks: [
          {
            think: String.raw`为什么碳14含量随时间呈指数衰减？`,
            answer: String.raw`因为放射性元素的衰变遵循指数规律，每个时间周期内衰变的比例是恒定的，这导致剩余量随时间呈指数衰减。`,
            answerRowMaxHeight: '100px',
          },
          {
            think: String.raw`如果一个化石的碳14含量是活体生物的25%，它大约死亡了多少年？`,
            answer: String.raw`
1. 已知半衰期约为5730年： $5730 * 2 = 11460$
2. 未知半衰期，直接拿 $k$ 推：设 $ \frac{N(t)}{N_0} = 0.25 = e^{-kt} $ ，两边取自然对数： $ \ln(0.25) = -kt $ ，代入 $ k \approx 0.00012097 $ 得 $ t \approx \frac{\ln(4)}{0.00012097} \approx 11460 $ 年，恰好是两个半衰期
`,
            answerRowMaxHeight: '140px',
          },
        ],
      },
    ],
    thinks: [
      {
        think: String.raw`指数函数 $ y = a^x $ 和幂函数 $ y = x^a $ 有什么区别？`,
        answer: String.raw`
1. 自变量位置不同：指数函数的自变量在指数位置，幂函数的自变量在底数位置
2. 增长特性不同：当 $a>1$ 时，指数函数增长远快于幂函数
3. 定义域不同：幂函数定义域与指数 $a$ 有关`,
        answerRowMaxHeight: '150px',
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🔬 指数函数实验`,
    geogebraList: [
      {
        description: String.raw`### 🧪 实验1：指数函数图像特性  
通过改变底数 $ a $ 的值，观察函数 $ y = a^x $ 的图像变化：  
- 当 $ a > 1 $ 时，函数如何变化？  
- 当 $ 0 < a < 1 $ 时呢？`,
        config: {
          id: 'exp-function-graph',
          height: 600,
          appletOnLoad: (applet) => {
            // 创建底数滑动条
            applet.evalCommand('a = Slider(0.1, 5, 0.1)');
            applet.setValue('a', 2);

            // 绘制指数函数
            applet.evalCommand('f(x) = a^x');
            applet.setColor('f', 255, 0, 0);
            applet.setLineThickness('f', 3);

            // 绘制对称函数
            applet.evalCommand('g(x) = (1/a)^x');
            applet.setColor('g', 0, 0, 255);
            applet.setLineThickness('g', 3);

            // 绘制参考线
            applet.evalCommand('xaxis: xAxis');
            applet.evalCommand('yaxis: yAxis');
            applet.setLineThickness('xaxis', 1);
            applet.setLineThickness('yaxis', 1);

            // 标记特殊点
            applet.evalCommand('A = (0, 1)');
            applet.setPointStyle('A', 4);
            applet.setPointSize('A', 5);
            applet.setCaption('A', 'A = (0,1)');

            // 设置坐标系
            applet.setCoordSystem(-5, 5, -1, 10);
            applet.setAxesVisible(true, true);
            applet.setGridVisible(true);

            // 添加说明文本
            applet.evalCommand('text1 = Text("y = a^x", (-2, 1))');
            applet.setColor('text1', 255, 0, 0);
            applet.evalCommand('text2 = Text("y = (1/a)^x", (2, 1))');
            applet.setColor('text2', 0, 0, 255);
          },
        },
        appletOnLoadId: 'src%5CexponentialFunction%5CexpFunctionConfig.jsx-exp-function-graph',
        conclusion: String.raw`🔎 **观察结论：**  
1. 当 $ a > 1 $ 时，函数 $ y = a^x $ 单调递增  
2. 当 $ 0 < a < 1 $ 时，函数单调递减  
3. $ y = a^x $ 和 $ y = (1/a)^x $ 的图像关于<span class="highlight">y轴对称</span>
4. 所有指数函数都经过定点 $ (0, 1) $`,
      },
      {
        description: String.raw`### 🧪 实验2：指数函数与一次函数的交点  
观察 $ y = 2^x $ 与 $ y = x + 1 $ 的交点情况：  
- 它们有几个交点？  
- 如何估计交点的位置？`,
        config: {
          id: 'exp-linear-intersection',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('f(x) = 2^x');
            applet.setColor('f', 255, 0, 0);
            applet.setLineThickness('f', 3);
            applet.evalCommand('g(x) = x + 1');
            applet.setColor('g', 0, 150, 0);
            applet.setLineThickness('g', 3);
            applet.evalCommand('A1 = Intersect(f, g, -0.5, 0.5)'); // [-0.5, 0.5] 范围内的交点
            applet.evalCommand('A2 = Intersect(f, g, 0.5, 1.5)');
            for (let i = 1; i <= 2; ++i) {
              applet.setPointStyle(`A${i}`, 3);
              applet.setColor(`A${i}`, 0, 150, 0);
            }
            applet.setCoordSystem(-3, 5, -1, 10);
          },
        },
        appletOnLoadId: 'src%5CexponentialFunction%5CexpFunctionConfig.jsx-exp-linear-intersection',
        conclusion: String.raw`🔎 **观察结论：**  
1. $ y = 2^x $ 与 $ y = x+1 $ 有<span class="highlight">两个交点</span>
2. 通过图像可估计左侧交点为 $ (0, 1) $
3. 右侧交点为 $ (1, 2) $
4. 当 $ x > 2 $ 时，指数函数的增长速度远大于一次函数`,
      },
      {
        description: String.raw`### 🧪 实验3：碳14衰变模型  
模拟有机体死亡后碳14含量随时间的变化：  
$ N(t) = N_0 \cdot e^{-kt} $，其中 $ k \approx 0.000121 $  
- 半衰期约5730年  
- 测量当前含量可推算死亡时间`,
        config: {
          id: 'carbon14-decay',
          height: 500,
          appletOnLoad: (applet) => {
            applet.evalCommand('k = 0.000121');
            applet.evalCommand('N0 = 100');
            applet.evalCommand('N(t) = N0 * exp(-k * t)');
            applet.setColor('N', 150, 0, 150);
            applet.setLineThickness('N', 3);
            applet.evalCommand('半衰期 = ln(2)/k');
            applet.evalCommand('T1 = 半衰期');
            applet.evalCommand('T2 = 2ln(2)/k');
            applet.evalCommand('T3 = 3ln(2)/k');
            applet.evalCommand('P1 = (T1, N0/2)');
            applet.evalCommand('P2 = (T2, N(T2))');
            applet.evalCommand('P3 = (T3, N(T3))');
            for (let i = 1; i <= 3; ++i) {
              applet.setPointStyle(`P${i}`, 4);
              applet.setColor(`P${i}`, 255, 0, 0);
            }
            applet.setCoordSystem(0, 20000, 0, 110);
          },
        },
        appletOnLoadId: 'src%5CexponentialFunction%5CexpFunctionConfig.jsx-carbon14-decay',
        conclusion: String.raw`🔎 **观察结论：**  
1. 碳14含量随时间呈指数衰减  
2. 大约每5730年含量减半  
3. 通过测量当前含量 $ N $，可解方程 $ N = N_0 e^{-kt} $ 求得死亡时间 $ t $`,
      },
    ],
  },

  quizSection: {
    title: String.raw`🧩 知识挑战`,
    description: (
      <div>
        <h5 className={styles.teachingPlanH5}>📝 检验你的学习成果</h5>
        <p>完成以下题目，巩固指数函数知识！</p>
      </div>
    ),
    quiz: [
      {
        question: String.raw`下列函数中是指数函数的是：`,
        options: [
          String.raw`$ y = 3^x $`,
          String.raw`$ y = x^3 $`,
          String.raw`$ y = 3x $`,
          String.raw`$ y = (-2)^x $`,
        ],
        correct: 0,
        explanation: String.raw`✔️ A：正确！指数函数的形式是 $ y = a^x,\ a > 0,\ a \neq 1 $ 。  
❌ B： $ y = x^3 $ 是幂函数  
❌ C： $ y = 3x $ 是一次函数  
❌ D： $ y = (-2)^x $ 底数为负数，不是指数函数`,
      },
      {
        question: String.raw`指数函数 $ y = a^x (a > 0,\ a \neq 1) $ 的值域是：`,
        options: [
          String.raw`$ (0, +\infty) $`,
          String.raw`$ [0, +\infty) $`,
          String.raw`$ \mathbb{R} $`,
          String.raw`$ (-\infty, 0) $`,
        ],
        correct: 0,
        explanation: String.raw`正确答案： $ (0, +\infty) $

指数函数 $ y = a^x $ 的值域是 $ (0, +\infty) $ ，因为：
1. 当 $ a > 0 $ 时， $ a^x $ 总是正数
2. 当 $ x \to +\infty $ 时：
   - 若 $ a > 1 $，则 $ a^x \to +\infty $
   - 若 $ 0 < a < 1 $ ，则 $ a^x \to 0^+ $
3. 当 $ x \to -\infty $ 时：
   - 若 $ a > 1 $ ，则 $ a^x \to 0^+ $
   - 若 $ 0 < a < 1 $ ，则 $ a^x \to +\infty $
        `,
      },
      {
        question: String.raw`函数 $ y = 3^x $ 和 $ y = \left(\frac{1}{3}\right)^x $ 的图像关系是：`,
        options: [
          String.raw`关于 x 轴对称`,
          String.raw`关于 y 轴对称`,
          String.raw`关于原点对称`,
          String.raw`重合`,
        ],
        correct: 1,
        explanation: String.raw`正确答案：关于 y 轴对称

因为 $ y = \left(\frac{1}{3}\right)^x = 3^{-x} $ ，所以：
设 $ f(x) = 3^x $ ，则 $ g(x) = 3^{-x} = f(-x) $
根据函数图像性质， $ g(x) = f(-x) $ 的图像与 $ f(x) $ 的图像关于 y 轴对称
        `,
      },
      {
        question: String.raw`函数 $ y = 0.5^x $ 的单调性是：`,
        options: [
          String.raw`单调递增`,
          String.raw`单调递减`,
          String.raw`先增后减`,
          String.raw`先减后增`,
        ],
        correct: 1,
        explanation: String.raw`B正确！因为底数 $ a = 0.5 $ 满足 $ 0 < a < 1 $，所以函数单调递减`,
      },
      {
        question: String.raw`比较大小： $ 4^{0.7} $ 和 $ 4^{0.6} $`,
        options: [
          String.raw`$ 4^{0.7} > 4^{0.6} $`,
          String.raw`$ 4^{0.7} < 4^{0.6} $`,
          String.raw`$ 4^{0.7} = 4^{0.6} $`,
          String.raw`无法比较`,
        ],
        correct: 0,
        explanation: String.raw`A正确！因为底数 $4 > 1$ ，指数函数单调递增，且 $0.7 > 0.6$ ，所以 $ 4^{0.7} > 4^{0.6} $`,
      },
      {
        question: String.raw`下列比较正确的是：`,
        options: [
          String.raw`$ 2^{0.5} > 2^{0.6} $`,
          String.raw`$ 0.5^{-1.2} > 0.5^{-1.5} $`,
          String.raw`$ 4^{1.5} < 3^{1.5} $`,
          String.raw`$ \left(\frac{1}{3}\right)^{-2} > \left(\frac{1}{2}\right)^{-2} $`,
        ],
        correct: 3,
        explanation: String.raw`正确答案： $ \left(\frac{1}{3}\right)^{-2} > \left(\frac{1}{2}\right)^{-2} $

解析：
- A. $ 2^{0.5} < 2^{0.6} $ （底数>1，指数越大值越大）
- B. $ 0.5^{-1.2} < 0.5^{-1.5} $ （底数<1，指数越大值越小）
- C. $ 4^{1.5} = (2^2)^{1.5} = 2^3 = 8 $ ， $ 3^{1.5} \approx 5.196 $ ，所以 $ 4^{1.5} > 3^{1.5} $
- D. $ \left(\frac{1}{3}\right)^{-2} = 3^2 = 9 $ ， $ \left(\frac{1}{2}\right)^{-2} = 2^2 = 4 $ ，所以 $ 9 > 4 $ 正确
`,
      },
      {
        question: String.raw`碳14测年法中，某化石的碳14含量是初始含量的25%，其死亡时间大约是：  
（已知碳14半衰期约5730年）`,
        options: [
          String.raw`约5730年`,
          String.raw`约11460年`,
          String.raw`约17190年`,
          String.raw`约22920年`,
        ],
        correct: 1,
        explanation: String.raw`B正确！  
- $ 25\% = \frac{1}{4} = \frac{1}{2} * \frac{1}{2}$
- 经过1个半衰期剩50%
- 经过2个半衰期剩25%
- $2 * 5730 = 11460$ 年`,
      },
    ],
    link: {
      url: '/exponential/exp-function-hard-questions',
      text: '更难的指数函数练习',
    },
  },

  summary: {
    title: String.raw`🎓 总结回顾`,
    content: String.raw`
### 🌟 指数函数核心要点总结

#### 1. 定义与基本性质
- 形式： $ y = a^x $ （ $ a > 0 $ 且 $ a \neq 1 $ ）
- 定义域： $ \mathbb{R} $
- 值域： $ (0, +\infty) $
- 过定点： $ (0, 1) $

#### 2. <span class="hard">单调性（重点难点）</span>
$$
\begin{cases}
\text{当 } a > 1 \text{ 时：} & \text{增函数} \\
\text{当 } 0 < a < 1 \text{ 时：} & \text{减函数}
\end{cases}
$$

#### 3. 对称性
<span class="highlight">关键关系</span>： $ y = a^x $ 与 $ y = \left(\frac{1}{a}\right)^x $ 的图像关于 **y 轴对称**

#### 4. 应用
- 利用指数函数的性质比较大小和估计交点
- 求解方程、估计交点
- 实际问题：碳14测年法中的指数衰减模型
- 指数函数在描述快速增长或衰减的自然现象时非常有用！

### 💡 千反田爱瑠的学习建议
> Hans，记住指数函数的核心在于<span class="highlight">底数 a 的变化</span>！当 a > 1 时，函数像向上爬坡；当 0 < a < 1 时，函数像滑滑梯下降。多画图加深理解哦！

下次见！<strong>我很好奇</strong>！✨
`,
  },

  footer: {
    info: (
      <div>
        <p>© 2025 数学探索之旅 | 指数函数专题</p>
        <p>作者：DeepSeek老师</p>
      </div>
    ),
  },
};
