import path from 'path';
import fs from 'fs';
import { getEncodedFileContent, serverNotifyReload } from './utils';

const genSchemaPromptPath = path.resolve(process.cwd(), 'docs', '新课件提示词', '生成schema.md');
const genSchemaRelativePath = path.relative(process.cwd(), genSchemaPromptPath);
const genJsxPromptPath = path.resolve(process.cwd(), 'docs', '新课件提示词', '生成jsx.md');
const genJsxRelativePath = path.relative(process.cwd(), genJsxPromptPath);

const standardPageTsPath = path.resolve(process.cwd(), 'src', 'component', 'teachingPlan', 'StandardPageStructure.d.ts');
const geogebraUsageDocPath = path.resolve(process.cwd(), 'docs', 'Geogebra组件文档.md');
const genSchemaPromptUsagePath = path.resolve(process.cwd(), 'docs', '新课件提示词', '生成schema-食用方式.md');

const hmrFilePaths = [
  genSchemaPromptPath,
  genJsxPromptPath,
  standardPageTsPath,
  geogebraUsageDocPath,
  genSchemaPromptUsagePath,
];

export default function promptDisplayPlugin() {
  const virtualModuleId = 'virtual:prompt-display';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'vite-plugin-prompt-display',
    configureServer(server) {
      // 监听提示词相关文件变化
      hmrFilePaths.forEach((promptFilePath) => {
        server.watcher.add(promptFilePath);
      });

      // 文件变化时触发 HMR
      server.watcher.on('change', (file) => {
        if (!hmrFilePaths.includes(file)) {
          return;
        }
        serverNotifyReload(server, resolvedVirtualModuleId);

        console.log('[tpm] 📄 提示词相关文件更新', file);
      });
    },
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    load(id) {
      if (id !== resolvedVirtualModuleId) {
        return;
      }
      const genSchemaPromptContent = getEncodedFileContent(genSchemaPromptPath);
      const genJsxPromptContent = getEncodedFileContent(genJsxPromptPath);

      const standardPageTypeFileContent = fs.readFileSync(standardPageTsPath, 'utf-8').trim();
      const standardPageTypes = String.raw`\`\`\`ts\n${standardPageTypeFileContent}\n\`\`\``;
      const geogebraUsageDoc = getEncodedFileContent(geogebraUsageDocPath);
      const genSchemaPromptUsageDoc = getEncodedFileContent(genSchemaPromptUsagePath);

      return `
export const genSchemaRelativePath = String.raw\`${genSchemaRelativePath}\`;
export const genJsxRelativePath = String.raw\`${genJsxRelativePath}\`;

export const genSchemaPrompt = decodeURI(\`${genSchemaPromptContent}\`);
export const genJsxPrompt = decodeURI(\`${genJsxPromptContent}\`);

export const standardPageTypes = \`${standardPageTypes}\`;
export const geogebraUsageDoc = decodeURI(\`${geogebraUsageDoc}\`);
export const genSchemaPromptUsageDoc = decodeURI(\`${genSchemaPromptUsageDoc}\`);
`.trim();
    },
  };
}
