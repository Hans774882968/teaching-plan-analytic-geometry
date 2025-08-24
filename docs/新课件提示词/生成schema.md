大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。

### 背景和目标

我打算生成一个新课件，详细讲解{{title}}。知识点包括：

{{knowledgePoints}}

文件结构如下：

```
{{fileStructure}}
```

我们有一个标准页面 @/src\component\teachingPlan\StandardPage.jsx ，需要给它提供一个描述页面结构的配置对象，其类型定义文件在 @/src\component\teachingPlan\StandardPageStructure.d.ts 。你生成的内容配置文件的类型应与该类型定义文件相符。标准页面的“实验互动模块”用到一个 @/src\component\Geogebra.jsx 组件，其组件文档为 @/docs\Geogebra组件文档.md

主组件已经实现完毕，你不需要生成。

### 目标客户和学习伙伴

{{learningPartner}}

学习伙伴在 Welcome 模块首次出现，在 Summary 模块再次出现。

### 实现要求

1. 对于单个知识点的内容（`config.knowledgePointSection.points[i].content`），`config.quizSection.quiz[i]`的`question, correct, explanation`属性，和`config.summary.content`，虽然它们支持ReactNode，但请务必生成用 String.raw 和反引号包裹的多行`markdown`字符串！
2. 在知识点和思考题中，必须标记重点和难点！
3. 整个配置文件出现的所有字符串，尤其是**含有公式的字符串**，都**必须使用`String.raw`和反引号**，以简化转义字符的书写。
4. 页面所有的title属性的文案，以及`h4, h5, h6`标签的文案的前面都要选择一个emoji。页面标题`config.title`前后各有一个emoji。
5. 关于`config.quizSection.link`对象：`url`是当前页面的链接加上`-hard-questions`后缀，`text`是`更难的{{ config.title }}练习题`。
6. 关于`config.footer.info`：作者是“DeepSeek老师”，其余页脚信息可自由发挥。

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

在Markdown String中：可以直接嵌入HTML。比如：

```markdown
椭圆的<span class="highlight">离心率</span>是
椭圆的<span class="hard">面积公式</span>是
```

在ReactNode中：

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

### src\component\teachingPlan\StandardPageStructure.d.ts

{{standardPageTypes}}

{{geogebraUsageDoc}}
