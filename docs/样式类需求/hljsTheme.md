[TOC]

## 引言

用于Claude Cli。

准备工作：读取主题名：

```markdown
大佬，请读取 node_modules\highlight.js\styles 这个文件夹下的所有css文件名，并告诉我这个文件夹下提供的所有主题文件。请以以下格式的JS数组输出：[{ label: string, value: string }]
```

## Prompt

大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。请在`src\component\layout\SettingsDialog.jsx`中新增一个下拉框，让用户选择`highlight.js`提供的代码块主题。要求如下：

1. 使用的下拉框组件为`src\component\ui\multiselect.jsx`。在此我们使用多选下拉框组件作为单选下拉框使用，是为了使用其搜索功能，因此我们要给组件传一个参数`maxSelected=1`。下拉框的选项在`src\common\themeOptions.js`提供。下拉框的默认选项为`paraiso-light.css`。
2. 在`src\component\layout\states\settingsState.js`的`useSettingsStore`中新增一个变量。和已有的`filterStyle`类似。
3. 变量修改后立即切换到对应的主题CSS文件。以`paraiso-light.css`为例，主题CSS文件路径是`node_modules\highlight.js\styles\paraiso-light.css`。
4. 请勿修改与本次需求无关的代码。

## 手动完成的部分

1. 手动修改`nord.css purebasic.css`
2. 手动修改`pojoaque.css`和`brown-paper.css`的背景URL

## 测试方案

1. 未覆盖到的`nord.css purebasic.css`
2. 默认的`docco.css`
3. 有背景的`pojoaque.css`和`brown-paper.css`
4. 不同的URL，尤其是有级联的，比如`/blog/:bid`
