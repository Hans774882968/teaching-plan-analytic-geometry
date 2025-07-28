import path from 'path';
import { getEncodedFileContent, serverNotifyReload } from './utils';

const readmePath = path.resolve(process.cwd(), 'README.md');
const readmeRelativePath = path.relative(process.cwd(), readmePath);

export default function readmeDisplayPlugin() {
  const virtualModuleId = 'virtual:readme-display';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  return {
    name: 'vite-plugin-readme-display',
    configureServer(server) {
      server.watcher.add(readmePath);

      // 文件变化时触发 HMR
      server.watcher.on('change', (file) => {
        if (file !== readmePath) {
          return;
        }
        serverNotifyReload(server, resolvedVirtualModuleId);

        console.log('[tpm] 📄 README.md 更新', file);
      });
    },
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    load(id) {
      if (id !== resolvedVirtualModuleId) {
        return;
      }
      const readmeContent = getEncodedFileContent(readmePath);

      return `
export const readmeRelativePath = String.raw\`${readmeRelativePath}\`;
export const readmeContent = decodeURI(\`${readmeContent}\`);
      `.trim();
    },
  };
}
