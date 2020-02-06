const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users/2';

(async function getUser() {
    await axios.get(url)
        .then(user => console.log(user.data));
})();