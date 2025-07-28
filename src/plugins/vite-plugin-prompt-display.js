import path from 'path';
import { getEncodedFileContent, serverNotifyReload } from './utils';

const genSchemaPromptPath = path.resolve(process.cwd(), 'docs', '新课件提示词', '生成schema.md');
const genSchemaRelativePath = path.relative(process.cwd(), genSchemaPromptPath);
const genJsxPromptPath = path.resolve(process.cwd(), 'docs', '新课件提示词', '生成jsx.md');
const genJsxRelativePath = path.relative(process.cwd(), genJsxPromptPath);
const promptFilePaths = [genSchemaPromptPath, genJsxPromptPath];

export default function promptDisplayPlugin() {
  const virtualModuleId = 'virtual:prompt-display';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'vite-plugin-prompt-display',
    configureServer(server) {
      // 监听提示词文件变化
      promptFilePaths.forEach((promptFilePath) => {
        server.watcher.add(promptFilePath);
      });

      // 文件变化时触发 HMR
      server.watcher.on('change', (file) => {
        if (!promptFilePaths.includes(file)) {
          return;
        }
        serverNotifyReload(server, resolvedVirtualModuleId);

        console.log('[tpm] 📄 提示词文件更新', file);
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

      return `
export const genSchemaRelativePath = String.raw\`${genSchemaRelativePath}\`;
export const genJsxRelativePath = String.raw\`${genJsxRelativePath}\`;

export const genSchemaPrompt = decodeURI(\`${genSchemaPromptContent}\`);
export const genJsxPrompt = decodeURI(\`${genJsxPromptContent}\`);
      `.trim();
    },
  };
}
