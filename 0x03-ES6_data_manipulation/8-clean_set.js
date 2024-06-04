export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) return '';
  if (typeof startString !== 'string' || startString.length === 0) return '';

  const trimmedStrList = [];

  for (const str of set) {
    if (str.startsWith(startString)) {
      trimmedStrList.push(str.substring(startString.length));
    }
  }
  return trimmedStrList.join('-');
}
