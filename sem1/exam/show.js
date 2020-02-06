const fs = require('fs');

const getShowHandler = (args) => {
    fs.readFile('quotes.json', 'utf-8', (error, data) => {
        if (error) {
            console.log(error.message);
        } else {
            myQuotes = JSON.parse(data);
            showQuote = myQuotes.find((quote) => quote.id === args.id);
            if (showQuote === undefined) {
                console.log(`brak cytatu o ID: ${args.id} w bazie`)
            } else console.log(showQuote);
        }
    });
}
module.exports = {
    command: 'show <id>',
    desc: 'Wyświetlenie cytatu o podanym numerze ID',
    handler: getShowHandler
};