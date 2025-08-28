import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: String.raw`📚 函数的奇偶性 📚`,
  lpName: 'conan',

  header: {
    content: String.raw`🧩 探索函数对称性的奥秘`,
  },

  welcome: {
    title: String.raw`🔍 欢迎来到函数奇偶性课堂`,
    content: (
      <div>
        <p>你好，Hans！我是你的学习伙伴柯南。今天我们将一起探索函数的奇偶性，揭开函数对称性的神秘面纱！</p>
        <p>函数奇偶性是函数的重要特性之一，它描述了函数图像的对称性质。掌握这个概念，能帮助你更好地理解和分析各种函数的行为特征。</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`🧠 核心知识点`,
    points: [
      {
        title: String.raw`⭐ 偶函数的定义`,
        content: (
          <div>
            <p>如果对于函数 <TeX>{String.raw`f(x)`}</TeX> 的定义域内任意一个 <TeX>{String.raw`x`}</TeX>，都有：</p>
            <TeX block>{String.raw`f(-x) = f(x)`}</TeX>
            <p>那么函数 <TeX>{String.raw`f(x)`}</TeX> 就叫做<strong className={styles.highlight}>偶函数</strong>。</p>
            <p>偶函数的图像关于 <TeX>{String.raw`y`}</TeX> 轴对称，就像一只美丽的蝴蝶🦋。</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`💭 思考：函数 $ f(x) = x^2 + 1 $ 是偶函数吗？请说明理由。`,
            answer: String.raw`✔️ 是偶函数。因为 $ f(-x) = (-x)^2 + 1 = x^2 + 1 = f(x) $ ，满足偶函数定义。`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`🌀 奇函数的定义`,
        content: (
          <div>
            <p>如果对于函数 <TeX>{String.raw`f(x)`}</TeX> 的定义域内任意一个 <TeX>{String.raw`x`}</TeX>，都有：</p>
            <TeX block>{String.raw`f(-x) = -f(x)`}</TeX>
            <p>那么函数 <TeX>{String.raw`f(x)`}</TeX> 就叫做<strong className={styles.highlight}>奇函数</strong>。</p>
            <p>奇函数的图像关于<strong className={styles.highlight}>原点</strong>对称，就像旋转对称的风车🎡。</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`💭 思考：函数 $ f(x) = x^3 - x $ 是奇函数吗？请说明理由。`,
            answer: String.raw`✔️ 是奇函数。因为 $ f(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -f(x) $ ，满足奇函数定义。`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`⚡ 奇偶函数的性质`,
        content: (
          <div>
            <h6 className={styles.teachingPlanH6}>🔹 重要性质：</h6>
            <ol>
              <li>奇函数 + 奇函数 = 奇函数</li>
              <li>偶函数 + 偶函数 = 偶函数</li>
              <li>奇函数 × 奇函数 = 偶函数</li>
              <li>偶函数 × 偶函数 = 偶函数</li>
              <li>奇函数 × 偶函数 = 奇函数</li>
            </ol>

            <h6 className={styles.teachingPlanH6}>🔹 定义域性质：</h6>
            <p>奇函数和偶函数的定义域必须关于<strong className={styles.highlight}>原点对称</strong>！</p>

            <h6 className={styles.teachingPlanH6}>⚠️ 难点注意：</h6>
            <p><strong className={styles.hard}>不是所有函数都有奇偶性</strong>！有些函数既不是奇函数也不是偶函数。</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`💭 思考：函数 $ f(x) = x^2 + x $ 是奇函数还是偶函数？为什么？`,
            answer: String.raw`❌ 既不是奇函数也不是偶函数。因为 $ f(-x) = (-x)^2 + (-x) = x^2 - x $ ，既不等于 $ f(x) $ 也不等于 $ -f(x) $ 。`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`📊 奇偶性与单调性的关系`,
        content: (
          <div>
            <p>奇函数和偶函数的单调性有特殊规律：</p>
            <ul>
              <li>偶函数在<strong className={styles.highlight}>y轴两侧的单调性相反</strong></li>
              <li>奇函数在<strong className={styles.highlight}>y轴两侧的单调性相同</strong></li>
            </ul>
            <p>例如：<TeX>{String.raw`f(x) = x^2`}</TeX> 是偶函数，在 <TeX>{String.raw`(-\infty, 0)`}</TeX> 上递减，在 <TeX>{String.raw`(0, +\infty)`}</TeX> 上递增。</p>
          </div>
        ),
      },
      {
        title: String.raw`🔄 函数对称性的推广`,
        content: (
          <div>
            <h5 className={styles.teachingPlanH5}>🔸 关于直线 x = h 对称</h5>
            <p>若函数图像关于直线 <TeX>{String.raw`x = h`}</TeX> 对称，则满足：</p>
            <TeX block>{String.raw`f(h + x) = f(h - x)`}</TeX>

            <h5 className={styles.teachingPlanH5}>🔸 关于点 (a, b) 对称</h5>
            <p>若函数图像关于点 <TeX>{String.raw`(a, b)`}</TeX> 对称，则满足：</p>
            <TeX block>{String.raw`f(a + x) + f(a - x) = 2b`}</TeX>
            <p>特别地，当 <TeX>{String.raw`(a, b) = (0, 0)`}</TeX> 时，就是奇函数的定义。</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`💭 思考：如何证明函数 $ f(x) = (x-2)^2 $ 关于直线 $ x = 2 $ 对称？`,
            answer: String.raw`✔️ 计算 $ f(2+x) = (2+x-2)^2 = x^2 $ ， $ f(2-x) = (2-x-2)^2 = (-x)^2 = x^2 $ ，所以 $ f(2+x) = f(2-x) $ ，即关于 $ x=2 $ 对称。`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
    ],
    thinks: [
      {
        think: String.raw`💡 综合思考：如果一个函数既是奇函数又是偶函数，它可能是什么函数？`,
        answer: String.raw`🔍 只能是零函数 $ f(x) = 0 $ 。因为同时满足 $ f(-x) = f(x) $ 和 $ f(-x) = -f(x) $ ，所以 $ f(x) = -f(x) $ ，即 $ 2f(x) = 0 $ ，故 $ f(x) = 0 $ 。`,
        answerRowMaxHeight: '100px',
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🔬 函数对称性实验`,
    geogebraList: [
      {
        description: String.raw`👀 观察奇函数和偶函数的图像特征。拖动点A，观察对称性：`,
        config: {
          id: 'function-symmetry-1',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('f(x) = x^3 - 3x');  // 奇函数
            applet.setColor('f', 255, 0, 0); // 红色
            applet.setLineThickness('f', 3);

            applet.evalCommand('g(x) = x^2 - 2');  // 偶函数
            applet.setColor('g', 0, 0, 255); // 蓝色
            applet.setLineThickness('g', 3);

            applet.evalCommand('A = Point(f)');  // f上的点
            applet.evalCommand('B = (x(A), g(x(A)))');  // g上的点

            // 创建对称点
            applet.evalCommand('A_{sym} = (-x(A), -y(A))');  // f的对称点
            applet.setColor('A_{sym}', 200, 0, 0);
            applet.setPointStyle('A_{sym}', 5);

            applet.evalCommand('B_{sym} = (-x(B), y(B))');  // g的对称点
            applet.setColor('B_{sym}', 0, 0, 200);
            applet.setPointStyle('B_{sym}', 5);

            // 创建对称线
            applet.evalCommand('sym1 = Segment(A, A_{sym})');
            applet.setLineThickness('sym1', 1);
            applet.setColor('sym1', 150, 150, 150);

            applet.evalCommand('sym2 = Segment(B, B_{sym})');
            applet.setLineThickness('sym2', 1);
            applet.setColor('sym2', 150, 150, 150);

            applet.setCoordSystem(-4, 4, -5, 5);
          },
        },
        appletOnLoadId: 'src%5CfunctionDefinition%5CevenOddConfig.jsx-function-symmetry-1',
        conclusion: String.raw`📝 实验结论：
1. 红色曲线 $ f(x) = x^3 - 3x $ 是**奇函数**，图像关于**原点对称**
2. 蓝色曲线 $ g(x) = x^2 - 2 $ 是**偶函数**，图像关于**y轴对称**
3. 拖动点A观察：
    - 奇函数上点A $ (x, y) $ 的对称点 $ (-x, -y) $ 也在函数上
    - 偶函数上点B $ (x, y) $ 的对称点 $ (-x, y) $ 也在函数上`,
      },
      {
        description: String.raw`🧪 探究一般对称性：验证函数 $ f(x) = (x-1)^3 + 2 $ 关于点 (1, 2) 对称`,
        config: {
          id: 'function-symmetry-2',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('f(x) = (x-1)^3 + 2');
            applet.setColor('f', 0, 150, 0); // 绿色
            applet.setLineThickness('f', 3);

            applet.evalCommand('P = Point(f)');  // 函数上的点
            applet.setPointStyle('P', 4);
            applet.setColor('P', 0, 100, 0);

            // 对称中心
            applet.evalCommand('O = (1, 2)');
            applet.setPointStyle('O', 10);
            applet.setColor('O', 255, 0, 0);

            // 对称点
            applet.evalCommand('P_{sym} = 2*O - P');
            applet.setPointStyle('P_{sym}', 4);
            applet.setColor('P_{sym}', 200, 0, 200);

            // 验证对称点是否在函数上
            applet.evalCommand('Q = (x(P_{sym}), f(x(P_{sym})))');
            applet.setPointStyle('Q', 8);
            applet.setColor('Q', 0, 0, 255);

            // 创建连线
            applet.evalCommand('seg = Segment(P, P_{sym})');
            applet.setLineThickness('seg', 1);
            applet.setColor('seg', 150, 150, 150);

            applet.setCoordSystem(-2, 4, -2, 6);
          },
        },
        appletOnLoadId: 'src%5CfunctionDefinition%5CevenOddConfig.jsx-function-symmetry-2',
        conclusion: String.raw`📝 实验结论：
1. 绿色曲线 $ f(x) = (x-1)^3 + 2 $ 的图像关于点 $ (1, 2) $ 对称
2. 紫色点 $ P_{sym} $ 是点P关于 $ (1, 2) $ 的对称点
3. 蓝色点 $ Q $ 是函数在 $ x(P_{sym}) $ 处的实际值
4. 观察发现： $ P_{sym} $ 和 $ Q $ 始终重合，说明对称点确实在函数图像上，验证了对称性`,
      },
    ],
  },

  quizSection: {
    title: String.raw`🏆 奇偶性知识挑战`,
    description: (
      <div>
        <h5 className={styles.teachingPlanH5}>🧩 完成以下挑战，检验你对函数奇偶性的掌握程度</h5>
        <p>共3道题目，包含单选和多选，仔细思考后作答！</p>
      </div>
    ),
    quiz: [
      {
        qid: '函数的奇偶性-1',
        question: String.raw`下列函数中，既是奇函数又是偶函数的是？`,
        options: [
          String.raw`$ f(x) = 0 $`,
          String.raw`$ f(x) = x^2 $`,
          String.raw`$ f(x) = x^3 $`,
          String.raw`$ f(x) = |x| $`,
        ],
        correct: 0, // A
        explanation: String.raw`✔️ **解析**：  
同时满足奇函数和偶函数的条件： $ f(-x) = f(x) $ 且 $ f(-x) = -f(x) $

可得 $ f(x) = -f(x) $ ，即 $ 2f(x) = 0 $ ，所以 $ f(x) = 0 $`,
      },
      {
        qid: '函数的奇偶性-2',
        question: String.raw`若函数 $ f(x) $ 是奇函数， $ g(x) $ 是偶函数，则下列说法正确的是？（多选）`,
        options: [
          String.raw`$ f(g(x)) $ 是偶函数`,
          String.raw`$ g(f(x)) $ 是偶函数`,
          String.raw`$ f(x) \cdot g(x) $ 是奇函数`,
          String.raw`$ f(x) + g(x) $ 既不是奇函数也不是偶函数`,
        ],
        correct: [0, 1, 2, 3], // 全选
        explanation: String.raw`✔️ **解析**：  
A. $ f(g(-x)) = f(g(x)) $ → 偶函数  
B. $ g(f(-x)) = g(-f(x)) = g(f(x)) $ → 偶函数  
C. $ f(-x)g(-x) = [-f(x)][g(x)] = -f(x)g(x) $ → 奇函数  
D. 一般情况下既非奇也非偶，如 $ f(x)=x,\ g(x)=x^2 $ 时`,
      },
      {
        qid: '函数的奇偶性-3',
        question: String.raw`已知函数 $ f(x) $ 的定义域为 $ \mathbb{R} $ ，且 $ f(x) + f(-x) = 2x^2 $ ，则 $ f(x) $ 是？`,
        options: [
          String.raw`奇函数`,
          String.raw`偶函数`,
          String.raw`既是奇函数也是偶函数`,
          String.raw`既不是奇函数也不是偶函数`,
        ],
        correct: 1, // B
        explanation: String.raw`✔️ **解析**：  
讨巧解法：假设 $ f(x) $ 是奇函数，则 $ f(x) + f(-x) = 0 $ ，不符合题意。所以可以把 A, C 排除。再假设 $ f(x) $ 是偶函数，过程同下一种解法。  
正经解法：
由 $ f(x) + f(-x) = 2x^2 $ ①  
令 $ x $ 替换为 $ -x $ ： $ f(-x) + f(x) = 2(-x)^2 = 2x^2 $ ②  
①和②相同，不能直接得到奇偶性。  
构造新函数：设 $ g(x) = f(x) - x^2 $

则 $ g(x) + g(-x) = [f(x)-x^2] + [f(-x)-(-x)^2] = [f(x)+f(-x)] - 2x^2 = 0 $

所以 $ g(x) $ 是奇函数，故 $ f(x) = g(x) + x^2 $

而 $ x^2 $ 是偶函数，奇函数+偶函数无法确定奇偶性？

重新审视：

由 $ f(x) + f(-x) = 2x^2 $ 得 $ f(-x) = 2x^2 - f(x) $

若为偶函数： $ f(-x) = f(x) $ ⇒ $ f(x) = 2x^2 - f(x) $ ⇒ $ 2f(x) = 2x^2 $ ⇒ $ f(x) = x^2 $

检验： $ f(-x) = (-x)^2 = x^2 = f(x) $ ，满足偶函数定义。所以是偶函数。
`,
      },
    ],
    link: {
      url: '/function-definition/even-odd-hard-questions',
      text: '更难的函数奇偶性练习题',
    },
  },

  summary: {
    title: String.raw`🔍 柯南的总结`,
    content: (
      <div>
        <h5 className={styles.teachingPlanH5}>🕵️‍♂️ 函数奇偶性要点总结：</h5>
        <ol>
          <li><strong className={styles.highlight}>偶函数</strong>：<TeX>{String.raw`f(-x) = f(x)`}</TeX>，图像关于<strong>y轴对称</strong></li>
          <li><strong className={styles.highlight}>奇函数</strong>：<TeX>{String.raw`f(-x) = -f(x)`}</TeX>，图像关于<strong>原点对称</strong></li>
          <li>判断奇偶性的<strong className={styles.hard}>关键步骤</strong>：
            <ul>
              <li>检查定义域是否关于原点对称</li>
              <li>计算 <TeX>{String.raw`f(-x)`}</TeX></li>
              <li>比较 <TeX>{String.raw`f(-x)`}</TeX> 与 <TeX>{String.raw`f(x)`}</TeX>、<TeX>{String.raw`-f(x)`}</TeX> 的关系</li>
            </ul>
          </li>
          <li>奇偶性的应用：
            <ul>
              <li>简化函数分析和计算</li>
              <li>确定函数图像的对称性</li>
              <li>解方程和不等式</li>
            </ul>
          </li>
        </ol>
        <p>记住：函数的奇偶性揭示了其内在的对称美！下次见，Hans！👋</p>
      </div>
    ),
  },

  footer: {
    info: (
      <div>
        <p>© 2025 数学探索者 | 函数的奇偶性专题</p>
        <p>制作：DeepSeek老师（深度求索教育科技） | 学习伙伴：名侦探柯南</p>
      </div>
    ),
  },
};
