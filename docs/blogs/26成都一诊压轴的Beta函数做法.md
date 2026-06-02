---
tags:
  - Beta函数
  - Gamma函数
  - 定积分
  - 二项式定理
title: 26成都一诊压轴的Beta函数做法
ctime: '1780398060992'
ctime_f: '2026-06-02 19:01:00'
mtime: '1780398597389'
mtime_f: '2026-06-02 19:09:57'
---
## 题干

证明： $\sum_{k=1}^{n} C_{n}^k \frac{(-1)^{k+1}}{k}=\sum_{k=1}^{n} \frac{1}{k}$

## 引入Beta函数

Beta函数（第一类欧拉积分）定义为

$$
B(p,q) = \int_0^1 x^{p-1}(1-x)^{q-1} dx \quad (p>0, q>0)
$$

常用性质：

1. 对称性 $B(p,q) = B(q,p)$ ：在定义式中令 $t = 1-x$ 即可
2. 特殊值：
	1. $B(1,1) = \int_0^1 dx = 1$
	2. $B(n,1) = B(1,n) = \int_{0}^{1} x^{n-1} dx = \frac{1}{n}$
3. Beta函数可用Gamma函数表示： $B(p,q) = \frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)}$ 。思路是用Gamma函数的定义证明 $\Gamma(p)\Gamma(q) = B(p,q)\Gamma(p+q)$ ，~~这里空白太小，先不展开~~

## 不妨尝试把Beta函数的定义式写成离散求和形式

第一步，我们想要用二项式定理展开 $(1-x)^{q-1}$ 。为了展开方便，下面我们改为展开 $B(p,q+1)$ ：

$$
\begin{align}
B(p,q+1) &= \int_0^1 x^{p-1}(1-x)^{q} dx = \int_0^1 x^{p-1} \left( \sum_{k=0}^{q}\binom{q}{k}(-x)^k \right) dx \\
&= \sum_{k=0}^{q}\binom{q}{k}(-1)^k \left( \int_0^1 x^{p+k-1} dx \right) \\
&= \sum_{k=0}^{q} \frac{\binom{q}{k}(-1)^k}{p+k}
\end{align}
$$

注：上面第3个等号是在交换求和号和积分号的顺序， [详细讲解传送门](https://www.bilibili.com/video/BV1nCVZ6KEQp/)

这条式子和等式左边 $\sum_{k=1}^{n} C_{n}^k \frac{(-1)^{k+1}}{k}$ 很像！观察它们的差异：

1. 需要拆分k=0的项： $\frac{1}{p} + \sum_{k=1}^{q} \frac{\binom{q}{k}(-1)^k}{p+k}$
2. 拆分后，如果令p=0，q=n，那么这条式子和等式左边就只差一个负号了。但定义式要求 $p > 0$ 。怎么办？那就取p趋于0的极限！

## 给证明收尾

$$
\begin{align}
lhs &= -\lim_{ p \to 0^{+} } \sum_{k=1}^{n} \frac{\binom{n}{k}(-1)^k}{p+k} = -\lim_{ p \to 0^{+} } \left( B(p,n+1)-\frac{1}{p} \right) \\
&= -\lim_{ p \to 0^{+} } \left( \int_0^1 x^{p-1}(1-x)^{n} dx - \int_0^1 x^{p-1} dx \right) \\
&= -\lim_{ p \to 0^{+} } \int_0^1 x^{p}\frac{(1-x)^{n}-1}{x} dx \\
&= -\int_0^1 \frac{(1-x)^{n}-1}{x} dx
\end{align}
$$

考虑换元 $t=1-x$ ，则 $x = 1-t$ ， $dx = -dt$ ，t从1到0：

$$
lhs=-\int_0^1 \frac{(1-x)^{n}-1}{x} dx = -\int_1^0 \frac{t^n - 1}{1-t}(-dt) = \int_0^1 \frac{t^n - 1}{t-1} dt
$$

$\frac{t^n - 1}{t-1}$ 就是等比数列求和公式 $\sum_{k=0}^{n-1} t^n$ ，故

$$
\begin{align}
lhs=\int_0^1 \frac{t^n - 1}{t-1} dt &= \int_{0}^{1} \left( \sum_{k=0}^{n-1} t^k \right) dt \\
&= \sum_{k=0}^{n-1} \int_0^1 t^k dt = \sum_{k=0}^{n-1} \frac{1}{k+1} \\
&= \sum_{k=1}^{n} \frac{1}{k}=rhs
\end{align}
$$

证毕~

## 后记

1. 不严谨，仅供思路扩展
2. 在`_WaLe-`大佬这学到的，才读高一，恐怖如斯
