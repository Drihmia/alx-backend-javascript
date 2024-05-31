export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // eslint-disable-line no-underscore-dangle
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  [Symbol.toPrimitive](toCast) {
    if (toCast === 'string') {
      return this._location;
    }
    if (toCast === 'number') {
      return this._size;
    }
    return true;
  }
}
