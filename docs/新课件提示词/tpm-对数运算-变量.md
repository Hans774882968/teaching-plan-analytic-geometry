[TOC]

### title

对数运算

### knowledgePoints

- 对数的概念。说出`2^x = 64`的所有实数根，并说明理由
- 对数发明起源的简介
- 常用对数与自然对数
- 素数个数与对数
- 情境与问题：里氏震级中，震级7.8和8.0的最大振幅的关系
- 情境与问题：化学中，pH=7和pH=8的溶液的关系

### fileStructure

src/logarithmicFunction/
├── LogOperation.jsx       # 主组件
└── logOperationConfig.jsx # 内容配置文件，被主组件调用

### learningPartner

目标客户是15岁的高一学生Hans。其喜爱的卡通形象就是课件的学习伙伴——menhera酱。

口癖：句尾常带「…呢」「…哦？」，自称「menhera酱」。她说话时常常撒娇卖惨、装可怜，用「我要发病咯」「要爱我喔」求关注。

### standardPageTypes

```ts
import React from 'react';

export type ThinkItem = {
  think: string; // markdown str
  answer: string; // markdown str
  answerRowMaxHeight: string;
};

export type PointItem = {
  title: string;
  content: React.ReactNode; // 注意：虽然支持 ReactNode ，但你生成时请务必提供用 String.raw 和反引号包裹的多行 markdown 字符串
  thinks: ThinkItem[];
};

export type GeoGebraItem = {
  description: string; // markdown str
  config: Record<string, any>;
  conclusion: string; // markdown str
};

// 一道单选题或多选题，选项从 0 开始编号
export type QuizItem = {
  question: React.ReactNode; // 注意：虽然支持 ReactNode ，但你生成时请务必提供用 String.raw 和反引号包裹的多行 markdown 字符串
  options: React.ReactNode[]; // 注意：虽然支持 ReactNode ，但你生成时请务必提供用 String.raw 和反引号包裹的多行 markdown 字符串
  correct: number | number[]; // 正确选项的编号，单选题为 number，多选题为 number[]
  explanation: React.ReactNode; // 注意：虽然支持 ReactNode ，但你生成时请务必提供用 String.raw 和反引号包裹的多行 markdown 字符串
};

export type LinkItem = {
  url: string;
  text: string;
};

export type LearningPartner = 'conan' | 'chitanda';

export type Header = {
  content: string;
};

// 学习伙伴首次出现
export type Welcome = {
  title: string;
  content: React.ReactNode;
};

export type KnowledgePointSection = {
  title: string;
  points: PointItem[];
  thinks: ThinkItem[];
}

export type GeoGebraSection = {
  title: string;
  geogebraList: GeoGebraItem[];
};

export type QuizSection = {
  title: string;
  description: React.ReactNode;
  quiz: QuizItem[];
  link: LinkItem;
};

// 学习伙伴再次出现
export type Summary = {
  title: string;
  content: React.ReactNode; // 注意：虽然支持 ReactNode ，但你生成时请务必提供用 String.raw 和反引号包裹的多行 markdown 字符串
};

export type Footer = {
  info: React.ReactNode;
};

export type PageStructure = {
  title: string; // 页面的标题
  lpName: LearningPartner;
  header: Header;
  welcome: Welcome;
  knowledgePointSection: KnowledgePointSection;
  // 实验互动模块
  geogebraSection: GeoGebraSection;
  // 知识挑战模块
  quizSection: QuizSection;
  summary: Summary;
  footer: Footer;
};
```

### geogebraUsageDoc

### @/docs\Geogebra组件文档.md

源码位置：src\Geogebra.jsx

默认参数：

```js
{
  appName: 'classic',
  width: 800,
  height: 600,
  showToolBar: true,
  showAlgebraInput: true,
  showMenuBar: true,
}
```

- `id`和`height`这两个参数必传，`width`可不传。
- 该组件支持向`window.GGBApplet()`透传参数。

#### 如何在JS Config中使用

```js
// 一般来说，只需要指定 id, height, appletOnLoad
{
  geogebraList: [
    {
      config: {
        id: 'plane-vector-definition-1',
        height: 600,
        appletOnLoad: (applet) => {
          applet.evalCommand('A = (1,2)');
        }
      }
    }
  ]
}
```

#### 如何使用组件

案例1：【直接调用组件】绘制椭圆

```jsx
const drawEllipse = (applet) => {
  applet.evalCommand('ellipse: x^2/25 + y^2/9 = 1'); // 绘制椭圆
  applet.setColor('ellipse', 255, 0, 0);
  applet.setLineThickness('ellipse', 3);

  applet.evalCommand('A: Point(ellipse)'); // 绘制椭圆上的动点 A
  applet.evalCommand('C1: (4, 0)'); // 绘制椭圆的右焦点 C1
  applet.evalCommand('C2: (-4, 0)'); // 绘制椭圆的左焦点 C2
  applet.evalCommand('s1: Segment(C1, A)'); // 线段 C1A
  applet.evalCommand('s2: Segment(C2, A)'); // 线段 C2A
  applet.evalCommand('lenSum: s1 + s2'); // 验证椭圆上任意一点 A 到两个焦点的距离和为定值

  applet.setCoordSystem(-6, 6, -4, 4);
};

<Geogebra
  id="geogebra"
  width={1200}
  height={600}
  appletOnLoad={drawEllipse}
/>
```

案例2：【JS Config】绘制分段函数、设置几何对象样式

```jsx
{
  config: {
    id: 'function-representation-1',
    height: 600,
    appletOnLoad: (applet) => {
      // 创建控制显示/隐藏的复选框
      applet.evalCommand('showPiecewise: true');

      applet.evalCommand('s1 = Slider(-4, 4, 0.1)');
      applet.setValue('s1', 1);
      applet.evalCommand('s2 = Slider(0.5, 3, 0.1)');
      applet.setValue('s2', 0.6);

      applet.evalCommand('SetConditionToShowObject(showPiecewise, false)');
      applet.evalCommand('SetConditionToShowObject(s1, false)');
      applet.evalCommand('SetConditionToShowObject(s2, false)');

      // 分段函数
      applet.evalCommand('f(x) = If(x < 0, x^2, 0 <= x <= 2, 2x + 1, x > 2, 5 - x)');
      applet.setColor('f', 255, 0, 0); // 红色
      applet.setLineThickness('f', 3);
      applet.evalCommand('SetConditionToShowObject(f, showPiecewise)');

      // 关键点标记
      applet.evalCommand('P1 = (0, f(0))');
      applet.evalCommand('P2 = (2, f(2))');
      applet.setPointStyle('P1', 4);
      applet.setPointStyle('P2', 4);
      applet.setColor('P1', 255, 0, 0);
      applet.setColor('P2', 255, 0, 0);
      applet.evalCommand('SetConditionToShowObject(P1, showPiecewise)');
      applet.evalCommand('SetConditionToShowObject(P2, showPiecewise)');

      // 设置坐标系范围
      applet.setCoordSystem(-5, 5, -3.5, 7);
    },
  }
}
```

#### 如何绘制3D图形

正方体的旋转：

```js
{
  config: {
    id: 'cube-rotation',
    appName: '3d',
    height: 600,
    appletOnLoad: (applet) => {
      // Cube(<Point>, <Point>, <Point>)
      applet.evalCommand('cube: Cube((1,1,0), (1,0,0), (1,0,1))');
      applet.evalCommand('α: Slider(0°, 360°)');
      applet.setValue('α', Math.PI); // 180°
      applet.evalCommand('Rotate(cube, α, zAxis)');
    },
  }
}
```
