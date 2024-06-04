export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) return '';
  if (typeof startString !== 'string' || startString.length === 0) return '';

  const trimmedStrList = [];

  for (const str of set) {
    if (typeof str === 'string' && str.startsWith(startString)) {
      trimmedStrList.push(str.slice(startString.length));
    }
  }
  return trimmedStrList.filter((str) => str.trim().length !== 0).join('-');
}
