import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    this._Class = new.target;
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    return new this._Class();
  }
}
