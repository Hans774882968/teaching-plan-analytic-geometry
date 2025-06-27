源码位置：src\Geogebra.jsx

默认参数：

```js
{
  appName: 'classic',
  width: 800,
  height: 600,
  showToolBar: true,
  showAlgebraInput: true,
  showMenuBar: true,
}
```

该组件支持向`window.GGBApplet()`透传参数。

使用：

```jsx
const drawEllipse = (applet) => {
  applet.evalCommand('ellipse: x^2/25 + y^2/9 = 1');
  applet.setColor('ellipse', 255, 0, 0);
  applet.setLineThickness('ellipse', 3);
  applet.setCaption('ellipse', '椭圆: \\frac{x^2}{25} + \\frac{y^2}{9} = 1');

  applet.evalCommand('A: Point(ellipse)');
  applet.evalCommand('C1: (4, 0)');
  applet.evalCommand('C2: (-4, 0)');
  applet.evalCommand('s1: Segment(C1, A)');
  applet.evalCommand('s2: Segment(C2, A)');
  applet.evalCommand('lenSum: s1 + s2');

  applet.setCoordSystem(-6, 6, -4, 4);
};

<Geogebra
  id="geogebra"
  width={1200}
  height={600}
  appletOnLoad={drawEllipse}
/>
```

