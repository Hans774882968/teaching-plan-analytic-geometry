import TeX from '@matejmazur/react-katex';

export const config = {
  title: '椭圆探索之旅 | 解析几何探秘',
  welcome: {
    title: '欢迎，Hans7！',
    content: <>我是你的数学学习伙伴柯南！今天我们将一起探索<strong className="highlight">椭圆</strong>的奥秘。椭圆不仅是重要的几何图形，还在天文、物理和工程中有广泛应用。准备好开始我们的数学探案之旅了吗？</>,
  },
  definition: {
    title: '椭圆的定义',
    content: <>椭圆是平面上到<strong className="highlight">两个定点（焦点）的距离之和等于常数</strong>的点的集合。这两个定点称为<strong className="important">焦点</strong>，常数必须大于两焦点之间的距离。</>,
    mathExpression: <TeX>{'|PF₁| + |PF₂| = 2a'}</TeX>,
  },
  equation: {
    title: '椭圆的标准方程',
    content: '当椭圆中心在原点，焦点在x轴上时，标准方程为：',
    formula: <TeX block>{String.raw`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1`}</TeX>,
    parameters: [
      <><strong className='highlight'>a</strong> - 半长轴长度 (<TeX>{'a > b'}</TeX>)</>,
      <><strong className='highlight'>b</strong> - 半短轴长度</>,
      <><strong className='highlight'>c</strong> - 焦距的一半，满足 <TeX>{'c = \\sqrt{a^2 - b^2}'}</TeX></>,
    ],
  },
  properties: {
    title: '椭圆的重要性质',
    items: [
      <><strong className="highlight">离心率</strong>：<TeX>{'e = \\frac{c}{a} \\ (0 < e < 1)'}</TeX>，表示椭圆的扁平程度</>,
      <><strong className="highlight">焦点性质</strong>：从椭圆一个焦点发出的光线，经椭圆反射后会经过另一个焦点</>,
      <><strong className="important">对称性</strong>：椭圆关于长轴、短轴和中心对称</>,
      <><strong className="highlight">面积公式</strong>：<TeX>{'S = \\pi \\times a \\times b'}</TeX></>,
    ],
  },
  secondary: [
    {
      title: '焦点三角形',
      content: '椭圆上一点P与两个焦点F₁、F₂构成的三角形称为焦点三角形：',
      points: [
        <>周长：<TeX>{'2a + 2c'}</TeX></>,
        '当P位于短轴端点时，∠F₁PF₂最大',
        <>面积：<TeX>{'S = b^{2} \\times \\tan\\left(\\frac{\\theta}{2}\\right)'}</TeX>，其中θ为∠F₁PF₂</>,
      ],
    },
    {
      title: '直径性质',
      content: '平行弦的中点轨迹：椭圆的一组平行弦中点的轨迹是过椭圆中心的线段（直径）',
    },
    {
      title: '光学性质',
      content: '从椭圆一个焦点发出的光线，经椭圆反射后必经过另一个焦点。这一性质在卫星天线和声学设计中应用广泛。',
    },
  ],
  quiz: [
    {
      question: <>椭圆 <TeX>{'\\frac{x^2}{25} + \\frac{y^2}{9} = 1'}</TeX> 的离心率是多少？</>,
      options: ['0.8', '0.6', '0.4', '1.0'],
      correct: 0,
      explanation: <>离心率 <TeX>{'e = \\frac{c}{a} = \\frac{\\sqrt{25-9}}{5} = \\frac{4}{5} = 0.8'}</TeX></>,
    },
    {
      question: '下列哪项是椭圆的定义？',
      options: [
        '到定点的距离等于定长的点的集合',
        '到两个定点的距离之和为常数的点的集合',
        '到定直线的距离等于到定点的距离的点的集合',
        '到两个定点的距离之差为常数的点的集合',
      ],
      correct: 1,
      explanation: '椭圆的核心定义是到两个焦点距离之和为常数。',
    },
    {
      question: <>椭圆 <TeX>{'\\frac{x^2}{16} + \\frac{y^2}{25} = 1'}</TeX> 的焦点坐标是什么？</>,
      options: ['(±3, 0)', '(0, ±4)', '(±4, 0)', '(0, ±3)'],
      correct: 3,
      explanation: <><TeX>{'a=5,\\ b=4,\\ c=\\sqrt{25-16}=3'}</TeX>，焦点在y轴上，所以是(0, ±3)</>,
    },
  ],
  conclusion: {
    title: '恭喜完成椭圆探索！',
    content: 'Hans7，你今天的表现太棒了！你已经掌握了椭圆的定义、基本性质和重要二级结论。数学就像侦探破案，每一步都需要仔细观察和严谨推理。继续努力，你一定能成为数学界的"名侦探"！',
    tip: <><strong className="highlight">记住：数学不是记忆，而是理解！</strong> 下次我们将探索双曲线，继续我们的数学探案之旅！</>,
  },
};
