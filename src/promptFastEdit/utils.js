export function getPromptVariablesMd(values) {
  const res = Object.entries(values).reduce((res, [k, v]) => {
    return res + `### ${k}\n\n${v}\n\n`;
  }, '[TOC]\n\n');
  return `${res.trimEnd()}\n`;
}
