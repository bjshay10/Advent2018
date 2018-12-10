const fs = require('fs');

let contents = fs.readFileSync('./input.txt', 'utf8').toString().split('\n').slice(0, -1)
    .map(str => {
        let matched = str.match(/position=< ?(-?\d+),  ?(-?\d+)> velocity=< ?(-?\d+),  ?(-?\d+)>/);
        return { x: parseInt(matched[1]), y: parseInt(matched[2]), xV: parseInt(matched[3]), yV: parseInt(matched[4]) };
    });
// var contents = fs.readFileSync('./input_test.txt', 'utf8').split('\r\n');
// var position = [];

// //function to move position at a 1 second interval
function movePos(pos) {
    return {
        x: pos.x + pos.xV,
        y: pos.y + pos.yV,
        xV: pos.xV,
        yV: pos.yV
    }
}

// function parsePos(pos){
//     return {
//         x: parseInt(pos.substring(10,16)),
//         y: parseInt(pos.substring(17,24)),
//         xVel: parseInt(pos.substring(36,38)),
//         yVel: parseInt(pos.substring(40,42))
//     }
// }

// contents.forEach((content) => {
//     position = parsePos(content);
//     console.log(position);
//     position = movePos(position);
//     console.log(position);
// });

contents.forEach((content) => {
    console.log(content);
    console.log(movePos(content));
    console.log(contents);
});