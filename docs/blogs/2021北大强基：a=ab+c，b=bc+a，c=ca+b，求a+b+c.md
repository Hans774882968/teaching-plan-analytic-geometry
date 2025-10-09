---
tags:
  - 对称性
  - 三元对称式
title: 2021北大强基： $a=ab+c$ ， $b=bc+a$ ， $c=ca+b$ ，求 $a+b+c$
ctime: '1753667613431'
ctime_f: '2025-07-28 09:53:33'
mtime: '1760002320561'
mtime_f: '2025-10-09 17:32:00'
---

题目来源： https://www.bilibili.com/video/BV1nh4y1M7h9 。强调一下，a、b、c是三个不全相等的实数。文字稿： https://hans774882968.github.io/teaching-plan-analytic-geometry/blog/2021%E5%8C%97%E5%A4%A7%E5%BC%BA%E5%9F%BA%EF%BC%9A%20%24a%3Dab%2Bc%24%20%EF%BC%8C%20%24b%3Dbc%2Ba%24%20%EF%BC%8C%20%24c%3Dca%2Bb%24%20%EF%BC%8C%E6%B1%82%20%24a%2Bb%2Bc%24

对于三元对称式的题，我们一般考虑用 $abc,\ ab+bc+ca,\ a+b+c$ 表示一切，所以我们要想办法处理约束方程，弄出这3个式子。

三式相加：

$$
a+b+c = ab+bc+ca+(a+b+c) \Rightarrow ab+bc+ca = 0
$$

为了弄出 $abc$ ，我们分别乘c、a、b：

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

所以只需要求 $abc$ 就能求出 $a+b+c$ 。那我们还需要找一种方式构造出 $abc$ 。为此，我们对题干的3个式子移项：

$$
a(1-b) = c,\ b(1-c) = a,\ c(1-a) = b
$$

三式相乘：

$$
abc(1-a)(1-b)(1-c) = abc
$$

$abc$ 有可能为0吗？令它为0，然后**不失一般性**，假设 $a=0$ ，代入题干就得到3个都是0，不合题意，所以只能是 $(1-a)(1-b)(1-c) = 1$ 。展开它：

$$
(1-a)(1-b)(1-c) = 1-(a+b+c)+(ab+bc+ac)-abc = 1 - (a+b+c) - abc = 1
$$
于是得到两个式子：

$$
(a+b+c)^2 = -3abc,\ a+b+c = -abc
$$

前面说过abc不为0，所以abc只能为-3，所求为3
