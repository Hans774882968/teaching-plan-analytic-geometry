import TeX from '@matejmazur/react-katex';
import Geogebra from '@/component/Geogebra';
// import Card from '../component/teachingPlan/Card';

export const config = {
  quiz: [
    {
      question: (
        <>
          已知双曲线 <TeX>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \ (a > 0, b > 0)`}</TeX> 的左、右焦点分别为 <TeX>{String.raw`F_1`}</TeX>、<TeX>{String.raw`F_2`}</TeX>，若在双曲线的右支上存在点 <TeX>{String.raw`P`}</TeX>，使得 <TeX>{String.raw`|PF_1| = 3|PF_2|`}</TeX>，则双曲线离心率 <TeX>{String.raw`e`}</TeX> 的最大值为（）
        </>
      ),
      options: [
        <TeX>{String.raw`\sqrt{2}`}</TeX>,
        2,
        3,
        <TeX>{String.raw`\sqrt{3}`}</TeX>,
      ],
      correct: 1,
      explanation: (
        <>
          <p>解法一：通过双曲线的第二定义，把<TeX>{String.raw`PF_1`}</TeX>和<TeX>{String.raw`PF_2`}</TeX>的距离比，转为P到左右准线的距离比。有<TeX>{String.raw`x + \frac{a^2}{c} = 3(x - \frac{a^2}{c}), \ x \geq a`}</TeX>。解得<TeX>{String.raw`\frac{c}{a} \leq 2`}</TeX>。</p>
          <p>解法二：<TeX>{String.raw`|PF_1| - |PF_2| = 2a, \ |PF_1| = 3|PF_2|`}</TeX>，解得<TeX>{String.raw`|PF_2| = a`}</TeX>。于是得到边长分别为3a, a, 2c的三角形。令 a = 1 得，当三角形退化为线段时离心率最大为2。</p>
        </>
      ),
    },
    {
      question: (
        <>
          若双曲线 <TeX>{String.raw`\frac{x^2}{16} - \frac{y^2}{b^2} = 1 \ (b > 0)`}</TeX> 的一个顶点到与此顶点较远的一个焦点的距离为 9，则双曲线的离心率是（）
        </>
      ),
      options: [
        <TeX>{String.raw`\frac{4}{3}`}</TeX>,
        <TeX>{String.raw`\frac{5}{3}`}</TeX>,
        <TeX>{String.raw`\frac{5}{4}`}</TeX>,
        <TeX>{String.raw`\frac{3}{2}`}</TeX>,
      ],
      correct: 2,
      explanation: (
        <TeX>{String.raw`a + c = 9,\ a = 4,\ c = 5,\ e = \frac{c}{a} = \frac{5}{4}`}</TeX>
      ),
    },
    {
      question: (
        <>
          双曲线 <TeX>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \ (a > 0, b > 0)`}</TeX> 的一条渐近线被圆 <TeX>{String.raw`M`}</TeX>： <TeX>{String.raw`(x-8)^2 + y^2 = 25`}</TeX> 截得的弦长为 6，则双曲线的离心率为（）
        </>
      ),
      options: [
        2,
        <TeX>{String.raw`\sqrt3`}</TeX>,
        4,
        <TeX>{String.raw`\frac{2\sqrt3}{3}`}</TeX>,
      ],
      correct: 3,
      explanation: <p>
        直线截半径为5的圆的弦长为6，由勾股定理求得直线到圆心 (8, 0) 的距离是 <TeX>{String.raw`\sqrt{25 - (\frac{6}{2})^2} = 4`}</TeX>。
        双曲线的一条渐近线为 <TeX>{String.raw`y = \frac{b}{a}x`}</TeX>。
        由点到直线的距离公式得：<TeX>{String.raw`\frac{8\frac{b}{a}}{\sqrt{\frac{b^2}{a^2} + 1}} = 4`}</TeX>。整理得<TeX>{String.raw`4b^2 = a^2 + b^2 = c^2`}</TeX>。
        求得 <TeX>{String.raw`\frac{c^2}{a^2} = \frac{4}{3}`}</TeX>。
      </p>,
    },
    {
      question: (
        <div>
          已知点P是双曲线 <TeX>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \ (a > 0, \ b > 0)`}</TeX> 的右支上一点，<TeX>{String.raw`F_1`}</TeX>，<TeX>{String.raw`F_2`}</TeX> 分别为双曲线的左、右焦点，<TeX>{String.raw`I`}</TeX> 为 <TeX>{String.raw`\triangle PF_1F_2`}</TeX> 的内心，若 <TeX>{String.raw`S_{\triangle IPF_1} = S_{\triangle IPF_2} + \lambda S_{\triangle IF_1F_2}`}</TeX> 成立，则 <TeX>{String.raw`\lambda`}</TeX> 的值为（）
          <Geogebra
            id="hyperbola-hard-questions-4"
            height={600}
            appletOnLoad={(applet) => {
              applet.evalCommand('hyperbola: x^2/16 - y^2/9 = 1');
              applet.evalCommand('P: Point(hyperbola)');
              applet.evalCommand('F1: (-5, 0)');
              applet.evalCommand('F2: (5, 0)');
              applet.evalCommand('c: Incircle(F1, P, F2)');
              applet.evalCommand('I: Center(c)');
              applet.evalCommand('s1: Segment(P, F1)');
              applet.evalCommand('s2: Segment(P, F2)');
              applet.evalCommand('s3: Segment(P, I)');
              applet.evalCommand('s4: Segment(F1, I)');
              applet.evalCommand('s5: Segment(F2, I)');
              applet.setLineStyle('s3', 1);
              applet.setLineStyle('s4', 1);
              applet.setLineStyle('s5', 1);
              for (let i = 1; i <= 5; i++) applet.setLabelVisible(`s${i}`, false);
              applet.setCoordSystem(-8, 8, -8, 8);
            }}
          />
        </div>
      ),
      options: [
        <TeX>{String.raw`\frac{\sqrt{a^2+b^2}}{2a}`}</TeX>,
        <TeX>{String.raw`\frac{a}{\sqrt{a^2+b^2}}`}</TeX>,
        <TeX>{String.raw`\frac{b}{a}`}</TeX>,
        <TeX>{String.raw`\frac{a}{b}`}</TeX>,
      ],
      correct: 1,
      explanation: (
        <>
          <p>
            解：设 <TeX>{String.raw`\triangle PF_1F_2`}</TeX> 的内切圆半径为 <TeX>{String.raw`r`}</TeX>，由双曲线的定义得 <TeX>{String.raw`|PF_1| - |PF_2| = 2a`}</TeX>，<TeX>{String.raw`|F_1F_2| = 2c`}</TeX>。
          </p>
          <p>
            <TeX>{String.raw`S_{\triangle IPF_1} = \frac{1}{2} |PF_1| \cdot r`}</TeX>，<TeX>{String.raw`S_{\triangle IPF_2} = \frac{1}{2} |PF_2| \cdot r`}</TeX>，<TeX>{String.raw`S_{\triangle IF_1F_2} = \frac{1}{2} \cdot 2c \cdot r = cr`}</TeX>，
          </p>
          <p>
            由题意得，<TeX>{String.raw`\frac{1}{2} |PF_1| \cdot r = \frac{1}{2} |PF_2| \cdot r + \lambda cr`}</TeX>，故
            <TeX>{String.raw`\lambda = \frac{|PF_1| - |PF_2|}{2c} = \frac{a}{c} = \frac{a}{\sqrt{a^2 + b^2}}`}</TeX>，
          </p>
        </>
      ),
    },
    {
      question: (
        <div>
          双曲线方程为 <TeX>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \ (a > 0, \ b > 0)`}</TeX>，过右焦点 <TeX>{String.raw`F`}</TeX> 向一条渐近线做垂线，垂足为 <TeX>{String.raw`M`}</TeX>，如图所示，已知 <TeX>{String.raw`\angle MFO = 30^\circ`}</TeX>（<TeX>{String.raw`O`}</TeX> 为坐标原点），则其离心率为（）
          <Geogebra
            id="hyperbola-hard-questions-5"
            height={500}
            appletOnLoad={(applet) => {
              applet.evalCommand('hyperbola: x^2/4 - y^2/12 = 1');
              applet.evalCommand('F: (4, 0)');
              applet.evalCommand('O: (0, 0)');
              applet.evalCommand('l: y = sqrt(3)x');
              applet.evalCommand('M: (1, sqrt(3))');
              applet.evalCommand('s1: Segment(F, M)');
              applet.evalCommand('s2: Segment(F, O)');
              applet.evalCommand('Angle(s1, s2)');
            }}
          />
        </div>
      ),
      options: [
        <TeX>{String.raw`\sqrt{2}`}</TeX>,
        <TeX>{String.raw`\sqrt{3}`}</TeX>,
        <TeX>{String.raw`\frac{2\sqrt{3}}{3}`}</TeX>,
        <TeX>{String.raw`2`}</TeX>,
      ],
      correct: 3,
      explanation: <>
        由点到直线的距离公式得：<TeX>{String.raw`\frac{\frac{bc}{a}}{\sqrt{\frac{b^2}{a^2}} + 1} = \frac{\sqrt{3}c}{2}`}</TeX>
        分子分母同乘a，整理得：<TeX>{String.raw`b^2 = \frac{3}{4}c^2`}</TeX>，求得离心率为2
      </>,
    },
    {
      question: (
        <>
          已知双曲线 <TeX>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \ (a > 0, \ b > 0)`}</TeX> 的左右焦点分别为 <TeX>{String.raw`F_1`}</TeX>，<TeX>{String.raw`F_2`}</TeX>，<TeX>{String.raw`e`}</TeX> 为双曲线的离心率，<TeX>{String.raw`P`}</TeX> 是双曲线右支上的点，<TeX>{String.raw`\triangle PF_1F_2`}</TeX> 的内切圆的圆心为 <TeX>{String.raw`I`}</TeX>，过 <TeX>{String.raw`F_2`}</TeX> 作直线 <TeX>{String.raw`PI`}</TeX> 的垂线，垂足为 <TeX>{String.raw`B`}</TeX>，则 <TeX>{String.raw`OB =`}</TeX>（）
        </>
      ),
      options: [
        <TeX>{String.raw`a`}</TeX>,
        <TeX>{String.raw`b`}</TeX>,
        <TeX>{String.raw`ea`}</TeX>,
        <TeX>{String.raw`eb`}</TeX>,
      ],
      correct: 0,
      explanation: <>
        <p>讨巧解法：令P为 (a, 0) 则 P 就是 B ，得答案为 a 。</p>
        <p>
          正经解法：如下图所示，直线PI是<TeX>{String.raw`\angle F_1PF_2`}</TeX>的角平分线，作F2关于PI的对称点B1，
          则有<TeX>{String.raw`PF_2 = PB_1`}</TeX>，于是<TeX>{String.raw`F_1B_1 = 2a`}</TeX>，
          又OB是<TeX>{String.raw`\triangle F_1PF_2`}</TeX>的中位线，故<TeX>{String.raw`OB = a`}</TeX>。
        </p>
        <Geogebra
          id="hyperbola-hard-questions-6"
          height={660}
          appletOnLoad={(applet) => {
            applet.evalCommand('hyperbola: x^2/64 - y^2/36 = 1');
            applet.evalCommand('F1: (-10, 0)');
            applet.evalCommand('F2: (10, 0)');
            applet.evalCommand('P: Point(hyperbola)');
            applet.evalCommand('s1: Segment(P, F1)');
            applet.evalCommand('s2: Segment(P, F2)');
            applet.evalCommand('ab: AngleBisector(F1, P, F2)');
            applet.setColor('ab', 0, 0, 255);
            applet.evalCommand('h: PerpendicularLine(F2, ab)');
            applet.setColor('h', 255, 0, 0);
            applet.setLineStyle('h', 1);
            applet.evalCommand('B: Intersect(ab, h)');
            applet.evalCommand('B1: Intersect(s1, h)');
            applet.evalCommand('O: (0, 0)');
            applet.evalCommand('s3: Segment(O, B)');
            applet.setColor('s3', 255, 0, 0);
            applet.setLineStyle('s3', 1);
            applet.evalCommand('s4: Segment(F1, B1)');
            for (let i = 1; i <= 4; i++) applet.setLabelVisible(`s${i}`, false);
            applet.setCoordSystem(-16, 16, -16, 16);
          }}
        />
      </>,
    },
    {
      question: (
        <>
          等轴双曲线 <TeX>{String.raw`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \ (a > 0, \ b > 0)`}</TeX> 的右焦点为 <TeX>{String.raw`F(c, 0)`}</TeX>，方程 <TeX>{String.raw`ax^2 + bx - c = 0`}</TeX> 的实根分别为 <TeX>{String.raw`x_1`}</TeX> 和 <TeX>{String.raw`x_2`}</TeX>，则三边长分别为 <TeX>{String.raw`|x_1|`}</TeX>，<TeX>{String.raw`|x_2|`}</TeX>，2 的三角形中，长度为 2 的边的对角是（）
        </>
      ),
      options: [
        '锐角',
        '直角',
        '钝角',
        '不能确定',
      ],
      correct: 0,
      explanation: <>
        由余弦定理，只需求 <TeX>{String.raw`cos\theta = \frac{x_1^2+x_2^2-4}{2x_1x_2}`}</TeX> 的符号，大于0则为锐角。
        <TeX>{String.raw`x_1^2+x_2^2 = (x_1+x_2)^2 - 2x_1x_2, \ cos\theta = \frac{\frac{b^2}{a^2} + 2\frac{c}{a} - 4}{-2\frac{c}{a}}`}</TeX>。
        由等轴双曲线 <TeX>{String.raw`c^2 = 2a^2 = 2b^2`}</TeX>，得 <TeX>{String.raw`cos\theta = \frac{2e-3}{-2e} > 0, \ e = \sqrt2`}</TeX>
      </>,
    },
    {
      question: (
        <>
          设 <TeX>{String.raw`F`}</TeX> 是双曲线 <TeX>{String.raw`\frac{x^2}{4} - \frac{y^2}{12} = 1`}</TeX> 的左焦点，<TeX>{String.raw`A(1, 4)`}</TeX>，<TeX>{String.raw`P`}</TeX> 是双曲线右支上的动点，则 <TeX>{String.raw`|PF| + |PA|`}</TeX> 的最小值为（）
        </>
      ),
      options: [
        <TeX>{String.raw`5`}</TeX>,
        <TeX>{String.raw`5 + 4\sqrt{3}`}</TeX>,
        <TeX>{String.raw`7`}</TeX>,
        <TeX>{String.raw`9`}</TeX>,
      ],
      correct: 3,
      explanation: <>
        设F2为双曲线右焦点，则<TeX>{String.raw`|PF| - |PF_2| = 4`}</TeX>，问题转化为求<TeX>{String.raw`|PF_2| + |PA|`}</TeX>的最小值。显然，<TeX>{String.raw`AF_2`}</TeX>和双曲线的交点即可拿到最小值，勾股定理算出是5。故答案为 5 + 4 = 9
      </>,
    },
  ],
};
