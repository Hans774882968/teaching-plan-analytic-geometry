export const CONFIG_FILES_PATTERN = 'src/**/*{config,Config,HQC}.{js,jsx}';

export function shouldChokidarIgnore(path, stats) {
  return stats?.isFile() && ![
    'config.js', 'Config.js', 'config.jsx', 'Config.jsx', 'HQC.js', 'HQC.jsx',
  ].some((v) => path.endsWith(v));
}
