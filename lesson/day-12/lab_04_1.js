const readline = require('readline-sync');

const teoAccount = {
    accountNumber: '123',
    routingNumber: 'R-123',
    balance: 100
};

const tiAccount = cloneFrom(teoAccount);
tiAccount.accountNumber = '234';
tiAccount.routingNumber = 'R-234';
tiAccount.balance = '200';

const tunAccount = cloneFrom(teoAccount);
tunAccount.accountNumber = '345';
tunAccount.routingNumber = 'R-345';
tunAccount.balance = '300';

const bankAccounts = [tiAccount, teoAccount, tunAccount];

// call the main function
myBankApp();

function myBankApp() {
    printMenuOption();
    const userOption = Number(readline.question(`Please select option: `));

    switch (userOption) {
        case 1:
            const foundAccount = findAccount();
            logAccountInfo(foundAccount);
            break;
        case 2:
            const updatedAccount = withdrawMoney();
            logAccountInfo(updatedAccount);
            break;
        case 0:
            console.log("Goodbye!");
            break;
        default:
            console.log('Wrong option!');
    }
}

function findAccount() {
    const targetAccountNum = readline.question('Please input account number:').trim();
    let foundAccount = undefined;
    foundAccount = bankAccounts.find(function (account) {
        if (account.accountNumber === targetAccountNum) {
            return account;
        }
    })
    return foundAccount;
}

function withdrawMoney() {
    const foundAccount = findAccount();
    if (!foundAccount) {
        console.log('Account is not existing!');
        return
    }
    if (foundAccount) {
        const amountToWithdraw = Number(readline.question('Amount to withdraw:').trim());
        const { balance } = foundAccount;
        if (balance < amountToWithdraw) {
            console.log('Insufficient balance!');
            return;
        }
        foundAccount.balance = balance - amountToWithdraw;
    } else {
        console.log('Account is not existing!');
    }
    /**
     * 1. Ask about accountNum
     *  if exist
     *      withdraw
     *  else
     *      accountNum is wrong!
     */
}

function logAccountInfo(accountNumber, balance) {
    if (account) {
        const { accountNumber, balance } = account;
        console.log(`${accountNumber}, ${balance}`);
        logAccountInfo(updateAccount);
    } else {
        console.log('Account is not existing!');
    }
}

function printMenuOption() {
    console.log('=== Banking application===');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit the program');
}

function cloneFrom(obj) {
    return JSON.parse(JSON.stringify(obj));
}

