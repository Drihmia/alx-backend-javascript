export default function updateUniqueItems(mapObjeect) {
  if (!(mapObjeect instanceof Map)) throw new Error('Cannot process');

  for (const [key, value] of mapObjeect) {
    if (value === 1) mapObjeect.set(key, 100);
  }
}
