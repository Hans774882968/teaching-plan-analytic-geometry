---
tags:
  - 消元
title: '设 $P(A|B)+P(B|A)=1,P(A \cup B)=\frac{3}{4}$ ，则'
ctime: '1759679987326'
ctime_f: '2025-10-05 23:59:47'
mtime: '1759943626726'
mtime_f: '2025-10-09 01:13:46'
---
来源：https://www.bilibili.com/video/BV1RxWuzfEHY

视频里划分出以下表格的做法讲得很清晰了。我在此会看看每个选项能不能不用这个表格解出来，如果解不出，就说一下用这个表格怎么解。

| $AB=a$            | $A\overline{B}=b$                        |
| ----------------- | ---------------------------------------- |
| $\overline{A}B=c$ | $\overline{A}\overline{B}=d=\frac{1}{4}$ |

简单分析： $\frac{P(AB)}{P(B)}+\frac{P(AB)}{P(A)}=1 \implies P(AB)=\frac{P(A)P(B)}{P(A)+P(B)},\ P(A)+P(B)-P(AB)=\frac{3}{4}$ （为了方便，我们下面分别设 $P(A)=x,\ P(B)=y$ ），还需要一个式子才能确定这三个变量。

也用上面的表格翻译一下条件， $a=\frac{(a+b)(a+c)}{a+b+a+c} \implies a^2=bc,\ a=\frac{3}{4}-b-c$ ，同样是还需要一个式子才能确定每一个变量。

## C： $P(AB) \leq P(\overline{A}\overline{B})$

这个似乎没办法，只能靠上述表格推出 $a^2=bc$ 来做。由表格可得 $(b+c)^2 \geq 4bc \implies (\frac{3}{4}-a)^2 \geq 4a^2$ ，解不等式得C正确。

## A：事件A、B相互独立

可以不用表格做。把新的式子 $xy=P(AB)$ 代进去，发现解出定值 $P(AB)=\frac{1}{4}$ ，即只有满足该条件时才成立，故不正确。

## B：若 $P(AB)=\frac{1}{8}$ 则 $|P(A)-P(B)|=\frac{\sqrt{ 21 }}{8}$

可以不用表格做。代入新的式子得 $x+y=8xy=\frac{7}{8}$ ，于是 $(x-y)^2=(x+y)^2-4xy=\frac{49}{64}-\frac{4*7}{64}=\frac{21}{64}$ ，对的

## D：若 $P(A|\overline{B})=P(\overline{A}|B)$ 则必有 $P(A)=P(B)$

这个也只能靠上述表格来做。新的条件 $P(A|\overline{B})=P(\overline{A}|B) \implies \frac{b}{b+d}=\frac{c}{a+c} \implies c=4ab$ ，目标 $P(A)=P(B) \implies a+b=a+c \implies b=c$ 。结论要的是b和c，所以我们考虑用b表示一切。联立 $c=4ab,\ a^2=bc$ 可得 $a=4b^2,\ c=16b^3$ 。我们有3个方程，所以这3个变量都可以解出来，我们只需要验证这个解对不对。

但我们发现 $a+b+c=\frac{3}{4} \implies b+4b^2+16b^3=\frac{3}{4}$ 这个方程不好解。怎么办？那我们就不解这个方程。首先，左侧肉眼可见的单增，这意味着只有一个解。然后，我们看 $a^2=bc$ 和 $b=c$ ，这意味着 $a=b=c=\frac{1}{4}$ ，即我们只需要验证一下上述方程是否和这个解相容。验算发现确实相容。C正确
