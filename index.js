console.log("Sheprd Fork of Moment-Timezone");
var moment = module.exports = require("./moment-timezone");
moment.tz.load(require('./data/packed/latest.json'));
