const request = require("request");
const yargs = require("yargs");

request(
  "https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=Bia%C5%82ystok",
  function(err, res, body) {
    let json = JSON.parse(body);
    console.log(json);
  }
);
