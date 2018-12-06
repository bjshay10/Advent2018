const fs = require('fs');

var contents = fs.readFileSync('./input.txt', 'utf8');
// var contents = fs.readFileSync('./input_test.txt', 'utf8');
var coords = [];
var startCoord = '';
var endCoord = '';
var maxDist = 0;
var maxForCoord = 0;

coords = contents.split('\r\n');
coords2 = contents.split('\r\n');

console.log(`Processing ${coords.length} coordinates`);

coords.forEach((coord) => {
    //split coord and assign to start and end
    var temp = coord.split(', ');
    startCoord = temp[0];
    endCoord = temp[1];
    console.log(`Start: ${startCoord}, End: ${endCoord}`);
    maxForCoord = getDistance(startCoord, endCoord);
    if (maxForCoord > maxDist) {
        maxDist = maxForCoord;
    }
    console.log(`Current Max is ${maxDist}`);
});

console.log(`Finished processing`);

function getDistance(a, b) {
    //compare a,b to coords in coords2 to find max distance
    var tempStart = '';
    var tempEnd = '';
    var tempMax = 0;
    
    coords2.forEach((tempCoord) => {
        var temp2 = tempCoord.split(', ');
        tempStart = temp2[0];
        tempEnd = temp2[1];
        var x = a - tempStart;
        var y = b - tempEnd;
        var total = x + y;
        if (total > tempMax) {
            tempMax = total;
        }
    });
    return tempMax;
}