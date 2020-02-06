const os = require("os");
const fs = require("fs");

const user = os.userInfo();

console.log("Hello yyyy, hmmm... what was Your name?");

const wellcome = () =>
  console.log(`...oh, i remember now. Hello ${user.username} ;)`);

setTimeout(wellcome, 5000);

fs.writeFileSync("greetings.txt", "Hello " + user.username);
