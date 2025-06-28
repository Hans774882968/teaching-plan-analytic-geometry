[TOC]

## 引言

研究如何让大语言模型生成高中解析几何教案。

注意，为了减少该项目的占用空间，本项目并未包含geogebra源码，请自行下载[GeoGebra Math Apps Bundle](https://download.geogebra.org/package/geogebra-math-apps-bundle)，并复制里面的web3d文件夹和css文件夹到本项目的`public\geogebra`。

## 如何给React项目接入GeoGebra

参考[GeoGebra官方文档](https://geogebra.github.io/docs/reference/en/GeoGebra_Apps_Embedding/)，我们主要需要：

1. 导入：`<script src="GeoGebra/deployggb.js"></script>`。
2. 如果是自托管，需要加上这句：`applet.setHTML5Codebase('GeoGebra/HTML5/5.0/web3d/');`。否则忽略。

### Geogebra.jsx

为了方便在React中使用geogebra，我们不妨封装一个`Geogebra.jsx`。我找到了一个叫`react-geogebra`的npm包，但看了眼那个源码。天哪！代码质量不太得，eslint报错有十几个！索性复制下来，自己改改。

[src\Geogebra.jsx](https://github.com/Hans774882968/teaching-plan-analytic-geometry/blob/main/src/Geogebra.jsx), copy from https://github.com/pfaffmann/react-geogebra/blob/master/src/index.js

```jsx
import { useEffect, useState, useRef, useCallback } from 'react';

const Geogebra = (props) => {
  const defaultProps = {
    appName: 'classic',
    width: 800,
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
    <div id={`${id}-holder`}>
      <div id={id}></div>
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

之后发现，控制台没有报错了，但样式不对劲。这是因为它请求了`geogebra/css/...`。所以我们不能只复制web3d文件夹，还要把同级的css文件夹复制过去。至此搞定！

### geogebra 的神秘 bug

打开控制台，窗口自动缩小，此时点击设置，选择坐标轴的颜色，会发现点击对应格子，选中的颜色却不是鼠标对应的格子的颜色。把控制台关了，窗口无法回到原来的大小，于是问题还在。控制台从未开启则没有这个问题。

### geogebra接入总结

1. 按官方文档说的做。
2. 复制web3d和css两个文件夹到`public\geogebra`。
3. `geogebra\web3d\web3d.nocache.js`的`k = e(o.location.href)`改成`k = e(o.location.href + 'geogebra/web3d/');`。

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
      <><strong className="important">对称性</strong>：椭圆关于长轴、短轴和中心对称</>,
      <><strong className="highlight">面积公式</strong>：<TeX>{'S = \\pi \\times a \\times b'}</TeX></>,
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

## 参考资料

1. GeoGebra官方文档：https://geogebra.github.io/docs/reference/en/GeoGebra_Apps_Embedding/