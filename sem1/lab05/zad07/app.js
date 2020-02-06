const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users/2';


const getUser = async (url) => {
    const user = axios.get(url);
    return user;
}


(async () => {
    try {
        const user = await getUser(url);
        console.log(user.data);
    } catch (error) {
        console.log(error.message);
    }
})();