import { marked } from 'marked';
import markedKatex from 'marked-katex-extension';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import styles from '@/component/teachingPlan/basic.module.scss';
// import sanitizeHtml from 'sanitize-html';

marked.use(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
  })
);

marked.use(markedKatex({
  throwOnError: false,
}));

const addIdToHeadingRenderer = {
  heading({ text, depth }) {
    return `<h${depth} class="${styles[`teachingPlanH${depth}`]}">${text}</h${depth}>\n`;
  },
};
marked.use({ renderer: addIdToHeadingRenderer });

/**
 * 注意：
 * 1. markdown 文本尽量不要以多余的空格开头，否则 marked 会将其解析为代码块，导致结果不合预期
 * 2. katex 格式的公式和前面的文本留一个空格，否则会报错
 * @param {string} _content markdown content
 * @returns {string} html or content
 */
export const processMarkdown = async (_content) => {
  if (typeof _content !== 'string') {
    return _content;
  }
  // _content 以 white spaces 开头时，marked 会将其解析为代码块，因此要 trim
  const content = _content.trim();
  // Handle both Promise and string return types from marked()
  const result = marked(content);
  const html = typeof result === 'string' ? result : await result;
  return html;

  // TODO: 接入 sanitize html 会导致 style 属性被吞，设置 allowedAttributes 未生效，暂时注释
  // const sanitizedHtml = sanitizeHtml(html, {
  //   allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
  //   allowedAttributes: {
  //     ...sanitizeHtml.defaults.allowedAttributes,
  //     'code': ['class', 'style'],
  //     'pre': ['class', 'style'],
  //     // 关键修复：允许 span 的 class 属性（hljs 生成的元素）
  //     'span': ['class', 'style'],
  //     'div': ['class', 'style'], // Allow class attribute for mermaid divs
  //     'li': ['class', 'style'], // For TOC
  //     'h1': ['id', 'style'],
  //     'h2': ['id', 'style'],
  //     'h3': ['id', 'style'],
  //     'h4': ['id', 'style'],
  //     'h5': ['id', 'style'],
  //     'h6': ['id', 'style'],
  //   },
  //   // katex 相关：允许所有 CSS 属性，因为 KaTeX 使用内联样式；允许 data 属性（不确定有没有用到，但还是加上）
  //   allowedStyles: {
  //     '*': {
  //       '*': [/^$/],
  //     },
  //   },
  //   allowDataAttributes: true,
  // });
  // return sanitizedHtml;
};
