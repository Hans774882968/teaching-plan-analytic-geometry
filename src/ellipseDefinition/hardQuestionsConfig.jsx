import TeX from '@matejmazur/react-katex';

export const config = {
  quiz: [
    {
      question: (
        <>
          在椭圆 <TeX>{'\\frac{x^2}{4} + \\frac{y^2}{3} = 1'}</TeX> 中，设A为椭圆的下顶点，B为椭圆的上顶点，F为椭圆的左焦点，过点F且斜率为k的直线与椭圆交于C, D两点，若
          <TeX>{'\\overrightarrow{AC}\\cdot\\overrightarrow{DB}+\\overrightarrow{AD}\\cdot\\overrightarrow{CB} = 10'}</TeX>
          ，求k的值
        </>
      ),
      options: [
        <TeX>{'k=\\pm\\sqrt{2}'}</TeX>,
        <TeX>{'k=\\pm1'}</TeX>,
        <TeX>{'k=\\sqrt{2}'}</TeX>,
        <TeX>{'k=\\pm\\sqrt{3}'}</TeX>,
      ],
      correct: 0,
      explanation: (
        <>
          <TeX>{'F(-1,0), A(0,-\\sqrt{3}), B(0,\\sqrt{3})'}</TeX>，过点 F 且斜率为 k 的直线方程为 <TeX>{'y=k(x+1)'}</TeX>，
          联立方程 <TeX>{'\\begin{cases} y=k(x+1) \\\\ \\frac{x^2}{4} + \\frac{y^2}{3} = 1 \\end{cases}'}</TeX>，
          可得 <TeX>{'(4k^2+3)x^2+8k^2x+4k^2-12=0'}</TeX>，设 <TeX>{'C(x_1,y_1), D(x_2,y_2)'}</TeX>，
          则 <TeX>{'x_1+x_2=-\\frac{8k^2}{4k^2+3},\\ x_1x_2=\\frac{4k^2-12}{4k^2+3}'}</TeX>，
          故 <TeX>{'y_1y_2=k^2(x_1+1)(x_2+1)=k^2(x_1x_2+x_1+x_2+1)=-\\frac{9k^2}{4k^2+3}'}</TeX>，
          又 <TeX>{'\\overrightarrow{AC}=(x_1,y_1+\\sqrt{3})'}</TeX>，
          <TeX>{`
\\overrightarrow{DB}=(-x_2,\\sqrt{3}-y_2),
\\overrightarrow{AD}=(x_2,y_2+\\sqrt{3}),
\\overrightarrow{CB}=(-x_1,\\sqrt{3}-y_1)
          `}</TeX>，
          所以 <TeX>{`
\\overrightarrow{AC}\\cdot\\overrightarrow{DB}+\\overrightarrow{AD}\\cdot\\overrightarrow{CB}
=-x_1x_2+(y_1+\\sqrt{3})(\\sqrt{3}-y_2)-x_1x_2+(y_2+\\sqrt{3})(\\sqrt{3}-y_1)
=6-2x_1x_2-2y_1y_2
=6-2\\times\\frac{4k^2-12}{4k^2+3}-2\\times(-\\frac{9k^2}{4k^2+3})
=10`}</TeX>，
          整理可得 <TeX>{'\\frac{5k^2+12}{4k^2+3}=2'}</TeX>，解得 <TeX>{'k=\\pm\\sqrt{2}'}</TeX>。
        </>
      ),
    },
    {
      question: (
        <>
          直线 <TeX>{'l: y = x + 1'}</TeX> 与椭圆C <TeX>{'\\frac{x^2}{4} + \\frac{y^2}{3} = 1'}</TeX> 交于M, N两点，O为坐标原点，若点E满足<TeX>{'\\overrightarrow{OE} = t(\\overrightarrow{OM} + \\overrightarrow{ON})'}</TeX>，且点E在椭圆C上，求实数t的值
        </>
      ),
      options: [
        <><TeX>{'\\pm\\sqrt{2}'}</TeX></>,
        <><TeX>{'\\sqrt{7}'}</TeX></>,
        <><TeX>{'\\pm \\frac{\\sqrt{6}}{2}'}</TeX></>,
        <><TeX>{'\\pm \\frac{\\sqrt{7}}{2}'}</TeX></>,
      ],
      correct: 3,
      explanation: (
        <>
          <p>设 <TeX>{'M(x_1, y_1), N(x_2, y_2)'}</TeX>，联立 <TeX>{'\\begin{cases} \\frac{x^2}{4} + \\frac{y^2}{3} = 1 \\\\ y = x + 1 \\end{cases} \\Rightarrow 7x^2 + 8x - 8 = 0 \\Rightarrow \\begin{cases} x_1 + x_2 = -\\frac{8}{7} \\\\ x_1 x_2 = -\\frac{8}{7} \\end{cases}'}</TeX></p>
          <p>所以 <TeX>{'y_1 + y_2 = x_1 + 1 + x_2 + 1 = -\\frac{8}{7} + 2 = \\frac{6}{7}'}</TeX></p>
          <p>
            又 <TeX>{'\\overrightarrow{OE} = t(\\overrightarrow{OM} + \\overrightarrow{ON}) = (t(x_1 + x_2), t(y_1 + y_2)) = \\left(-\\frac{8t}{7}, \\frac{6t}{7}\\right)'}</TeX>，
            所以点 <TeX>{'E\\left(-\\frac{8t}{7}, \\frac{6t}{7}\\right)'}</TeX>，带入椭圆中：
            <TeX>{'\\frac{64t^2}{49 \\cdot 4} + \\frac{36t^2}{49 \\cdot 3} = 1 \\Rightarrow t^2 = \\frac{7}{4} \\Rightarrow t = \\pm \\frac{\\sqrt{7}}{2}'}</TeX>.
          </p>
        </>
      ),
    },
  ],
};
