export default class Building {
  constructor(sqft) {
    if (new.target !== Building
      && !new.target.prototype.hasOwnProperty.call(new.target.prototype, ('evacuationWarningMessage'))) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  // Getter and Setter for sqft ---------------------------------------
  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value; // eslint-disable-line no-underscore-dangle
  }
}
