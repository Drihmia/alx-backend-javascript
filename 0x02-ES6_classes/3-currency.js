export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
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

  // Getter and Setter for code ---------------------------------------
  get code() {
    return this._code; // eslint-disable-line no-underscore-dangle
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value; // eslint-disable-line no-underscore-dangle
  }

  // displayFullCurrency ---------------------------------------
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
