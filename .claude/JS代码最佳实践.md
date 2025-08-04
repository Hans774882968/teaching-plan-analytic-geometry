[TOC]

## JavaScript 通用规则

1. 使用 ES2022+ 语法（可选链、空值合并、顶层 `await`）
2. 禁止使用 `var`，一律使用 `const` / `let`
3. 强制使用 `===` / `!==`，关闭 `==` 规则
4. 优先使用字面量而非 `new Object()` / `new Array()`
5. 使用 `async/await` 而非回调地狱
6. 函数命名：
   - 纯函数使用动词
   - 事件句柄使用 `handleXxx`
7. 文件仅导出一个默认成员时，文件名与成员同名
8. 工具函数按领域分文件，如 `date.js`、`string.js` 等
9. 总是使用 early return 、 early continue ，减少代码嵌套层级
10. 遵循 DRY 原则，出现3次及以上的相似代码应考虑封装为函数或类

## React 组件设计

1. 组件类型
   - **视图组件（UI）**：放在 `/src/component`
   - **高阶组件、自定义 Hook**：放在 `/src/hooks`
2. 命名规范
   - 组件名使用 **PascalCase**，如 `UserCard`
   - Hook 名使用 **camelCase** 且以 `use` 开头，如 `useToggle`
3. 优先使用函数组件 + Hook；禁止新增 Class 组件
4. 单一职责：复杂逻辑拆分为子组件或 Hook

## State 与数据流

1. 组件内部状态使用 `useState` / `useReducer`
2. 跨组件共享：
    - 小型项目：`useContext + useReducer`
    - 中大型项目：**Zustand** / **Redux Toolkit**（推荐 **RTK Query**）
3. 状态尽量靠近叶子节点，避免“提升过早”
4. 异步数据统一使用 **SWR** / **React-Query** / **RTK Query**，禁止手写 `useEffect` 刷接口
5. 表单处理：
    - 使用 **React-Hook-Form**
    - 校验使用 **Zod** / **Yup**

## 性能优化

1. 列表渲染必须写 `key={唯一且稳定的值}`
2. 复杂计算使用 `useMemo`，事件回调使用 `useCallback`
3. 避免匿名对象 / 函数作为 props：

```jsx
// Bad
<Child style={{ color: 'red' }} onClick={() => handle(id)} />

// Good
const style   = useMemo(() => ({ color: 'red' }), []);
const onClick = useCallback(() => handle(id), [id]);
```



## 样式方案

1. 优先使用Tailwind CSS
2. 响应式设计：
    - 使用 Tailwind 断点适配移动端：`sm:`、`md:`、`lg:`、`xl:`

## 安全与错误处理

1. 所有用户输入进行转义或使用 **DOMPurify**。
2. API 统一封装：错误码、超时、重试、刷新 Token。
3. React 错误边界：使用 `ErrorBoundary` 组件包裹路由根节点。
4. 生产环境关闭 `React.StrictMode` 下的双渲染。
