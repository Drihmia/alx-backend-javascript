export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter and Setter for name ---------------------------------------
  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value; // eslint-disable-line no-underscore-dangle
  }

  // Getter and Setter for length -------------------------------------
  get length() {
    return this._Length; // eslint-disable-line no-underscore-dangle
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value; // eslint-disable-line no-underscore-dangle
  }

  // Getter and Setter for students ----------------------------------
  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array of Strings');
    }
    for (const student of value) {
      if (typeof student !== 'string') {
        throw new TypeError('Students must be an array of Strings');
      }
    }
    this._students = value; // eslint-disable-line no-underscore-dangle
  }
}
