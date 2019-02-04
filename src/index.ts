//index
import BankMember from './BankMember';
import SavingsAccount from './SavingsAccount';

const chuck = new BankMember(`Chuck`);

console.log(`\nCreating ${chuck.name}'s new savings account...`);
const chucksSavingsAccount = new SavingsAccount(chuck.memberId, 3000);
chuck.createSavingsAccount(chucksSavingsAccount);

console.log(`\n${chuck.name}'s starting Balance: ${chuck.getSavingsBalance()}`);

console.log("\nDepositing funds");
chuck.depositToSavings(150);
console.log(`Chuck's Savings Balance: $${chuck.getSavingsBalance()} \n`);

console.log("Withdrawing funds");
chuck.withdrawFromSavings(1650);
console.log(`Chuck's Savings Balance: $${chuck.getSavingsBalance()} \n`);