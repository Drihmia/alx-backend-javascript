const http = require('http');
const fs = require('fs');

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
    return 'Cannot load the database';
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

const app = http.createServer((req, resp) => {
  resp.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    resp.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const fileName = process.argv[2];
    resp.write('This is the list of our students\n');
    countStudents(fileName).then((data) => resp.end(data.toString()));
  }
});

app.listen(1245);
module.exports = app;
