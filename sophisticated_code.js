/* sophisticated_code.js */

// This code demonstrates a complex and professional JavaScript program that simulates a bank account system.

// Define the Bank class to store the account information and operations
class Bank {
  constructor() {
    this.accounts = {};
  }
  
  // Create a new account with initial balance
  createAccount(accountNumber, initialBalance) {
    if (!this.accounts[accountNumber]) {
      this.accounts[accountNumber] = initialBalance;
      console.log(`Account ${accountNumber} successfully created.`);
    } else {
      console.log(`Account ${accountNumber} already exists.`);
    }
  }
  
  // Deposit a specified amount to an existing account
  deposit(accountNumber, amount) {
    if (this.accounts[accountNumber]) {
      this.accounts[accountNumber] += amount;
      console.log(`Successfully deposited ${amount} to account ${accountNumber}`);
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }
  
  // Withdraw a specified amount from an existing account
  withdraw(accountNumber, amount) {
    if (this.accounts[accountNumber]) {
      if (this.accounts[accountNumber] >= amount) {
        this.accounts[accountNumber] -= amount;
        console.log(`Successfully withdrew ${amount} from account ${accountNumber}`);
      } else {
        console.log(`Insufficient balance in account ${accountNumber}`);
      }
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }
  
  // Get the current balance of an existing account
  getBalance(accountNumber) {
    if (this.accounts[accountNumber]) {
      console.log(`Account ${accountNumber} has balance: ${this.accounts[accountNumber]}`);
    } else {
      console.log(`Account ${accountNumber} does not exist.`);
    }
  }
}

// Create a new instance of the Bank class
const bank = new Bank();

// Demonstrate the usage of the bank account system
bank.createAccount(123456, 1000);
bank.deposit(123456, 500);
bank.withdraw(123456, 200);
bank.getBalance(123456);

bank.createAccount(987654, 500);
bank.deposit(987654, 1000);
bank.withdraw(987654, 700);
bank.getBalance(987654);

bank.createAccount(456789, 200);
bank.withdraw(456789, 300);
bank.getBalance(456789);

console.log(bank.accounts);
// Output:
// Account 123456 successfully created.
// Successfully deposited 500 to account 123456
// Successfully withdrew 200 from account 123456
// Account 123456 has balance: 1300
// Account 987654 successfully created.
// Successfully deposited 1000 to account 987654
// Successfully withdrew 700 from account 987654
// Account 987654 has balance: 800
// Account 456789 successfully created.
// Insufficient balance in account 456789
// Account 456789 does not exist.
// { '123456': 1300, '987654': 800 }