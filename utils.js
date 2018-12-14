const readLine = require("readline");
const fs = require("fs");

module.exports = {
  getInputRL: function(day) {
    const rl = readLine.createInterface({
      input: fs.createReadStream("input.txt"),
      crlfDelay: Infinity
    });
    return rl;
  }
};