const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
const appendFile = util.promisify(fs.appendFile);

const axios = require('axios');

const id = 2;

axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(result => {
        console.log(result.data.name);
        writeFile('data.json', result.data.name)
            .then(() => {
                console.log('name saved in data.json file')
            })
            .catch((error) => {
                console.log('error saving file', error);
            })
        let lat = result.data.address.geo.lat;
        let lng = result.data.address.geo.lng;
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`)
    }).then(result => {
        console.log(result.data.main);
        appendFile('data.json', result.data.main.temp) //dlaczego nie zapisuje obiektu result.data.main??     jak zapisać w nowej linii??
            .then(() => {
                console.log('weather saved in data.json file')
            })
            .catch((error) => {
                console.log('error saving file', error);
            })
    })