[TOC]

## 废案：`getComputedStyle`并更新

```js
function updateCodeBlocksClassName(tpmMdContainerRef) {
  tpmMdContainerRef.current?.querySelectorAll('.code-block-wrapper')?.forEach((codeBlockWrapper) => {
    const codeNode = codeBlockWrapper.querySelector('.highlighted-code');
    const codeNodeComputedStyle = getComputedStyle(codeNode, null);
    const codeNodeBg = codeNodeComputedStyle.getPropertyValue('background');
    const codeNodeColor = codeNodeComputedStyle.getPropertyValue('color');
    codeBlockWrapper.style.background = codeNodeBg;
    codeBlockWrapper.style.color = codeNodeColor;
  });
}

const styleObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'attributes' && mutation.attributeName === DATA_HLJS_THEME) {
      // 0s 有一定概率失败。另外，实测 requestAnimationFrame 不行
      setTimeout(() => {
        updateCodeBlocksClassName(tpmMdContainerRef);
      }, 100);
    }
  });
});

styleObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: [DATA_HLJS_THEME],
});
```

这个成为废案的原因是，无论多少ms都不行，因为它依赖于网络请求。并且我想到了更好的方法：把样式文件的选择器`hljs`改成`hljs, .code-block-wrapper`

## 废案：动态import css文件

```js
const hljsThemePath = '/node_modules/highlight.js/styles';
const hljsThemeModules = import.meta.glob('/node_modules/highlight.js/styles/*.css', {
  query: '?raw', // 作为原始文本导入
});

const modulePath = `${hljsThemePath}/${actualHljsTheme}`;
if (hljsThemeModules[modulePath]) {
  hljsThemeModules[modulePath]().then((mod) => {
    const cssContent = mod.default;
    debugger;
  });
}
```
