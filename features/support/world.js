const { setWorldConstructor } = require('cucumber');
const Account = require('../../models/account');

class World {
  constructor() {
    this.account = new Account();
  }

  setAccount(name, sum) {
    this.account.setAccount(name, sum);
  }

  withdraw(sum) {
    this.account.withdraw(sum);
  }

  result() {
    return this.account.getCurrentBalance();
  }
}

setWorldConstructor(World);
