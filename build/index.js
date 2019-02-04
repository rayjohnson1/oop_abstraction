"use strict";

var _bank = _interopRequireDefault(require("./bank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//index
var chuck = new _bank.default(3000);
console.log("\nDepositing Funds");
chuck.deposit(150);
console.log("Chuck's Savings Balance: $".concat(chuck.savingsBalance, " \n"));
console.log("Using our set method to change Chuck's savingsBalance.... \n");
chuck.savingsBalance = 0;
console.log("Withdrawing Funds");
chuck.withdraw(1650);
console.log("Chuck's Savings Balance: $".concat(chuck.savingsBalance, " \n"));