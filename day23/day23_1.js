const fs = require('fs');

var contents = fs.readFileSync('input.txt', 'utf-8').split('\r\n')
    .map(v => {
        let match = v.match(/pos=<(-?\d+),(-?\d+),(-?\d+)>, r=(-?\d+)/);
        return {
            x: parseInt(match[1],10),
            y: parseInt(match[2],10),
            z: parseInt(match[3],10),
            r: parseInt(match[3],10)
        }
    });

console.log(contents);