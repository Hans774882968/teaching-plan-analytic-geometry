---
tags:
  - 待定系数法
title: 化简： $\sqrt{8-\sqrt{63}}$
---

## 解法1：待定系数法

把 $\sqrt{ 63 }$ 变成 $3\sqrt{ 7 }$ ，然后直接设 $(a+b\sqrt{ 7 })^2 = 8-3\sqrt{ 7 }$ 。于是有方程组：

$$
\begin{cases}
a^2+7b^2 = 8 \\
2ab = -3
\end{cases}
$$

感觉把a换成b的计算量更小，于是得到：$7b^4 - 8b^2 + \frac{9}{4} = 0$ 。写出通解： $b^2 = \frac{8 \pm \sqrt{ 64 - 7*9 }}{2*7} = \frac{1}{2}\ or\ \frac{9}{14}$ 。那到底取哪个？其实取哪个都行，只要考虑原式大于0的条件，得到正确的a和b即可。

- 取 $b^2 = \frac{1}{2},\ a^2 = \frac{9}{2}$ ，得 $a = \frac{3\sqrt{ 2 }}{2},\ b = -\frac{\sqrt{ 2 }}{2}$ ，答案 $\frac{3\sqrt{ 2 } - \sqrt{ 14 }}{2}$。
- 取 $b^2 = \frac{9}{14},\ a^2 = \frac{7}{2}$ ，得 $a = -\sqrt{ \frac{7}{2} },\ b = \sqrt{ \frac{9}{14} }$ ，同样得答案 $\frac{3\sqrt{ 2 } - \sqrt{ 14 }}{2}$ 。

## 解法2：靠一个二级结论

二级结论： $\sqrt{ \sqrt{ a^2 } - \sqrt{ a^2 - 1 } } = \frac{\sqrt{ a+1 } - \sqrt{ a-1 }}{\sqrt{ 2 }}$ 。验证：两边平方： $a - \sqrt{ a^2-1 } = \frac{2a - 2\sqrt{ a^2-1 }}{2}$

直接代入 $a=8$ ，得答案 $\frac{3\sqrt{ 2 } - \sqrt{ 14 }}{2}$ 。