import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // Getter and Setter for floors ---------------------------------------
  get floors() {
    return this._floors; // eslint-disable-line no-underscore-dangle
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = value; // eslint-disable-line no-underscore-dangle
  }

  // evacuationWarningMessage ---------------------------------------------
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
