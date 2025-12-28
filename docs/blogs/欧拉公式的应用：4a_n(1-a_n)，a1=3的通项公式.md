---
tags:
  - 欧拉公式
  - 二倍角公式
title: '欧拉公式的应用：求数列 $a_{1}=3,\ a_{n+1}=4a_{n}(1-a_{n})$ 的通项公式'
ctime: '1766943796966'
ctime_f: '2025-12-29 01:43:16'
mtime: '1766943786633'
mtime_f: '2025-12-29 01:43:06'
---
问题：求数列 $a_{1}=3,\ a_{n+1}=4a_{n}(1-a_{n})$ 的通项公式

设 $a_{n}=\sin^2 \theta=\frac{1-\cos 2\theta}{2}$ ，则

$$
a_{n+1}=4\sin^2 \theta(1-\sin^2 \theta)=4\sin^2 \theta \cos^2 \theta=\sin^2 2\theta=\frac{1-\cos 4\theta}{2}
$$

现在令 $a_{1}=\frac{1-\cos 2\theta}{2}$ ，则 $a_{n}=\frac{1-\cos(2^{n}\theta)}{2}$ 。 $a_{1}=\frac{1-\cos 2\theta}{2}=3 \implies \cos 2\theta=-5$ ，由欧拉公式 $\cos x=\frac{e^{ix}+e^{-ix}}{2}$ ，设 $x=e^{2i\theta}$ 得

$$
\frac{x+\frac{1}{x}}{2}=-5 \implies x^2 + 10x + 1 = 0 \implies x=-5 \pm 2\sqrt{6}
$$

取任何一个解都能得到一样的结果。 $\cos(2^n \theta) = \frac{e^{i \cdot 2^n \theta} + e^{-i \cdot 2^n \theta}}{2} = \frac{x^{2^{n-1}} + x^{-2^{n-1}}}{2}$ ，所以

$$
a_n = \frac{1-\frac{x^{2^{n-1}} + x^{-2^{n-1}}}{2}}{2} = \frac{2 - \left[ \left(-5 + 2\sqrt{6}\right)^{2^{\,n-1}} + \left(-5 - 2\sqrt{6}\right)^{2^{\,n-1}} \right]}{4}
$$
