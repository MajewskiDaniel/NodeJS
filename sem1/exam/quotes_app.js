const fs = require('fs');
const axios = require('axios');

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
const addCommand = {
    command: 'add <quote> <auth> <cat>',
    desc: 'Dodawanie cytatu, autora i kategorii (po spacji, w cudzysłowie)',
    handler: addTaskHandler,
};

// wyświetlanie cytatów wg ID
const getShowHandler = (args) => {
    fs.readFile('quotes.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            myQuotes = JSON.parse(data);
            showQuote = myQuotes.find((quote) => quote.id === args.id);
            console.log(showQuote);
        }
    });
}
const showCommand = {
    command: 'show <id>',
    desc: 'Wyświetlenie cytatu o podanym numerze ID',
    handler: getShowHandler
};

// wyświetlanie listy
const getListHandler = () => {
    fs.readFile('quotes.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log(JSON.parse(data));
        }
    });
}
const listCommand = {
    command: 'list',
    desc: 'Wyświetlanie wszystkich cytatów i ich autorów',
    handler: getListHandler
};

// usuwanie cytatów
const getDelHandler = (args) => {
    fs.readFile('quotes.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            myQuotes = JSON.parse(data);
            delIndex = myQuotes.findIndex((quote) => quote.id === args.id);
            if (delIndex === -1) {
                console.log(`brak cytatu o ID:${args.id} w bazie`)
            } else {
                myQuotes.splice(delIndex, 1);
                fs.writeFile('quotes.json', JSON.stringify(myQuotes), () => {
                    console.log(`cytat o ID:${args.id} został usunięty`);

                })
            };
        }
    });
}
const delCommand = {
    command: 'del <id>',
    desc: 'Usunięcie cytatu po numerze ID',
    handler: getDelHandler
};

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
const totalCommand = {
    command: 'total',
    desc: 'Podanie ilości cytatów w bazie',
    handler: getTotalHandler
};

// wyświetlanie losowego cytatu z bazy
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
const randomCommand = {
    command: 'random',
    desc: 'Wyświetlenie losowego cytatu z bazy',
    handler: getRandomHandler
};

// sortowanie bazy
const getSortHandler = (args) => {
    fs.readFile('quotes.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            myQuotes = JSON.parse(data);
            if (args.arg === "id") {
                myQuotes.sort((a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                });
            } else if (args.arg === "author") {
                myQuotes.sort((a, b) => {
                    if (a.author < b.author) return -1;
                    if (a.author > b.author) return 1;
                    return 0;
                });
            } else if (args.arg === "category") {
                myQuotes.sort((a, b) => {
                    if (a.category < b.category) return -1;
                    if (a.category > b.category) return 1;
                    return 0;
                });
            } else {
                console.log(`błędny argument sortowania ${args.arg}\nmożliwe sortowanie wg id/author/category`)
            }
            fs.writeFile('quotes.json', JSON.stringify(myQuotes), () => {
                console.log(`baza posortowana wg ${args.arg}`);
            });
        }
    });
}
const sortCommand = {
    command: 'sort <arg>',
    desc: 'Sortowanie bazy wg: id/author/category',
    handler: getSortHandler
};

// wyświetlanie losowego cytatu z URL
const getUrlHandler = () => {
    const quotesUrl = `http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php`;
    const getUrl = async (url) => {
        const randomQuote = axios.get(url);
        return randomQuote;
    };
    (async () => {
        try {
            const quote = await getUrl(quotesUrl);
            console.log(quote.data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    })();
}

const urlCommand = {
    command: 'url',
    desc: 'Wyświetlenie losowego cytatu z serwera',
    handler: getUrlHandler
};

require('yargs')
    .command(addCommand)
    .command(showCommand)
    .command(listCommand)
    .command(delCommand)
    .command(totalCommand)
    .command(randomCommand)
    .command(sortCommand)
    .command(urlCommand)
    .demandCommand(1, 'Musisz podać przynajmniej jedno polecenie')
    .help()
    .argv