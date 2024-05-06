// 3-6: Getter And Setter
// TODO: remove the comment from 3.5.ts

class BankAccount {
  public id: number;
  public name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  addDeposit(amount: number) {
    this._balance = this._balance + amount;
    return;
  }

  // getter
  public get balance() {
    return this._balance;
  }

  // setter
  public set deposit(amount: number) {
    this._balance = this._balance + amount;
  }
}

const poorMan = new BankAccount(111, "Mr. Poor", 25);
poorMan.deposit = 20;

const balance = poorMan.balance;
console.log(balance);
