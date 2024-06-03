export default function getStudentIdsSum(ArrayStudents) {
  if (typeof ArrayStudents !== 'object' || !Array.isArray(ArrayStudents)) return [];
  const SumIds = ArrayStudents.reduce((accumulator, InitVal) => accumulator + InitVal.id, 0);
  return SumIds;
}
