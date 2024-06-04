export default function updateStudentGradeByCity(ArrayStudents, city, ArrayGrade) {
  if (typeof ArrayStudents !== 'object' || !Array.isArray(ArrayStudents)) return [];
  if (typeof ArrayGrade !== 'object' || !Array.isArray(ArrayGrade)) return [];
  if (typeof city !== 'string') return [];

  const ArrayStudentsCity = ArrayStudents.filter((item) => item.location === city);

  const UpdatedStudents = ArrayStudentsCity.map((student) => {
    const StudentGrade = ArrayGrade.filter((Grade) => Grade.studentId === student.id);
    if (StudentGrade.length === 1) {
      return {
        ...student,
        grade: StudentGrade[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
  return UpdatedStudents;
}
