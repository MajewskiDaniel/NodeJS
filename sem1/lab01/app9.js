const fs = require('fs');

const name = process.argv[2];
let result;
if(name) {
    result = 'Hello ' + name;
}   
else {
    result = 'Hello Sir';
} 

fs.writeFileSync('./user9.txt', result);

