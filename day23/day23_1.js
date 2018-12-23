const fs = require('fs');

var contents = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

contents.forEach((content) => {
    var m = content.match(/pos=<\d+,\d+,\d+>/);
    if (m) {
        var t = m.map((n) => Number(n[0]));
    }
    console.log(t);
});