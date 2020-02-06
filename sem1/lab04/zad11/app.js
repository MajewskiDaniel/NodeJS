const fs = require('fs');
const util = require('util');
const appendFile = util.promisify(fs.appendFile);
const axios = require('axios');

let userId = 2

let userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
let albumUrl = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
let photoUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${userId}`;

const requestUser = axios.get(userUrl);
const requestAlbum = axios.get(albumUrl);
const requestPhoto = axios.get(photoUrl);

axios.all([requestUser, requestAlbum, requestPhoto])
    .then(axios.spread((...responses) => {
        const responseUser = responses[0]
        const responseAlbum = responses[1]
        const responsePhoto = responses[2]
        console.log(`User: ${responseUser.data.name}`);
        console.log(`Number of albums: ${responseAlbum.data.length}`);
        console.log(`Title of first album: ${responseAlbum.data[0].title}`);
        const albumPhotoTitles = responsePhoto.data.map((albumPhoto) => albumPhoto.title) //jak zrobić żeby się ładniej wyświetlało? od nowej linii?
        console.log(`Titles of all photos: ${albumPhotoTitles}`)
        let fileName = responseAlbum.data[0].title.slice(0, 10);
        appendFile(`${fileName}.json`, albumPhotoTitles) //dlaczego nie zapisuje obiektu result.data.main??     jak zapisać w nowej linii??
            .then(() => {
                console.log(`data saved in '${fileName}.json' file`)
            })
            .catch((error) => {
                console.log('error saving file', error);
            })
    })).catch(errors => {
        console.log('error has occurred', error);
    })