const request = require("request");

const getUser = (userId, callback) => {
    const urlId = `https://jsonplaceholder.typicode.com/users/${userId}`;
    request(urlId, function (err, res, body) {
        if (res.statusCode === 200) {
            let user = JSON.parse(body);
            callback(user);
        } else {
            console.log(`user not found`);
        }
    })
};

module.exports = getUser;