// 3-5: Access Modifiers
// class BankAccount {
//   public id: number;
//   public name: string;
//   protected _balance: number;

//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this._balance = balance;
//   }

//   addDeposit(amount: number) {
//     this._balance = this._balance + amount;
//     return;
//   }

//   getBalance() {
//     return this._balance;
//   }
// }

// class StudentAccount extends BankAccount {
//   public get balance() {
//     return this._balance;
//   }
// }

// const poorMan = new BankAccount(111, "Mr. Poor", 20);
// const studentMan = new StudentAccount(222, "Mr. Student", 50);

// console.log(studentMan.balance);

/**
 * Access modifiers
 * - public: will expose the property or method to instance and child class
 * - private: property will only accessible in the class
 * - protected: property or method will expose the property to his child class
 */
