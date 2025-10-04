---
tags:
  - 余弦定理
  - 消元
title: >-
  $\triangle ABC$ 中，AB=1，AC=4， $\angle A = \frac{\pi}{3}$
  ，AD是BC边上中线，E、F分别为AB、AC边上动点，EF交AD于点G。若AEF面积为ABC面积一半，求 $\vec{AG}\vec{EF}$ 最小值
ctime: '1759420841079'
ctime_f: '2025-10-03 00:00:41'
mtime: '1759593933716'
mtime_f: '2025-10-05 00:05:33'
---
为了表示所求数量积，我们至少需要AE、AF、AG这3个变量。我们不妨从分析约束条件、自由变量个数入手：

我们发现E确定，因为AEF面积固定，所以F确定，于是G随之确定，所以真正意义上的变量只有 $\vec{AE}=u \vec{c}$ （下设 $\vec{AB}=\vec{c},\ \vec{AC}=\vec{b}$ ），那么我们相信，即使设出再多变量，我们也能设法消元，最终得到单变量的函数。我们设 $\vec{AF}=v \vec{b},\ \vec{AG}= w \vec{AD}$ ，则：

- $\vec{AG}=\frac{w}{2}(\vec{b}+\vec{c})=\frac{w}{2u}\vec{c}+\frac{w}{2v}\vec{b}$ ，由共线得 $\frac{w}{2u}+\frac{w}{2v}=1 \implies w=\frac{2uv}{u+v}$
- 根据面积公式， $S_{\triangle AEF} = 0.5*0.5*1*4*\sin \frac{\pi}{3} = \frac{\sqrt{ 3 }}{2} = \frac{1}{2}|AE||AF|\sin \frac{\pi}{3} \implies |AE||AF| = 2 \implies uv=\frac{1}{2}$

然后看目标函数 $\vec{AG} \vec{EF} = \frac{w}{2}(\vec{b}+\vec{c})(v \vec{b}-u \vec{c}) = \frac{w}{2}(16v-2u+2v-u)=\frac{18v-3u}{2(u+v)}=\frac{\frac{18}{2u}-3u}{2u+\frac{1}{u}}=\frac{9-3u^2}{2u^2+1}, u \in [0, 1]$ 。这个函数配凑出若干倍的分母就很容易求了，得： $\frac{21}{4u^2+2}-\frac{3}{2}$ ，当 $u=1$ 时取得最小值为2
