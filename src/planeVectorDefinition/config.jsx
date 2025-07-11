import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

const config = {
  title: '🚀 平面向量的定义与线性运算 🧮',

  header: {
    content: '高中数学 | 平面向量专题',
  },

  welcome: {
    title: <>🔍 名侦探柯南：欢迎学习平面向量！</>,
    content: (
      <div>
        <p>大家好，我是名侦探柯南！今天我们将一起探索平面向量的奥秘。</p>
        <p>向量就像数学世界中的"方向箭头"，它不仅有大小还有方向。在物理中我们用它表示力、速度等概念，在几何中它可以帮助我们描述位置关系。</p>
        <p>准备好了吗？让我们开始这次向量探险之旅！</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: '📚 核心知识点',
    points: [
      {
        title: '1️⃣ 平面向量的定义',
        content: (
          <div>
            <h4 className={styles.teachingPlanH4}>位移与向量</h4>
            <p>向量表示从一个点到另一个点的<strong className={styles.highlight}>位移</strong>，包含<strong className={styles.highlight}>大小</strong>（长度）和<strong className={styles.highlight}>方向</strong>两个要素。</p>
            <p>数学表示：<TeX>{String.raw`\vec{a} = \overrightarrow{AB}`}</TeX>，其中A是起点，B是终点。</p>
            <p>向量的大小也称为向量的<strong className={styles.highlight}>模</strong>（或长度），用 <TeX>{String.raw`|\overrightarrow{AB}|`}</TeX> 表示。</p>
            <p>起点和终点相同的向量称为<strong className={styles.highlight}>零向量</strong>，用 <TeX>{String.raw`\vec{0}`}</TeX> 表示。</p>
            <p>不难看出，<TeX>{String.raw`|\vec{0}| = 0`}</TeX>。</p>
            <p>零向量本质上是一个点，所以可以认为零向量的方向是不确定的。模不为0的向量通常称为非0向量。</p>

            <h4 className={styles.teachingPlanH4}>向量的相等与平行</h4>
            <p><strong className={styles.highlight}>相等向量</strong>：大小相等、方向相同，即<TeX>{String.raw`\vec{a} = \vec{b}`}</TeX></p>
            <p><strong className={styles.hard}>平行向量（共线向量）</strong>：方向相同或相反，即<TeX>{String.raw`\vec{a} \parallel \vec{b}`}</TeX></p>
          </div>
        ),
        thinks: [
          {
            think: '两个向量相等是否意味着它们的起点和终点必须相同？',
            answer: '不需要！向量具有平移不变性，只要大小和方向相同，无论起点在何处，都是相等向量。',
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: '2️⃣ 平面向量的线性运算',
        content: (
          <div>
            <h4 className={styles.teachingPlanH4}>向量加法</h4>
            <p><strong className={styles.highlight}>三角形法则</strong>：首尾相接</p>
            <p><TeX>{String.raw`\vec{a} + \vec{b} = \overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}`}</TeX></p>

            <p><strong className={styles.highlight}>平行四边形法则</strong>：共起点，想象OA和OB都处于第一象限</p>
            <p><TeX>{String.raw`\vec{a} + \vec{b} = \overrightarrow{OA} + \overrightarrow{OB} = \overrightarrow{OA} + \overrightarrow{AC} = \overrightarrow{OC}`}</TeX>（OACB为平行四边形）</p>

            <h4 className={styles.teachingPlanH4}>多个向量相加</h4>
            <p>多边形法则（多次应用平行四边形法则）：<TeX>{String.raw`\vec{a} + \vec{b} + \vec{c} = \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} = \overrightarrow{AD}`}</TeX></p>

            <h4 className={styles.teachingPlanH4}>向量的减法</h4>
            <p>向量的减法可以转化为向量的加法：<TeX>{String.raw`\vec{a} - \vec{b} = \vec{a} + (-\vec{b})`}</TeX></p>
            <p><strong className={styles.hard}>几何意义</strong>：共起点时，减向量指向被减向量</p>

            <h4 className={styles.teachingPlanH4}>数乘向量</h4>
            <p><TeX>{String.raw`\lambda \vec{a}`}</TeX>（<TeX>{String.raw`\lambda`}</TeX>为实数）</p>
            <p><strong className={styles.highlight}>几何意义</strong>：</p>
            <ul>
              <li>当<TeX>{String.raw`\lambda > 0`}</TeX>时，同向伸缩</li>
              <li>当<TeX>{String.raw`\lambda < 0`}</TeX>时，反向伸缩</li>
              <li>当<TeX>{String.raw`\lambda = 0`}</TeX>时，零向量</li>
            </ul>

            <h4 className={styles.teachingPlanH4}>向量的线性运算律</h4>
            <p><strong className={styles.hard}>重点掌握</strong>：</p>
            <ul>
              <li>交换律：<TeX>{String.raw`\vec{a} + \vec{b} = \vec{b} + \vec{a}`}</TeX></li>
              <li>结合律：<TeX>{String.raw`(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})`}</TeX></li>
              <li>分配律：<TeX>{String.raw`\lambda(\vec{a} + \vec{b}) = \lambda\vec{a} + \lambda\vec{b}`}</TeX></li>
            </ul>
          </div>
        ),
        thinks: [
          {
            think: '为什么向量加法满足交换律，而减法不满足？',
            answer: String.raw`向量加法交换律源于平行四边形法则的对角线性质，而减法 $ \vec{a} - \vec{b} $ 与 $\vec{b} - \vec{a}$ 方向相反，因此不满足交换律。`,
            answerRowMaxHeight: '120px',
          },
          {
            think: String.raw`数乘向量 $\lambda\vec{a} = 0$ 时， $\lambda$ 和 $\vec{a}$ 必须满足什么条件？`,
            answer: String.raw`当 $\lambda\vec{a} = \vec{0}$ 时，要么 $\lambda = 0$ ，要么 $\vec{a} = \vec{0}$ ，两者至少有一个成立。`,
            answerRowMaxHeight: '100px',
          },
          {
            think: String.raw`化简下列各式：（1） $ \overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{BC} $ （2） $ \overrightarrow{AB} + \overrightarrow{FA} + \overrightarrow{BD} + \overrightarrow{DE} + \overrightarrow{EF}$`,
            answer: String.raw`
（1）原式 = $ \overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} = \overrightarrow{AC} + \overrightarrow{CD} = \overrightarrow{AD} $ 。主要用到了向量的交换律和结合律。

（2）原式 = $ (\overrightarrow{AB} + \overrightarrow{BD} + \overrightarrow{DE} + \overrightarrow{EF}) + \overrightarrow{FA} = \overrightarrow{AF} + \overrightarrow{FA} = \overrightarrow{AA} = \vec{0} $ 。主要用到了向量的交换律和结合律。`,
          },
        ],
      },
    ],
  },

  geogebraSection: {
    title: '🧪 向量运算实验',
    geogebraList: [
      {
        description: (
          <div>
            <h4 className={styles.teachingPlanH4}>实验1：向量加法（三角形法则）</h4>
            <p>移动点A、B、C，观察向量 <TeX>{String.raw`\vec{v_1} + \vec{v_2}`}</TeX> 的结果</p>
          </div>
        ),
        config: {
          id: 'plane-vector-definition-1',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('A = (1,2)');
            applet.evalCommand('B = (4,3)');
            applet.evalCommand('C = (2,5)');
            applet.evalCommand('v1 = Vector(A, B)');
            applet.evalCommand('v2 = Vector(B, C)');
            applet.evalCommand('v3 = Vector(A, C)');
            applet.setColor('v1', 255, 0, 0);
            applet.setColor('v2', 0, 150, 0);
            applet.setColor('v3', 0, 0, 255);
            applet.setCaption('v1', '\\vec{a}');
            applet.setCaption('v2', '\\vec{b}');
            applet.setCaption('v3', '\\vec{a} + \\vec{b}');
            applet.setCoordSystem(-1, 5, -1, 6);
          },
        },
        conclusion: String.raw`通过拖动点A、B、C，验证了 $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$ 。无论3个向量位置如何，三角形法则始终成立`,
      },
      {
        description: (
          <div>
            <h4 className={styles.teachingPlanH4}>实验2：数乘向量的几何意义</h4>
            <p>调整滑动条k的值，观察 <TeX>{String.raw`k\vec{v}`}</TeX> 的变化</p>
          </div>
        ),
        config: {
          id: 'plane-vector-definition-2',
          height: 500,
          appletOnLoad: (applet) => {
            applet.evalCommand('O = (0,0)');
            applet.evalCommand('A = (3,1)');
            applet.evalCommand('k = Slider(-3, 3, 1, 1, 100, false, true, false, false)');
            applet.evalCommand('v = Vector(O, A)');
            applet.evalCommand('kv = k * v');
            applet.setColor('v', 200, 0, 0);
            applet.setColor('kv', 0, 100, 200);
            applet.setLineThickness('v', 2);
            applet.setLineThickness('kv', 3);
            applet.setCaption('v', '\\vec{a}');
            applet.setCaption('kv', 'k \\vec{a}');
            applet.setCoordSystem(-10, 10, -5, 5);
          },
        },
        conclusion: '数乘向量实现向量的伸缩和方向反转。当 $k>0$ 时同向伸缩， $k<0$ 时反向伸缩， $|k|$ 决定伸缩倍数',
      },
    ],
  },

  quizSection: {
    title: '🏆 知识挑战',
    description: '完成以下3道选择题，检验学习成果：',
    quiz: [
      {
        question: String.raw`关于向量 $\vec{a}$ 和 $\vec{b}$ ，下列说法正确的是：`,
        options: [
          String.raw`若 $|\vec{a}| = |\vec{b}|$ ，则 $\vec{a} = \vec{b}$`,
          String.raw`若 $\vec{a} \parallel \vec{b}$ ，则 $\vec{a}$ 与 $\vec{b}$ 方向相同`,
          '零向量不与任意向量平行',
          String.raw`若 $\vec{a} + \vec{b} = \vec{0}$ ，则 $\vec{a}$ 与 $\vec{b}$ 互为相反向量`,
        ],
        correct: 3,
        explanation: String.raw`**解析**：
- A错误：大小相等但方向可能不同
- B错误：平行向量方向可能相反
- C错误：高中数学教材规定，零向量方向任意，与所有向量平行且垂直
- D正确：满足 $\vec{a} = -\vec{b}$ 的关系`,
      },
      {
        question: String.raw`已知平行四边形ABCD，则 $\overrightarrow{AB} + \overrightarrow{AD} =$ ？`,
        options: [
          String.raw`$\overrightarrow{AC}$`,
          String.raw`$\overrightarrow{BD}$`,
          String.raw`$\overrightarrow{CA}$`,
          String.raw`$\overrightarrow{DB}$`,
        ],
        correct: 0,
        explanation: String.raw`**解析**：根据平行四边形法则， $\overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}$`,
      },
      {
        question: String.raw`设 $\vec{a} \neq \vec{0}$ ， $\lambda\vec{a} = \mu\vec{a}$ ，则：`,
        options: [
          String.raw`$\lambda = \mu$`,
          String.raw`$\lambda = -\mu$`,
          String.raw`$\lambda = |\mu|$`,
          String.raw`$\lambda$ 与 $\mu$ 关系不确定`,
        ],
        correct: 0,
        explanation: String.raw`**解析**：由 $\lambda\vec{a} = \mu\vec{a}$ 可得 $(\lambda - \mu)\vec{a} = \vec{0}$。因 $\vec{a} \neq \vec{0}$ ，故 $\lambda - \mu = 0$ ，即 $\lambda = \mu$`,
      },
    ],
    link: {
      url: '/plane-vector-hard-questions',
      text: '更难的向量练习题',
    },
  },
  summary: {
    title: <>🔍 名侦探柯南：本课总结</>,
    content: (
      <div>
        <p>今天我们掌握了向量的核心概念：</p>
        <ul>
          <li><strong className={styles.highlight}>向量的两要素</strong>：大小和方向</li>
          <li><strong className={styles.highlight}>向量的相等与平行</strong></li>
          <li><strong className={styles.hard}>线性运算的几何与代数方法</strong></li>
        </ul>
        <p>记住向量运算的<strong className={styles.highlight}>三角形法则</strong>和<strong className={styles.highlight}>平行四边形法则</strong>，它们是解决几何问题的利器！</p>
        <p>下节课我们将学习向量的坐标表示，继续探索向量世界的奥秘！</p>
      </div>
    ),
  },

  footer: {
    info: (
      <div>
        <p>© 2025 高中数学课件 | 平面向量专题</p>
        <p>参考资料：《高中数学必修二》人民教育出版社</p>
      </div>
    ),
  },
};

export default config;
