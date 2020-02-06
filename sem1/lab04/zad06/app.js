const request = require('request');


const getUser = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const user = JSON.parse(body);
                resolve(user)
            } else {
                reject(`user not found`);
            };
        });
    })
}

const ids = [2, 5, 7];
const userPromise = ids.map(id => getUser(id));

Promise.all(userPromise).then(result => {
    result.forEach((result) => {
        console.log(result.name);
    });
    console.log('--Promise fulfilled--')
})