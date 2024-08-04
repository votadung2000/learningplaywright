console.log('1. Chay toi nha thang Teo');
// Asynchronus
setTimeout(callbackFunc.bind({sth: "hello"}, 'Teo'), 1000);
console.log('3. Chay toi quan cafe');

function callbackFunc(name){
    console.log(this.sth)
    console.log(`2. ${name} oi, uong cafe khong?`);
}

//event emmiter