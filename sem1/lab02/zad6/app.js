const math = require('./calc');
const argv = require('yargs').argv;

console.log(process.argv);
console.log(argv);

const operator = argv.operator;
const a = argv.a;
const b = argv.b;

switch(operator) {
    case '+':
            console.log(math.add(a, b));
            break;
    case '-':
            console.log(math.sub(a, b));
            break;
    case '*':
            console.log(math.multi(a, b));
            break;
    case '/':
            console.log(math.div(a, b));
            break;
}

