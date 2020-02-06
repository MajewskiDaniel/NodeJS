const request = require("request");

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

module.exports = getWeather;