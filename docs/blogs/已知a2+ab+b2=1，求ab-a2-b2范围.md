---
tags:
  - 逆用韦达定理
  - 二元对称式
  - 二次型
title: 已知 $a^2+ab+b^2 = 1$ ，求 $ab-a^2-b^2$ 范围
ctime: '1754718511916'
ctime_f: '2025-08-09 13:48:31'
mtime: '1786020459952'
mtime_f: '2026-08-06 20:47:39'
---
## 法1：二元对称式

可以发现约束方程和目标函数都是二元对称式，所以可以用二元对称式的结论来消元。约束方程写为 $(a+b)^2 = 1+ab$ ，目标函数写为 $-(a+b)^2 + 3ab$ 。我们不妨把目标函数都换成ab： $2ab - 1$ 。
为了求ab的范围，我们使用均值不等式和平方大于等于0： $1+ab \geq 0,\ 1+ab \geq 4ab$ 。解得 $-1 \leq ab \leq \frac{1}{3}$ ，故 $-3 \leq t \leq -\frac{1}{3}$

## 法2：二次型

利用 [[已知x2-2xy-y2=1，求x2+2y2最小值]] 的结论，可得行列式

$$
\det\left( m \begin{bmatrix}
1 & \frac{1}{2} \\
\frac{1}{2} & 1
\end{bmatrix} - \begin{bmatrix}
-1 & \frac{1}{2} \\
\frac{1}{2} & -1
\end{bmatrix} \right)=0 \implies \frac{3}{4}m^2 + \frac{5}{2}m + \frac{3}{4} = 0 \implies m = -3 \text{ or } \frac{1}{3}
$$
