import Geogebra from '@/component/Geogebra';

export const conicSectionsVFHQ1 = {
  pageUrl: '/conic-sections/vieta-formulas',
  title: '圆锥曲线与韦达定理精选题集1',
  welcome: {
    title: '🧩 圆锥曲线压轴题大挑战',
    content: '🔥 本题集的主题是圆锥曲线和韦达定理的综合应用。来测试一下你对圆锥曲线与韦达定理的理解够不够深刻吧！',
    backLinks: [],
  },
  category: ['圆锥曲线', '代数'],
  difficulty: '高中',
  quiz: [
    {
      qid: '圆锥曲线与韦达定理1-1',
      type: 'fill',
      score: 20,
      question: String.raw`已知曲线 $x^2+\frac{y^2}{y+6}=1$ ，若 $y=kx-2$ 与曲线从下往上依次交于A、B、C，求 $min \frac{|AB|}{|BC|}$`,
      correct: '5',
      explanation: (
        <div>
          答案：5。新瓶装旧酒，用韦达定理表达一切即可。题解详见“相关博客”，这里仅补充一张图。由图可知，该三次曲线关于y轴对称，并且有3个分支。
          <Geogebra
            id="conic-sections-vieta-formulas-hq-1-1"
            height={600}
            appletOnLoad={(applet) => {
              applet.evalCommand('curve: x^2 + y^2/(y+6) = 1');
              applet.evalCommand('A: Point(curve)');
              // 没查到怎么画动直线，就先用动点代替了
              applet.evalCommand('B: (0, -2)');
              applet.evalCommand('l: Line(A, B)');
              applet.evalCommand('C1: Intersect(curve, l, 1)');
              applet.evalCommand('C3: Intersect(curve, l, 3)');
              applet.evalCommand('y1: Segment(B, C1) / Segment(A, B)');
              applet.evalCommand('y3: Segment(B, C3) / Segment(A, B)');
              applet.setCoordSystem(-10, 10, -10, 4);
            }}
          />
        </div>
      ),
      relevantBlogs: [
        {
          text: String.raw`已知曲线 $x^2+\frac{y^2}{y+6}=1$ ，若 $y=kx-2$ 与曲线从下往上依次交于A、B、C，求 $min \frac{|AB|}{|BC|}$`,
          url: '/blog/已知曲线%20%24x%5E2%2B%5Cfrac%7By%5E2%7D%7By%2B6%7D%3D1%24%20，若%20%24y%3Dkx-2%24%20与曲线从下往上依次交于A、B、C，求%20%24min%20%5Cfrac%7B%7CAB%7C%7D%7B%7CBC%7C%7D%24',
        },
      ],
    },
  ],
};
