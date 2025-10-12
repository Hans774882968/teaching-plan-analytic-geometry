---
tags:
  - 建系
  - 积化和差
  - 和差化积
  - 消元
  - 余弦定理
  - 正弦定理
  - 三角换元
title: >-
  三角形中有 $\sin A+2\sin B=2\sin C$ ，求 $\frac{1}{\sin A}+\frac{1}{\sin
  B}-\frac{1}{\sin C}$ 最小值
ctime: '1760251465440'
ctime_f: '2025-10-12 14:44:25'
mtime: '1760251373625'
mtime_f: '2025-10-12 14:42:53'
---
## 引言

题源： https://www.bilibili.com/video/BV12DJXzoEgK

我感觉题源视频的思路太要求注意力了，所以我自己写了一遍题解，让一切步骤都足够自然，不需要任何注意力。所以有了这期视频。

## 思想

所有做法的共同特征是，通过题设和数学对象自带的约束方程，把多元函数转化为一元函数求解。

## 法1：正弦定理+余弦定理

我搜到另一道相似但更简单的题： https://zhidao.baidu.com/question/744659451359792932.html 。解法是将 $\cos C$ 写成余弦定理的形式，然后直接代入约束方程，用一次均值不等式就做完了。这题的思路和那题是一样的，只是目标函数更为隐蔽了。

为了方便，我们设目标函数为f。先看目标函数：

$$
f = \frac{1}{\sin A}+\frac{1}{\sin B}-\frac{1}{\sin C}=\frac{1}{\sin A}(1+\frac{\sin A}{\sin B}-\frac{\sin A}{\sin C})=\frac{1}{\sin A}(1+\frac{a}{b}-\frac{a}{c})
$$

由正弦定理，约束方程相当于 $a+2b=2c$ ，代入目标函数，消去a：

$$
\frac{1+\frac{2(c-b)^2}{bc}}{\sin A}=\frac{\frac{2(b^2+c^2)}{bc}-3}{\sin A}
$$

这时我们会问，在哪里会出现 $\frac{b^2+c^2}{bc}$ 这种形式？余弦定理！

$$
\cos A=\frac{b^2+c^2-4(c-b)^2}{2bc}=\frac{-3(b^2+c^2)}{2bc}+4
$$

我们把这个式子代回目标函数：

$$
f=\frac{\frac{16-4\cos A}{3}-3}{\sin A}=\frac{7-4\cos A}{3\sin A}
$$

这就是一道高中数学的基本题了，有很多做法，设为k然后辅助角公式可以，几何意义也可以。在此我们采用最简单的几何意义法。

$$
\frac{7-4\cos A}{3\sin A}=-\frac{4}{3}\frac{\frac{7}{4}-\cos A}{0-\sin A}
$$

后者就是单位圆上一点到 $(\frac{7}{4},0)$ 的连线斜率的倒数，注意角A只能取上半圆。根据勾股定理，最小斜率就是 $-\frac{4}{\sqrt{ 33 }}$ ，所以答案是 $\frac{\sqrt{ 33 }}{3}$

## 法2：纯三角变换

注意到约束方程里只有 $\sin A$ 系数是1，所以我们希望把目标函数变成只与A有关。

$$
f=\frac{1}{\sin A}+\frac{\sin C-\sin B}{\sin B\sin C}=\frac{1}{\sin A}+\frac{\sin A}{2\sin B\sin C}
$$

对分母用一次积化和差就能引入 $B+C$ ，相当于引入了A

$$
2\sin B\sin C=\cos(C-B)-\cos(C+B)=\cos(C-B)+\cos A
$$
为了干掉 $C-B$ ，我们需要回到约束方程。对 $\sin C-\sin B$ 用一次和差化积，就能弄出A，但引入了副产物 $\frac{C-B}{2}$ ：

$$
\sin C-\sin B=2\cos\frac{C+B}{2}\sin\frac{C-B}{2}=2\cos(\frac{\pi}{2}-\frac{A}{2})\sin\frac{C-B}{2}=2\sin \frac{A}{2}\sin\frac{C-B}{2}
$$

另一方面 $\frac{\sin A}{2}=\sin C-\sin B$ ，我们对 $\sin A$ 用二倍角公式就能把两边的 $\sin \frac{A}{2}$ 消掉，得：

$$
\cos \frac{A}{2}=2\sin\frac{C-B}{2}
$$

我们对 $\cos(C-B)$ 用一次二倍角公式，就能弄出 $\sin\frac{C-B}{2}$ ，进而全部转化为关于A的式子，完成消元。

$$
f=\frac{1}{\sin A}+\frac{\sin A}{\cos A+(1-2\sin^2\frac{C-B}{2})}=\frac{1}{\sin A}+\frac{\sin A}{\cos A+1-\frac{1}{2}\cos^2\frac{A}{2}}
$$

对 $\cos A+1$ 用一次二倍角公式，就能全部变成 $\cos^2\frac{A}{2}$ 。

$$
=\frac{1}{\sin A}+\frac{2\sin A}{3\cos^2 \frac{A}{2}}
$$

用二倍角公式把所有的 $\sin A$ 拆开，并把1换成平方和的形式，我们得到

$$
=\frac{\sin^2 \frac{A}{2}+\cos^2 \frac{A}{2}}{2\sin \frac{A}{2}\cos \frac{A}{2}}+\frac{4}{3}\tan \frac{A}{2}=\frac{1}{2}\tan \frac{A}{2}+\frac{1}{2\tan \frac{A}{2}}+\frac{4}{3}\tan \frac{A}{2}=\frac{1}{2}(\frac{11}{3}t+\frac{1}{t})
$$

由均值不等式得

$$
f \geq \sqrt{ \frac{11}{3} }=\frac{\sqrt{ 33 }}{3}
$$

## 法3：双曲线

注意到 $\frac{a}{2}=c-b$ 满足双曲线定义，不失一般性，我们设焦距 $a=2$ ，焦点 $C(1,0),\ B(-1,0)$ ，双曲线的 $a_{0}=\frac{a}{4}=\frac{1}{2}$ 。于是双曲线方程为 $\frac{x^2}{\frac{1}{4}}-\frac{y^2}{\frac{3}{4}}=1$ 。我们通过三角换元来实现消元： $x=\frac{1}{2}\sec u,y=\frac{\sqrt{ 3 }}{2}\tan u$ ，我们只取右支，故 $\sec u \geq 1$ 。由焦半径公式得b和c：

$$
\begin{cases}
c=ex+a_{0}=\sec u+\frac{1}{2} \\
b=ex-a_{0}=\sec u-\frac{1}{2}
\end{cases}
$$

又有 $\sin B=\frac{y}{c},\ \sin C=\frac{y}{b},\ \sin A=2(\sin C-\sin B)$ ，于是目标函数可以化为只有u的形式。

$$
f=\frac{1}{\sin A}+\frac{1}{\sin B}-\frac{1}{\sin C}=\frac{1}{2(\sin C-\sin B)}+\frac{c-b}{y}=\frac{bc}{2y(c-b)}+\frac{c-b}{y}=\frac{\frac{bc}{2}+1}{y}
$$

$$
= \frac{\frac{\sec^2u}{2}+\frac{7}{8}}{\frac{\sqrt{ 3 }}{2}\tan u}=\frac{\tan^2u+\frac{11}{4}}{\sqrt{ 3 }\tan u}
$$

$$
\geq \frac{2}{\sqrt{ 3 }}\sqrt{ \frac{11}{4} }=\frac{\sqrt{ 33 }}{3}
$$
