[TOC]

# 通过为前端项目接入GeoGebra，初步研究AI时代数学教案的生成方案

## 引言

我偶然刷到了[这个视频](https://www.bilibili.com/video/BV1UeK8zAErv)，它给我一种强烈的感觉，就是下一代的每一个学生，只要会说HTML、Tailwind CSS、JavaScript这少数几个词，就能轻松生成属于自己的互动性极强的数学课件。我感受到了极其强烈的焦虑，下一代的学生，肯定能比我们这一代人更快地更新迭代自己的知识体系。我们一天才能学会的东西，他们可能一小时就能学会。以后他们的工作能力肯定能轻松碾压我们。所以至少在LLM尚未十分成熟的2025，我想走在下一代人的前面，哪怕只是用行动骗骗自己，有能力比下一代人更快驾驭LLM……

咳咳，先不抒情了。我写这个开源项目的初衷主要有：

1. 研究如何让大语言模型快速生成数学教案。
2. 研究如何在前端页面嵌入**GeoGebra**，增强数学教案的互动性。

[本项目GitHub传送门](https://github.com/Hans774882968/teaching-plan-analytic-geometry)

注意：为了减少该项目的占用空间，本项目并未包含GeoGebra源码。如果想要在本地跑起来这个项目，请自行下载[GeoGebra Math Apps Bundle](https://download.geogebra.org/package/geogebra-math-apps-bundle)，并复制里面的web3d文件夹和css文件夹到本项目的`public\geogebra`。

## 如何给React项目接入GeoGebra

翻了下高中数学必修一（进入 https://jc.pep.com.cn/ ，选择高中数学必修第一册B版），现在已经升级为使用GeoGebra了。我还清楚地记得，15年的数学课本还是用几何画板举例的。

![](./README_assets/1-高中数学必修一已经更新为使用GeoGebra.png)

为什么这个项目要接入GeoGebra不用多说了吧~伟大，无需多言！

参考[GeoGebra官方文档](https://geogebra.github.io/docs/reference/en/GeoGebra_Apps_Embedding/)，我们主要需要：

1. 导入：`<script src="GeoGebra/deployggb.js"></script>`。
2. 如果是**自托管**，需要加上这句：`applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');`。否则忽略。

### 封装 Geogebra.jsx

为了方便在React中使用GeoGebra，我们不妨封装一个`Geogebra.jsx`。我找到了一个叫`react-geogebra`的npm包，但看了眼那个源码。天哪！代码质量不太得，eslint报错有十几个！索性复制下来，自己改改。

[src\component\Geogebra.jsx](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/src/component/Geogebra.jsx), copy from https://github.com/pfaffmann/react-geogebra/blob/master/src/index.js

```jsx
import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './Geogebra.module.scss';
import { cn } from '@/lib/utils';

const Geogebra = (props) => {
  const defaultProps = {
    appName: 'classic',
    height: 600,
    showToolBar: true,
    showAlgebraInput: true,
    showMenuBar: true,
  };
  const mergedProps = { ...defaultProps, ...props };
  const refProps = useRef(mergedProps);

  const { onReady, appletOnLoad } = refProps.current;
  let { id, LoadComponent, debug } = refProps.current;
  if (!id) {
    id = 'ggb-applet';
  }
  if (!debug) {
    debug = false;
  }
  // if a JSX Component is not given as a prop, use h3 with children
  if (!LoadComponent) {
    LoadComponent = ({ children }) => <h3>{children}</h3>;
  }

  const [watchPropsChange, setWatchPropsChange] = useState(false);
  // gets called by Geogebra after the Applet is ready
  const onAppletReady = useCallback(
    (ggbApi) => {
      if (appletOnLoad) appletOnLoad(ggbApi);
      if (onReady) onReady();
      debug && console.log(`Applet with id "${id}" is ready`);
    },
    [appletOnLoad, debug, id, onReady]
  );

  useEffect(() => {
    if (window.GGBApplet) {
      const parameter = JSON.parse(JSON.stringify(refProps.current));
      parameter.appletOnLoad = onAppletReady;
      const ggbApp = new window.GGBApplet(parameter, true);
      ggbApp.setHTML5Codebase('/geogebra/web3d/');
      ggbApp.inject(id);
      setWatchPropsChange(false);
      debug &&
        console.log(`applet with id "${id}" successfully injected into the DOM`);
    }

    return () => {
      const tag = document.getElementById(`${id}-holder`);
      if (tag) {
        tag.lastChild.textContent = '';
      }
    };
  }, [watchPropsChange, debug, id, onAppletReady]);

  return (
    <div id={`${id}-holder`} className={cn(styles.geogebraWrapper, props.className)}>
      <div id={id} style={{ width: '100%' }}></div>
    </div>
  );
};

export default Geogebra;
```

这里的核心代码是：

```js
const ggbApp = new window.GGBApplet(parameter, true);
ggbApp.setHTML5Codebase('/geogebra/web3d/');
ggbApp.inject(id);
```

调用：

```jsx
<Geogebra
  id="geogebra"
  width={1200}
  height={600}
  showToolbar={true}
  showMenuBar={true}
  allowStyleBar={true}
  showAlgebraInput={true}
  enableLabelDrags={false}
  enableShiftDragZoom={true}
  capturingThreshold={null}
  showToolBarHelp={false}
  errorDialogsActive={true}
  showTutorialLink={true}
/>
```

然后就到踩坑时间！

### GeoGebra 的自托管解决方案

如果把`ggbApp.setHTML5Codebase('/geogebra/web3d/')`去掉，那么geogebra已经能正常工作，但静态资源必须通过网络下载，而且资源总共有几十MB，所以加载时间有点长。于是我们不得不考虑自托管解决方案。

首先，按[官方文档](https://geogebra.github.io/docs/reference/en/GeoGebra_Apps_Embedding/)指示下载[GeoGebra Math Apps Bundle](https://download.geogebra.org/package/geogebra-math-apps-bundle)，接着设置`ggbApp.setHTML5Codebase('/geogebra/web3d/')`，然后把下载的包的web3d文件夹复制到本项目的`public\geogebra\web3d`。

到此为止都自我感觉良好。运行！不出所料，报错了！这是因为它请求了 http://localhost:5215/261BBF4225A3B6C8FD1B8B949B793666.cache.js 而非预期的 http://localhost:5215/geogebra/web3d/261BBF4225A3B6C8FD1B8B949B793666.cache.js 。直接挪动这个`cache.js`似乎可以解决，但不太优雅。

于是我排查源码，发现这个cache文件的路径是由`web3d.__moduleBase`（位于`geogebra\web3d\web3d.nocache.js`）决定的。搜索这个变量名，发现`web3d.__moduleBase = B()`这句赋值决定了其值，外部没法直接修改它。所以我们继续看B函数，发现最终是这句代码决定其路径：

```js
// geogebra\web3d\web3d.nocache.js
// 我把原有代码的 O, P, W 等还原为常量
function e(a) {
  var b = a.lastIndexOf('#');
  if (b == -1) {
    b = a.length;
  }
  var c = a.indexOf('?');
  if (c == -1) {
    c = a.length;
  }
  var d = a.lastIndexOf('/', Math.min(c, b));
  return d >= 0 ? a.substring(0, d + 1) : '';
}

if(k == W && j()) {k = e(o.location.href);}
k = f(k);
return k;
```

我们把它改成`k = e(o.location.href + 'geogebra/web3d/');`，问题解决！

250629更新：接入react-router后，需要改为`k = e('/geogebra/web3d/');`。

之后发现，控制台没有报错了，但样式不对劲。这是因为它请求了`geogebra/css/...`。所以我们不能只复制web3d文件夹，还要把同级的css文件夹复制过去。至此搞定！

### GeoGebra 的神秘 bug

打开控制台，窗口自动缩小，此时点击设置，选择坐标轴的颜色，会发现点击对应格子，选中的颜色却不是鼠标对应的格子的颜色。把控制台关了，窗口无法回到原来的大小，于是问题还在。控制台从未开启则没有这个问题。

### GeoGebra 接入总结

1. 按官方文档说的做。
2. 复制web3d和css两个文件夹到`public\geogebra`。
3. `geogebra\web3d\web3d.nocache.js`的`k = e(o.location.href)`改成`k = e('/geogebra/web3d/');`。

## 用GeoGebra进行数学教学

可参考[docs\Geogebra组件文档.md](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/docs/Geogebra%E7%BB%84%E4%BB%B6%E6%96%87%E6%A1%A3.md)。下面仅给出验证椭圆第一定义的示例脚本：

```jsx
const drawEllipse = (applet) => {
  applet.evalCommand('ellipse: x^2/25 + y^2/9 = 1'); // 绘制椭圆
  applet.setColor('ellipse', 255, 0, 0);
  applet.setLineThickness('ellipse', 3);
  applet.setCaption('ellipse', '椭圆: \\frac{x^2}{25} + \\frac{y^2}{9} = 1');

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

### 如何快速学习GeoGebra的语法？以“双曲线的反函数”为例

除了看官方文档以外，还有一些更简单的方式：

1. 操作一下软件的上方工具栏，比如“Reflect about Point”（设置关于点A关于点B对称的点），然后点击平面直角坐标系中已有的两个对象，比如在这个例子中，就是两个点，就能看到等式列表新增了一条等式。
2. 可以猜测“Reflect about Point”的命令含有Reflect字样，在等式输入框输入“Reflect”，便能根据软件的提示方便地补全命令。

另外，我还尝试问DeepSeek：

> 大佬，我有如下Geogebra代码：/* 省略 */。请问如何写代码验证A0点确实在hyperbola2上

它确实回答出来了，但给的回答太复杂了。其实，“验证双曲线的反函数还是双曲线”可以通过Reflect和Distance命令简单实现。如下（来自[src\hyperbolaDefinition\config.jsx](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/src/hyperbolaDefinition/config.jsx)）：

```js
(applet) => {
  applet.evalCommand('hyperbola1: x^2/16 - y^2/9 = 1');
  applet.setColor('hyperbola1', 255, 0, 0);
  applet.setLineThickness('hyperbola1', 3);
  applet.evalCommand('hyperbola2: y^2/16 - x^2/9 = 1');
  applet.setColor('hyperbola2', 0, 0, 255);
  applet.setLineThickness('hyperbola2', 3);

  applet.evalCommand('A: Point(hyperbola1)');
  applet.evalCommand('l: y = x');
  applet.evalCommand('A\': Reflect(A, l)');
  applet.setLineThickness('l', 1);
  applet.evalCommand('Distance(A\', hyperbola2)');

  applet.setCoordSystem(-10, 10, -8, 8);
}
```

## React项目如何支持Katex公式

### 在 ReactNode 中：@matejmazur/react-katex

相关文件：

- `src\ellipseDefinition\EllipseDefinition.jsx`
- `src\ellipseDefinition\config.jsx`

首先

```powershell
bun add katex @matejmazur/react-katex
```

接着在`src\App.jsx`：

```jsx
import 'katex/dist/katex.min.css';
```

然后直接引用：

```jsx
import TeX from '@matejmazur/react-katex';

<TeX>{'c = \\sqrt{a^2 - b^2}'}</TeX>
<TeX block>{String.raw`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1`}</TeX>
```

因为我希望DeepSeek生成一个`config.js`的Schema方便后续配置，所以我实际上是在`src\ellipseDefinition\config.jsx`导入的`TeX`。大致方案如下：

config配置示例：

```jsx
export const config = {
  properties: {
    title: '椭圆的重要性质',
    items: [
      <><strong className="highlight">离心率</strong>：<TeX>{'e = \\frac{c}{a} \\ (0 < e < 1)'}</TeX>，表示椭圆的扁平程度</>,
      <><strong className="highlight">焦点性质</strong>：从椭圆一个焦点发出的光线，经椭圆反射后会经过另一个焦点</>,
      <><strong className="highlight">对称性</strong>：椭圆关于长轴、短轴和中心对称</>,
      <><strong className="hard">面积公式</strong>：<TeX>{'S = \\pi \\times a \\times b'}</TeX></>,
    ],
  },
}
```

`EllipseDefinition.jsx`调用：

```jsx
<div className="knowledge-point">
  <h3>🔍 {config.properties.title}</h3>
  {config.properties.items.map((item, i) => (
    <p key={i}>{i + 1}. {item}</p>
  ))}
</div>
```

### 在 Markdown String 中：marked + marked-katex-extension

为了方便LLM生成课件，我们需要让项目支持渲染Markdown。之后我们只需要在配置文件中写Markdown字符串即可。为了在marked中支持Katex公式，我们可以自己写一个renderer（我确实有搜到采用这种方案的），也可以用现成的包：`marked-katex-extension`。

首先

```powershell
bun add marked highlight.js marked-katex-extension
```

接着我们可以直接实现一个React组件`src\component\MarkdownRenderer.jsx`，调用marked，渲染Markdown String：

```jsx
import { processMarkdown } from '@/lib/marked';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import 'highlight.js/styles/paraiso-light.css';

export default function MarkdownRenderer({ className, content, ...rest }) {
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const parseResult = processMarkdown(content);
    parseResult
      .then(result => {
        setHtmlContent(result);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error processing markdown:', error);
        setHtmlContent(content);
        setIsLoading(false);
      });
  }, [content]);

  if (isLoading) {
    return <div className={className} {...rest}>加载中...</div>;
  }
  if (typeof content === 'string') {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className={cn('max-w-none', className)}
        {...rest}
      />
    );
  }
  return content;
}

```

我们完全可以把marked初始化`marked-katex-extension`等插件的代码写在jsx文件里，但为了让代码更清晰，我们不妨抽出一个文件`src\lib\marked.js`，专门处理marked的初始化：

```js
import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

marked.use(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
);

marked.use(markedKatex({
  throwOnError: false,
}));

/**
 * 注意：
 * 1. markdown 文本尽量不要以多余的空格开头，否则 marked 会将其解析为代码块，导致结果不合预期
 * 2. katex 格式的公式和前面的文本留一个空格，否则会报错
 * @param {string} _content markdown content
 * @returns {string} html or content
 */
export const processMarkdown = async (_content) => {
  if (typeof _content !== 'string') {
    return _content;
  }
  // _content 以 white spaces 开头时，marked 会将其解析为代码块，因此要 trim
  const content = _content.trim();
  // Handle both Promise and string return types from marked()
  const result = marked(content);
  const html = typeof result === 'string' ? result : await result;
  return html;
  // TODO: 接入 sanitize html 会导致 style 属性被吞，设置 allowedAttributes 未生效
};

```

这里有一个悬而未决的问题：接入`sanitize-html`会导致 style 属性被吞，导致Katex出现样式错误。官方文档说设置`allowedAttributes`就行，但我设置以后没生效。我懒得研究这个了，先放着吧。

## 数学教案生成方案探究：从抽象出搭积木的组件，到彻底Schema化

我最初的想法是，先用DeepSeek直接生成第一个教案《椭圆的定义与性质》的HTML代码，接着将其改造为React代码，然后编写规范，让LLM根据规范生成其他数学教案的React组件和`config.jsx`。但我发现了不少痛点：

1. LLM生成的教案和已有的教案代码采用完全不一样的代码规范、不一样的技术选型、不一样的CSS代码。要在一个单页应用中统一它们存在困难。
2. 看似让LLM生成完整HTML代码的方案可以激发其创造力，但实测发现，LLM真的很懒，写东西语焉不详，也不怎么生成第一个教案完全没有的新东西、新模式。

但我的幻想还没完全磨灭。我想着，抽象出一些组件，让LLM像搭积木一样搭出页面。于是有了[docs\新课件提示词\生成jsx.md](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/docs/%E6%96%B0%E8%AF%BE%E4%BB%B6%E6%8F%90%E7%A4%BA%E8%AF%8D/%E7%94%9F%E6%88%90jsx.md)这个提示词文件，以及下面这些组件：

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

但我发现，只要保留自由度，仍然允许LLM生成整个页面React组件，上面的痛点1和2就无法解决。我仍然需要手动更改大量代码。既然LLM在教案生成方面就是没啥创造力，我就想，干脆彻底Schema化，页面一律用标准页面生成算了。这样，LLM也能专注于内容，就像在生成用于Marp产出PPT文件的Markdown文档一样。

于是有了：

1. [docs\新课件提示词\生成schema.md](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/docs/%E6%96%B0%E8%AF%BE%E4%BB%B6%E6%8F%90%E7%A4%BA%E8%AF%8D/%E7%94%9F%E6%88%90schema.md)
2. 页面结构的类型描述：[src\component\teachingPlan\StandardPageStructure.d.ts](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/src/component/teachingPlan/StandardPageStructure.d.ts)
3. 标准页面：[src\component\teachingPlan\StandardPage.jsx](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/src/component/teachingPlan/StandardPage.jsx)

我决定先生成《平面向量的定义及其线性运算》课件的`src\planeVectorDefinition\config.jsx`，再看DeepSeek的反馈慢慢调整提示词。

### 提示词缺陷修复技巧举例

写一个**多次使用的模板提示词**（在本节中特指[`docs\新课件提示词\生成schema.md`](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/docs/%E6%96%B0%E8%AF%BE%E4%BB%B6%E6%8F%90%E7%A4%BA%E8%AF%8D/%E7%94%9F%E6%88%90schema.md)）就像写代码一样，不太可能一次性就考虑到所有的细节。所以我们需要根据LLM的反馈，尤其是在“深度思考”过程中的反馈，优化自己的模板提示词。比如：

一、我在生成《函数及其表示方法》课件时，看到DeepSeek在深度思考中输出：“我们在配置文件中只需要按照规范写类名，比如`<h4 className={styles.teachingPlanH4}>`，但是这里我们无法获取styles，所以实际上主组件会处理样式类。但是，为了类型正确，我们按照规范写类名字符串？不，这样不行。因为styles是一个模块，我们必须在配置文件中使用与主组件相同的样式模块。但配置文件是独立的，所以主组件在渲染时会传入styles。（省略更多废话）”就立刻意识到我忘记import styles了，而DeepSeek能力太差，推不出实际情况，需要补充：

```jsx
import styles from '@/component/teachingPlan/basic.module.scss'; // 补上
<h4 className={styles.teachingPlanH4}></h4>
<h5 className={styles.teachingPlanH5}></h5>
<h6 className={styles.teachingPlanH6}></h6>
```

二、发现DeepSeek没有输出`appletOnLoad`函数。一开始有点恼火，但后来注意到，DeepSeek在深度思考中输出：“具体的绘制命令在appletOnLoad中，但这里我们只写命令字符串，因为配置对象中的函数无法序列化，所以实际上在GeogebraItem中，config是一个普通的对象，而绘制命令我们将在描述中说明，或者在conclusion中分析。”

后来我们在`docs\Geogebra组件文档.md`中补充了“如何在JS Config中使用”一节，它也就知道如何实现`appletOnLoad`方法了。

## 支持路由

我有不止一个课件，所以这个项目自然要支持路由。支持路由挺常规的，跟往常一样`bun add react-router-dom`即可。主要需要注意改一下这句`k = e('/geogebra/web3d/');`（详见《geogebra的自托管解决方案》一节）。`src\App.jsx`：

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const routes = [
  { path: '/', element: <TeachingPlanList /> },
  { path: '/plane-vector-definition', element: <PlaneVectorDefinition /> },
  // ...
  { path: '/404', element: <NotFound /> },
  { path: '*', element: <NotFound /> },
];

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            {
              routes.map((route, index) => (
                <Route
                  key={route.path || `route-${index}`}
                  path={route.path}
                  element={route.element}
                />
              ))
            }
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
```



## AI生成教案网页场景下如何解决样式冲突

我们先生成第一个教案网页，然后研究如何生成其他教案网页。这就有一个绕不过去的问题：如何解决样式冲突？我想到两条路：

1. 尽量少更改AI生成的第一个教案网页，将其放入shadow dom。我尝试了一下，发现主要的困难在于geogebra。这条路也许能走通，但风险太高，舍弃。
    1. 它的源码引用了`document.getElementById、document.querySelector`等方法。这些方法都会失效。这个是可解的，hook它们就行。
    2. geogebra引入了5个CSS文件（可以用`document.querySelectorAll('link.ggw_resource')`拿到）。它们无法作用到shadow dom内部。这个也好处理，写段JS手动把它们插入到shadow dom里即可。
    3. 处理上面两点了，就不再有大错误了，但还有一些隐蔽的报错。比如：`:root`指定的CSS变量无法引用到，导致设置坐标轴颜色的OK按钮失去背景色。修改`geogebra/css/bundles/bundle.css`的`:root`为`:root, :host`可解决。
    4. 等式栏的每个条目左上角的三个点点击两次才能出现菜单栏。这个确实不懂怎么解了。
2. 引入scss和css modules。手动或者让AI改好第一个教案网页。然后用第一个教案网页的代码生成开发规范，在后续生成其他教案网页时将开发规范一起输入到提示词里。

附：如何hook `document.getElementById`：

```js
export function getShadowRootWrap() {
  return document.querySelector('.shadow-root-div')?.shadowRoot;
}

const settings = {
  showLog: false,
};

export function hookGetEleById() {
  settings.showLog && console.log('%c[teaching-plan-analytic-geometry] 正在 hook document.getElementById', 'background: #3a2e00; color: #e2c041; padding: 3px 6px;');
  const originalGetEleById = document.getElementById;
  document.getElementById = function (id) {
    settings.showLog && console.log('[teaching-plan-analytic-geometry] document.getElementById matched param', id);
    const shadowRootWrap = getShadowRootWrap();
    if (!shadowRootWrap) {
      return originalGetEleById.call(document, id);
    }
    const res = shadowRootWrap?.querySelector(`#${id}`);
    return res || null;
  };
}
```



## 参考资料

1. GeoGebra官方文档：https://geogebra.github.io/docs/reference/en/GeoGebra_Apps_Embedding/