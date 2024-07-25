import { readFile } from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = [];
    readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      if (data) {
        let line = [];
        let word = '';

        for (const char of data.toString()) {
          if (char === ',') {
            line.push(word);
            word = '';
          } else if (char === '\n') {
            if (word.trim() === '') {
              const notEmpty = line.filter((word) => word.trim() !== '');
              if (!(notEmpty.length)) break;
            }
            line.push(word);
            lines.push(line);
            line = [];
            word = '';
          } else {
            word += char;
          }
        }

        // Remove header line.
        lines.shift();

        const objectStudentField = {};

        lines.forEach((line) => {
          const field = line[line.length - 1];
          const studentName = line[0];
          if (!(field in objectStudentField)) objectStudentField[field] = [];
          objectStudentField[field].push(studentName);
        });

        resolve(objectStudentField);
      }
    });
  });
}

export default readDatabase;
