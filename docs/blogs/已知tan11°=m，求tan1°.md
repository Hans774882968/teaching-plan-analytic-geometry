---
tags:
  - 三角函数特殊角
title: 已知tan11°=m，求tan1°
ctime: '1758182244828'
ctime_f: '2025-09-18 15:57:24'
mtime: '1758182224527'
mtime_f: '2025-09-18 15:57:04'
---
1和11差了11倍，硬推11倍角公式很难，推11附近的12（ $2^2*3$ ）倍角或10（ $2*5$ ）倍角公式也都很难。所以考虑 $11k$ 和特殊角做差得到1°。不难发现 $45-4*11=1$ ，故我们只需推4倍角公式。

$$
\tan 2x = \frac{2\tan x}{1-\tan^2x} = \frac{2m}{1-m^2}
$$

$$
\tan 4x = \frac{2\frac{2m}{1-m^2}}{1-(\frac{2m}{1-m^2})^2}
$$

$$
\tan \frac{\pi}{180}=\frac{\tan \frac{\pi}{4}-\tan 44^\circ}{1+\tan \frac{\pi}{4}\tan 44^\circ}=\frac{1-t}{1+t}
$$

这个推导计算量太大，我在草稿纸上算不出来，所以决定用sympy实现。答案：

$$
\frac{m^4 + 4m^3 - 6m^2 - 4m + 1}{m^4 - 4m^3 - 6m^2 + 4m + 1}
$$

```python
import sympy as sp
from math import tan, radians


def solve():
    m = sp.symbols('m')
    tan2x = 2 * m / (1 - m**2)
    tan4x = 2 * tan2x / (1 - tan2x**2)
    expr = (1 - tan4x) / (1 + tan4x)

    # 化简+有理函数约分
    tan4x_simplified = sp.cancel(sp.simplify(tan4x))
    result = sp.cancel(sp.simplify(expr))
    result_numer, result_denom = result.as_numer_denom()

    # 因式分解
    result_numer = sp.factor(result_numer)
    result_denom = sp.factor(result_denom)

    print(f'>>> tan4x_simplified: {tan4x_simplified}')  # -(4*m**3 - 4*m)/(m**4 - 6*m**2 + 1)
    sp.pprint(tan4x_simplified)
    print(f'>>> result: {result}')
    sp.pprint(result)
    print(f'>>> result_numer: {result_numer}')  # m**4 + 4*m**3 - 6*m**2 - 4*m + 1
    sp.pprint(result_numer)
    print(f'>>> result_denom: {result_denom}')  # m**4 - 4*m**3 - 6*m**2 + 4*m + 1
    sp.pprint(result_denom)


def verification():
    m = tan(radians(11))
    tan_4x = -(4 * m**3 - 4 * m) / (m**4 - 6 * m**2 + 1)
    f_m = (m**4 + 4 * m**3 - 6 * m**2 - 4 * m + 1) / (m**4 - 4 * m**3 - 6 * m**2 + 4 * m + 1)
    goal = tan(radians(1))
    # 0.19438030913771848 0.9656887748070739 0.01745506492821762 0.017455064928217585
    print(m, tan_4x, f_m, goal)


if __name__ == '__main__':
    solve()
    verification()
```
