---
tags:
  - 和差化积
title: '已知 $\sin(u+v)=\frac{1}{2},\ \sin(u-v)=\frac{1}{3}$ ，求 $\cos^2 u-\cos^2 v$'
ctime: '1758178177894'
ctime_f: '2025-09-18 14:49:37'
mtime: '1758178177939'
mtime_f: '2025-09-18 14:49:37'
---
## 解法

$\cos^2 u-\cos^2 v = (\cos u+\cos v)(\cos u-\cos v)$ 。我们知道和差化积公式可以把求和变成 $\frac{u+v}{2}$ 和 $\frac{u-v}{2}$ ，离约束方程很近。所以我们不妨试试：

$$
\begin{cases}
\cos u+\cos v = 2 \cos \frac{u+v}{2} \cos \frac{u-v}{2} \\
\cos u-\cos v = -2 \sin \frac{u+v}{2} \sin \frac{u-v}{2}
\end{cases}
$$

乘起来，刚好可以用二倍角公式，于是 $\cos^2 u-\cos^2 v = -\sin(u+v)\sin(u-v) = -\frac{1}{6}$

## 扩展

顺便来推一下sin的平方差公式。 $\sin^2 u-\sin^2 v=(\sin u+\sin v)(\sin u-\sin v)$

$$
\begin{cases}
\sin u+\sin v=2 \sin \frac{u+v}{2} \cos \frac{u-v}{2} \\
\sin u-\sin v=2 \cos \frac{u+v}{2} \sin \frac{u-v}{2}
\end{cases}
$$

同理，用二倍角公式得 $\sin^2 u-\sin^2 v= \sin(u+v)\sin(u-v)$

当然也可以 $\sin^2 u-\sin^2 v=(1-\cos^2 u)-(1-\cos^2 v)=-(\cos^2 u-\cos^2 v)$
