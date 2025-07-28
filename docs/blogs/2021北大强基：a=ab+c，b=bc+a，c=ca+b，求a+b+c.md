---
tags:
  - 对称性
title: 2021北大强基： $a=ab+c$ ， $b=bc+a$ ， $c=ca+b$ ，求 $a+b+c$
---

题目来源： https://www.bilibili.com/video/BV1nh4y1M7h9 。强调一下，a、b、c是三个 不全相等的实数。

三式相加：

$$
a+b+c = ab+bc+ca+(a+b+c) \Rightarrow ab+bc+ca = 0
$$

为了对称性，我们让每个式子都出现abc，所以分别乘c、a、b：

$$
ac = abc+c^2,\ ab = abc+a^2,\ bc = abc+b^2
$$

三式相加：

$$
ac + ab + bc = 0 = 3abc + (a^2+b^2+c^2)
$$

然后

$$
(a+b+c)^2 = (a^2+b^2+c^2) + 2(ab+bc+ac) = a^2+b^2+c^2
$$

所以只需要求abc。那么我们还需要再找一种方式构造出abc。为此，我们对题干的3个式子移项：

$$
a(1-b) = c,\ b(1-c) = a,\ c(1-a) = b
$$

三式相乘：

$$
abc(1-a)(1-b)(1-c) = abc
$$

abc有可能为0吗？令它为0，然后不失一般性假设 $a=0$ ，代入题干就得到3个都是0，不合题意，所以只能是 $(1-a)(1-b)(1-c) = 1$ 。展开它：

$$
(1-a)(1-b)(1-c) = 1-(a+b+c)+(ab+bc+ac)-abc = 1 - (a+b+c) - abc = 1
$$
于是得到两个式子：

$$
(a+b+c)^2 = -3abc,\ a+b+c = -abc
$$

前面说过abc不为0，所以abc只能为-3，所求为3。
