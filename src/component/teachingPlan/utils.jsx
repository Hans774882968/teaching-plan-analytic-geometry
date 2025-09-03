export function wrapStringAsParagraph(node) {
  if (typeof node === 'string') {
    return <p>{node}</p>;
  }
  return node;
}
