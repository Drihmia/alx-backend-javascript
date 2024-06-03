export default function getListStudentIds(ArrayObjects) {
  if (typeof ArrayObjects !== 'object' || !Array.isArray(ArrayObjects)) {
    return [];
  }
  const ListStudentsIds = ArrayObjects.map((item) => item.id);
  return ListStudentsIds;
}
