import hljs from 'highlight.js';

function getLineNumbersHtml(lineLength) {
  const lineNumbersCode = [...Array(lineLength)]
    .map(
      (_, index) =>
        `<span class="line-number">${index + 1}</span><br>`
    )
    .join('');

  const lineNumbersWrapperCode = `<div class="line-numbers-wrapper" aria-hidden="true">${lineNumbersCode}</div>`;
  return lineNumbersWrapperCode;
}

export default {
  code({ lang, text: code }) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    const highlighted = hljs.highlight(code, { language }).value;

    const dataCode = encodeURI(code);

    const lineLength = code.split('\n').length;
    const lineNumbersHtml = getLineNumbersHtml(lineLength);

    return `
<div class="code-block-wrapper" data-language="${language}" data-line-count="${lineLength}">
  <div class="code-header">
    <div class="header-left-part">
      <div class="svg-chevron-down-wrapper" title="展开代码块"></div>
      <span class="language-tag">${language}</span>
    </div>
    <div class="header-right-part">
      <button title="复制代码" class="copy-button" data-code="${dataCode}"></button>
      <div class="svg-download-wrapper" title="下载代码"></div>
    </div>
  </div>
  <div class="code-body">
    ${lineNumbersHtml}
    <pre class="code-pre"><code class="highlighted-code hljs language-${language}">${highlighted}</code></pre>
  </div>
</div>`.trim();
  },
};
