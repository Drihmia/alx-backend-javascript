import readDatabase from '../utils';

class StudentsController {
  static getAllStudents (request, response) {
    if (response === undefined) return;

    const DbFilePath = process.argv[2];

    readDatabase(DbFilePath).then((data) => {
      let content = 'This is the list of our students\n';
      const aObject = Object.entries(data);
      const arraySortedF = aObject.sort((first, second) => first[0].localeCompare(second[0]));
      for (const [field, names] of arraySortedF) {
        content += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      content = content.trim();
      response.status(200).send(content);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor (request, response) {
    if (request === undefined) return;

    const { params } = { ...request };

    if (params === undefined || params.major === undefined) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    const { major } = { ...params };
    if (!(['SWE', 'CS'].includes(major))) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2]).then((data) => {
      response.setHeader('Content-Type', 'text/plain');
      response.status(200).send(`List: ${data[major].join(', ')}`);
    }).catch(() => response.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
