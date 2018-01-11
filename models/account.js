module.exports = class Account {
  constructor() {
    this._accountName = '';
    this._currentBalance = 0;
  }

  setAccount(_name, _sum) {
    this._accountName = _name;
    this._currentBalance = _sum;
  }
  withdraw(_sum) {
    this._currentBalance = this._currentBalance - _sum;
  }

  getCurrentBalance() {
    return this._currentBalance;
  }
};
