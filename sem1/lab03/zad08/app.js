const fs = require('fs');
const args = require('yargs').argv;
const userId = args.userId;
getUser = require('./user');
getWeather = require('./weather');

getUser(userId, (user) => {
    console.log(user.name);
    console.log(`lattitude: ${user.address.geo.lat}`);
    console.log(`longitude: ${user.address.geo.lng}`);
    let lat = user.address.geo.lat;
    let lng = user.address.geo.lng;
    getWeather(lat, lng, (weather) => {
        console.log(`Aktualna pogoda dla użytkownika ${user.name} to:`)
        console.log(weather.main);
    })
})