[TOC]

## 从1到2：让 DeepSeek 生成新课件开发规范的提示词

```markdown
大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。

## 背景和目标

我已经有一个组件 @/src\ellipseDefinition\EllipseDefinition.jsx ，它是一个活泼灵动的网页，讲解了椭圆的定义、性质和二级结论。我希望用DeepSeek继续开发类似的网页，去讲解双曲线的定义、性质和二级结论。在正式开发前，我希望你帮助我写一个详细的开发规范，让DeepSeek严格按照此规范开发，避免DeepSeek自己重复造轮子。

## 目标拆解

1. 请你读取 EllipseDefinition.jsx 和它的所有依赖文件，详细地讲清楚这些依赖文件的调用方式。
2. 如非特别必要，不要新增 css 代码，而是优先使用 @/src\component\teachingPlan 下的组件来展示知识点。
3. 如果实在是特别需要新增 css 代码，请使用 Tailwind CSS，并使用 @/src/lib/utils.js 的 cn 方法来拼接 css 类名。
4. 请将你写的开发规范文档放在 docs 文件夹下。
```

## 生成新课件的提示词

参考`docs\[LLM] HyperbolaDevelopmentSpec.md`写提示词。用于 Cline + DeepSeek Chat

大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。

### 背景和目标

请生成一个新课件，详细讲解抛物线的定义、性质和二级结论。文件结构如下：

src/parabolaDefinition/
├── ParabolaDefinition.jsx       # 主组件
└── config.jsx                   # 内容配置文件，被主组件调用

### 实现要求

1. 总是使用 @/src/component/teachingPlan/ 下的组件组织课件内容。不要修改这些组件的代码。必须用到以下所有组件： @/src\component\teachingPlan\Section.jsx @/src/component/teachingPlan/KnowledgePoint.jsx @/src\component\teachingPlan\Card.jsx @/src\component\teachingPlan\Header.jsx @/src\component\teachingPlan\LearningPartnerCard.jsx @/src/component/teachingPlan/Think.jsx @/src/component/teachingPlan/Footer.jsx @/src\component\QuizContainer.jsx
2. 必须包含“实验互动”模块。总是使用 @/src\component\Geogebra.jsx 。其组件文档 @/docs\Geogebra组件文档.md
3. 必须包含“知识挑战”模块。形式为单选题，至少3道题。使用QuizContainer
4. 标题栏在最上面，包含标题和emoji。
5. 标题栏下面是学习伙伴的欢迎内容。学习伙伴为：名侦探柯南。使用LearningPartnerCard和 @/src\assets\conan-thinking-1.png
6. 讲解至少5个知识点。使用KnowledgePoint组件。知识点之后有思考题，至少2道，使用Think组件。
7. 在知识点和思考题中，必须标记重点和难点！
8. “总结与鼓励”模块在最下面。学习伙伴再现。使用LearningPartnerCard和 @/src/assets/conan-thumb-up-1.png
9. 如果需要使用按钮，总是使用 @/src\component\TPButton.jsx
10. 总是使用`react-helmet-async`设置页面标题。
11. 严禁修改与本次需求无关的代码。请遵循最小改动原则。
12. 如果需要封装子组件，请新建一个文件，把它放在主组件的同级目录下。

### 如何标记重点和难点

```jsx
import styles from '@/component/teachingPlan/basic.module.scss';
// 重点
<strong className={styles.highlight}>离心率</strong>
// 难点
<strong className={styles.hard}>面积公式</strong>
```

### 公式生成规范

所有公式都需要写成被TeX标签包裹的katex公式的形式。以`x^2/a^2 + y^2/b^2 = 1`为例：

```jsx
import TeX from '@matejmazur/react-katex';

<TeX>{String.raw`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1`}</TeX>
```

### 如何使用 react-helmet-async

```jsx
function Inner() {
  // 课件组件实现
}

export default function Foo() {
  return (
    <>
      <Helmet>
        <title>A Title</title>
      </Helmet>
      <Inner />
    </>
  );
}
```

### QuizContainer 组件文档

必须在Section组件中使用。范例：

