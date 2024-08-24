
/**
 * 1. returnedValue1 must be used in async2 async3
 * 2. Wait until all promises from async2 asynce3 then print out
 */

asyncFunc01('firstParam')
    .then(function (returnedValue1){
        return Promise.all([
            asyncFunc02(returnedValue1),
            asyncFunc03(returnedValue1)
        ]);
    })
    .then(function(results){
        const [result2, result3] = results;
        console.log(`result2: ${JSON.stringify(result2)}`);
        console.log(`result3: ${JSON.stringify(result3)}`);
    })
    .catch(function(err){
        resizeBy({status: 500, msg:err})
        console.log(err);
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
        throw "sth"
        // setTimeout(function () {
        //     const returnedValue = 'asyncFunc02: ' + param2;
        //     resolve(returnedValue);
        // }, 2000);
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