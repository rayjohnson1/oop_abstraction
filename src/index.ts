//index
import BankMember from './bank';

const chuck = new BankMember(3000);

console.log("\nDepositing Funds");
chuck.deposit(150);
console.log(`Chuck's Savings Balance: $${chuck.savingsBalance} \n`);

console.log("Using our set method to change Chuck's savingsBalance.... \n");
chuck.savingsBalance = 0;

console.log("Withdrawing Funds");
chuck.withdraw(1650);
console.log(`Chuck's Savings Balance: $${chuck.savingsBalance} \n`);