const addCommand = require('./add');
const showCommand = require('./show');
const listCommand = require('./list');
const delCommand = require('./del');
const totalCommand = require('./total');
const randomCommand = require('./random');
const sortCommand = require('./sort');
const urlCommand = require('./url');

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