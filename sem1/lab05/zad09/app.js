const axios = require('axios');

let id = 2;

const getUser = async (urlUser) => {
    const user = axios.get(urlUser);
    return user;
}

const getWeather = async (urlWeather) => {
    const weather = axios.get(urlWeather);
    return weather;
}


(async () => {
    try {
        const user = await getUser(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log(`user: ${user.data.name}`);
        let lat = user.data.address.geo.lat;
        let lng = user.data.address.geo.lng;
        const weather = await getWeather(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`);
        console.log(`temp: ${weather.data.main.temp}`);
    } catch (error) {
        console.log(error.message);
    }
})();