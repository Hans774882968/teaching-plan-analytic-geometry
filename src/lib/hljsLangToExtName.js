import mimeTypes from 'mime-types';

const COMMONLY_USED_LANGUAGES = {
  javascript: 'js',
  typescript: 'ts',
  python: 'py',
  java: 'java',
  c: 'c',
  cpp: 'cpp',
  'c++': 'cpp',
  html: 'html',
  css: 'css',
  php: 'php',
  ruby: 'rb',
  go: 'go',
  rust: 'rs',
};

// TODO: 目前只是个 workaround ，有时间看看怎么改
export default function hljsLangToExtName(language) {
  const languageLower = language.toLowerCase();
  if (COMMONLY_USED_LANGUAGES[languageLower]) {
    return COMMONLY_USED_LANGUAGES[languageLower];
  }

  const contentType = mimeTypes.lookup(language) || 'txt';
  const extName = mimeTypes.extension(contentType) || 'txt';
  return extName;
}
