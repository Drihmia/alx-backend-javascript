import promises from 'fs';

export default async function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    const lines = [];

    try {
      promises.readFile(filePath, (err, data) => {
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
        } else {
          reject(err);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}