```jsx
const [showFeedbacks, setShowFeedbacks] = useState({});

const checkAnswers = () => {
  const feedbacks = {};
  config.quiz.forEach((_, index) => {
    feedbacks[index] = true;
  });
  setShowFeedbacks(feedbacks);
};

<Section>
  <h2 className={styles.teachingPlanH2}>🧠 知识挑战</h2>
  <p>测试一下你对椭圆的理解吧！</p>

  {
    config.quiz.map((quiz, index) => (
      <QuizContainer
        key={index}
        index={index}
        quiz={quiz}
        showFeedbacks={showFeedbacks}
      />
    ))
  }

  <div className={styles.checkAnswersContainer}>
    <TPButton onClick={checkAnswers}>
      检查答案
    </TPButton>
  </div>
</Section>
```

### teachingPlan 组件文档

```jsx
import Section from '@/component/teachingPlan/Section';
import KnowledgePoint from '@/component/teachingPlan/KnowledgePoint';
import Card from '@/component/teachingPlan/Card';
import Header from '@/component/teachingPlan/Header';
import LearningPartnerCard from '@/component/teachingPlan/LearningPartnerCard';
import Think from '@/component/teachingPlan/Think';
import Footer from '@/component/teachingPlan/Footer';
```

- @/src\component\teachingPlan\Section.jsx ：包裹每个模块
- @/src/component/teachingPlan/KnowledgePoint.jsx ：包裹一个知识点
- @/src\component\teachingPlan\Card.jsx ：可用于包裹各种内容
- @/src\component\teachingPlan\Header.jsx ：标题栏
- @/src\component\teachingPlan\LearningPartnerCard.jsx ：学习伙伴
- @/src/component/teachingPlan/Think.jsx ：包裹一道思考题。该组件可出现在 KnowledgePoint 或 Card 中。如果在 Card 中，则它是 KnowledgePoint 的 sibling
- @/src\component\teachingPlan\Footer.jsx ：页脚

调用方式：

```jsx
// Header
<Header>
  <h1 className={styles.teachingPlanH1}>H1 Title</h1>
  <p>Content</p>
</Header>
// Section
<Section>
  <h2 className={styles.teachingPlanH2}>Title</h2>
  <p>Content</p>
</Section>
// KnowledgePoint
<Section>
  <KnowledgePoint>
    <h3 className={styles.teachingPlanH3}>Knowledge 1</h3>
    <p>Content 1</p>
    <Think />
  </KnowledgePoint>
  <KnowledgePoint>
    <h3 className={styles.teachingPlanH3}>Knowledge 2</h3>
    <p>Content 2</p>
  </KnowledgePoint>
</Section>
// LearningPartnerCard
<Section>
  <LearningPartnerCard 
    imgNode={(lpStyles) => <img src={conanImage} className={lpStyles.conanImg} />}
  >
    <h2>Title</h2>
    <p>Content</p>
  </LearningPartnerCard>
</Section>
// Card
<Section>
  <Card>
    {/*  Content here  */}
  </Card>
<Section>
{/* Think */}
<Section>
  <Card>
    <Think
      think={thinkReactNode}
      answer={answerReactNode}
      answerRowMaxHeight='300px'
    />
  <Card>
</Section>
<Footer>
  <p>Content</p>
</Footer>
```

### 样式规则

必须导入 @/src/component/teachingPlan/basic.module.scss 。如果需要新增 css 代码，请使用 Tailwind CSS，并使用 @/src/lib/utils.js 的 cn 方法来拼接 css 类名。

```jsx
import { cn } from '@/lib/utils';

// Example usage
<div className={cn('flex gap-4', classNameProp)}>
```

### h1, h2, h3 使用规范

必须包含对应类名。举例：

```jsx
<h1 className={styles.teachingPlanH1}></h1>
<h2 className={styles.teachingPlanH2}></h2>
<h3 className={styles.teachingPlanH3}></h3>
```

### 如何导入图片

```jsx
import conanThinking from '@/assets/conan-thinking-1.png';

<img src={conanThinking} className={lpStyles.conanImg} />
```
