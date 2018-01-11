const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given(
  'an existing client named {string} with {float} EUR in his account',
  function(name, sum) {
    this.setAccount(name, sum);
  }
);

When('he withdraws {float} EUR from his account', function(sum) {
  this.withdraw(sum);
});

Then('the new balance is {float} EUR', function(sum) {
  expect(this.result()).to.eql(sum);
});
