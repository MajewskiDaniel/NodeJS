const axios = require('axios');

const ids = [2, 3, 5, 7];

const getUser = async (id) => {
    const user = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return user;
}

const userPromise = ids.map(id => getUser(id));

(async () => {
    try {
        await Promise.all(userPromise).then(result => {
            result.forEach((result) => {
                console.log(result.data.name);
            })
        });
    } catch (error) {
        console.log(error.message);
    }
})();