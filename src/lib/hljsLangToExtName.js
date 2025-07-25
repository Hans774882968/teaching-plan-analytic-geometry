import mimeTypes from 'mime-types';

export default function hljsLangToExtName(language) {
  const contentType = mimeTypes.lookup(language) || 'txt';
  const extName = mimeTypes.extension(contentType) || 'txt';
  return extName;
}
