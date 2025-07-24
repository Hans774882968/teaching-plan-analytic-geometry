import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: '🔍 函数及其表示方法 📊',
  header: {
    content: String.raw`函数是数学中描述变量间关系的重要工具，本节课将系统学习函数的表示方法及其应用`,
  },
  welcome: {
    title: '📚 函数探索之旅',
    content: (
      <div>
        <p>嗨，Hans7！我是你的学习伙伴柯南👓。今天我们将一起探索函数的奥秘。</p>
        <p>在初中，我们已经接触过函数的概念，但高中数学将带你更深入地理解：</p>
        <ul>
          <li>函数的精确定义与表示方法</li>
          <li>图像法与描点作图技巧</li>
          <li>特殊函数如分段函数和高斯取整函数</li>
          <li>函数变换规律分析</li>
        </ul>
        <p>准备好开始我们的侦探之旅了吗？让我们一起揭开函数的神秘面纱！</p>
      </div>
    ),
  },
  knowledgePointSection: {
    title: '📝 核心知识点',
    points: [
      {
        title: '📌 函数的概念',
        content: (
          <div>
            <h4 className={styles.teachingPlanH4}>📖 初中函数回顾</h4>
            <p>初中我们学习过正比例函数、一次函数、二次函数等基础函数类型，主要研究了它们的图像和性质。</p>

            <h5 className={styles.teachingPlanH5}>⚠️ 初中研究方法的局限性</h5>
            <ul>
              <li>主要依赖图像法，难以精确描述复杂函数</li>
              <li>对定义域、值域等概念理解不够深入</li>
              <li>缺乏对<strong className={styles.highlight}>函数本质</strong>的严格定义</li>
            </ul>

            <h5 className={styles.teachingPlanH5}>🎯 高中函数精确定义</h5>
            <p>函数是<strong className={styles.highlight}>两个非空数集之间的特殊对应关系</strong>：</p>
            <TeX block>{String.raw`f: A \to B`}</TeX>
            <p>其中：</p>
            <ul>
              <li>定义域：自变量 <TeX>{String.raw`x`}</TeX> 的取值范围 <TeX>{String.raw`A`}</TeX></li>
              <li>值域：因变量 <TeX>{String.raw`y`}</TeX> 的取值范围 <TeX>{String.raw`\{f(x) \mid x \in A\}`}</TeX></li>
              <li><strong className={styles.highlight}>函数三要素</strong>：定义域、对应法则、值域</li>
            </ul>

            <h5 className={styles.teachingPlanH5}>🔄 函数定义的演变</h5>
            <ol>
              <li>17世纪：莱布尼茨首次提出"函数"概念</li>
              <li>18世纪：欧拉给出解析式定义 <TeX>{String.raw`y = f(x)`}</TeX></li>
              <li>19世纪：狄利克雷提出现代映射定义</li>
            </ol>
          </div>
        ),
        thinks: [
          {
            think: String.raw`函数 $ f(x) = (\sqrt{x})^2 $ 和 $ g(x) = \sqrt{x^2} $ 是同一个函数吗？为什么？`,
            answer: String.raw`不是同一个函数。虽然两者在 $ x >= 0 $ 时相等，但它们的定义域不同：
- $ f(x) $ 定义域为 $ [0, +\infty) $
- $ g(x) $ 定义域为 $ \mathbb{R} $

**函数相等必须满足定义域和对应法则都相同**`,
            answerRowMaxHeight: '200px',
          },
        ],
      },
      {
        title: '📊 函数的表示方法',
        content: (
          <div>
            <h4 className={styles.teachingPlanH4}>🖼️ 图像法</h4>
            <p>通过坐标系中的图形表示函数关系：</p>
            <TeX block>{String.raw`\{(x,y) \mid y = f(x), x \in D\}`}</TeX>

            <h5 className={styles.teachingPlanH5}>✏️ 描点作图法</h5>
            <ol>
              <li>确定定义域</li>
              <li>选取代表性<TeX>{String.raw`x`}</TeX>值计算<TeX>{String.raw`y`}</TeX></li>
              <li>在坐标系中描点</li>
              <li>用<strong className={styles.highlight}>平滑曲线</strong>连接各点</li>
            </ol>
            <p><strong className={styles.hard}>难点</strong>：合理选择描点位置和密度</p>

            <h5 className={styles.teachingPlanH5}>🧩 分段函数</h5>
            <p>在不同区间使用不同表达式：</p>
            <TeX block>{String.raw`f(x) = \begin{cases} 
x^2 & \text{if } x < 0 \\
2x + 1 & \text{if } 0 \leq x \leq 2 \\
5 - x & \text{if } x > 2 
\end{cases}`}</TeX>
            <p><strong className={styles.highlight}>关键点</strong>：注意区间端点处的取值</p>

            <h5 className={styles.teachingPlanH5}>🚫 无法用图像法表示的函数</h5>
            <p>某些函数无法用传统图像表示：</p>
            <ul>
              <li>狄利克雷函数：<TeX>{String.raw`D(x) = \begin{cases} 1 & x \in \mathbb{Q} \\ 0 & x \notin \mathbb{Q} \end{cases}`}</TeX></li>
              <li>在任意区间内无限振荡的函数</li>
            </ul>

            <h5 className={styles.teachingPlanH5}>🔢 高斯取整函数</h5>
            <p>又称地板函数，表示为<TeX>{String.raw`y = [x]`}</TeX>：</p>
            <TeX block>{String.raw`[x] = \max\{n \in \mathbb{Z} \mid n \leq x\}`}</TeX>
            <p>例如：<TeX>{String.raw`[2.3] = 2, [-1.7] = -2`}</TeX></p>

            <h5 className={styles.teachingPlanH5}>🔁 函数变换探究</h5>
            <p><strong className={styles.hard}>难点</strong>：理解函数变换的几何意义</p>
            <p>1. <TeX>{String.raw`f(x)`}</TeX>与<TeX>{String.raw`f(x-1)`}</TeX>的关系：</p>
            <ul>
              <li>图像<strong className={styles.highlight}>向右平移1个单位</strong></li>
              <li>例如：<TeX>{String.raw`f(x) = x^2 \to f(x-1) = (x-1)^2`}</TeX></li>
            </ul>
            <p>2. <TeX>{String.raw`f(x)`}</TeX>与<TeX>{String.raw`f(2x)`}</TeX>的关系：</p>
            <ul>
              <li>图像<strong className={styles.highlight}>横向压缩为原来的一半</strong></li>
              <li>例如：<TeX>{String.raw`f(x) = \sin x \to f(2x) = \sin(2x)`}</TeX></li>
            </ul>
          </div>
        ),
        thinks: [
          {
            think: String.raw`高斯取整函数 $ y = [x] $ 在 $ x = 1.5 $ 和 $ x = -1.5 $ 处的取值分别是多少？`,
            answer: String.raw`$ [1.5] = 1 $ （不超过1.5的最大整数）  
$ [-1.5] = -2 $ （不超过-1.5的最大整数，注意 $ -1 > -1.5 $ ）`,
            answerRowMaxHeight: '120px',
          },
          {
            think: String.raw`若 $ f(x) = x^2 + 1 $，求 $ f(x-1) $ 和 $ f(2x) $ 的表达式`,
            answer: String.raw`$ f(x-1) = (x-1)^2 + 1 = x^2 - 2x + 2 $  
$ f(2x) = (2x)^2 + 1 = 4x^2 + 1 $`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
    ],
    thinks: [
      {
        think: String.raw`为什么狄利克雷函数无法用传统图像表示？`,
        answer: String.raw`狄利克雷函数 $ D(x) $ 在有理数点取值为1，无理数点取值为0。  
由于有理数和无理数在实数轴上都是**稠密**的，在任意小区间内函数值都无限次在0和1之间跳跃，无法形成连续曲线。`,
        answerRowMaxHeight: '150px',
      },
    ],
  },
  geogebraSection: {
    title: '🔬 函数图像实验',
    geogebraList: [
      {
        description: String.raw`探索分段函数和高斯取整函数的图像特性：  
1. 拖动滑动条 s1, s2 观察不同分段函数的图像变化  
2. 点击"显示取整函数"（showFloor）查看高斯取整函数的阶梯状特征`,
        config: {
          id: 'function-representation-1',
          height: 600,
          appletOnLoad: (applet) => {
            // 创建控制显示/隐藏的复选框
            applet.evalCommand('showPiecewise: true');
            applet.evalCommand('showFloor: true');
            applet.evalCommand('showTransform: true');
            applet.evalCommand('showTransFunctions: showTransform && showPiecewise');

            // Slider(<Min>, <Max>, <Increment>, <Speed>, <Width>, <Is Angle>, <Horizontal>, <Animating>, <Boolean Random>)
            applet.evalCommand('s1 = Slider(-4, 4, 0.1)');
            applet.setValue('s1', 1);
            applet.evalCommand('s2 = Slider(0.5, 3, 0.1)');
            applet.setValue('s2', 0.6);

            applet.evalCommand('SetConditionToShowObject(showPiecewise, false)');
            applet.evalCommand('SetConditionToShowObject(showFloor, false)');
            applet.evalCommand('SetConditionToShowObject(showTransform, false)');
            applet.evalCommand('SetConditionToShowObject(s1, false)');
            applet.evalCommand('SetConditionToShowObject(s2, false)');

            // 原始分段函数
            applet.evalCommand('f(x) = If(x < 0, x^2, 0 <= x <= 2, 2x + 1, x > 2, 5 - x)');
            applet.setColor('f', 255, 0, 0); // 红色
            applet.setLineThickness('f', 3);
            applet.evalCommand('SetConditionToShowObject(f, showPiecewise)');

            // 关键点标记
            applet.evalCommand('P1 = (0, f(0))');
            applet.evalCommand('P2 = (2, f(2))');
            applet.setPointStyle('P1', 4);
            applet.setPointStyle('P2', 4);
            applet.setColor('P1', 255, 0, 0);
            applet.setColor('P2', 255, 0, 0);
            applet.evalCommand('SetConditionToShowObject(P1, showPiecewise)');
            applet.evalCommand('SetConditionToShowObject(P2, showPiecewise)');

            applet.evalCommand('g(x) = floor(x)');
            applet.setColor('g', 0, 0, 255); // 蓝色
            applet.setLineThickness('g', 2);
            applet.evalCommand('SetConditionToShowObject(g, showFloor)');

            // f(x) -> f(x - s1) 平移变换
            applet.evalCommand('fTranslated: f(x - s1)');
            applet.setColor('fTranslated', 255, 136, 0); // 橙色
            applet.setLineThickness('fTranslated', 2);
            applet.evalCommand('SetConditionToShowObject(fTranslated, showTransFunctions)');

            // f(x) -> f(s2 * x) 伸缩变换
            applet.evalCommand('fScaled: f(s2 * x)');
            applet.setColor('fScaled', 0, 150, 0); // 绿色
            applet.setLineThickness('fScaled', 2);
            applet.evalCommand('SetConditionToShowObject(fScaled, showTransFunctions)');

            // 设置坐标系范围
            applet.setCoordSystem(-5, 5, -3.5, 7);
          },
        },
        appletOnLoadId: 'src%5CfunctionDefinition%5CrepresentationConfig.jsx-function-representation-1',
        conclusion: String.raw`实验结论：  
- 分段函数的图像在不同区间呈现不同形态  
- 高斯取整函数 $ y = [x] $ 呈阶梯状，在整数点发生跳跃  
- 函数变换 $ f(x) \to f(x-1) $ 使图像右移， $ f(x) \to f(2x) $ 使图像横向压缩`,
      },
    ],
  },
  quizSection: {
    title: '🧩 函数挑战赛',
    description: (
      <p>柯南提示：以下问题涉及<strong className={styles.highlight}>函数表示法</strong>和<strong className={styles.hard}>函数变换</strong>的核心概念</p>
    ),
    quiz: [
      {
        question: String.raw`下列哪个函数与 $ f(x) = |x| $ 是同一个函数？`,
        options: [
          String.raw`$ g(x) = \sqrt{x^2} $`,
          String.raw`$ h(x) = \begin{cases} x & x \geq 0 \\ -x & x < 0 \end{cases} $`,
          String.raw`$ k(x) = \sqrt{x} \cdot \sqrt{x} $`,
          String.raw`$ m(x) = \frac{x^2}{x} $`,
        ],
        correct: [0, 1],
        explanation: String.raw`解析：  
- $ g(x) $ 定义域为 $ \mathbb{R} $ 且 $ g(x) = |x| $，正确
- $ h(x) $ 是 $ |x| $ 的分段表示，正确
- $ k(x) $ 定义域 $ [0,+\infty) $，与 $ f(x) $ 不同
- $ m(x) $ 定义域 $ \mathbb{R} \setminus \{0\} $，与 $ f(x) $ 不同

**函数相等必须定义域和对应法则都相同**`,
      },
      {
        question: String.raw`若 $ f(x) = x^2 + 2x $，则 $ f(x-1) $ 的表达式是？`,
        options: [
          String.raw`$ x^2 - 2x + 1 $`,
          String.raw`$ x^2 + 4x + 3 $`,
          String.raw`$ x^2 - 1 $`,
          String.raw`$ x^2 + 2x - 1 $`,
        ],
        correct: 2,
        explanation: String.raw`解析：  
方法1：

$ f(x-1) = (x-1)^2 + 2(x-1) $  
$ = (x^2 - 2x + 1) + (2x - 2) $  
$ = x^2 - 2x + 1 + 2x - 2 $  
$ = x^2 - 1 $

方法2：

$ f(x) = x(x+2) $  
$ f(x-1) = (x-1)(x-1+2) = (x-1)(x+1) = x^2 - 1 $

思考：为什么方法2更简洁？这给了你什么启发？
`,
      },
      {
        question: String.raw`高斯取整函数 $ y = [x] $ 在区间 $ [-2, 1) $ 上的值域是？`,
        options: [
          String.raw`$ \{-2,-1,0\} $`,
          String.raw`$ \{-2,-1,0,1\} $`,
          String.raw`$ [-2,1) $`,
          String.raw`$ \{-2,-1\} $`,
        ],
        correct: 0,
        explanation: String.raw`解析：  
- 当 $ -2 \leq x < -1 $ 时 $ [x] = -2 $  
- 当 $ -1 \leq x < 0 $ 时 $ [x] = -1 $  
- 当 $ 0 \leq x < 1 $ 时 $ [x] = 0 $  
∴ 值域为 $ \{-2, -1, 0\} $`,
      },
    ],
    link: {
      url: '/function-definition/representation-hard-questions',
      text: '📚 更难的函数定义习题',
    },
  },
  summary: {
    title: '🕵️ 柯南的总结',
    content: (
      <div>
        <p>Hans7，今天我们共同探索了函数的世界：</p>
        <ul>
          <li>📌 理解了函数的精确定义和核心概念</li>
          <li>📊 掌握了三种函数表示法：解析式、图像法、列表法</li>
          <li>🧩 学会了处理分段函数和高斯取整函数</li>
          <li>🔁 探究了函数变换 <TeX>{String.raw`f(x) \to f(x-1)`}</TeX> 和 <TeX>{String.raw`f(x) \to f(2x)`}</TeX> 的规律</li>
        </ul>
        <p><strong className={styles.highlight}>关键收获</strong>：函数是描述变量关系的数学工具，不同表示法各有优劣</p>
        <p><strong className={styles.hard}>难点突破</strong>：函数变换的几何意义需要空间想象力，多画图有助于理解</p>
        <p>记住：<em>"在函数的世界里，每一个变量变化都讲述着一个精彩的故事"</em></p>
      </div>
    ),
  },
  footer: {
    info: (
      <div>
        <p>© 2025 数学探索之旅 | 主讲：DeepSeek老师 | 学习伙伴：柯南</p>
        <p>下一课预告：函数的单调性</p>
      </div>
    ),
  },
};
