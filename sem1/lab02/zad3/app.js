const lodash = require('lodash');

const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

const funcResult = utils2.uniq(someArray);

console.log(someArray);
console.log(funcResult);

const tabA = ['ala', 'ma', 'kota'];
const tabB = ['ala', 'ma', 'psa'];

console.log(utils2.difference(tabA, tabB));
console.log(utils2.diff(tabB, tabA));