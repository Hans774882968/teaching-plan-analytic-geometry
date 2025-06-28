[TOC]

## 在DeepSeek网页版试探

```markdown
## 角色

大佬，你是一名特级高中数学老师，擅长开发青少年互动教育内容，寓教于乐地教学生数学知识。请叫我hans7。

## 目标

我希望实现一个网页，教解析几何中“椭圆的定义、性质和二级结论”。

拆解：

1. 该网页风格应活泼灵动、具备视觉吸引力、交互性强、寓教于乐。
2. 描述页面风格的JSON文件如下：

{
  "colorPalette": {
    "primary": "#4A90E2",
    "secondary": "#FF6B6B",
    "accent": "#FFD166",
    "background": "RGB(178,222,236)", // 淡蓝色
    "sectionBackground": "RGB(130,205,230)" // 天蓝色
    // 文字颜色请自行确定，应与 sectionBackground 相配
  },
  "typography": {
    "titleFont": "'Fredoka One', cursive",
    "bodyFont": "'Nunito', sans-serif",
    "titleSize": "2.5rem",
    "sectionTitleSize": "1.8rem"
  },
  "effects": {
    "cardShadow": "0 4px 8px rgba(0, 0, 0, 0.1)",
    "hoverScale": "scale(1.03)",
    "transition": "all 0.3s ease"
  },
  "borderRadius": "16px",
  "animationIntensity": "medium"
}

## 目标用户

15岁的高一学生Hans，其喜爱的卡通形象为名侦探柯南。柯南素材如下：

- 思考中的柯南：`src/assets/conan-thinking.png`，1328px*1328px
- 点赞的柯南：`src/assets/conan-thumb-up.png`，1328px*1328px

## 页面框架

1. 标题栏：包含标题和emoji。
2. 学习伙伴：名侦探柯南。使用“思考中的柯南”。提供素材的路径见《目标用户》一节。
3. 知识讲解：分为多个小节，重点和难点需采用不同颜色的高亮强调。
4. 实验互动模块。
5. “知识挑战”测验：单选题。
6. 总结鼓励：学习伙伴再现，使用“点赞的柯南”。

## 技术栈

1. 仅限于HTML+CSS3+JavaScript。注意，你应输出单独的HTML文件。
2. 所有的文案应放在一个单独的JS配置变量`const config = {};`。
```

生成的网页有许多样式问题、实用价值差。

## 正式实现React页面

```markdown
## 角色

大佬，你是一名专家前端工程师，精通高质量React代码的编写。请叫我hans7。

## 目标拆解

第一步：请将 @/html-demos/ellipse-definition.html 的 HTML 和 CSS 原封不动地转为React组件，JS交互忽略。新增的jsx和css文件放在ellipseDefinition文件夹下。第二步：把React组件的代码中所有不是标准katex格式的公式都转为katex格式。第三步：测验题转为用React生成。请引用 @/src/ellipseDefinition/config.js 的相关数据。测验题应封装一个组件。
```

还原效果很差！很多样式都丢失了，代码也很不规范。尤其是，用了些完全站不住脚的理由写了内联样式！

~~~markdown
大佬，请使用`@matejmazur/react-katex`实现katex公式渲染，该依赖已经安装好。请识别 @/src\ellipseDefinition\config.jsx 中所有含有公式的字符串，将其拆分为ReactNode数组，并替换@/src\ellipseDefinition\EllipseDefinition.jsx 中的 renderMath 函数调用。替换方式：
```jsx
{config.properties.items.map((item, i) => (
  {/* 修改前 */}
  {/* <p key={i}>{renderMath(item)}</p> */}
  {/* item 是 ReactNode[] 所以可以直接这样修改。修改后 */}
  <p key={i}>{item}</p>
))}
```
最后将 renderMath 函数删了。注意：禁止在 @/src\ellipseDefinition\EllipseDefinition.jsx 导入 TeX，而是老老实实拆分 config.jsx 中含有公式的字符串。
~~~

deepseek真的好蠢！只修改了jsx文件！

```markdown
大佬，请使用`@matejmazur/react-katex`实现katex公式渲染，该依赖已经安装好。请识别 @/src\ellipseDefinition\config.jsx 中所有含有公式的字符串，并将其拆分为ReactNode数组。示例：
`'c - 焦距的一半，满足 (c = \\sqrt{a^2 - b^2})' → ['c - 焦距的一半，满足 (', <TeX math='c = \\sqrt{a^2 - b^2} />, ')']`
```

