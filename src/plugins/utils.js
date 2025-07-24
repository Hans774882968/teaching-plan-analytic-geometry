import fs from 'fs';

export function getEncodedFileContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return encodeURI(content);
}

export function serverNotifyReload(server, resolvedVirtualModuleId) {
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
}
