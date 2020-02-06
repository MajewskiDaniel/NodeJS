const fs = require('fs');
const args = require('yargs').argv;

const user = {
    name: args.name,
    lastName: args.lastName
};

const userStrigify = JSON.stringify(user);
fs.writeFile('user.json', userStrigify, () => {
    console.log('plik został zapisany');
});