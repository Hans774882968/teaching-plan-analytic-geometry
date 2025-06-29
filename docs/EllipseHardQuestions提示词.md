[TOC]

## 提取题目

提示词：

```markdown
大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。请识别图中的文字，并将其整理为以下格式：

const config = {
  quiz: [
    {
      explanation: <>离心率 <TeX>{'e = \\frac{c}{a} = \\frac{\\sqrt{25-9}}{5} = \\frac{4}{5} = 0.8'}</TeX></>,
    },
  ],
}

输出规范：

1. 所有的公式都需要用TeX标签包裹，因为TeX标签来自`@matejmazur/react-katex`包：`import TeX from '@matejmazur/react-katex'`。公式应为标准katex格式，如上所示。
2. 如果公式比较长导致换行，需要把单引号换成反引号。比如：“<TeX>{`a = \\pm1`}</TeX>”
```
