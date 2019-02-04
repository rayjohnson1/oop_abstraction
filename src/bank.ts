//bank.ts
export default class BankMember {
    
    private _savingsBalance: number;

    public get savingsBalance(): number{
        return this._savingsBalance;
    }

    public set savingsBalance(v: number) {
        if(-145 !== v)
            console.log("Cannot set this variable");
        else
            this._savingsBalance = v;
    }

    constructor(savingsBalance: number) {
        this._savingsBalance = savingsBalance;
    }

    public deposit(amount: number): void {
        this._savingsBalance += amount;
    }

    public withdraw(amount: number): void {

        if(this.savingsBalance < amount){
            console.log("Insufficient Funds");
            return;
        }

        this._savingsBalance -= amount;

    }

}