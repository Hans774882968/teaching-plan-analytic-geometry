---
tags:
  - 消元
title: '设 $P(A|B)+P(B|A)=1,P(A \cup B)=\frac{3}{4}$ ，则'
ctime: '1759679987326'
ctime_f: '2025-10-05 23:59:47'
mtime: '1759852725923'
mtime_f: '2025-10-07 23:58:45'
---
来源：https://www.bilibili.com/video/BV1RxWuzfEHY

视频里划分出以下表格的做法讲得很清晰了。这里仅探讨一下能不能不使用这个表格就解出来。

| $AB=a$            | $A\overline{B}=b$                        |
| ----------------- | ---------------------------------------- |
| $\overline{A}B=c$ | $\overline{A}\overline{B}=d=\frac{1}{4}$ |

简单分析： $P(AB)=\frac{P(A)P(B)}{P(A)+P(B)},\ P(A)+P(B)-P(AB)=\frac{3}{4}$ ，为了方便，我们下面分别设为x和y

## C： $P(AB) \leq P(\overline{A}\overline{B})$

这个似乎没办法，只能靠上述表格推出 $a^2=bc$ 来做。由表格可得 $(b+c)^2 \geq 4bc \implies (\frac{3}{4}-a)^2 \geq 4a^2$ 解方程可知这是对的。

## A：事件A、B相互独立

把新的式子 $xy=P(AB)$ 代进去，发现解出定值 $P(AB)=\frac{1}{4}$ ，即只有满足该条件时才成立，故不正确。

## B：若 $P(AB)=\frac{1}{8}$ 则 $|P(A)-P(B)|=\frac{\sqrt{ 21 }}{8}$

代入得 $x+y=8xy=\frac{7}{8}$ ，于是 $(x-y)^2=\frac{21}{64}$ ，对的

## D：若 $P(A|\overline{B})=P(\overline{A}|B)$ 则必有 $P(A)=P(B)$

这个也没办法，只能靠上述表格来做。这个结论相当于表格里的 $b=c$ 。思想一样的，消元
