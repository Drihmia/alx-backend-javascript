export default function getStudentsByLocation(ArrayStudents, city) {
  if (typeof ArrayStudents !== 'object' || !Array.isArray(ArrayStudents)) return [];
  const FilterLocation = ArrayStudents.filter((object) => object.location === city);
  return FilterLocation;
}
