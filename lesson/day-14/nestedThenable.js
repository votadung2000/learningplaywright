// Thenable chain - Problem
asyncFunc01('firstInput')
    .then(function (returnedValue1) {
        return asyncFunc02(returnedValue1).then(function () {
            return asyncFunc03(returnedValue1);
        })
    })
    .then(function (returnedValue3) {
        console.log(returnedValue3)
    })

function asyncFunc01(param1) {
    console.log(`Processing param: ${param1}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFunc01: ' + param1;
            resolve(returnedValue);
        }, 1000);
    });
}
function asyncFunc02(param2) {
    console.log(`Processing param: ${param2}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFunc02: ' + param2;
            resolve(returnedValue);
        }, 2000);
    });
}
function asyncFunc03(param3) {
    console.log(`Processing param: ${param3}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnedValue = 'asyncFunc03: ' + param3;
            resolve(returnedValue);
        }, 1000);
    });
}