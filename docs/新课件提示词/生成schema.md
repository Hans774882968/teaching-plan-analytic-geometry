[TOC]

## 生成schema

### 食用方式

1. 可以扔给DeepSeek网页版+开启深度思考。也可以扔给Cline + DeepSeek Chat（Reasoner太慢了，很烧钱，而且出来的效果远不及预期）
2. 如果是扔给DeepSeek网页版，那么需要手动粘贴类型定义文件和`Geogebra组件文档.md`，`StandardPage.jsx`可以不粘贴。

### Prompt

大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。

### 背景和目标

我打算生成一个新课件，详细讲解函数的单调性。知识点包括：

- 单调性的定义与证明
- 最大值、最大值点、最小值、最小值点、最值的定义
- 函数的平均变化率
- 物理中的变化率

文件结构如下：

src/functionDefinition/
├── FunctionMonotonicity.jsx  # 主组件
└── monotonicityConfig.jsx    # 内容配置文件，被主组件调用

我们有一个标准页面 @/src\component\teachingPlan\StandardPage.jsx ，需要给它提供一个描述页面结构的配置对象，其类型定义文件在 @/src\component\teachingPlan\StandardPageStructure.d.ts 。你生成的内容配置文件的类型应与该类型定义文件相符。标准页面的“实验互动模块”用到一个 @/src\component\Geogebra.jsx 组件，其组件文档为 @/docs\Geogebra组件文档.md

主组件已经实现完毕，你不需要生成。

### 目标客户和学习伙伴

15岁的高一学生Hans，其喜爱的卡通形象就是课件的学习伙伴——名侦探柯南。学习伙伴在 Welcome 模块首次出现，在 Summary 模块再次出现。

### 实现要求

1. 页面所有的title属性的文案，以及`h4, h5, h6`标签的文案的前面都要选择一个emoji。页面标题 config.title 前后各有一个emoji。
2. 在知识点和思考题中，必须标记重点和难点！
3. 整个配置文件出现的所有字符串，尤其是**含有公式的字符串**，都**必须使用`String.raw`和反引号**，以简化转义字符的书写。

### 标题标签 h4, h5, h6 的使用规范

在允许 ReactNode 的属性中，如果要用到标题标签，只能使用 h4, h5, h6，并且需要必须包含对应类名。举例：

```jsx
import styles from '@/component/teachingPlan/basic.module.scss';
<h4 className={styles.teachingPlanH4}></h4>
<h5 className={styles.teachingPlanH5}></h5>
<h6 className={styles.teachingPlanH6}></h6>
```

### Markdown String 书写规范

1. 可以使用4、5、6级标题。
2. Markdown String 中的公式生成规范见下文《字符串》一节。

### 如何标记重点和难点

```jsx
import styles from '@/component/teachingPlan/basic.module.scss';
// 重点
<strong className={styles.highlight}>离心率</strong>
// 难点
<strong className={styles.hard}>面积公式</strong>
```

### 公式生成规范

在两种场景下可能会出现公式：

- ReactNode
- 字符串

#### ReactNode

这种情况下，所有公式都需要写成被 TeX 标签包裹的 katex 公式的形式，且必须使用`String.raw`。以`knowledgePointSection`中的公式`x^2/a^2 + y^2/b^2 = 1`为例：

```jsx
import TeX from '@matejmazur/react-katex';

knowledgePointSection: {
    title: String.raw`📚 核心知识点`,
    points: [
      {
        title: String.raw`⚡ 椭圆的标准方程`,
        content: (
          <p>椭圆的标准方程为：<TeX>{String.raw`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1`}</TeX></p>
        )
      }
    ]
}
```

#### 字符串

这种情况下，所有公式都需要写成markdown中的katex公式的形式，用“$”标识，注意，**$和前一个字符之间要有1个空格**。以`x^2/a^2 + y^2/b^2 = 1`为例：

```markdown
椭圆的标准方程： $ \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 $

块级公式：

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1
$$
```
