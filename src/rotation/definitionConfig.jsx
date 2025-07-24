import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: String.raw`🔄 图形的旋转定义与性质 🔄`,

  header: {
    content: String.raw`📚 初三数学 | 旋转专题`,
  },

  welcome: {
    title: String.raw`🔍 欢迎来到旋转的世界`,
    content: (
      <div>
        <h4 className={styles.teachingPlanH4}>👋 你好，Hans！我是你的学习伙伴柯南</h4>
        <p>今天我们一起来探索图形旋转的奥秘。旋转不仅在数学中很重要，在现实生活中也随处可见，比如：</p>
        <ul>
          <li>🎡 摩天轮的转动</li>
          <li>⚙️ 机械齿轮的运转</li>
          <li>🌀 龙卷风的形成</li>
          <li>🌍 地球的自转</li>
        </ul>
        <p>准备好和我一起破解旋转的谜题了吗？让我们开始吧！</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`📚 核心知识点`,
    points: [
      {
        title: String.raw`⚡ 旋转的基本概念`,
        content: (
          <div>
            <p>旋转是将一个图形绕着某一点转动一定角度的变换</p>
            <h5 className={styles.teachingPlanH5}>🔑 关键要素：</h5>
            <ul>
              <li><strong className={styles.highlight}>旋转中心</strong>：图形围绕旋转的点（固定不动）</li>
              <li><strong className={styles.highlight}>旋转角</strong>：图形旋转的角度（顺时针为负，逆时针为正）</li>
              <li><strong className={styles.highlight}>对应点</strong>：旋转前后相互对应的点</li>
            </ul>
            <p>
              <strong className={styles.hard}>旋转公式</strong>：点 <TeX>{String.raw`(x,\ y)`}</TeX> 绕原点逆时针旋转 <TeX>{String.raw`\theta`}</TeX> 角度后，坐标变为：
            </p>
            <TeX block>{String.raw`\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}`}</TeX>
          </div>
        ),
        thinks: [
          {
            think: String.raw`🤔 思考：时钟的分针从3点旋转到6点，旋转中心是哪里？旋转角是多少度？`,
            answer: String.raw`💡 答案：旋转中心是钟表中心，旋转角是 $ 90^\circ $ ，顺时针旋转`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`⚡ 旋转的性质`,
        content: (
          <div>
            <p>旋转具有以下重要性质：</p>
            <h5 className={styles.teachingPlanH5}>🔍 旋转性质：</h5>
            <ol>
              <li>对应点到旋转中心的<strong className={styles.highlight}>距离相等</strong></li>
              <li>对应点与旋转中心连线的夹角<strong className={styles.highlight}>等于旋转角</strong></li>
              <li>旋转前、后的图形<strong className={styles.highlight}>全等</strong></li>
              <li>旋转不改变图形的<strong className={styles.hard}>形状和大小</strong>（难点）</li>
            </ol>
            <TeX block>{String.raw`\text{距离公式：} OA = OA' \quad \text{角度公式：} \angle AOA' = \theta`}</TeX>
          </div>
        ),
        thinks: [
          {
            think: String.raw`🤔 思考：为什么旋转后的图形与原图形全等？这对解决几何问题有什么帮助？`,
            answer: String.raw`💡 答案：因为旋转只是改变图形的位置，不改变形状和大小。利用全等性质可以证明线段相等、角相等等问题。`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
      {
        title: String.raw`⚡ 旋转的应用`,
        content: (
          <div>
            <p>利用旋转可以设计出各种美丽的图案：</p>
            <h5 className={styles.teachingPlanH5}>🎨 应用领域：</h5>
            <ul>
              <li>建筑设计中的对称图案</li>
              <li>艺术创作中的装饰图形</li>
              <li>工业设计中的机械零件</li>
              <li>自然界中的雪花、花瓣结构</li>
            </ul>
            <h6 className={styles.teachingPlanH6}>📝 设计技巧：</h6>
            <p>选择一个基本图形，围绕一个中心点多次旋转相同角度（如<strong className={styles.highlight}>60°</strong>、<strong className={styles.highlight}>90°</strong>），就能创造出美丽的旋转对称图案。</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`🤔 为什么上面举的例子是 $ 60^\circ $ 和 $ 90^\circ $ ？它们有什么共性？`,
            answer: String.raw`💡 因为它们都是 360 的因数`,
          },
          {
            think: String.raw`🤔 如何用旋转设计一个六瓣雪花图案？需要旋转几次？每次旋转多少度？`,
            answer: String.raw`💡 先设计一个基本"花瓣"图形，然后围绕中心点旋转5次，每次旋转 $ 60^\circ $ ，即可形成六瓣雪花图案。`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
    ],
    thinks: [
      {
        think: String.raw`🤔 综合思考：为什么车轮都是圆形的？如果换成三角形会怎样？（从旋转角度分析）`,
        answer: String.raw`💡 答案：圆形车轮的旋转中心是圆心，车轮上任意一点到旋转中心的距离都相等（半径），所以旋转时能保持平稳。三角形车轮旋转中心到顶点的距离不同，会导致颠簸。`,
        answerRowMaxHeight: '150px',
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🧪 旋转实验`,
    geogebraList: [
      {
        description: String.raw`🔄 基础旋转实验：通过拖动 $ \theta $ ，观察三角形绕点O旋转的变化：`,
        config: {
          id: 'rotation-basic',
          height: 600,
          appletOnLoad: (applet) => {
            // 创建旋转中心和基本图形
            applet.evalCommand('O = (0,0)');
            applet.setPointStyle('O', 5);
            applet.setPointSize('O', 5);
            applet.setLabelVisible('O', true);

            applet.evalCommand('A = (2, 1)');
            applet.evalCommand('B = (3, 0)');
            applet.evalCommand('C = (2, -1)');
            applet.evalCommand('tri = Polygon(A, B, C)');
            applet.setColor('tri', 0, 0, 255);
            applet.setFilling('tri', 0.3);

            // 创建旋转角度滑块
            applet.evalCommand('θ = Slider(0°, 360°, 1°, 90°, 100, false, true, true)');
            applet.evalCommand('SetVisibleInView(θ, 1, false)');

            // 创建旋转后的三角形
            applet.evalCommand('A\' = Rotate(A, θ, O)');
            applet.evalCommand('B\' = Rotate(B, θ, O)');
            applet.evalCommand('C\' = Rotate(C, θ, O)');
            applet.evalCommand('tri\' = Polygon(A\',B\',C\')');
            applet.setColor('tri\'', 255, 0, 0);
            applet.setFilling('tri\'', 0.3);

            // 添加旋转路径
            applet.evalCommand('arc1 = CircularArc(O, A, A\')');
            applet.setColor('arc1', 0, 150, 0);
            applet.setLineThickness('arc1', 2);

            // 添加角度标记
            applet.evalCommand('α = Angle(A, O, A\')');
            applet.setColor('α', 0, 150, 0);
            applet.setLabelVisible('α', false);

            applet.evalCommand('arc2 = CircularArc(O, B, B\')');
            applet.setColor('arc2', 0, 150, 0);
            applet.setLineThickness('arc2', 2);

            // 设置坐标系
            applet.setCoordSystem(-5, 5, -4, 4);
          },
        },
        appletOnLoadId: 'src%5Crotation%5CdefinitionConfig.jsx-rotation-basic',
        conclusion: String.raw`#### 📝 实验结论  
1. 旋转后图形与原图形全等
2. 对应点到旋转中心距离相等
3. 旋转角等于对应点连线夹角`,
      },
      {
        description: String.raw`#### 🌀 旋转对称图案设计
设计一个旋转对称图案：`,
        config: {
          id: 'rotation-pattern',
          height: 600,
          appletOnLoad: (applet) => {
            // 创建基本图形
            applet.evalCommand('O = (0,0)');
            applet.setPointStyle('O', 5);
            applet.setLabelVisible('O', true);

            applet.evalCommand('n = Slider(3, 12, 1, 6, 100, false, true, true)');
            applet.setValue('n', 10);
            applet.evalCommand('angle = 360° / n');

            // 创建基本花瓣
            applet.evalCommand('P1 = (1.5, 0.5)');
            applet.evalCommand('P2 = (2.5, 0)');
            applet.evalCommand('P3 = (1.5, -0.5)');
            applet.evalCommand('petal = Polygon(P1, P2, P3)');
            applet.setLabelVisible('p1', false);
            applet.setLabelVisible('p2', false);
            applet.setLabelVisible('p3', false);
            applet.setColor('petal', 200, 0, 200);
            applet.setFilling('petal', 0.3);

            // 创建旋转序列
            applet.evalCommand('sequence = Sequence(Rotate(petal, k * angle, O), k, 0, n - 1)');

            // 设置坐标系
            applet.setCoordSystem(-3, 3, -3, 3);
          },
        },
        appletOnLoadId: 'src%5Crotation%5CdefinitionConfig.jsx-rotation-pattern',
        conclusion: String.raw`$ n = 10 $ 的时候，像不像一个太阳🌞？
#### 📝 设计技巧
1. 基本图形越简单，旋转效果越好
2. 旋转次数n越大，图案越圆润
3. 适当调整基本图形位置可创造不同效果`,
      },
    ],
  },

  quizSection: {
    title: String.raw`🧩 知识挑战`,
    description: (
      <div>
        <h5 className={styles.teachingPlanH5}>🔍 旋转知识小测验</h5>
        <p>完成下面的挑战，检验你对旋转的理解！</p>
      </div>
    ),
    quiz: [
      {
        question: String.raw`🤔 如图，将三角形ABC绕点O顺时针旋转90°，点A的对应点是？`,
        options: [
          String.raw`点D`,
          String.raw`点E`,
          String.raw`点F`,
          String.raw`点G`,
        ],
        correct: 1, // 对应选项B
        explanation: String.raw`💡 正确答案：点E  
**解析**：
1. 旋转中心是点O
2. 旋转方向是顺时针
3. 旋转角度是90°
4. 根据旋转性质，对应点与旋转中心连线夹角等于旋转角`,
      },
      {
        question: String.raw`🤔 下列哪些是旋转的性质？（多选）`,
        options: [
          String.raw`对应线段相等`,
          String.raw`对应角相等`,
          String.raw`图形大小改变`,
          String.raw`旋转中心位置不变`,
        ],
        correct: [0, 1, 3], // 选项A、B、D
        explanation: String.raw`💡 正确答案：A、B、D  
**解析**：  
旋转的性质包括：
- 对应线段相等（A）
- 对应角相等（B）
- 旋转中心位置不变（D）
- 图形大小不变（C错误）`,
      },
      {
        question: String.raw`🤔 一个正方形绕其中心旋转多少度后能与自身重合？`,
        options: [
          String.raw`45°`,
          String.raw`60°`,
          String.raw`90°`,
          String.raw`任意角度`,
        ],
        correct: 2, // 选项C
        explanation: String.raw`💡 正确答案：90°  
**解析**：
1. 正方形有4条对称轴
2. 最小旋转角为 $ 90^\circ $
3. 旋转 $ 90^\circ $ 、 $ 180^\circ $ 、 $ 270^\circ $ 都能重合`,
      },
    ],
    link: {
      url: '/rotation/definition-hard-questions',
      text: '🌐 更难的《图形的旋转》练习',
    },
  },

  summary: {
    title: String.raw`🎯 旋转知识总结`,
    content: (
      <div>
        <h4 className={styles.teachingPlanH4}>🔍 柯南的破案笔记</h4>
        <p>今天我们破解了旋转的三大谜题：</p>
        <ol>
          <li><strong className={styles.highlight}>旋转三要素</strong>：旋转中心、旋转角、对应点</li>
          <li><strong className={styles.highlight}>旋转性质</strong>：对应点距离相等、连线夹角等于旋转角</li>
          <li><strong className={styles.highlight}>旋转应用</strong>：设计对称图案</li>
        </ol>
        <p>记住这些关键点：</p>
        <blockquote>
          <p>旋转不改变图形的形状和大小，只改变位置</p>
          <p>旋转中心是解决问题的关键突破口</p>
        </blockquote>
        <TeX block>{String.raw`\text{旋转公式：} \begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}`}</TeX>
        <p>下次课我们将学习旋转在几何证明中的应用，继续我们的数学探案之旅！</p>
      </div>
    ),
  },

  footer: {
    info: String.raw`📅 课件更新日期：2025年7月13日 | 👨‍🏫 授课教师：DeepSeek老师（数学侦探组）`,
  },
};
