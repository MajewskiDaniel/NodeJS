const request = require("request");
const yargs = require("yargs");
const args = yargs.argv;
const city = args.city;

request(
  `https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=${city}`,
  function (err, res, body) {
    let json = JSON.parse(body);
    // console.log(json);
    console.log(`Aktualna temp w mieście ${json.name} wynosi ${Math.round((json.main.temp - 273.15) * 100) / 100} st Celciusza`);
  }
);
