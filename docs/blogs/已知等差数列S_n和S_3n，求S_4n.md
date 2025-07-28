---
tags:
  - 待定系数法
title: 已知等差数列 $S_n$ 和 $S_{3n}$ ，求 $S_{4n}$
---

## 题干

来源： https://www.bilibili.com/video/BV1BBuBzVET6

已知等差数列 $S_{n} = 1,\ S_{3n} - S_{n} = 5$ ，求 $S_{4n}$

## 解法：待定系数法

列出式子：

$$
\begin{cases}
na_{1} + \frac{n(n-1)}{2}d = 1 \\
3na_{1} + \frac{3n(3n-1)}{2}d = 6 \\
ans = 4na_{1} + \frac{4n(4n-1)}{2}d
\end{cases}
$$

初步分析，我们需要3个量： $na_{1},\ nd,\ n^2d$ 。那就暂且考虑分别求。最容易想到的就是作差： $\frac{3n(3n-1)}{2}d - \frac{3n(n-1)}{2}d = \frac{3n2n}{2}d = 3$ ，得 $n^2d = 1$ 。然后我们卡住了。于是我们展开3个式子： $4na_{1} - 2nd,\ 3na_{1} - \frac{3}{2}nd,\ na_{1} - \frac{1}{2}nd$ 。发现是成比例的，所以我们得到结论： $na_{1} - \frac{1}{2}nd$ **作为整体**求出来。于是我们得到 $na_{1} - \frac{1}{2}nd = \frac{1}{2}$。所以 $ans = 4 * \frac{1}{2} + 8*n^2d = 10$ 。
