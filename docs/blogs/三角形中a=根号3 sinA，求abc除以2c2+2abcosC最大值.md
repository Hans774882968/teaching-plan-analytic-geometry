---
tags:
  - 外森比克不等式
  - 余弦定理
  - 正弦定理
  - 琴生不等式
  - 数形结合
title: '三角形中有 $a = \sqrt{ 3 }\sin A$ ，则 $\frac{abc}{2c^2+2ab\cos C}$ 最大值'
ctime: '1757437410165'
ctime_f: '2025-09-10 01:03:30'
mtime: '1757437410337'
mtime_f: '2025-09-10 01:03:30'
---
## 法1：外森比克不等式

由余弦定理， $2ab\cos C = a^2 + b^2 - c^2$ ，故 $\frac{abc}{2c^2+2ab\cos C} = \frac{abc}{a^2+b^2+c^2}$ ，然后由外森比克不等式： $\leq \frac{abc}{4\sqrt{ 3 }S} = \frac{abc}{4\sqrt{ 3 }\frac{1}{2}bc\sin A} = \frac{a}{2\sqrt{ 3 }\sin A} = \frac{1}{2}$

## 法2：琴生不等式

还是看 $\frac{abc}{a^2+b^2+c^2}$ ，我们求其倒数的最小值。

$$
\frac{a^2+b^2+c^2}{abc} = \sum_{cyc} \frac{a}{bc} = \sum_{cyc} \frac{\sqrt{ 3 }\sin A}{3\sin B\sin C} = \frac{1}{\sqrt{ 3 }} \sum_{cyc} \frac{\sin(B+C)}{\sin B\sin C} = \frac{2}{\sqrt{ 3 }}\sum_{cyc} \cot A
$$

我们知道tan是下凸的（平均值大于中点函数值），可以猜测tan的倒数也是下凸的，具体的求2阶导过程略。于是由琴生不等式， $\frac{\sum_{cyc} \cot A}{3} \geq \cot\frac{A+B+C}{3} = \frac{\sqrt{ 3 }}{3}$ 。故 $\frac{a^2+b^2+c^2}{abc}$ 的最小值为2，所求为 $\frac{1}{2}$

## 法3：余弦定理+数形结合

我们希望想办法把a和b消掉，所以要把分母的 $c^2$ 换掉：

$$
\frac{abc}{2c^2+2ab\cos C} = \frac{abc}{2(a^2+b^2-2ab\cos C)+2ab\cos C} = \frac{abc}{2(a^2+b^2-ab\cos C)}
$$

$a^2+b^2 \geq 2ab$ 故：

$$
\leq \frac{c}{4-2\cos C} = \frac{\sqrt{ 3 }\sin C}{4-2\cos C} = \frac{-\frac{\sqrt{ 3 }}{2}y}{x-2},\ y > 0
$$
不难发现只需要求单位圆上一点和 $(2,\ 0)$ 连线斜率的最小值，为 $k = -\frac{1}{\sqrt{ 3 }}$ ，故所求为 $\frac{1}{2}$
