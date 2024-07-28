/* # LAB 4
Creating 1 object representing Bank Count Number with below structure:
```js
{
    accountNumber: String,
    routingNumber: String,
    balance: Number
}
```
. Creating another Bank Account Object which clone from the previous one and update the accountNumber only
. Put them into ann array call: bankAccounts

. Write a consolse interface app to:
+ allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
+ allow user to withdraw the money and avoid user to take more than current balance
+ Note: Strongly recommend to create functions to process each tasks

```shell

=== Banking application===
1. Find an account
2. Update balance
0. Exit the program

```
*/

const readline = require(`readline-sync`);

let accountNumberInput = readline.question(`Please enter account number: `);

const bankAccountsNumber = {
    accountNumber: "9876543",
    routingNumber: "123456789",
    balance: 345,
};

const bankAccountsObject = Object.assign({}, bankAccountsNumber);
bankAccountsObject.accountNumber = "4282843";

const bankAccounts = [bankAccountsNumber, bankAccountsObject];

findAccountInfo();

// function findAccountInfo() {
//     let findAccount = bankAccounts?.find(ele => ele?.accountNumber === accountNumberInput)

//     if (findAccount) {
//         console.log(`Account Number: ${findAccount?.accountNumber}`);
//         console.log(`Your balance is: ${findAccount?.balance}`);
//         updateAccountBalance(findAccount?.balance);
//     } else {
//         console.log(`Your account number is invalid!`);
//     }
// }

function findAccountInfo() {
    let isFound = false;
    for (let index in bankAccounts) {
        let accountNumber = bankAccounts[index].accountNumber;
        let balanceInfo = bankAccounts[index].balance;
        if (accountNumberInput === accountNumber) {
            console.log(`Account Number: ${accountNumber}`);
            console.log(`Your balance is: ${balanceInfo}`);
            isFound = true;
            updateAccountBalance(balanceInfo);
            break;
        }
    }

    if (!isFound) {
        console.log(`Your account number is invalid!`);
    }
}

// check balance & print alert/ update balance
function updateAccountBalance(balanceInfo) {
    let withdrawMoney = Number(readline.question(`Please enter money you wish to withdraw: `));
    const updateBalance = balanceInfo - withdrawMoney;
    if (!(updateBalance >= 0)) {
        console.log('Your withdrawn number is more than current balance!');
    } else {
        console.log(`Your balance is: ${updateBalance}`);
    }
}