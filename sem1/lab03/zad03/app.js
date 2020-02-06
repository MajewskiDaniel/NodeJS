const fs = require('fs');
const args = require('yargs').argv;

const user = {
    name: args.name,
    lastName: args.lastName
};

fs.readFile("./user.json", 'utf8', function (err, data) {
    const userObject = JSON.parse(data);
    console.log(userObject.name);
    const userStrigify = JSON.stringify(user);
    fs.writeFile('user.json', userStrigify, () => {
        console.log('plik został zapisany');
    });
});

