const request = require("request");
// const yargs = require("yargs");
// const args = yargs.argv;
// const userId = args.userId;

request(`https://jsonplaceholder.typicode.com/users/x`, function (err, res, body) {
    let json = JSON.parse(body);
    if (res.statusCode === 200) {
        console.log(json.name);
        console.log(`lat ${json.address.geo.lat}`);
        console.log(`lng ${json.address.geo.lng}`);
    } else {
        console.log(`wystąpił błąd`)
    }

}
);