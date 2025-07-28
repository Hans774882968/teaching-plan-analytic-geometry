---
tags:
  - 对称性
  - a加b加c的平方公式
  - 因式分解
title: 给 $a+b+c$ 和 $abc$ 的值和分母有 $a^2-3a-1$ 的初二奥数题
---
## 题干

来源： https://www.bilibili.com/video/BV1JG3QzxE8F

$$
abc=-1,\ a+b+c=4,\ \frac{a}{a^2-3a-1} + \frac{b}{b^2-3b-1} + \frac{c}{c^2-3c-1}=\frac{4}{9}
$$

求 $a^2+b^2+c^2$

## 解法

思路：**因式分解**，把只带a的项变成含有abc的项，从而拿到**对称性**。

$$
\frac{a}{a^2-3a-1} = \frac{a}{a^2-3a+abc} = \frac{1}{a-3+bc}
$$

由 $a+b+c=4,\ a-3=1-b-c$ 得：

$$
\frac{a}{a^2-3a-1} = \frac{1}{1-b-c-bc} = \frac{1}{(1-b)(1-c)}
$$

故

$$
\frac{4}{9} = \frac{1}{(1-b)(1-c)} + \frac{1}{(1-c)(1-a)} + \frac{1}{(1-a)(1-b)}
$$

同乘 $(1-a)(1-b)(1-c)$ 得：

$$
\frac{4}{9}(1-a)(1-b)(1-c) = 3 - (a+b+c) = -1
$$

展开左边得：

$$
(1-a)(1-b)(1-c) = 1-(a+b+c)+(ab+bc+ca)-abc = ab+bc+ca-2 = -\frac{9}{4}
$$

得 $ab+bc+ca = -\frac{1}{4}$ 。所求等于

$$
(a+b+c)^2 - 2(ab+bc+ca) = 16+2*\frac{1}{4} = \frac{33}{2}
$$