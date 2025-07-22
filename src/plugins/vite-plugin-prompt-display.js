import fs from 'fs';
import path from 'path';

const genSchemaPromptPath = path.resolve(process.cwd(), 'docs', '新课件提示词', '生成schema.md');
const genSchemaRelativePath = path.relative(process.cwd(), genSchemaPromptPath);
const genJsxPromptPath = path.resolve(process.cwd(), 'docs', '新课件提示词', '生成jsx.md');
const genJsxRelativePath = path.relative(process.cwd(), genJsxPromptPath);
const promptFilePaths = [genSchemaPromptPath, genJsxPromptPath];

function getEncodedPromptContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return encodeURI(content);
}

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
        // 1. 使虚拟模块缓存失效
        const module = server.moduleGraph.getModuleById(resolvedVirtualModuleId);
        if (module) {
          server.moduleGraph.invalidateModule(module);
        }

        // 2. 通知客户端重新加载模块
        server.ws.send({
          type: 'full-reload',
          path: '*',
        });

        console.log('[tpm] 📄 提示词文件更新', file);
      });
    },
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const genSchemaPromptContent = getEncodedPromptContent(genSchemaPromptPath);
        const genJsxPromptContent = getEncodedPromptContent(genJsxPromptPath);

        return `
          export const genSchemaRelativePath = String.raw\`${genSchemaRelativePath}\`;
          export const genJsxRelativePath = String.raw\`${genJsxRelativePath}\`;

          export const genSchemaPrompt = decodeURI(\`${genSchemaPromptContent}\`);
          export const genJsxPrompt = decodeURI(\`${genJsxPromptContent}\`);
        `.trim();
      }
    },
  };
}
