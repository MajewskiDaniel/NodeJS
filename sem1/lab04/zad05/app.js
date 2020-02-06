const request = require('request');


const getUser = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return new Promise ((resolve, reject)=>{
        request(url, (error, response, body)=> {
            if (!error && response.statusCode === 200) {
                const user = JSON.parse(body);
                resolve(user)
              } else {
                reject(`user not found`); 
                };
        });
    })
}

const getWeather = (lat, lng) => {
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`;
    return new Promise((resolve, reject)=>{
        request(urlWeather, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const weather = JSON.parse(body);
                resolve(weather);
            } else {
                reject(`weather not found`);
            }
        })
    })
    
}

getUser(2)
    .then(result => {
        console.log(result.name)
        return getWeather(result.address.geo.lat, result.address.geo.lng);
    })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log('error:', error)
    });


