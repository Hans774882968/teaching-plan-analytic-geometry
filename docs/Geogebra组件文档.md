### @/docs\Geogebra组件文档.md

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

- `id`和`height`这两个参数必传，`width`可不传。
- 该组件支持向`window.GGBApplet()`透传参数。

#### 如何在JS Config中使用

```js
// 一般来说，只需要指定 id, height, appletOnLoad
{
  geogebraList: [
    {
      config: {
        id: 'plane-vector-definition-1',
        height: 600,
        appletOnLoad: (applet) => {
          applet.evalCommand('A = (1,2)');
        }
      }
    }
  ]
}
```

#### 如何使用组件

案例1：【直接调用组件】绘制椭圆

```jsx
const drawEllipse = (applet) => {
  applet.evalCommand('ellipse: x^2/25 + y^2/9 = 1'); // 绘制椭圆
  applet.setColor('ellipse', 255, 0, 0);
  applet.setLineThickness('ellipse', 3);

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

案例2：【JS Config】绘制分段函数、设置几何对象样式

```jsx
{
  config: {
    id: 'function-representation-1',
    height: 600,
    appletOnLoad: (applet) => {
      // 创建控制显示/隐藏的复选框
      applet.evalCommand('showPiecewise: true');

      applet.evalCommand('s1 = Slider(-4, 4, 0.1)');
      applet.setValue('s1', 1);
      applet.evalCommand('s2 = Slider(0.5, 3, 0.1)');
      applet.setValue('s2', 0.6);

      applet.evalCommand('SetConditionToShowObject(showPiecewise, false)');
      applet.evalCommand('SetConditionToShowObject(s1, false)');
      applet.evalCommand('SetConditionToShowObject(s2, false)');

      // 分段函数
      applet.evalCommand('f(x) = If(x < 0, x^2, 0 <= x <= 2, 2x + 1, x > 2, 5 - x)');
      applet.setColor('f', 255, 0, 0); // 红色
      applet.setLineThickness('f', 3);
      applet.evalCommand('SetConditionToShowObject(f, showPiecewise)');

      // 关键点标记
      applet.evalCommand('P1 = (0, f(0))');
      applet.evalCommand('P2 = (2, f(2))');
      applet.setPointStyle('P1', 4);
      applet.setPointStyle('P2', 4);
      applet.setColor('P1', 255, 0, 0);
      applet.setColor('P2', 255, 0, 0);
      applet.evalCommand('SetConditionToShowObject(P1, showPiecewise)');
      applet.evalCommand('SetConditionToShowObject(P2, showPiecewise)');

      // 设置坐标系范围
      applet.setCoordSystem(-5, 5, -3.5, 7);
    },
  }
}
```

