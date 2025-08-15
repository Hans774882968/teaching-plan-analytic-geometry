[TOC]

### 给$两边加空格

```markdown
大佬，你是一名专家前端工程师，精通Babel。请叫我hans7。请写一个nodejs脚本，读取src文件夹下每一个以config.jsx结尾的文件，对每一个文件：遍历每一个字符串，若发现字符串里有一个$，则在它的前后各加一个空格。具体讨论如下：
一、单引号、双引号字符串
因为字符串只占源码一行，所以：
1. 从这个$往前走到第一个非空格的位置，无论走过多少个空格，都把这些空格替换为一个空格
2. 从这个$往后走到第一个非空格的位置，无论走过多少个空格，都把这些空格替换为一个空格
二、模板字符串
我们可以通过raw的字符串的\\n和\n判断该模板字符串是否换行。\\n表示未换行，\n表示换行。
对于每一个quasis的元素：
1. 从这个$往前走到第一个非空格的位置，或遇到\n或字符串开头时停下，无论走过多少个空格，都把这些空格替换为一个空格
2. 从这个$往后走到第一个非空格的位置，或遇到\n或字符串结尾时停下，无论走过多少个空格，都把这些空格替换为一个空格
替换要从后往前进行。
另外，需要监听这些文件的改动。改动则执行以上逻辑。
要求：
1. 用Babel解析
2. git diff越小越好
3. 代码缩进为2个空格
```

```markdown
大佬，在Babel里字符串的raw属性，\\n和\n可以用来区分源码字符串占据源码多少行吗
```

以上问题的回答是：

- `\\n`：在 raw 中表示源码中写了`\n`（字符），字符串不换行，占据源码一行。
- `\n`：在 raw 中可能是源码中的换行符，占据源码多行（需结合 AST 上下文判断）。
- 局限性：普通字符串字面量（非模板字符串）通常没有 raw 属性，需依赖 AST 的 extra.raw（如果存在）。

如果需要精确统计源码中的行数，建议直接分析源码字符串的原始内容（如使用 Babel 的 tokenize 或解析为 AST 后检查位置信息 loc）。

```markdown
大佬，这份代码现在是直接赋值path.node.extra.raw和quasi.value.raw，然后生成修改后的代码的。为了git diff最小化，请你按我的想法修改代码：在ast遍历中求出newContent和要修改的字符串的起始、结束位置，开一个数组记录它们。遍历完后从后往前遍历，进行字符串替换。不再使用generator包。
注意：你只需要输出需要改动的代码，请勿输出完整代码
```

### 给连续的两个$加换行符

下面这个提示词会造成DeepSeek的思考陷入死循环。

```markdown
大佬，现在的processSpacesForOneDollar方法如下，它可以正常工作：

现在我希望你帮我写一个新函数，它会在processSpacesForOneDollar之后执行。功能如下：
寻找所有仅由两个美元符号（$$）组成的行。如果它在字符串中是第奇数次出现（含义：块级公式的开头），则从它开始往前走到第一个非空行的位置，或到字符串开头时停下，无论走过多少个空行，都把这些空行替换为一个空行。但如果它已经是第一个非空行，则把这些空行删去。举例：
输入1：
`公式开头：
$$
foo
`
输出1：
`公式开头：

$$
foo
`
输入2：
`公式开头：\n
$$
foo
`
输出2：
`公式开头：

$$
foo
`
输入3：
`公式开头：\n
\n\n
\n
$$
foo
`
输出3：
`公式开头：

$$
foo
`
输入4：'公式开头：\n\n$$\nfoo'
输出4：'公式开头：\n$$\nfoo'
输入5：
`\n\n

$$
foo`
输出5：
`$$
foo`
输入6：'\n\n$$\nfoo'
输出6：'$$\nfoo'
如果它在字符串中是第偶数数次出现（含义：块级公式的结尾），则同理操作，只不过方向变为向后。和processSpacesForOneDollar方法类似，我们需要从后往前替换。
```

我不得不新开一个对话来继续这个任务。提示词修改如下：

```markdown
大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。我有一个`processSpacesForOneDollar`函数，如下：

现在我希望你帮我写一个和`processSpacesForOneDollar`类似的新函数，它会在`processSpacesForOneDollar`之后执行。功能：寻找所有仅由两个美元符号（$$）组成的行。

1. 如果它在字符串中是第奇数次出现（含义：块级公式的开头），则从它开始往前走到第一个非空行的位置，或到字符串开头时停下，无论走过多少个空行，都把这些空行替换为一个空行。但如果它已经是第一个非空行，则把这些空行删去。
2. 如果它在字符串中是第偶数数次出现（含义：块级公式的结尾），则同理操作，只不过方向变为向后。

和`processSpacesForOneDollar`方法类似，我们需要从后往前替换。
```

### 单测

`tests\auto-add-space-for-dollar.test.js`

```markdown
大佬，你是一名专家前端工程师，精通前端工程化。请叫我hans7。我有一个react + vite + vitest项目，有一个用于为js代码中的每个字符串中的每个$符号前后各加一个空格的脚本，如下（src\scripts\auto-add-space-for-dollar.js）：

请帮我写isSpace、processSpacesForOneDollar、getModifiedContent这3个函数的单元测试。框架为vitest
```

```markdown
大佬，请帮我写以下函数的单测，框架vitest

export function ignoreContinuousDollars(dollarPositions) {
  const positionSet = new Set();
  for (let i = 0; i + 1 < dollarPositions.length; i++) {
    if (dollarPositions[i] + 1 === dollarPositions[i + 1]) {
      positionSet.add(dollarPositions[i]);
      positionSet.add(dollarPositions[i + 1]);
    }
  }
  return dollarPositions.filter((p) => !positionSet.has(p));
}
```
