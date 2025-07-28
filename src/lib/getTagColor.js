export const tagColorList = [
  'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900',
  'bg-pink-100 text-pink-800 hover:bg-pink-200 hover:text-pink-900',
  'bg-teal-100 text-teal-800 hover:bg-teal-200 hover:text-teal-900',
  'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:text-indigo-900',
  'bg-orange-100 text-orange-800 hover:bg-orange-200 hover:text-orange-900',
  'bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900',
  'bg-cyan-100 text-cyan-800 hover:bg-cyan-200 hover:text-cyan-900',
];

export function getTagColorByIndex(idx) {
  return tagColorList[idx % tagColorList.length];
}
