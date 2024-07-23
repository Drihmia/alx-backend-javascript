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
    throw new Error('Cannot load the database');
  }

  const numberStudent = lines.length;

  const dict = {};
  for (const line of lines) {
    const field = line[line.length - 1];

    if (!(field in dict)) dict[field] = [];

    dict[field].push(line[0]);
  }

  // loggin to the stdout:
  console.log(`Number of students: ${numberStudent}`);
  for (const [k, v] of Object.entries(dict)) {
    console.log(`Number of students in ${k}: ${v.length}. List: ${v.join(', ')}`);
  }
}

module.exports = countStudents;
