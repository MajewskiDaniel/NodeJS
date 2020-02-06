const fs = require('fs');

const getRandomHandler = () => {
    fs.readFile('quotes.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            myQuotes = JSON.parse(data);
            let index = Math.floor(Math.random() * myQuotes.length);
            randomQuote = myQuotes[index]
            randomQuote.counter++;
            fs.writeFile('quotes.json', JSON.stringify(myQuotes), () => {
                console.log(randomQuote);
            });
        }
    });
}
module.exports = {
    command: 'random',
    desc: 'Wyświetlenie losowego cytatu z bazy',
    handler: getRandomHandler
};