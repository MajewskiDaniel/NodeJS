const fs = require('fs');
const os = require('os');

const user = os.userInfo();

console.log(user.username);

fs.writeFileSync('./user7.txt', user.username);