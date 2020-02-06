function add(a, b, myCallback) {
    const result = a + b;
    myCallback(result);
}

function sub(a, b, myCallback) {
    const result = a - b;
    myCallback(result);
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

module.exports = {
    add: add,
    sub: sub,
    multi: multi,
    div: div,
}