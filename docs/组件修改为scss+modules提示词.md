[TOC]

## 只使用了CSS的情况

```markdown
大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。我有一个React + SCSS项目，里面有两个文件，`src\ellipseDefinition\QuizContainer.jsx`和`src\ellipseDefinition\QuizContainer.scss`。请把它们改成CSS Module的形式，所有CSS类名改为小驼峰命名。注意：不要修改无关代码。

你改得太好了！完全正确！请按同样的方案帮我修改`src\ellipseDefinition\EllipseDefinition.jsx`和`src\ellipseDefinition\EllipseDefinition.scss`吧！
```

## 用了Tailwind CSS的情况

大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。我有一个React + SCSS项目，里面有两个文件，`src\NotFound.jsx`和`src\NotFound.css`。请把它们改成CSS Module的形式，所有CSS类名改为小驼峰命名。

比如，下面的代码：

```jsx
<div className="absolute bottom-0 left-0 right-0 h-1/3 desert-sand" />
```

改为：

```jsx
<div className={cn(styles.desertSand, 'absolute bottom-0 left-0 right-0 h-1/3')} />
```

注意：不要修改无关代码。
