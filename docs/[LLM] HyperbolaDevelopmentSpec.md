# Hyperbola Teaching Page Development Specification

## 1. File Structure
```
src/hyperbolaDefinition/
├── HyperbolaDefinition.jsx      # Main component
├── config.jsx                   # Content configuration
└── hardQuestionsConfig.jsx      # Advanced questions config (optional)
```

## 2. Component Dependencies & Usage Patterns

### Core Components (required)
```jsx
import Section from '@/component/teachingPlan/Section';
import KnowledgePoint from '@/component/teachingPlan/KnowledgePoint';
import Card from '@/component/teachingPlan/Card';
import Header from '@/component/teachingPlan/Header';
import LearningPartnerCard from '@/component/teachingPlan/LearningPartnerCard';
import Think from '@/component/teachingPlan/Think';
```

### Usage Patterns:
```jsx
// Section container
<Section>
  <h2 className={styles.teachingPlanH2}>Section Title</h2>
  // Content here
</Section>

// Knowledge point
<KnowledgePoint>
  <h3 className={styles.teachingPlanH3}>Title</h3>
  <p>Content</p>
</KnowledgePoint>

// Learning partner card
<LearningPartnerCard 
  imgNode={(lpStyles) => <img src={conanImage} className={lpStyles.conanImg} />}
>
  <h2>Title</h2>
  <p>Content</p>
</LearningPartnerCard>
```

## 3. Styling Rules
1. **Use existing styles** from `@/component/teachingPlan/basic.module.scss`
2. **Tailwind CSS** for new styles via `cn` utility:
```jsx
import { cn } from '@/lib/utils';

// Example usage
<div className={cn('flex gap-4', classNameProp)}>
```

## 4. Content Structure
Follow this sequence in `HyperbolaDefinition.jsx`:
1. Header with title
2. Introduction (LearningPartnerCard)
3. Definition & Properties (KnowledgePoint)
4. Equation derivation (KnowledgePoint with Think components)
5. Interactive lab (Geogebra component)
6. Secondary conclusions (Card components)
7. Quiz section (QuizContainer)
8. Conclusion (LearningPartnerCard)

## 5. Configuration Pattern
Create `config.jsx` with this structure:
```jsx
export const config = {
  title: "双曲线的定义与性质",
  welcome: {
    title: "欢迎标题",
    content: "欢迎内容"
  },
  definition: {
    title: "定义标题",
    content: "定义内容",
    mathExpression: "|PF₁ - PF₂| = 2a"
  },
  equation: {
    title: "方程标题",
    contentX: "横轴双曲线内容",
    formulaX: "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1",
    contentY: "纵轴双曲线内容",
    formulaY: "\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1",
    parameters: [
      "a: 实半轴",
      "b: 虚半轴"
    ],
    thinkWhenAEqB: "当a=b时思考问题",
    answerWhenAEqB: "a=b时的答案",
    letUsDeriveQ: "推导问题",
    letUsDeriveA: "推导答案"
  },
  properties: {
    title: "性质标题",
    items: ["性质1", "性质2"]
  },
  secondary: [
    {title: "结论1", content: "内容", points: ["要点1", "要点2"]}
  ],
  quiz: [
    // Quiz objects matching QuizContainer's expected format
  ],
  conclusion: {
    title: "总结标题",
    content: "总结内容",
    tip: "学习提示"
  }
};
```

## 6. Implementation Checklist
1. Reuse all teachingPlan components without modification
2. Follow the same state management pattern for quizzes
3. Use identical animation patterns (motion.div with whileHover)
4. Maintain consistent spacing (gap-30 in container)
5. Use the same footer structure
6. Include Helmet for title management

## 7. Asset Usage
Use existing Conan images:
```jsx
import conanThinking from '@/assets/conan-thinking-1.png';
import conanThumbUp from '@/assets/conan-thumb-up-1.png';
```

## 8. Geogebra Integration
Use the same Geogebra component pattern:
```jsx
<Geogebra
  id="hyperbola-lab"
  appletOnLoad={drawHyperbola}
  // Other props same as ellipse
/>
```
