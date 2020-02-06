const fs = require('fs');
const axios = require('axios');

const id = 1;

axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(result => {
    console.log(result.data.name);
    fs.writeFile('data.json', JSON.stringify(result.data.name), () => {
        console.log('name saved in data.json file')
    })
    let lat = result.data.address.geo.lat;
    let lng = result.data.address.geo.lng;
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`)
}).then(result => {
    console.log(result.data.main);
    fs.appendFile('data.json', JSON.stringify(result.data.main), () => {
        console.log('weather saved in data.json file')
    })
})