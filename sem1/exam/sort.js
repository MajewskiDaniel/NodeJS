const fs = require('fs');

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
module.exports = {
    command: 'sort <arg>',
    desc: 'Sortowanie bazy wg: id/author/category',
    handler: getSortHandler
};