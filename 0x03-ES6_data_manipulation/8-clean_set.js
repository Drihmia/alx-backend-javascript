export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) return '';
  if (typeof startString !== 'string' || startString.length === 0) return '';

  const trimmedStrList = new Set();

  for (const str of set) {
    if (str.startsWith(startString)) {
      trimmedStrList.add(str.substring(startString.length));
    }
  }
  return [...trimmedStrList].join('-');
}
