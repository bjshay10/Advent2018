const fs = require('fs');

// var contents = fs.readFileSync('./input.txt', 'utf8').split('\r\n');
var contents = fs.readFileSync('./input_test.txt', 'utf8').split('\r\n');
var position = [];

//function to move position at a 1 second interval
function movePos(pos) {
    return {
        x: pos.x + pos.xVel,
        y: pos.y + pos.yVel,
        xVel: pos.xVel,
        yVel: pos.yVel
    }
}

function parsePos(pos){
    return {
        x: parseInt(pos.substring(10,16)),
        y: parseInt(pos.substring(17,24)),
        xVel: parseInt(pos.substring(36,38)),
        yVel: parseInt(pos.substring(40,42))
    }
}

contents.forEach((content) => {
    position = parsePos(content);
    console.log(position);
    position = movePos(position);
    console.log(position);
});
