import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter and Setter for amount ---------------------------------------
  get amount() {
    return this._amount; // eslint-disable-line no-underscore-dangle
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value; // eslint-disable-line no-underscore-dangle
  }

  // Getter and Setter for currency ---------------------------------------
  get currency() {
    return this._currency; // eslint-disable-line no-underscore-dangle
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = value; // eslint-disable-line no-underscore-dangle
  }

  // displayFullPrice ---------------------------------------
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method : convertPrice ---------------------------------------
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
