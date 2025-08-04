---
tags:
  - 正用韦达定理
title: 过椭圆上一点作两条互相垂直的直线分别交椭圆于A和B，求证AB过定点
ctime: '1754300352820'
ctime_f: '2025-08-04 17:39:12'
mtime: '1754300314227'
mtime_f: '2025-08-04 17:38:34'
---
## 题干

已知椭圆 $\Gamma: \dfrac{x^2}{6} + \dfrac{y^2}{3} = 1$ ，过点 $P(-2, 1)$ 作两条互相垂直的直线分别交椭圆于点 $A$ 、 $B$ 。求证：直线 $AB$ 过定点，并求其坐标。

## 题解

画图可知定点为 $(-\frac{2}{3},\ -\frac{1}{3})$ 。

```js
(applet) => {
  applet.evalCommand('eq1: ((x^(2))/(6))+((y^(2))/(3))=1');
  applet.evalCommand('P: (-2,1)');
  applet.evalCommand('A: Point(eq1)');
  applet.evalCommand('f: Line(P,A)');
  applet.evalCommand('g: PerpendicularLine(P,f)');
  applet.evalCommand('B: Intersect(eq1,g,1)');
  applet.evalCommand('h: Line(A,B)');
  applet.evalCommand('p: y=((1)/(2)) x');
}
```

TODO
