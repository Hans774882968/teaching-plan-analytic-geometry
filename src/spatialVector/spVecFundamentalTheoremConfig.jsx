import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: String.raw`🌌 空间向量基本定理 🔍`,

  header: {
    content: String.raw`空间向量基本定理是解决空间几何问题的核心工具，理解它就能掌握三维空间中的向量运算！`,
  },

  welcome: {
    title: String.raw`🔍 欢迎来到空间向量探索之旅！`,
    content: (
      <div>
        <h4 className={styles.teachingPlanH4}>🕵️ 名侦探柯南的提示</h4>
        <p>Hans你好！我是你的学习伙伴柯南。今天我们将一起破解空间向量基本定理的奥秘！</p>
        <p>空间向量基本定理就像破案的关键线索，掌握了它，你就能解开三维空间中各种几何谜题。</p>
        <p>准备好了吗？让我们开始吧！</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`📚 核心知识点`,
    points: [
      {
        title: String.raw`🧭 空间中的向量基本定理`,
        content: (
          <div>
            <h5 className={styles.teachingPlanH5}>🔍 共线向量基本定理在空间中</h5>
            <div>
              共线向量基本定理在空间中仍然成立：如果向量 <TeX>{String.raw`\vec{a} \neq \vec{0}`}</TeX>，
              则向量 <TeX>{String.raw`\vec{b}`}</TeX> 与 <TeX>{String.raw`\vec{a}`}</TeX> 共线的充要条件是
              <strong className={styles.highlight}>存在唯一实数 λ</strong>，使得
              <TeX block>{String.raw`\vec{b} = \lambda \vec{a}`}</TeX>
            </div>

            <h5 className={styles.teachingPlanH5}>📐 平面向量基本定理在空间中</h5>
            <p>
              平面向量基本定理在空间中<strong className={styles.hard}>不再成立</strong>：
              如果两个向量 <TeX>{String.raw`\vec{a},\ \vec{b}`}</TeX> 不共线，
              则<strong className={styles.highlight}>不能保证</strong>空间中任意向量都能表示为它们的线性组合
            </p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`❓ 为什么平面向量基本定理在空间中不再成立？`,
            answer: String.raw`✅ 因为空间是三维的，需要三个不共面的向量才能表示空间中任意向量`,
          },
        ],
      },
      {
        title: String.raw`🧩 共面向量定理`,
        content: (
          <div>
            <p>如果两个向量 <TeX>{String.raw`\vec{a},\ \vec{b}`}</TeX> 不共线，那么向量<TeX>{String.raw`\vec{p}`}</TeX>与向量 <TeX>{String.raw`\vec{a},\ \vec{b}`}</TeX> 共面的充要条件是：存在唯一的有序实数对<TeX>{String.raw`(x,\ y)`}</TeX>，使</p>
            <TeX block>{String.raw`\vec{p} = x\vec{a} + y\vec{b}`}</TeX>
            <p className={styles.highlight}>重点：这是判断空间向量是否共面的关键定理！</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`❓ 平面向量基本定理在空间中还成立吗？为什么？`,
            answer: String.raw`✅ 平面向量基本定理在空间中不再成立。因为空间向量有三个维度，需要用三个基向量来表示。`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`🧭 空间向量基本定理`,
        content: (
          <div>
            <p>
              如果三个向量 <TeX>{String.raw`\vec{a},\ \vec{b},\ \vec{c}`}</TeX> 不共面，那么对空间任一向量 <TeX>{String.raw`\vec{p}`}</TeX> ，存在
              <strong className={styles.highlight}>唯一</strong>的有序实数组 <TeX>{String.raw`(x, y, z)`}</TeX> ，使
            </p>
            <TeX block>{String.raw`\vec{p} = x\vec{a} + y\vec{b} + z\vec{c}`}</TeX>
            <p>其中 <TeX>{String.raw`\{\vec{a},\ \vec{b},\ \vec{c}\}`}</TeX> 叫做空间的一个<strong className={styles.highlight}>基底</strong>， <TeX>{String.raw`\vec{a},\ \vec{b},\ \vec{c}`}</TeX> 都叫做<strong className={styles.highlight}>基向量</strong>。</p>
            <p className={styles.hard}>难点：理解三个基向量不共面的条件！</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`❓ 空间向量基本定理与平面向量基本定理有什么联系和区别？`,
            answer: String.raw`✅ 联系：都是关于向量线性表示的基本定理。区别：空间定理需要三个不共面的基向量，平面定理只需要两个不共线的基向量。`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
      {
        title: String.raw`📍 四点共面的判定方法`,
        content: (
          <div>
            <p>空间四点<TeX>{String.raw`A,\ B,\ C,\ D`}</TeX>共面的充要条件是：存在实数<TeX>{String.raw`x, y, z`}</TeX>满足</p>
            <TeX block>{String.raw`x + y + z = 1`}</TeX>
            <p>使得</p>
            <TeX block>{String.raw`\overrightarrow{OD} = x\overrightarrow{OA} + y\overrightarrow{OB} + z\overrightarrow{OC}`}</TeX>
            <p>或者等价地，由“共面向量定理”得，向量<TeX>{String.raw`\overrightarrow{AB},\ \overrightarrow{AC},\ \overrightarrow{AD}`}</TeX>共面，即存在实数<TeX>{String.raw`x, y`}</TeX>满足</p>
            <TeX block>{String.raw`\overrightarrow{AD} = x\overrightarrow{AB} + y\overrightarrow{AC}`}</TeX>
            <p>或者等价地，混合积 <TeX>{String.raw`\overrightarrow{AB} \cdot (\overrightarrow{AC} \times \overrightarrow{AD}) = 0`}</TeX></p>
            <p className={styles.highlight}>重点：这是判断空间四点位置关系的重要方法！</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`❓ 为什么含有点 O 的公式和不含点 O 的公式是等价的？`,
            answer: String.raw`✅ $ \overrightarrow{AD} = \overrightarrow{OD} - \overrightarrow{OA} = x\overrightarrow{AB} + y\overrightarrow{AC} $  
$ = x(\overrightarrow{OB} - \overrightarrow{OA}) + y(\overrightarrow{OC} - \overrightarrow{OA}) = (-x - y)\overrightarrow{OA} + x\overrightarrow{OB} + y\overrightarrow{OC} $  
$ \overrightarrow{OD} = (1 - x - y)\overrightarrow{OA} + x\overrightarrow{OB} + y\overrightarrow{OC} $ ，证毕
`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
      {
        title: String.raw`🧮 向量的线性组合`,
        content: (
          <div>
            <h5 className={styles.teachingPlanH5}>🔢 线性组合的定义</h5>
            <div>
              对于向量 <TeX>{String.raw`\vec{v}_1,\ \vec{v}_2,\ \cdots,\ \vec{v}_n`}</TeX> 和实数
              <TeX>{String.raw`k_1,\ k_2,\ \cdots,\ k_n`}</TeX>，表达式
              <TeX block>{String.raw`\vec{w} = k_1\vec{v}_1 + k_2\vec{v}_2 + \cdots + k_n\vec{v}_n`}</TeX>
              称为向量 <TeX>{String.raw`\vec{v}_1, \vec{v}_2, \cdots, \vec{v}_n`}</TeX> 的一个
              <strong className={styles.highlight}>线性组合</strong>
            </div>

            <h5 className={styles.teachingPlanH5}>🌐 线性表达式的几何意义</h5>
            <div>
              在空间中，线性组合表示：
              <ul>
                <li><strong className={styles.highlight}>缩放</strong>：系数 k 缩放向量长度</li>
                <li><strong className={styles.highlight}>叠加</strong>：多个缩放后的向量相加</li>
                <li><strong className={styles.highlight}>方向合成</strong>：结果向量在多个向量张成的平面或空间中</li>
              </ul>
            </div>

            <h5 className={styles.teachingPlanH5}>⚖️ 线性相关与线性无关</h5>
            <div>
              <strong className={styles.hard}>关键概念</strong>：如果存在<strong className={styles.highlight}>不全为零</strong>的实数
              <TeX>{String.raw`k_1,\ k_2,\ \cdots,\ k_n`}</TeX> 使得
              <TeX block>{String.raw`k_1\vec{v}_1 + k_2\vec{v}_2 + \cdots + k_n\vec{v}_n = \vec{0}`}</TeX>
              则称这些向量<strong className={styles.highlight}>线性相关</strong>，否则称为<strong className={styles.highlight}>线性无关</strong>
            </div>
          </div>
        ),
        thinks: [
          {
            think: String.raw`❓ 空间中两个向量线性相关意味着什么？三个向量线性相关又意味着什么？`,
            answer: String.raw`✅ 两个向量线性相关 ⇔ 共线；三个向量线性相关 ⇔ 共面`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`⭐ 基底与基向量`,
        content: (
          <div>
            <h5 className={styles.teachingPlanH5}>🧱 基底的定义</h5>
            <p>
              空间中三个<strong className={styles.highlight}>不共面</strong>的向量
              <TeX>{String.raw`\vec{a},\ \vec{b},\ \vec{c}`}</TeX> 组成的集合
              <TeX>{String.raw`\{\vec{a},\ \vec{b},\ \vec{c}\}`}</TeX> 称为空间的一个
              <strong className={styles.highlight}>基底</strong>
            </p>

            <h5 className={styles.teachingPlanH5}>🔑 基向量的特性</h5>
            <div>
              基底中的每个向量 <TeX>{String.raw`\vec{a},\ \vec{b},\ \vec{c}`}</TeX> 称为
              <strong className={styles.highlight}>基向量</strong>，它们必须满足：
              <ul>
                <li><strong className={styles.highlight}>线性无关</strong>：任意一个不能表示为其他两个的线性组合</li>
                <li><strong className={styles.highlight}>张成空间</strong>：空间中任意向量都可由它们线性表示</li>
              </ul>
            </div>
          </div>
        ),
        thinks: [
          {
            think: String.raw`❓ 为什么基底要求三个向量不共面？两个向量能否构成空间的基底？`,
            answer: String.raw`✅ 两个向量只能张成一个平面，无法表示不在该平面上的向量`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
    ],
    thinks: [
      {
        think: String.raw`🤔 空间向量基本定理在三维计算机图形学中有哪些应用？`,
        answer: String.raw`✅ 用于三维物体的坐标表示、空间变换、动画渲染等。每个3D模型的顶点坐标都可以看作基向量的线性组合。`,
        answerRowMaxHeight: '120px',
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🔬 空间向量实验`,
    geogebraList: [
      {
        description: String.raw`**实验1：基底与线性表示**  
拖动3个滑块，观察向量如何表示为基向量的线性组合： $ \vec{p} = x\vec{a} + y\vec{b} + z\vec{c} $`,
        config: {
          id: 'spatial-vector-basis',
          appName: '3d',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('a = Vector((1, 0, 0))');
            applet.evalCommand('b = Vector((0, 1, 0))');
            applet.evalCommand('c = Vector((0, 0, 1))');
            applet.evalCommand('SetColor(a, "red")');
            applet.evalCommand('SetColor(b, "green")');
            applet.evalCommand('SetColor(c, "blue")');

            applet.evalCommand('sliderX = Slider(-5, 5, 0.1, 1, 100, false, true, false, false)');
            applet.setValue('sliderX', 3);
            applet.evalCommand('sliderY = Slider(-5, 5, 0.1, 1, 100, false, true, false, false)');
            applet.setValue('sliderY', 2);
            applet.evalCommand('sliderZ = Slider(-5, 5, 0.1, 1, 100, false, true, false, false)');
            applet.setValue('sliderZ', 1);

            applet.evalCommand('p: sliderX * a + sliderY * b + sliderZ * c');
            applet.evalCommand('SetColor(p, "orange")');

            applet.evalCommand('SetVisibleInView(sliderX, 1, false)');
            applet.evalCommand('SetVisibleInView(sliderY, 1, false)');
            applet.evalCommand('SetVisibleInView(sliderZ, 1, false)');
          },
        },
        appletOnLoadId: 'src%5CspatialVector%5CspVecFundamentalTheoremConfig.jsx-spatial-vector-basis',
        conclusion: String.raw`✅ **结论**：空间任一向量都可以唯一表示为三个不共面向量的线性组合`,
      },
      {
        description: String.raw`**实验2：四点共面判定**  
拖动3个滑块，观察当四点共面时坐标满足的条件： $ \overrightarrow{OD} = x\overrightarrow{OA} + y\overrightarrow{OB} + z\overrightarrow{OC} $ 且 $ x + y + z = 1 $`,
        config: {
          id: 'coplanar-points',
          appName: '3d',
          height: 600,
          appletOnLoad: (applet) => {
            applet.evalCommand('A = (1, 1, 0)');
            applet.evalCommand('B = (3, 0, 2)');
            applet.evalCommand('C = (0, 2, 1)');

            applet.evalCommand('SetColor(A, "red")');
            applet.evalCommand('SetColor(B, "green")');
            applet.evalCommand('SetColor(C, "blue")');

            applet.evalCommand('plane = Plane(A, B, C)');
            applet.evalCommand('SetColor(plane, "gray")');
            applet.evalCommand('SetLineThickness(plane, 1)');

            applet.evalCommand('sliderX: Slider(-3, 3, 0.1)');
            applet.setValue('sliderX', 0.3);
            applet.evalCommand('sliderY: Slider(-3, 3, 0.1)');
            applet.setValue('sliderY', 0.6);
            applet.evalCommand('sliderZ: 1 - sliderX - sliderY');
            applet.evalCommand('D: sliderX * A + sliderY * B + sliderZ * C');
            applet.evalCommand('Distance(D, plane)');
            applet.evalCommand('SetColor(D, "purple")');

            applet.evalCommand('D2: Point(plane)');
            applet.evalCommand('p: x(A) * x + x(B) * y + x(C) * z = x(D2)');
            applet.evalCommand('q: y(A) * x + y(B) * y + y(C) * z = y(D2)');
            applet.evalCommand('r: z(A) * x + z(B) * y + z(C) * z = z(D2)');
            applet.setVisible('p', false);
            applet.setVisible('q', false);
            applet.setVisible('r', false);
            applet.evalCommand('sol: Solve({p, q, r}, {x, y, z})');
            // TODO: 暂未查到如何验证 sol 的 x + y + z = 1
          },
        },
        appletOnLoadId: 'src%5CspatialVector%5CspVecFundamentalTheoremConfig.jsx-coplanar-points',
        conclusion: String.raw`✅ **结论**：空间四点 $ A,\ B,\ C,\ D $ 共面 ⇔ 存在实数 $ x,\ y,\ z $ 满足 $ x + y + z = 1 $ 且 $ \overrightarrow{OD} = x\overrightarrow{OA} + y\overrightarrow{OB} + z\overrightarrow{OC} $`,
      },
    ],
  },

  quizSection: {
    title: String.raw`🧠 知识挑战`,
    description: (
      <div>
        <h5 className={styles.teachingPlanH5}>🔍 柯南的挑战</h5>
        <p>Hans，来检验下你的学习成果吧！完成这些题目，证明你已经掌握了空间向量基本定理！</p>
      </div>
    ),
    quiz: [
      {
        question: String.raw`📌 关于空间向量基本定理，以下说法正确的是：`,
        options: [
          String.raw`空间任意三个向量都可以作为基底`,
          String.raw`基底中的三个向量必须互相垂直`,
          String.raw`基底中的三个向量必须满足不共面`,
          String.raw`一个向量在给定基底下的表示不唯一`,
        ],
        correct: 2, // C
        explanation: String.raw`✅ **解析**：空间向量基本定理要求三个基向量不共面（C正确）。A错误：三个向量必须不共面；B错误：不要求互相垂直；D错误：表示是唯一的。`,
      },
      {
        question: String.raw`📌 已知点 $ A(1,0,0),\ B(0,1,0),\ C(0,0,1),\ D(1,1,1) $ ，这四点：`,
        options: [
          String.raw`一定共面`,
          String.raw`一定不共面`,
          String.raw`可能共面也可能不共面`,
          String.raw`无法判断`,
        ],
        correct: 1, // B
        explanation: String.raw`✅ **解析**：  
方法1：计算向量 $ \overrightarrow{AB} = (-1,1,0) $, $ \overrightarrow{AC} = (-1,0,1) $, $ \overrightarrow{AD} = (0,1,1) $。混合积 $ \overrightarrow{AB} \cdot (\overrightarrow{AC} \times \overrightarrow{AD}) = 1 \neq 0 $，所以四点不共面（B正确）。  
方法2：计算 $ \overrightarrow{OD} = 1\overrightarrow{OA} + 1\overrightarrow{OB} + 1\overrightarrow{OC} $ ， $ x + y + z = 3 \neq 1 $ ，所以四点不共面。
`,
      },
      {
        question: String.raw`📌 设向量 $ \vec{a},\ \vec{b},\ \vec{c} $ 是空间的一个基底，则以下各组向量中也能作为基底的是：`,
        options: [
          String.raw`$ \vec{a} + \vec{b},\ \vec{b} + \vec{c},\ \vec{c} + \vec{a} $`,
          String.raw`$ 2\vec{a},\ \vec{b},\ -\vec{c} $`,
          String.raw`$ \vec{a} - \vec{b},\ \vec{b} - \vec{c},\ \vec{c} - \vec{a} $`,
          String.raw`$ \vec{a},\ \vec{a} + \vec{b},\ \vec{a} + \vec{b} + \vec{c} $`,
        ],
        correct: [0, 1, 3], // A, B, D
        explanation: String.raw`✅ **解析**：基底要求三个向量不共面。A: 混合积不为0，可；B: 线性无关，可；D: 混合积不为0，可。C: $ (\vec{a}-\vec{b}) + (\vec{b}-\vec{c}) + (\vec{c}-\vec{a}) = \vec{0} $，共面，不可。`,
      },
    ],
    link: {
      url: '/spatial-vector/fundamental-theorem-hard-questions',
      text: '更难的空间向量基本定理习题',
    },
  },

  summary: {
    title: String.raw`🔍 柯南的破案总结`,
    content: (
      <div>
        <h4 className={styles.teachingPlanH4}>🕵️ 空间向量基本定理关键点</h4>
        <ul>
          <li>三个基向量必须<strong className={styles.highlight}>不共面</strong>（核心条件！）</li>
          <li>空间任意向量可<strong className={styles.highlight}>唯一表示</strong>为基向量的线性组合</li>
          <li>四点共面 ⇔ 存在系数和为1的线性表示</li>
        </ul>
        <p>Hans，你已经掌握了空间向量基本定理这个破案利器！下次遇到空间几何问题时，记得使用它来寻找线索！</p>
      </div>
    ),
  },

  footer: {
    info: (
      <div>
        <p>© 2025 空间几何侦探社 | 讲师：DeepSeek | 学习伙伴：名侦探柯南</p>
      </div>
    ),
  },
};
