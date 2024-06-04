export default function groceriesList() {
  const PartArray = [
    ['Pasta', 1],
    ['Rice', 1],
  ];
  const mapObject = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ...PartArray,
  ]);
  mapObject.set('Banana', 5);
  return mapObject;
}
