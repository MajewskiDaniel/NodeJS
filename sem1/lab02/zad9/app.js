const os = require("os");
const user = os.userInfo();

console.log("Hello ... hmmm... what was Your name?");

function wellcome() {
  console.log(`oh, i remember now. Hello ${user.username} ;)`);
}
setTimeout(wellcome, 5000);
