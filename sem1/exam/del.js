const fs = require('fs');

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
module.exports = {
    command: 'del <id>',
    desc: 'Usunięcie cytatu po numerze ID',
    handler: getDelHandler
};