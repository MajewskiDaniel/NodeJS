const math = require('./calc');
const argv = require('yargs').argv;
const fs = require('fs');

const operator = argv.operator;
const a = argv.a;
const b = argv.b;

function abcCallback(wynik) {
        console.log('moj callback');
        console.log('wynik', wynik);
        fs.writeFile('wynik.txt', wynik, function saveCallback() {
                console.log('plik zostal zapisany');
        })
}

switch (operator) {
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

