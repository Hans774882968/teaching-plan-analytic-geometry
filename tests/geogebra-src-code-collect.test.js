import {
  getFunctionId,
  getProcessedFunctionSource,
  removeExistingAppletOnLoadIds,
  getInnerIndent,
  findInsertPositionAndIndent,
  applyPatches,
  generateCollectionFile,
  getAddedAppletOnLoadIdsCode,
  geogebraSrcCodeCollect,
  setupWatcher,
} from '@/scripts/geogebra-src-code-collect';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import fs from 'fs';
import { glob } from 'glob';
import chokidar from 'chokidar';
import { CONFIG_FILES_PATTERN } from '@/scripts/listenerScriptUtils';

// Mock external modules
vi.mock('fs');
vi.mock('path');
vi.mock('glob');
vi.mock('chokidar', () => ({
  default: {
    watch: vi.fn().mockImplementation(() => {
      const ret = {};
      ret.on = vi.fn().mockImplementation(() => {
        return ret;
      });
      return ret;
    }),
  },
}));
vi.mock('js-beautify', () => ({
  js_beautify: vi.fn().mockImplementation(code => `beautified(${code})`),
}));

describe('geogebra-src-code-collect utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('getFunctionId', () => {
    const mockGeogebraConfig = (idValue, idType = 'StringLiteral') => ({
      properties: [{
        key: { type: 'Identifier', name: 'id' },
        value: idType === 'StringLiteral'
          ? { type: 'StringLiteral', value: idValue }
          : {
            type: 'TemplateLiteral',
            quasis: [{ value: { cooked: idValue } }],
            expressions: [],
          },
      }],
    });

    it('should use id property when present', () => {
      const config = mockGeogebraConfig('testId');
      const id = getFunctionId(config, 'path/to/file.js', 0);
      expect(id).toBe('path/to/file.js-testId');
    });

    it('should handle template literals', () => {
      const config = mockGeogebraConfig('templateId', 'TemplateLiteral');
      const id = getFunctionId(config, 'path/to/file.js', 0);
      expect(id).toBe('path/to/file.js-templateId');
    });

    it('should fallback to path and count when no id', () => {
      const config = { properties: [] };
      const id = getFunctionId(config, 'path/to/file.js', 42);
      expect(id).toBe('path/to/file.js-42');
    });
  });

  describe('getProcessedFunctionSource', () => {
    it('should beautify and encode function source', () => {
      const result = getProcessedFunctionSource('function(){}');
      expect(result).toBe(encodeURI('beautified(function(){})'));
    });
  });

  describe('removeExistingAppletOnLoadIds', () => {
    it('should remove appletOnLoadId properties same level', () => {
      const code = `
        const config = {
          appletOnLoad: () => {},
          appletOnLoadId: 'to-remove'
        };
      `;
      const result = removeExistingAppletOnLoadIds(code, 'test.js');
      expect(result).not.toContain('appletOnLoadId');
      expect(result).toMatchSnapshot();
    });

    it('should remove appletOnLoadId properties different level', () => {
      const code = `
        const config = {
          config: {
            appletOnLoad: () => {},
          },
          appletOnLoadId: 'to-remove'
        };
      `;
      const result = removeExistingAppletOnLoadIds(code, 'test.js');
      expect(result).not.toContain('appletOnLoadId');
      expect(result).toMatchSnapshot();
    });

    it('should handle errors gracefully', () => {
      const invalidCode = 'invalid javascript';
      const result = removeExistingAppletOnLoadIds(invalidCode, 'test.js');
      expect(result).toBe(invalidCode);
    });
  });

  describe('getInnerIndent', () => {
    it('should detect 2-space indent', () => {
      const content = 'const obj = {\n  key: value\n}';
      expect(getInnerIndent(content)).toBe('  ');
    });

    it('should detect geogebraObjContent indent', () => {
      const content = `
      {
        config: {
          id: 'testId',
          appletOnLoad: function() { /* code */ }
        },
        appletOnLoadId: 'foo'
      }
      `;
      expect(getInnerIndent(content)).toBe(' '.repeat(8));
    });

    it('should default to 2 spaces', () => {
      expect(getInnerIndent('no indent')).toBe('  ');
    });
  });

  describe('findInsertPositionAndIndent', () => {
    const mockContent = `
const config = {
  arr: [
    {
      config: {
        id: 'endOfObject',
        appletOnLoad: function() { /* code */ }
      },
    },
    {
      config: {
        id: 'betweenProperties',
        appletOnLoad: function() { /* code */ }
      },
      conclusion: 'conclusion'
    }
  ]
};
    `.trim();

    // 这两个 case 的调用参数都要查看 astexplorer 确定
    it('should find position at end of object', () => {
      const result = findInsertPositionAndIndent(
        mockContent,
        mockContent.slice(30, 137),
        130,
        137
      );
      expect(result.insertPosition).toBe(136);
      expect(result.prefixIndentDiff).toBe('  ');
      expect(result.suffixIndent).toBe(' '.repeat(4));
    });

    it('should find position between properties', () => {
      const result = findInsertPositionAndIndent(
        mockContent,
        mockContent.slice(143, 287),
        249,
        287
      );
      expect(result.insertPosition).toBe(257);
      expect(result.prefixIndentDiff).toBe('');
      expect(result.suffixIndent).toBe(' '.repeat(6));
    });
  });

  describe('applyPatches', () => {
    it('should apply patches in reverse order', () => {
      const content = '0123456789';
      const patches = [
        { position: 2, content: 'A' },
        { position: 5, content: 'B' },
        { position: 8, content: 'C' },
      ];
      const result = applyPatches(content, patches);
      expect(result).toBe('01A234B567C89');
    });
  });

  describe('generateCollectionFile', () => {
    it('should write sorted collection file', () => {
      const functionSourceMap = {
        jd2: 'source4',
        id2: 'source2',
        id1: 'source1',
        jd1: 'source3',
      };
      generateCollectionFile(functionSourceMap);

      // 文件路径的全局字符串常量在测试环境拿不到，在此允许 undefined
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        undefined,
        expect.stringContaining(`{
  'id1': decodeURI('source1'),
  'id2': decodeURI('source2'),
  'jd1': decodeURI('source3'),
  'jd2': decodeURI('source4'),
}`),
        'utf-8'
      );
    });
  });

  describe('getAddedAppletOnLoadIdsCode', () => {
    it('should add appletOnLoadId property to functionSourceMap', () => {
      const mockFileContent = `
const config = {
  config: {
    id: 'fooId',
    appletOnLoad: function() { /* code */ }
  }
};
`;
      const functionSourceMap = {};
      const result = getAddedAppletOnLoadIdsCode(
        mockFileContent,
        'path/to/file.js',
        functionSourceMap
      );

      expect(result).toContain('  appletOnLoadId: \'path/to/file.js-fooId\',\n}');
      expect(functionSourceMap).toEqual({ 'path/to/file.js-fooId': 'beautified(function()%20%7B%20/*%20code%20*/%20%7D)' });
      expect(result).toMatchSnapshot();
    });

    it('should add to functionSourceMap even if appletOnLoadId already exists', () => {
      const mockFileContent = `
const config = {
  arr: [
    {
      config: {
        id: 'fooId1',
        appletOnLoad: function() { /* code1 */ }
      },
      appletOnLoadId: 'barId1'
    },
    {
      config: {
        id: 'fooId2',
        appletOnLoad: function() { /* code2 */ }
      },
    },
    {
      config: {
        id: 'fooId3',
        appletOnLoad: function() { /* code3 */ }
      },
      conclusion: 'conclusion' // 在 conclusion 前插入
    }
  ]
};
`;
      const functionSourceMap = {};
      const result = getAddedAppletOnLoadIdsCode(
        mockFileContent,
        'path/to/file.js',
        functionSourceMap
      );

      expect(result).toContain('appletOnLoadId');
      expect(result).toContain(`${' '.repeat(6)}appletOnLoadId: 'path/to/file.js-fooId1',\n${' '.repeat(4)}}`);
      expect(result).toContain(`${' '.repeat(6)}appletOnLoadId: 'path/to/file.js-fooId2',\n${' '.repeat(4)}}`);
      expect(result).toContain(`${' '.repeat(6)}appletOnLoadId: 'path/to/file.js-fooId3',\n${' '.repeat(6)}conclusion`);
      expect(functionSourceMap).toEqual({
        'path/to/file.js-fooId1': 'beautified(function()%20%7B%20/*%20code1%20*/%20%7D)',
        'path/to/file.js-fooId2': 'beautified(function()%20%7B%20/*%20code2%20*/%20%7D)',
        'path/to/file.js-fooId3': 'beautified(function()%20%7B%20/*%20code3%20*/%20%7D)',
      });
      expect(result).toMatchSnapshot();
    });
  });

  describe('geogebraSrcCodeCollect', () => {
    it('no change - no appletOnLoadId', async () => {
      glob.mockResolvedValue(['src/file1.js', 'src/file2.jsx']);
      fs.readFileSync.mockReturnValue('const foo = { dummy: \'content\' }');
      await geogebraSrcCodeCollect();
      expect(glob).toHaveBeenCalledWith(CONFIG_FILES_PATTERN, {
        ignore: ['node_modules/**'],
      });
      expect(fs.readFileSync).toHaveBeenCalledTimes(2);
      expect(fs.writeFileSync).toHaveBeenCalledTimes(1); // 2 files 都未更改，故不调用。仅 collection 调用一次
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        undefined,
        expect.stringContaining('export default {\n};'),
        'utf-8'
      );
    });

    it('no change - same appletOnLoadId exists', async () => {
      glob.mockResolvedValue(['src\\file1.js', 'src\\file2.jsx']);
      // 同理，代码里没法拿到 relativePath ，暂时允许 undefined
      fs.readFileSync.mockReturnValue(`const foo = {
  config: {
    id: 'endOfObject',
    appletOnLoad: function() { /* code */ }
  },
  appletOnLoadId: 'undefined-endOfObject',
}`);
      await geogebraSrcCodeCollect();
      expect(glob).toHaveBeenCalledWith(CONFIG_FILES_PATTERN, {
        ignore: ['node_modules/**'],
      });
      expect(fs.readFileSync).toHaveBeenCalledTimes(2);
      expect(fs.writeFileSync).toHaveBeenCalledTimes(1); // appletOnLoadId 一致，故文件未更改，不写入。仅 collection 调用一次
    });

    it('has change - no existing appletOnLoadId', async () => {
      glob.mockResolvedValue(['src/file1.js', 'src/file2.jsx']);
      fs.readFileSync.mockReturnValue(`const foo = {
  config: {
    id: 'fooId',
    appletOnLoad: function() { /* code */ }
  }
}`);
      await geogebraSrcCodeCollect();
      expect(glob).toHaveBeenCalledWith(CONFIG_FILES_PATTERN, {
        ignore: ['node_modules/**'],
      });
      expect(fs.readFileSync).toHaveBeenCalledTimes(2);
      expect(fs.writeFileSync).toHaveBeenCalledTimes(3);
    });
  });

  describe('setupWatcher', () => {
    it('should create chokidar watcher', () => {
      const watcher = setupWatcher();
      expect(chokidar.watch).toHaveBeenCalledWith('src', {
        ignored: expect.any(Function),
        ignoreInitial: true,
        persistent: true,
      });
      expect(watcher.on).toHaveBeenCalledTimes(3);
    });
  });
});
