// 3-10: Encapsulation In OOP
class BankAccount1 {
  public id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  addDeposit(amount: number) {
    this._balance = this._balance + amount;
    return;
  }

  private getBalance() {
    return this._balance;
  }
}

class StudentAccount1 extends BankAccount1 {
  // public get balance() {
  // return this._balance;
  // Property '_balance' is private and only accessible within class 'BankAccount1'
  // }
}

const poorMan1 = new BankAccount1(111, "Mr. Poor", 20);
// poorMan1.getBalance();
// property 'getBalance' is private and only accessible within class 'BankAccount1'

const studentMan1 = new StudentAccount1(222, "Mr. Student", 50);

// console.log(studentMan1.balance);
