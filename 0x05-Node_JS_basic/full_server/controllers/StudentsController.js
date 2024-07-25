import readDatabase from '../utils.js';

export default class StudentsController {
  static getAllStudents(request, response) {
    if (response === undefined) return;

    readDatabase(process.argv[2]).then((data) => {
      let content = 'This is the list of our students\n';
      const aObject = Object.entries(data);
      const arraySortedF = aObject.sort((first, second) => first[0].localeCompare(second[0]));
      for (const [field, names] of arraySortedF) {
        content += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      content = content.trim();
      response.status(200).end(content);
    }).catch((err) => {
      console.log(err);
      response.end(500, 'Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    if (request === undefined) return;

    const { params } = { ...request };

    if (params === undefined || params.major === undefined) {
      response.status(500).end('Major parameter must be CS or SWE');
      return;
    }
    const { major } = { ...params };
    if (!(['SWE', 'CS'].includes(major))) {
      response.status(500).end('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2]).then((data) => {
      response.setHeader('Content-Type', 'text/plain');
      response.status(200).end(`List: ${data[major].join(', ')}`);
    }).catch(() => response.status(500).end('Cannot load the database'));
  }
}
