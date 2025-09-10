import Geogebra from '@/component/Geogebra';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import TeX from '@matejmazur/react-katex';

export const apolloniusHQC = {
  pageUrl: '/apollonius-hard-questions',
  title: '阿氏圆和圆的反演习题集1',
  welcome: {
    title: '🧩 知识大挑战',
    content: '🔥 来测试一下你对阿氏圆和圆的反演的理解够不够深刻吧！',
    backLinks: [
      {
        url: '/apollonius-circle',
        text: '阿氏圆和圆的反演基础知识讲解',
      },
    ],
  },
  category: ['平面几何', '阿氏圆', '圆的反演'],
  difficulty: '初中',
  quiz: [
    {
      qid: '阿氏圆和圆的反演HQ-1',
      type: 'fill',
      score: 5,
      question: String.raw`若 $ P_0 $ 是圆外一点P关于圆O的反演点，过 $ P_0 $ 作 $ P_0B \perp OP $ 交圆O于B。则PB与圆O的位置关系是`,
      correct: '相切',
      explanation: String.raw`$ \frac{OP_0}{OB} = \frac{OB}{OP} $ ，故三角形 $ OP_0B $ 相似于三角形 $ OBP $ ，故 $ \angle OBP = \frac{\pi}{2} $ ，故PB与圆O相切`,
    },
    {
      qid: '阿氏圆和圆的反演HQ-2',
      type: 'fill',
      score: 20,
      question: (
        <div key="apollonius-hq-2-ky">
          【两点都在圆外】已知正方形OABC边长为4，圆O半径为2，求 <TeX>{String.raw`BQ+\frac{1}{2}AQ`}</TeX> 的最小值
          <Geogebra
            id="apollonius-hq-2"
            height={600}
            appletOnLoad={(applet) => {
              applet.evalCommand('c: x^2 + y^2 = 4');
              applet.evalCommand('A: (4, 0)');
              applet.evalCommand('A0: (1, 0)');
              applet.evalCommand('B: (4, 4)');
              applet.evalCommand('C: (0, 4)');
              applet.evalCommand('Q: Point(c)');
              applet.evalCommand('s1: Segment(B, Q)');
              applet.evalCommand('s2: Segment(A, Q)');
              applet.evalCommand('l1: Segment(B, Q) + 1 / 2Segment(A, Q)');
              applet.evalCommand('l2: Segment(B, Q) + Segment(A0, Q)');
              applet.setCoordSystem(-5, 5, -5, 5);
            }}
          />
        </div>
      ),
      correct: '5',
      explanation: String.raw`
构造A关于圆O的反演点 $ A_0 (1,\ 0) $ ，于是有三角形 $ OA_0Q $ 相似于三角形 $ OQA $ ，于是转化为 $ |A_0Q| + |BQ| $ 的最小值。两点连线 $ |A_0B| $ 距离最短，所求为5
`,
    },
    {
      qid: '阿氏圆和圆的反演HQ-3',
      type: 'fill',
      score: 20,
      question: (
        /**
         * TODO: 这种含有 MarkdownRenderer 的写法不能连续出现2次，否则就会出现组件未销毁的 bug 。
         * 因为我们做了打乱题目顺序的功能，所以总共只能出现一次。
         * 暂时不懂为什么会这样。但似乎加上key以后就没问题了。之前出现 ggb 没样式的问题可能只是网不好，不是这个方案的问题
         */
        <div key="apollonius-hq-3-ky">
          <MarkdownRenderer content={String.raw`
【两点都在圆内】已知四分之一圆OCD的半径为6， $ OA=3,\ OB=5 $ ，P是弧CD上一动点。求 $ 2PA+PB $ 最小值
`} />
          <Geogebra
            id="apollonius-hq-3"
            height={600}
            appletOnLoad={(applet) => {
              applet.evalCommand('c: x^2 + y^2 = 36');
              applet.evalCommand('O: (0, 0)');
              applet.evalCommand('A: (0, 3)');
              applet.evalCommand('B: (5, 0)');
              applet.evalCommand('C: (0, 6)');
              applet.evalCommand('D: (6, 0)');
              applet.evalCommand('P: Point(c)');
              applet.evalCommand('A0: (0, 12)');
              applet.evalCommand('s1: Segment(P, A)');
              applet.evalCommand('s2: Segment(P, B)');
              applet.evalCommand('l1: 2 Segment(P, A) + Segment(P, B)');
              applet.evalCommand('l2: Segment(P, A0) + Segment(P, B)');
              applet.setCoordSystem(-8, 8, -8, 13);
            }}
          />
        </div>
      ),
      correct: '13',
      explanation: String.raw`
构造A关于圆O的反演点 $ A_0 (0,\ 12) $ ，于是有三角形 $ OAP $ 相似于三角形 $ OPA_0 $ ，于是转化为 $ |A_0P| + |PB| $ 的最小值。两点连线 $ |A_0B| $ 距离最短，所求为13
`,
    },
    {
      qid: '阿氏圆和圆的反演HQ-4',
      type: 'fill',
      score: 20,
      question: (
        <div key="apollonius-hq-4-ky">
          【两点都在圆外，但系数为负】已知正方形ABCD边长为4，圆B半径为2，P是圆B上一个动点，求 <TeX>{String.raw`PD-\frac{1}{2}PC`}</TeX> 的最大值
          <Geogebra
            id="apollonius-hq-4"
            height={600}
            appletOnLoad={(applet) => {
              applet.evalCommand('c: x^2 + y^2 = 4');
              applet.evalCommand('A: (0, 4)');
              applet.evalCommand('B: (0, 0)');
              applet.evalCommand('C: (4, 0)');
              applet.evalCommand('C0: (1, 0)');
              applet.evalCommand('D: (4, 4)');
              applet.evalCommand('P: Point(c)');
              applet.evalCommand('s1: Segment(P, D)');
              applet.evalCommand('s2: Segment(P, C)');
              applet.evalCommand('l1: Segment(P, D) - 1 / 2Segment(P, C)');
              applet.evalCommand('l2: Segment(P, D) - Segment(P, C0)');
              applet.setCoordSystem(-5, 5, -5, 5);
            }}
          />
        </div>
      ),
      correct: '5',
      explanation: String.raw`
构造C关于圆B的反演点 $ C_0 (1,\ 0) $ ，于是有三角形 $ BC_0P $ 相似于三角形 $ BPC $ ，于是转化为 $ |PD| + |PC_0| $ 的最大值。三点共线时距离最大，所求为 $ |C_0D| = \sqrt{3^2+4^2} = 5 $
`,
    },
    {
      qid: '阿氏圆和圆的反演HQ-5',
      type: 'fill',
      score: 20,
      question: (
        <div key="apollonius-hq-5-ky">
          已知正方形ABCD边长为4，圆O是正方形的内切圆，P是圆上动点，求 <TeX>{String.raw`\sqrt{2}PA+PB`}</TeX> 的最小值
          <Geogebra
            id="apollonius-hq-5"
            height={600}
            appletOnLoad={(applet) => {
              applet.evalCommand('c: x^2 + y^2 = 4');
              applet.evalCommand('O: (0, 0)');
              applet.evalCommand('A: (-2, 2)');
              applet.evalCommand('B: (-2, -2)');
              applet.evalCommand('B0: (-1, -1)');
              applet.evalCommand('C: (2, -2)');
              applet.evalCommand('D: (2, 2)');
              applet.evalCommand('P: Point(c)');
              applet.evalCommand('s1: Segment(P, A)');
              applet.evalCommand('s2: Segment(P, B)');
              applet.evalCommand('l1: sqrt(2) * Segment(P, A) + Segment(P, B)');
              applet.evalCommand('l2: sqrt(2) * (Segment(P, A) + Segment(P, B0))');
              applet.setCoordSystem(-3, 3, -3, 3);
            }}
          />
        </div>
      ),
      correct: String.raw`2\sqrt{5}`,
      explanation: String.raw`
反演A还是B呢？阿氏圆的特点是系数小于1，但PA的系数是大于1的，所以应该把根号2提出来，然后反演B。

构造B关于圆O的反演点 $ B_0 $ ，于是有三角形 $ BOP $ 相似于三角形 $ POB_0 $ ，于是转化为 $ \sqrt{2} |PA| + |PB_0| $ 的最小值。三点共线时距离最小，所求为 $ \sqrt{2} |P_0A| = 2\sqrt{5} $
`,
    },
  ],
};
