const math = require('./calc');
const argv = require('yargs').argv;

console.log(process.argv);
console.log(argv);

const operator = argv.operator;
const a = argv.a;
const b = argv.b;

function abcCallback(wynik) {
    console.log('moj callback');
    console.log('wynik', wynik);
}

switch(operator) {
    case '+':
            math.add(a, b, abcCallback);
            break;
    case '-':
            math.sub(a, b, abcCallback);
            break;
    case '*':
            console.log(math.multi(a, b));
            break;
    case '/':
            console.log(math.div(a, b));
            break;
}

