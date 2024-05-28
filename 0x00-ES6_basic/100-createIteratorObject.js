export default function createIteratorObject (report) {
  const EmployeeObject = report.allEmployees;
  // const test = ([].concat(...Object.values(EmployeeObject)));
  const test = ((Object.values(EmployeeObject).flat()));
  console.log(test);
  return (test);
}
