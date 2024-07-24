const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

async function countStudents(path) {
  const lines = [];

  try {
    const data = await fs.readFileSync(path, 'utf8');

    let line = [];
    let word = '';
    for (const char of data.toString()) {
      if (char === ',') {
        line.push(word);
        word = '';
      } else if (char === '\n') {
        if (word.trim() === '') {
          const ln = line.filter((word) => word.trim() === '');
          if (ln.length === 0) break;
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
  } catch (e) {
    // throw new Error('Cannot load the database');
  }

  const numberStudent = lines.length;

  const dict = {};
  for (const line of lines) {
    const field = line[line.length - 1];
    const studentName = line[0];

    if (field && !(field in dict)) dict[field] = [];

    if (field) dict[field].push(studentName);
  }

  let textBody = `Number of students: ${numberStudent}\n`;
  for (const [k, v] of Object.entries(dict)) {
    textBody += `Number of students in ${k}: ${v.length}. List: ${v.join(', ')}\n`;
  }
  return textBody.trim();
}

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
  const filePath = process.argv[2];

  res.send(`This is the list of our students\n${await countStudents(filePath)}`);
});

app.listen(port, () => {});

module.exports = app;
