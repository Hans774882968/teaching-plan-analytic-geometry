import selectorParser from 'postcss-selector-parser';

export default function getModifyHljsSelectorPlugin(onModify) {
  const modifyHljsSelectorPlugin = () => {
    return {
      postcssPlugin: 'postcss-modify-hljs-selector',
      Rule(rule) {
        selectorParser(selectors => {
          selectors.walk(selector => {
            if (selector.type !== 'class' || selector.value !== 'hljs') {
              return;
            }

            const parent = selector.parent;
            // 检查是否是独立选择器（不是复合选择器）
            if (parent.nodes.length !== 1) {
              return;
            }

            let hasBackground = false;
            let hasColor = false;

            rule.walkDecls(decl => {
              if (decl.prop === 'background' || decl.prop === 'background-color') hasBackground = true;
              if (decl.prop === 'color') hasColor = true;
            });

            if (!hasBackground || !hasColor) {
              return;
            }

            if (typeof onModify === 'function') {
              onModify(rule);
            }

            rule.selector = `.code-block-wrapper, ${rule.selector}`;
          });
        }).processSync(rule.selector);
      },
    };
  };

  modifyHljsSelectorPlugin.postcss = true;
  return modifyHljsSelectorPlugin;
}
