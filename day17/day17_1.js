const fs = require('fs');

// var contents = fs.readFileSync('input.txt', 'utf-8').split('\r\n');
var contents = fs.readFileSync('input_test.txt', 'utf-8').split('\r\n');
var array = [];

const spring = [{
    x: 500,
    y: 0
}];

contents.forEach((content) => {
    let x = '';
    let rx = '';
    let y = '';
    let ry = '';

    x = content.match(/x=\d+/);
    if (x) {
        rx = x.toString().replace('x=','');
        y = content.match(/y=\d+..\d+/);
        if (y) {
            ry = y.toString().replace('y=','');
        }
    }
    
    x = content.match(/x=\d+..\d+/);
    if (x) {
        rx = x.toString().replace('x=','');
        y = content.match(/y=\d+/);
        if (y) {
            ry = y.toString().replace('y=','');
        }
    }

    // y = y.toString().replace('y=','');
    array.push({X: rx, Y: ry});
});

console.log(array);

