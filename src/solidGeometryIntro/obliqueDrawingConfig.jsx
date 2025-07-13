import TeX from '@matejmazur/react-katex';
import styles from '@/component/teachingPlan/basic.module.scss';

export default {
  title: String.raw`📐 空间几何体与斜二测画法 📏`,

  header: {
    content: String.raw`一起探索空间几何的视觉表达~`,
  },

  welcome: {
    title: String.raw`🔍 欢迎来到空间几何世界`,
    content: (
      <div>
        <p>大家好，我是名侦探柯南！今天我们将一起破解空间几何的视觉谜题。通过斜二测画法，我们可以把复杂的立体图形清晰地展现在平面上。准备好了吗？让我们开始探索！</p>
      </div>
    ),
  },

  knowledgePointSection: {
    title: String.raw`🧠 核心知识点`,
    points: [
      {
        title: String.raw`🔶 常见几何体回顾`,
        content: (
          <div>
            <p>我们之前学习过的几何体包括：</p>
            <ul>
              <li>棱柱（长方体、正方体）</li>
              <li>棱锥（金字塔）</li>
              <li>圆柱</li>
              <li>圆锥</li>
              <li>球体</li>
            </ul>
            <p>这些几何体都是由基本平面图形组合而成的空间图形。</p>
          </div>
        ),
        thinks: [
          {
            think: String.raw`💡 生活中哪些物体可以看作这些几何体的组合？`,
            answer: String.raw`例如：铅笔（圆柱+圆锥）、金字塔（四棱锥）、足球（球体）等`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
      {
        title: String.raw`🔶 平面图形与立体图形的联系`,
        content: (
          <div>
            <p>平面图形和立体图形是相互联系的：</p>
            <ul>
              <li>立体图形展开后得到平面图形</li>
              <li>平面图形通过旋转、平移等操作形成立体图形</li>
              <li><strong className={styles.highlight}>斜二测画法</strong>是表达这种联系的重要工具</li>
            </ul>
          </div>
        ),
        thinks: [
          {
            think: String.raw`❓ 为什么我们需要在平面上表示立体图形？`,
            answer: String.raw`
1. 便于在纸面或屏幕上展示
2. 简化复杂结构的理解
3. 为工程制图提供基础`,
            answerRowMaxHeight: '120px',
          },
        ],
      },
      {
        title: String.raw`🔶 空间图形的直观图`,
        content: (
          <div>
            <p>空间直观图的特点：</p>
            <ul>
              <li>保持物体各部分的比例关系</li>
              <li>符合人眼的透视规律</li>
              <li>常用的画法有：</li>
              <ul>
                <li><strong className={styles.highlight}>斜二测画法</strong></li>
                <li>正等测画法</li>
                <li>透视投影法</li>
              </ul>
            </ul>
            <p>斜二测画法的核心规则：</p>
            <ul>
              <li>X轴和Z轴互相垂直</li>
              <li>Y轴与X轴成 <TeX>{String.raw`135^\circ`}</TeX> （或<TeX>{String.raw`45^\circ`}</TeX>）角</li>
              <li>Y轴方向尺寸变为实际尺寸的 <TeX>{String.raw`\frac{1}{2}`}</TeX></li>
            </ul>
          </div>
        ),
      },
      {
        title: String.raw`🔶 斜二测画法的局限性`,
        content: (
          <div>
            <p>斜二测画法并非万能：</p>
            <ul>
              <li>对于<strong className={styles.hard}>曲面复杂</strong>的物体表现力有限</li>
              <li>当物体有<strong className={styles.hard}>多个倾斜面</strong>时容易失真</li>
              <li>无法准确表示<strong className={styles.hard}>球体</strong>等曲面体</li>
            </ul>
            <p>例如：</p>
            <ul>
              <li>球体的斜二测图仍是圆形，失去立体感</li>
              <li>复杂曲面物体的内部结构难以表达</li>
            </ul>
          </div>
        ),
        thinks: [
          {
            think: String.raw`💭 为什么球体不能用斜二测画法准确表示？`,
            answer: String.raw`因为斜二测画法本质上是平行投影，而球体在所有方向上的投影都是圆形，无法体现其立体特征`,
            answerRowMaxHeight: '100px',
          },
        ],
      },
    ],
  },

  geogebraSection: {
    title: String.raw`🔬 实验互动：斜二测画法演示`,
    geogebraList: [
      {
        description: String.raw`#### 📐 等腰梯形的斜二测画法
观察等腰梯形ABCD及其斜二测画法表示：`,
        config: {
          id: 'oblique-trapezoid',
          appName: '3d',
          height: 500,
          appletOnLoad: (applet) => {
            // 创建原始等腰梯形
            applet.evalCommand('A = (0,0,0)');
            applet.evalCommand('B = (4,0,0)');
            applet.evalCommand('C = (3,2,0)');
            applet.evalCommand('D = (1,2,0)');
            applet.evalCommand('trap = Polygon(A,B,C,D)');

            // 创建斜二测投影
            applet.evalCommand('A1 = (0,0,0)');
            applet.evalCommand('B1 = (4,0,0)');
            applet.evalCommand('C1 = (3,1,0)'); // Y坐标减半
            applet.evalCommand('D1 = (1,1,0)'); // Y坐标减半
            applet.evalCommand('trapProj = Polygon(A1,B1,C1,D1)');

            // 设置样式
            applet.setColor('trap', 0, 0, 255);
            applet.setColor('trapProj', 255, 0, 0);
            applet.setLineThickness('trap', 2);
            applet.setLineThickness('trapProj', 3);

            // 设置坐标系
            applet.setCoordSystem(-1, 5, -1, 3, -1, 1);
          },
        },
        conclusion: String.raw`**结论：**
1. 斜二测画法中，Y轴方向尺寸变为原来的 $ \frac{1}{2} $
2. 角度关系保持不变，平行线仍然平行`,
      },
      {
        description: String.raw`#### 📦 长方体的斜二测画法
观察长方体及其斜二测表示（实线为原始长方体，虚线为其斜二测表示）：`,
        config: {
          id: 'oblique-cuboid',
          appName: '3d',
          height: 500,
          appletOnLoad: (applet) => {
            applet.evalCommand('a: Slider(4, 5, 0.1)');
            applet.evalCommand('b: Slider(3, 4, 0.1)');
            applet.evalCommand('c: Slider(2, 3, 0.1)');

            applet.evalCommand('O: (0, 0, 0)');
            applet.evalCommand('A: (a, 0, 0)');
            applet.evalCommand('B: (0, b, 0)');
            applet.evalCommand('C: (a, b, 0)');
            applet.evalCommand('D: (0, 0, c)');
            applet.evalCommand('E: (a, 0, c)');
            applet.evalCommand('F: (0, b, c)');
            applet.evalCommand('G: (a, b, c)');
            applet.evalCommand('s11: Segment(D, F)');
            applet.evalCommand('s12: Segment(F, B)');
            applet.evalCommand('s13: Segment(F, G)');
            applet.evalCommand('s14: Segment(G, E)');
            applet.evalCommand('s15: Segment(G, C)');
            applet.evalCommand('s16: Segment(E, A)');
            applet.evalCommand('s17: Segment(C, A)');
            applet.evalCommand('s18: Segment(B, C)');
            applet.evalCommand('s19: Segment(D, E)');

            for (let i = 1; i <= 9; i++) {
              applet.setColor(`s1${i}`, 0, 0, 255, 0.3);
            }

            applet.evalCommand('B0: (y(B) / 2, y(B) / 2, 0)');
            applet.evalCommand('C0: (x(A) + y(B) / 2, y(B) / 2, 0)');
            applet.evalCommand('F0: (y(B) / 2, y(B) / 2, z(D))');
            applet.evalCommand('G0: (x(A) + y(B) / 2, y(B) / 2, z(D))');
            applet.evalCommand('s21: Segment(O, B0)');
            applet.evalCommand('s22: Segment(A, C0)');
            applet.evalCommand('s23: Segment(B0, C0)');
            applet.evalCommand('s24: Segment(D, F0)');
            applet.evalCommand('s25: Segment(E, G0)');
            applet.evalCommand('s26: Segment(F0, G0)');
            applet.evalCommand('s27: Segment(B0, F0)');
            applet.evalCommand('s28: Segment(C0, G0)');

            for (let i = 1; i <= 8; i++) {
              applet.setColor(`s2${i}`, 255, 0, 0, 0.5);
              applet.setLineStyle(`s2${i}`, 1);
            }

            // 设置坐标系
            applet.setCoordSystem(-1, 6, -1, 4, -1, 4);
          },
        },
        conclusion: String.raw`**结论：**
1. 长方体斜二测图中，深度方向(Y轴)尺寸减半
2. 垂直方向(Z轴)和水平方向(X轴)保持原尺寸
3. 角度关系： $ \angle XOZ = 90^\circ $ , $ \angle XOY = 135^\circ\ or\ 45^\circ $ , $ \angle YOZ = 135^\circ\ or\ 45^\circ $`,
      },
    ],
  },

  quizSection: {
    title: String.raw`🎯 知识挑战`,
    description: (
      <div>
        <p>测试你对斜二测画法的理解，完成以下挑战：</p>
      </div>
    ),
    quiz: [
      {
        question: String.raw`在斜二测画法中，Y轴方向的尺寸如何处理？`,
        options: [
          String.raw`保持原尺寸`,
          String.raw`变为原尺寸的 $ \frac{1}{2} $`,
          String.raw`变为原尺寸的 $ \frac{1}{3} $`,
          String.raw`变为原尺寸的2倍`,
        ],
        correct: 1,
        explanation: String.raw`**解析：**
斜二测画法的核心规则之一是Y轴方向尺寸变为实际尺寸的一半，这是为了在平面上更好地表现立体感。`,
      },
      {
        question: String.raw`以下哪种几何体最适合用斜二测画法表示？`,
        options: [
          String.raw`球体`,
          String.raw`复杂曲面体`,
          String.raw`长方体`,
          String.raw`螺旋体`,
        ],
        correct: 2,
        explanation: String.raw`**解析：**
长方体等由平面构成的几何体最适合斜二测画法，而球体和曲面体在这种画法中会失真。`,
      },
      {
        question: String.raw`在斜二测坐标系中，X轴和Y轴的夹角是多少？`,
        options: [
          String.raw`$ 90^\circ $`,
          String.raw`$ 120^\circ $`,
          String.raw`$ 135^\circ $`,
          String.raw`$ 180^\circ $`,
        ],
        correct: 2,
        explanation: String.raw`**解析：**
标准斜二测画法中，Y轴与X轴成 $ 135^\circ $ 角，这是该画法名称中"斜"字的来源。`,
      },
      {
        question: String.raw`(多选) 斜二测画法的优点包括：`,
        options: [
          String.raw`能准确表示球体`,
          String.raw`作图相对简单`,
          String.raw`保持平行关系`,
          String.raw`所有尺寸比例不变`,
        ],
        correct: [1, 2],
        explanation: String.raw`**解析：**
斜二测画法的主要优点是作图简单且能保持平行关系，但Y轴方向尺寸减半，且不擅长表示曲面。`,
      },
    ],
    link: {
      url: '/solid-geometry-intro/oblique-drawing-hard-questions',
      text: '更难的斜二测画法习题',
    },
  },

  summary: {
    title: String.raw`🔍 总结回顾`,
    content: (
      <div>
        <p>今天我们破解了空间几何的视觉表达之谜！记住这些关键点：</p>
        <ul>
          <li>斜二测画法是表达立体图形的重要方法</li>
          <li>Y轴方向尺寸减半，角度保持 <TeX>{String.raw`135^\circ`}</TeX>（或<TeX>{String.raw`45^\circ`}</TeX>）</li>
          <li>最适合表示平面构成的几何体</li>
          <li>对曲面体表现力有限</li>
        </ul>
        <p>下次当你看到工程图或建筑草图时，试着用今天的知识分析它们使用的投影方法吧！</p>
      </div>
    ),
  },

  footer: {
    info: (
      <div>
        <p>© 2025 空间几何探索课程 | 教学资料编号: HS-2025-07</p>
        <p>本课件内容由DeepSeek老师与名侦探柯南共同呈现</p>
      </div>
    ),
  },
};
