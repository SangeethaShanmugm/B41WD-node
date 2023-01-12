const os = require("os");

console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total memory", os.totalmem() / 1024 / 1024 / 1024);
console.log("OS version", os.version());
console.log("platform", os.platform());
console.log("cpus", os.cpus());
console.log("Architecture", os.arch());
console.log("upTime", os.uptime());
console.log("userInfo", os.userInfo());
// 1kb - 1024 bytes
// 1mb -  1024 kb
// 1gb - 1024 mb
