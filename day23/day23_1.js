const fs = require('fs');

var contents = fs.readFileSync('input.txt', 'utf-8').split('\r\n');

contents.forEach((content) => {
    var m = content.match(/pos=<\d+,\d+,\d+>/);
    //pos=<59967821,55658391,55390188>, r=59056277
    if (m) {
        console.log(m.toString().replace('pos=','').replace('<','').replace('>','').split(','));
    }
    var r = content.match(/r=\d+/);
    if (r) {
        console.log(r.toString().replace('r=',''));
    }
});