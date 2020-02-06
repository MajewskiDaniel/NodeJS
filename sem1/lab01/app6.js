let a = 4;
let b = 3;
const math = require('./math6');

console.log('x+y=', math.add(a,b));
console.log('x-y=', math.sub(a,b));
console.log('x*y=', math.multi(a,b));
console.log('x/y=', math.div(a,b));
console.log('Pi=', math.pi);

const fs = require('fs');
const line1 = '3 + 5 = ' +math.add(a,b) + '\n';
const line2 = '3 - 5 = ' +math.sub(a,b) + '\n';
const line3 = '3 * 5 = ' +math.multi(a,b) + '\n';
const line4 = '3 / 5 = ' +math.div(a,b) + '\n';


fs.writeFileSync('./result6.txt', line1);
fs.appendFileSync('./result6.txt', line2);
fs.appendFileSync('./result6.txt', line3);
fs.appendFileSync('./result6.txt', line4);



const data = fs.readFileSync('result6.txt', 'utf-8');
console.log(data);
