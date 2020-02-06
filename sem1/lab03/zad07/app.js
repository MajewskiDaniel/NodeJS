const request = require("request");
const yargs = require("yargs");
const args = yargs.argv;
const userId = args.userId;

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
const getWeather = (lat, lng, callback) => {
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    request(urlWeather, function (error, response, body) {
        if (response.statusCode === 200) {
            let weather = JSON.parse(body);
            callback(weather)
        } else {
            console.log(`weather not found`);
        }
    });
}

getUser(userId, (user) => {
    console.log(user.name);
    console.log(`lattitude: ${user.address.geo.lat}`);
    console.log(`longitude: ${user.address.geo.lng}`);
    let lat = user.address.geo.lat;
    let lng = user.address.geo.lng;
    getWeather(lat, lng, (weather) => {
        console.log(`Aktualna pogoda dla użytkownika ${user.name} to:`)
        console.log(weather.main)
    })
})