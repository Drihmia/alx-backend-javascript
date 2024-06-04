export default function hasValuesFromArray(Set, Array) {
  for (const item of Array) {
    if (!(Set.has(item))) return false;
  }
  return true;
}
