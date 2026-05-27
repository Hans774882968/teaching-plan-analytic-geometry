---
tags:
  - 隐函数求导
  - 全导数
title: 高度h斜抛最远距离
ctime: '1779964412320'
ctime_f: '2026-05-28 18:33:32'
mtime: '1779965041005'
mtime_f: '2026-05-28 18:44:01'
---
## 引言

这题来自物理竞赛黑砖《高中物理奥赛指导》。我高中时死活推不出来，现在有了LLM和代码能力，终于能轻松写出了！

掷铅球时，铅球出手时距地面的高度为h。若出手时的速度为 $v_{0}$ ，问以何角度掷球时水平射程最远？最远射程是多少？

## 参考答案

将铅球的运动分解为沿 $v_{0}$ 方向的匀速直线运动和竖直向下的自由落体运动。于是

$$
x^2=(v_{0}t)^2-\left( \frac{1}{2}gt^2 - h\right)^2
$$

很容易解得 $x_{\max} = \frac{v_0}{g}\sqrt{v_0^2+2gh}$ ，对应的 $t=\frac{\sqrt{ 2v_0^2+2gh }}{g}$ 。最后，对竖直方向有方程

$$
v_{0}t\sin \theta-\frac{1}{2}gt^2=-h \implies \theta=\arcsin \frac{v_{0}}{\sqrt{ 2v_0^2+2gh }}
$$

## 我的解法

参考答案的做法分解运动的方式比较高明，没有无脑选择水平和竖直方向，成功避开了巨大的计算量。但Hans的注意力太过涣散，只能想到把铅球的运动分解为水平和竖直方向，能做吗？以前，我会被这巨大的计算量打倒。但现在，我有了LLM和代码能力，不可能再被打倒了！

首先写出水平和竖直方向的运动方程：

$$
\begin{cases}
x(t) = v_0 \cos\theta \cdot t \\[4pt]
y(t) = h + v_0 \sin\theta \cdot t - \dfrac{1}{2}gt^2
\end{cases}
$$

设我们想要的最远射程为 $R(\theta)$ （为了强调R是关于 $\theta$ 的函数），把 $t = \dfrac{R}{v_0\cos\theta}$ 代入 $y(t)$ 右侧，并令 $y(t)=0$ ，立刻得到关于 $R$ 和 $\theta$ 的隐函数方程

$$
F(R, \theta) = R\tan\theta - \frac{g R^2}{2v_0^2}\sec^2\theta + h = 0 \tag{1}
$$

我们知道 $\sec^2(\theta) = 1 + \tan^2(\theta)$ ，所以不妨设 $u=\tan \theta$ ，把1式化简为

$$
F(R(u),u)=R u - \frac{g R^2}{2 v_{0}^2}(1 + u^2) + h=0
$$

直接求出R关于u的表达式计算量太大了！为了规避这巨大的计算量，我们有下面的两种方法：

### 法1：隐函数求导

射程取得最大值时，必有 $R'(u)=0$ ，求F对u的**全微分**：

$$
\frac{d}{du}F\big(R(u), u\big) = \underbrace{\frac{\partial F}{\partial R}}_{\text{对R求偏导}} \cdot \underbrace{\frac{dR}{du}}_{\text{R对u的变化率}} + \underbrace{\frac{\partial F}{\partial u}}_{\text{对u求偏导}} = 0
$$

由 $R'(u)=0$ 可得 $\frac{\partial F}{\partial u}=0$ 。所以我们只需要求F对u的偏导，就能得到我们想要的u。把u代入F，就能得到最远射程R满足的方程。把R的表达式代回u，就能求出 $\theta$ 了。于是有下面的代码：

```python
import sympy as sp

R, g, v0, h = sp.symbols('R g v0 h', positive=True, real=True)
theta = sp.symbols('theta', real=True)
u = sp.symbols('u', real=True)  # 令 u = tan(theta)

# 原方程: R*tan(theta) - (g*R^2)/(2*v0^2)*sec^2(theta) + h = 0
# 利用恒等式 sec^2(theta) = 1 + tan^2(theta) 替换为代数形式
F = R * u - (g * R**2) / (2 * v0**2) * (1 + u**2) + h

print("=" * 60)
print("【方法一：隐函数求导法 (dR/dθ = 0)】")

dF_du = sp.diff(F, u)
u_expr = sp.solve(dF_du, u)[0]
R_expr = sp.simplify(F.subs(u, u_expr))
R_sols = sp.solve(R_expr, R, positive=True)
R_opt_1 = sp.simplify(R_sols[0])
u_opt_1 = sp.simplify(u_expr.subs(R, R_opt_1))
theta_opt_1 = sp.atan(u_opt_1)

print("u_expr:")
print(sp.pretty(u_expr))  # 解析解: u = v0^2 / (g*R)
print("R_expr:")
print(sp.pretty(R_expr))
print("最优出手角 θ_opt =")
print(sp.pretty(theta_opt_1))
print("最大水平射程 R_max =")
print(sp.pretty(R_opt_1))
```

求得 $u$ 和关于R的方程分别为：

$$
\begin{cases}
u=\frac{v_{0}^2}{gR} \\
- \frac{R^{2} g}{2 v_{0}^{2}} + h + \frac{v_{0}^{2}}{2 g}=0
\end{cases}
$$

解得 $R = \frac{v_0}{g}\sqrt{v_0^2+2gh}$ ，把R的表达式代回u可得 $\theta=\arctan (\frac{v_{0}}{\sqrt{2 g h + v_{0}^{2}}} )$

### 法2：判别式法

注意到

$$
F=R u - \frac{g R^2}{2 v_{0}^2}(1 + u^2) + h=0
$$

是关于u的一元二次方程，所以令 $\Delta=B^2 - 4AC = 0$ 就能得到最远射程R满足的方程。解出R后，我们知道u取 $U=-\frac{B}{2A}$ 时F取得极值，所以直接把R的表达式代入 $U$ 就能求出想要的 $\theta$ 。于是有下面的代码：

```python
import sympy as sp

R, g, v0, h = sp.symbols('R g v0 h', positive=True, real=True)
theta = sp.symbols('theta', real=True)
u = sp.symbols('u', real=True)  # 令 u = tan(theta)

# 原方程: R*tan(theta) - (g*R^2)/(2*v0^2)*sec^2(theta) + h = 0
# 利用恒等式 sec^2(theta) = 1 + tan^2(theta) 替换为代数形式
F = R * u - (g * R**2) / (2 * v0**2) * (1 + u**2) + h

print("\n" + "=" * 60)
print("【方法二：判别式法 (Δ = 0)】")

# 将 F 整理为关于 u 的标准二次方程 A*u^2 + B*u + C = 0
poly_F = sp.Poly(F, u)
A, B, C = poly_F.nth(2), poly_F.nth(1), poly_F.nth(0)

# 令判别式 Δ = B^2 - 4AC = 0
Delta = sp.expand(B**2 - 4 * A * C)
R_sols_2 = sp.solve(Delta, R, positive=True)
R_opt_2 = sp.simplify(R_sols_2[0])

u_opt_2 = sp.simplify((-B / (2 * A)).subs(R, R_opt_2))
theta_opt_2 = sp.atan(u_opt_2)

print("Delta:")
print(sp.pretty(Delta))
print("最优出手角 θ_opt =")
print(sp.pretty(theta_opt_2))
print("最大水平射程 R_max =")
print(sp.pretty(R_opt_2))
```

解得的R和 $\theta$ 同上
