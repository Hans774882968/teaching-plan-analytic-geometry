[TOC]

## 引言

研究如何让大语言模型生成数学教案。

注意，为了减少该项目的占用空间，本项目并未包含geogebra源码，请自行下载[GeoGebra Math Apps Bundle](https://download.geogebra.org/package/geogebra-math-apps-bundle)，并复制里面的web3d文件夹和css文件夹到本项目的`public\geogebra`。

## 如何给React项目接入GeoGebra

参考[GeoGebra官方文档](https://geogebra.github.io/docs/reference/en/GeoGebra_Apps_Embedding/)，我们主要需要：

1. 导入：`<script src="GeoGebra/deployggb.js"></script>`。
2. 如果是自托管，需要加上这句：`applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');`。否则忽略。

### Geogebra.jsx

为了方便在React中使用geogebra，我们不妨封装一个`Geogebra.jsx`。我找到了一个叫`react-geogebra`的npm包，但看了眼那个源码。天哪！代码质量不太得，eslint报错有十几个！索性复制下来，自己改改。

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
      ggbApp.setHTML5Codebase('geogebra/web3d/');
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
ggbApp.setHTML5Codebase('geogebra/web3d/');
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

### geogebra的自托管解决方案

如果把`ggbApp.setHTML5Codebase('geogebra/web3d/')`去掉，那么geogebra已经能正常工作，但静态资源必须通过网络下载，而且资源总共有几十MB，所以加载时间有点长。于是我们不得不考虑自托管解决方案。

首先，按官方文档指示下载[GeoGebra Math Apps Bundle](https://download.geogebra.org/package/geogebra-math-apps-bundle)，接着设置`ggbApp.setHTML5Codebase('geogebra/web3d/')`，然后把下载的包的web3d文件夹复制到本项目的`public\geogebra\web3d`。

到此为止都自我感觉良好。运行！不出所料，报错了！这是因为它请求了 http://localhost:5215/261BBF4225A3B6C8FD1B8B949B793666.cache.js 而非预期的 http://localhost:5215/geogebra/web3d/261BBF4225A3B6C8FD1B8B949B793666.cache.js 。直接挪动这个`cache.js`似乎可以解决，但不太优雅。

于是我排查源码，发现这个cache文件的路径是由`web3d.__moduleBase`（位于`geogebra\web3d\web3d.nocache.js`）决定的。搜索这个变量名，发现`web3d.__moduleBase = B()`这句赋值决定了其值，外部没法直接修改它。所以我们继续看B函数，发现最终是这句代码决定其路径：

```js
if(k == W && j()) {k = e(o.location.href);}
k = f(k);
return k;
```

我们把它改成`k = e(o.location.href + 'geogebra/web3d/');`，问题解决！

250629更新：接入react-router后，需要改为`k = e('geogebra/web3d/');`。

之后发现，控制台没有报错了，但样式不对劲。这是因为它请求了`geogebra/css/...`。所以我们不能只复制web3d文件夹，还要把同级的css文件夹复制过去。至此搞定！

### geogebra 的神秘 bug

打开控制台，窗口自动缩小，此时点击设置，选择坐标轴的颜色，会发现点击对应格子，选中的颜色却不是鼠标对应的格子的颜色。把控制台关了，窗口无法回到原来的大小，于是问题还在。控制台从未开启则没有这个问题。

### geogebra接入总结

1. 按官方文档说的做。
2. 复制web3d和css两个文件夹到`public\geogebra`。
3. `geogebra\web3d\web3d.nocache.js`的`k = e(o.location.href)`改成`k = e(o.location.href + 'geogebra/web3d/');`。

## 用Geogebra进行数学教学

可参考[docs\Geogebra组件文档.md](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/docs/Geogebra%E7%BB%84%E4%BB%B6%E6%96%87%E6%A1%A3.md)。

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

### 如何快速学习Geogebra的语法？以“双曲线的反函数”为例

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

相关文件：

- `src\ellipseDefinition\EllipseDefinition.jsx`
- `src\ellipseDefinition\config.jsx`

首先

```powershell
bun add katex @matejmazur/react-katex
```

接着

```jsx
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
```

然后直接引用：

```jsx
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

## 支持路由

支持路由挺常规的，主要需要注意改一下这句`k = e('geogebra/web3d/');`（详见《geogebra的自托管解决方案》一节）。

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