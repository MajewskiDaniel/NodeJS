const fs = require('fs');

const user = {
    name: 'Zenek',
    lastName: 'Nowik'
};

const userStrigify = JSON.stringify(user);
fs.writeFile('user.json', userStrigify, () => {
    console.log('plik został zapisany');
});