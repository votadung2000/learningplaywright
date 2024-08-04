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
callMe();

function callMe() {
    updateAccount(bankAccounts[0]);
    console.log(bankAccounts);
}

function updateAccount(account) {
    account.balance = 0;
}

function cloneFrom(obj) {
    return JSON.parse(JSON.stringify(obj));
}
