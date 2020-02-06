const fs = require('fs');

// tworzenie klasy cytatów
class Quote {
    constructor(id, quote, author, category, counter) {
        this.id = id;
        this.quote = quote;
        this.author = author;
        this.category = category;
        this.counter = counter;
    }
}

// dodawanie do listy
const addTaskHandler = (args) => {
    let myQuotes = [];
    let quote = args.quote;
    let author = args.auth;
    let category = args.cat;
    let counter = 0;
    fs.readFile('quotes.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else if (data === "") {
            let id = 1;
            const newQuote = new Quote(id, quote, author, category, counter);
            myQuotes.push(newQuote);
            fs.writeFile('quotes.json', JSON.stringify(myQuotes), () => {
                console.log('pierwszy cytat został zapisany');
            });
        } else {
            myQuotes = JSON.parse(data);
            myQuotes.sort((a, b) => {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
                return 0;
            });
            let id = myQuotes.length + 1;
            if (myQuotes[0].id === 1) {
                for (let i = 1; i < myQuotes.length; i++) {
                    if (myQuotes[i].id > myQuotes[i - 1].id + 1) {
                        id = myQuotes[i - 1].id + 1;
                    }
                }
            } else {
                id = 1
            }
            const newQuote = new Quote(id, quote, author, category, counter);
            myQuotes.push(newQuote);
            fs.writeFile('quotes.json', JSON.stringify(myQuotes), () => {
                console.log('cytat został zapisany');
            });
        }
    });

}
module.exports = {
    command: 'add <quote> <auth> <cat>',
    desc: 'Dodawanie cytatu, autora i kategorii (po spacji, w cudzysłowie)',
    handler: addTaskHandler,
};