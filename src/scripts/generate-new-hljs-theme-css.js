import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import postcss from 'postcss';
import getModifyHljsSelectorPlugin from './modifyHljsSelectorPlugin';
import { hljsThemeOptions } from '@/common/themeOptions';

async function getModifiedCssContent(cssContent, file, showDebugInfo) {
  const modifiedSelectors = [];
  const result = await postcss([
    getModifyHljsSelectorPlugin((rule) => modifiedSelectors.push(rule.selector)),
  ])
    .process(cssContent, { from: undefined });
  /**
   * 目前找到两个覆盖不到： nord.css purebasic.css
   * 这是因为它们都是 .hljs 和 .hljs, .hljs-subst 这样分开写的
   * 但我们就不搞那么复杂了，这两个文件手动修改即可
   */
  if (!modifiedSelectors.length) {
    showDebugInfo && console.log('未找到要修改的选择器：', file);
  }
  if (modifiedSelectors.length >= 2) {
    showDebugInfo && console.log('修改的选择器多于一处：', file);
  }
  return result.css;
}

async function main(shouldWriteCss, showDebugInfo) {
  try {
    // 1. 读取highlight.js样式目录
    const hljsStylesPath = path.join(
      process.cwd(),
      'node_modules',
      'highlight.js',
      'styles'
    );
    const files = await fs.readdir(hljsStylesPath);
    const cssFiles = files.filter(
      file => file.endsWith('.css') && !file.endsWith('.min.css')
    );

    // 2. 处理每个CSS文件
    const themeMap = {};

    for (const file of cssFiles) {
      const filePath = path.join(hljsStylesPath, file);
      const content = await fs.readFile(filePath, 'utf8');

      const modifiedCssContent = await getModifiedCssContent(content, file, showDebugInfo);

      // 保存到当前目录
      const outputPath = path.resolve(__dirname, file);
      if (shouldWriteCss) {
        await fs.writeFile(outputPath, modifiedCssContent);
      }

      // 添加到主题映射
      themeMap[file] = modifiedCssContent;
    }

    const themeMapContent = Object.entries(themeMap)
      .sort()
      .reduce(
        (res, [key, value]) => res + `  '${key}': \`${value.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\`,\n`,
        ''
      );
    // 3. 生成主题映射JS文件
    const jsContent = `export const hljsThemeCssText = {\n${themeMapContent}};\n`;

    await fs.writeFile(
      path.join(
        process.cwd(),
        'src',
        'common',
        'hljsThemeCssText.js'
      ),
      jsContent
    );

    // 4. 比较主题选项差异
    if (showDebugInfo) {
      const optionFiles = hljsThemeOptions.map((option) => option.value);
      const folderFiles = [...cssFiles];
      const missingInOptions = folderFiles.filter(f => !optionFiles.includes(f));
      const missingInFolder = optionFiles.filter(f => !folderFiles.includes(f));

      console.log('\n===== 主题差异报告 =====');
      console.log('\n文件夹中存在但themeOptions中缺失的主题:');
      missingInOptions.forEach(f => console.log(`- ${f}`));

      console.log('\nthemeOptions中存在但文件夹中缺失的主题:');
      missingInFolder.forEach(f => console.log(`- ${f}`));
    }

  } catch (error) {
    console.error('处理过程中出错:', error);
    process.exit(114514);
  }
}

main(true, true);
