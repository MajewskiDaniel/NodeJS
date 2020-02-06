const fs = require('fs');

// podawanie łącznej liczby cytatów w bazie
const getTotalHandler = () => {
    fs.readFile('quotes.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log(`Łączna ilość cytatów w bazie to: ${(JSON.parse(data)).length}`);
        }
    });
}
module.exports = {
    command: 'total',
    desc: 'Podanie ilości cytatów w bazie',
    handler: getTotalHandler
};