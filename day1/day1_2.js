// var lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream('./input.txt')
//     // input: require('fs').createReadStream('./input_test.txt')
//     // input: require('fs').readFileSync('./input.txt')
// });
const fs = require('fs');

var frequency = 0;
var frequecies = [0];
var dupFreq = 0;
var changes = [];
var matchFound = 'N';
var fUpDown = '';
var ammount = 0;


var contents = fs.readFileSync('./input.txt', 'utf8');
changes = contents.split('\r\n');
//console.log(changes);

for (i=0; matchFound != 'Y'; i++) {
    // console.log(changes[i]);
    console.log(i);
    fUpDown = changes[i].substring(0,1);
    // console.log(fUpDown);
    
    ammount = parseInt(changes[i].substring(1,changes[i].length));
    // console.log(ammount);
    if (fUpDown == '+') {
        frequency += parseInt(ammount);
    } else {
        frequency -= parseInt(ammount);
    }

    if (frequecies.indexOf(frequency) > -1) {
        console.log('found ', frequency);
        matchFound = 'Y';
        break;
    } else {
        frequecies.push(frequency);
    }

    if (i === changes.length-1) {
        i = -1;
    }

}

// lineReader.on('line', (line) => {
//     changes.push(line);
// });

// console.log(changes);

// var fUpDown = line.substring(0,1);
//     var ammount = parseInt(line.substring(1,line.length));
    
//     //change frequency
//     if (fUpDown == '+') {
//         frequency += parseInt(ammount);
//     } else {
//         frequency -= parseInt(ammount);
//     }
    
//     //check to see if frequency has been met



function checkFrequencies (freq) {

}