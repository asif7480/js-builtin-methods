const num = 200;
const decimalNum = 20.112
console.log(typeof num);


const anotherNum = new Number(100);

console.log(typeof anotherNum);


console.log(num.toString().length);

console.log(decimalNum.toFixed(1));
console.log(num.toFixed(2));

const hundreds = 10000000
console.log(hundreds.toLocaleString());

// MATH functions
console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);