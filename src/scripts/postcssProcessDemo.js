import postcss from 'postcss';
import getModifyHljsSelectorPlugin from './modifyHljsSelectorPlugin';

const cssText = `
pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
.hljs {
  background: #2b2b2b;
  color: #f8f8f2
}
/* ... 其他CSS规则保持不变 ... */
@media screen and (-ms-high-contrast: active) {
  .hljs-addition,
  .hljs-attribute,
  /* ... 其他规则 ... */
  .hljs-quote {
    color: highlight
  }
  .hljs-keyword,
  .hljs-selector-tag {
    font-weight: bold
  }
}
`;

const modifiedSelectors = [];

// 处理CSS
postcss([
  getModifyHljsSelectorPlugin((rule) => modifiedSelectors.push(rule.selector)),
])
  .process(cssText, { from: undefined })
  .then(result => {
    console.log(modifiedSelectors);
    console.log('/* 修改后的CSS */');
    console.log(result.css);
  });
