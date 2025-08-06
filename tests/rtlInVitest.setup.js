import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// 全局设置清理函数，避免每个测试文件手动清理
afterEach(() => {
  cleanup();
});
