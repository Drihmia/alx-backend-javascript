export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._Class = new.target;
  }

  cloneCar() {
    return new this._Class();
  }
}
